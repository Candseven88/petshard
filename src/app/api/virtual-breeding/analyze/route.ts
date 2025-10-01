import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

// Helper function to convert File to base64
async function fileToBase64(file: Blob): Promise<string> {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:${file.type};base64,${btoa(binary)}`;
}

// Helper function to convert File to buffer
async function fileToBuffer(file: Blob): Promise<Buffer> {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// Helper function to combine two images side by side
async function combineImages(image1Buffer: Buffer, image2Buffer: Buffer): Promise<Buffer> {
  try {
    // Get dimensions of both images
    const [img1Metadata, img2Metadata] = await Promise.all([
      sharp(image1Buffer).metadata(),
      sharp(image2Buffer).metadata()
    ]);

    // Resize images to same height (300px) while maintaining aspect ratio
    const targetHeight = 300;
    const resizedImg1 = sharp(image1Buffer)
      .resize({ height: targetHeight, withoutEnlargement: true })
      .toBuffer();
    const resizedImg2 = sharp(image2Buffer)
      .resize({ height: targetHeight, withoutEnlargement: true })
      .toBuffer();

    // Get the resized buffers
    const [resizedBuffer1, resizedBuffer2] = await Promise.all([resizedImg1, resizedImg2]);
    
    // Get dimensions of resized images
    const [resizedMeta1, resizedMeta2] = await Promise.all([
      sharp(resizedBuffer1).metadata(),
      sharp(resizedBuffer2).metadata()
    ]);

    // Create a new image with both images side by side
    const width = (resizedMeta1.width || 300) + (resizedMeta2.width || 300);
    const height = targetHeight;

    return await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
      .composite([
        { input: resizedBuffer1, left: 0, top: 0 },
        { input: resizedBuffer2, left: resizedMeta1.width, top: 0 }
      ])
      .jpeg()
      .toBuffer();
  } catch (error) {
    console.error('Error combining images:', error);
    throw new Error('Failed to combine images');
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Get the uploaded images from the form data
    const firstDogImage = formData.get('firstDogImage') as File;
    const secondDogImage = formData.get('secondDogImage') as File;

    if (!firstDogImage || !secondDogImage) {
      return NextResponse.json(
        { error: 'Both dog images are required' },
        { status: 400 }
      );
    }

    // Check file types
    if (!firstDogImage.type.startsWith('image/') || !secondDogImage.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Both files must be images' },
        { status: 400 }
      );
    }

    // Check file sizes (limit to 5MB each)
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    if (firstDogImage.size > MAX_FILE_SIZE || secondDogImage.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'Image file size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Convert images to buffers for processing
    const firstDogBuffer = await fileToBuffer(firstDogImage);
    const secondDogBuffer = await fileToBuffer(secondDogImage);

    // Combine the two images side by side
    const combinedImageBuffer = await combineImages(firstDogBuffer, secondDogBuffer);
    
    // Convert the combined image to base64 for API request
    const combinedImageBase64 = `data:image/jpeg;base64,${combinedImageBuffer.toString('base64')}`;

    // Get the API key from environment variables
    const apiKey = process.env.BIGMODEL_API_KEY;
    if (!apiKey || apiKey === 'your_bigmodel_api_key_here') {
      console.error('API key not configured or using default value');
      return NextResponse.json(
        { error: 'API key not configured properly. Please set up your BIGMODEL_API_KEY in .env.local' },
        { status: 500 }
      );
    }

    // Prepare the API request payload with correct format
    const promptText = `You are an expert veterinarian specializing in dog breeding and genetics. 

The image shows two different dogs side by side (left and right). First identify the breed of each dog accurately. Then analyze their breeding compatibility based on your veterinary expertise.

Your response MUST be a valid JSON object with the following structure:
{
  "compatibility": "Detailed assessment of breeding compatibility between these two specific dogs",
  "puppyDescription": "Detailed description of potential puppies and their characteristics",
  "traits": ["Expected trait 1", "Expected trait 2", "Expected trait 3", "Expected trait 4"],
  "healthConsiderations": ["Health consideration 1", "Health consideration 2", "Health consideration 3"]
}

Focus on:
1. Accurate breed identification of both dogs
2. Genetic compatibility and diversity
3. Potential health benefits or risks in offspring
4. Expected physical and behavioral traits of puppies

Only output the JSON object, nothing else.`;

    const requestBody = {
      model: "glm-4v-plus-0111",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: combinedImageBase64
              }
            },
            {
              type: "text",
              text: promptText
            }
          ]
        }
      ],
      temperature: 0.01,
      top_p: 0.8,
      max_tokens: 2000
    };

    console.log('Calling Bigmodel API for virtual breeding analysis...');
    console.log('API Key:', apiKey.substring(0, 10) + '...');

    // Make the API request with correct URL
    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API error response:', errorText);
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { error: { message: errorText } };
      }
      
      return NextResponse.json(
        { error: 'Failed to analyze breeding compatibility: ' + (errorData.error?.message || errorText) },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Received response from Bigmodel API');
    
    // Extract the AI response
    const aiResponse = data.choices?.[0]?.message?.content || '';
    
    if (!aiResponse) {
      return NextResponse.json(
        { error: 'No response received from AI model' },
        { status: 500 }
      );
    }

    // Parse the JSON response from the AI
    try {
      let jsonString = aiResponse.trim();
      
      // Handle markdown code blocks
      if (jsonString.startsWith('```json')) {
        jsonString = jsonString.replace(/^```json/, '').replace(/```$/, '').trim();
      } else if (jsonString.startsWith('```')) {
        jsonString = jsonString.replace(/^```/, '').replace(/```$/, '').trim();
      }
      
      // Find JSON in the response (in case the AI adds explanatory text)
      const jsonMatch = jsonString.match(/\{[\s\S]*\}/);
      const finalJsonString = jsonMatch ? jsonMatch[0] : jsonString;
      
      const parsedResponse = JSON.parse(finalJsonString);
      
      // Validate the response structure
      if (!parsedResponse.compatibility || !parsedResponse.puppyDescription || 
          !Array.isArray(parsedResponse.traits) || !Array.isArray(parsedResponse.healthConsiderations)) {
        throw new Error('Invalid response structure');
      }
      
      return NextResponse.json(parsedResponse);
    } catch (error) {
      console.error('Failed to parse AI response as JSON:', error);
      console.error('Raw AI response:', aiResponse);
      
      // Provide a fallback structured response
      return NextResponse.json({
        compatibility: "Unable to determine compatibility from the provided images. Please ensure both images clearly show the dogs and try again.",
        puppyDescription: "Could not generate puppy description due to image analysis issues.",
        traits: ["Mixed breed characteristics", "Variable coat type", "Medium size", "Friendly temperament"],
        healthConsiderations: ["Please consult with a veterinarian for proper breeding advice", "Consider genetic testing before breeding", "Monitor for breed-specific health issues"]
      });
    }
  } catch (error) {
    console.error('Error in virtual breeding analysis:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
} 