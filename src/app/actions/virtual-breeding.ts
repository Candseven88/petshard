"use server";

import { revalidatePath } from "next/cache";

export async function analyzeBreedPairing(formData: FormData) {
  try {
    // Get the uploaded images from the form data
    const firstDogImage = formData.get('firstDogImage') as File;
    const secondDogImage = formData.get('secondDogImage') as File;

    if (!firstDogImage || !secondDogImage) {
      throw new Error('Both dog images are required');
    }

    // Convert images to base64 for API request
    const firstDogBase64 = await fileToBase64(firstDogImage);
    const secondDogBase64 = await fileToBase64(secondDogImage);

    // Prepare the API request payload
    const payload = {
      model: "glm-4v-plus-0111",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze these two dog images for breeding compatibility. Provide: 1) Overall compatibility assessment, 2) Description of potential puppies, 3) List of 4-5 expected traits, 4) List of 3-4 health considerations. Format as JSON with keys: compatibility, puppyDescription, traits (array), healthConsiderations (array)."
            },
            {
              type: "image_url",
              image_url: {
                url: firstDogBase64
              }
            },
            {
              type: "image_url",
              image_url: {
                url: secondDogBase64
              }
            }
          ]
        }
      ]
    };

    // Get the API key from environment variables
    const apiKey = process.env.BIGMODEL_API_KEY;
    if (!apiKey) {
      throw new Error('API key not configured');
    }

    // Make the API request
    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the AI response
    const aiResponse = data.choices[0]?.message?.content || '';
    
    // Parse the JSON response from the AI
    // The AI should return a JSON string that we can parse
    let parsedResponse;
    try {
      // Find JSON in the response (in case the AI adds explanatory text)
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : aiResponse;
      parsedResponse = JSON.parse(jsonString);
    } catch (error) {
      console.error('Failed to parse AI response as JSON:', error);
      // Provide a fallback structured response
      parsedResponse = {
        compatibility: "Unable to determine compatibility from the provided images.",
        puppyDescription: "Could not generate puppy description.",
        traits: ["Unknown"],
        healthConsiderations: ["Please consult with a veterinarian for proper breeding advice."]
      };
    }

    // Revalidate the path to update the UI
    revalidatePath('/virtual-breeding');
    
    return parsedResponse;
  } catch (error) {
    console.error('Error in analyzeBreedPairing:', error);
    throw error;
  }
}

// Helper function to convert File to base64
async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };
    reader.onerror = (error) => reject(error);
  });
} 