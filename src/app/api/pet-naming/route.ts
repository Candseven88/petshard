/**
 * API Route: /api/pet-naming
 * 
 * This endpoint handles pet naming using Bigmodel GLM-4V-Flash.
 * It accepts an image file and optional naming requirements, then returns a comprehensive pet profile.
 */

import { NextResponse } from 'next/server';

// Type definitions
interface NamingRequirements {
  startsWith?: string;
  gender?: 'male' | 'female' | 'neutral';
  style?: string;
  length?: 'short' | 'medium' | 'long';
  customRequirements?: string;
}

interface SuggestedName {
  name: string;
  meaning: string;
  reason: string;
}

interface Personality {
  traits: string[];
  description: string;
}

interface Astrology {
  zodiacSign: string;
  element: string;
  luckyColor: string;
  compatibility: string[];
}

interface AgeEstimate {
  estimatedAge: string;
  lifestage: string;
  confidence: number;
}

interface PetProfile {
  breed: string;
  suggestedNames: SuggestedName[];
  personality: Personality;
  astrology: Astrology;
  ageEstimate: AgeEstimate;
  healthInsights?: string;
}

/**
 * Build the prompt based on naming requirements
 */
function buildPrompt(requirements?: NamingRequirements): string {
  const requirementsSection = requirements ? `
Naming Requirements:
- Starting letter: ${requirements.startsWith || 'Any letter'}
- Gender preference: ${requirements.gender || 'Neutral'}
- Naming style: ${requirements.style || 'Creative and meaningful'}
- Name length: ${requirements.length || 'Medium length'}
${requirements.customRequirements ? `- Additional requirements: ${requirements.customRequirements}` : ''}
` : '';

  return `You are an expert pet analyst and creative name consultant. Analyze this pet image carefully and generate a comprehensive pet profile with perfect name suggestions.

${requirementsSection}

IMPORTANT: Respond with a valid JSON object ONLY. No markdown, no explanation, just the JSON.

Required JSON structure:
{
  "breed": "Identified breed name",
  "suggestedNames": [
    {
      "name": "Suggested name (must match requirements)",
      "meaning": "What this name means",
      "reason": "Why this name perfectly fits this specific pet based on its appearance and characteristics"
    }
  ],
  "personality": {
    "traits": ["trait1", "trait2", "trait3", "trait4"],
    "description": "Detailed personality analysis based on the pet's appearance, breed characteristics, and body language"
  },
  "astrology": {
    "zodiacSign": "Most fitting zodiac sign based on appearance",
    "element": "Fire/Water/Earth/Air",
    "luckyColor": "A lucky color that matches the pet",
    "compatibility": ["compatible owner type 1", "compatible owner type 2", "compatible owner type 3"]
  },
  "ageEstimate": {
    "estimatedAge": "Age range (e.g., '6-12 months', '2-3 years')",
    "lifestage": "Puppy/Kitten/Young Adult/Adult/Senior",
    "confidence": 0.85
  },
  "healthInsights": "Brief health insights and care suggestions based on breed and age"
}

Guidelines:
1. Suggest 3-5 creative names that MUST follow the naming requirements
2. Each name should have cultural meaning or significance
3. Personality traits should be specific and observable
4. Age estimation should be based on physical features
5. Keep all content professional, positive, and pet-friendly
6. Ensure the JSON is properly formatted and parseable`;
}

/**
 * Parse API response and extract pet profile data
 */
function parsePetProfile(content: string): PetProfile {
  let cleanContent = content.trim();
  
  // Remove markdown code blocks if present
  if (cleanContent.startsWith('```json')) {
    cleanContent = cleanContent.replace(/^```json\s*/, '').replace(/```\s*$/, '').trim();
  } else if (cleanContent.startsWith('```')) {
    cleanContent = cleanContent.replace(/^```\s*/, '').replace(/```\s*$/, '').trim();
  }
  
  try {
    const data = JSON.parse(cleanContent);
    
    // Validate required fields
    if (!data.breed || !data.suggestedNames || !Array.isArray(data.suggestedNames)) {
      throw new Error('Invalid data structure: missing required fields');
    }
    
    // Ensure all names have required properties
    data.suggestedNames = data.suggestedNames.filter((name: SuggestedName) => 
      name.name && name.meaning && name.reason
    );
    
    if (data.suggestedNames.length === 0) {
      throw new Error('No valid names in response');
    }
    
    return data as PetProfile;
  } catch (error) {
    console.error('Failed to parse pet profile:', error);
    throw new Error('Failed to parse API response as valid JSON');
  }
}

/**
 * Generate fallback data when API fails
 */
function generateFallbackProfile(): PetProfile {
  return {
    breed: "Adorable Pet",
    suggestedNames: [
      {
        name: "Buddy",
        meaning: "Close friend and companion",
        reason: "A universal name that represents the loyal and friendly nature of pets"
      },
      {
        name: "Luna",
        meaning: "Moon in Latin",
        reason: "Perfect for pets with a calm and mysterious personality"
      },
      {
        name: "Max",
        meaning: "Greatest",
        reason: "A strong name for a pet with a bold and confident character"
      }
    ],
    personality: {
      traits: ["Friendly", "Loyal", "Playful", "Affectionate"],
      description: "This pet appears to have a warm and loving personality, showing signs of being a great companion. They seem energetic and ready to bond with their family."
    },
    astrology: {
      zodiacSign: "Leo",
      element: "Fire",
      luckyColor: "Golden",
      compatibility: ["Active families", "Outdoor enthusiasts", "First-time pet owners"]
    },
    ageEstimate: {
      estimatedAge: "1-2 years",
      lifestage: "Young Adult",
      confidence: 0.70
    },
    healthInsights: "Regular vet checkups and a balanced diet are recommended. Ensure adequate exercise and mental stimulation."
  };
}

/**
 * POST handler for pet naming
 */
export async function POST(request: Request) {
  try {
    // Check API key configuration
    const apiKey = process.env.BIGMODEL_API_KEY;
    if (!apiKey || apiKey === 'your_api_key_here') {
      console.error('API key not configured');
      return NextResponse.json(
        { error: 'API key not configured. Please set BIGMODEL_API_KEY in .env.local' },
        { status: 500 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    const imageFile = formData.get('image') as File;
    const requirementsJson = formData.get('requirements') as string;
    
    // Validate image file
    if (!imageFile) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }

    if (!imageFile.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Check file size (5MB limit for API)
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (imageFile.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'Image file size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Parse naming requirements
    let requirements: NamingRequirements | undefined;
    if (requirementsJson) {
      try {
        requirements = JSON.parse(requirementsJson);
      } catch (e) {
        console.error('Failed to parse requirements:', e);
        // Continue without requirements
      }
    }

    // Convert image to base64
    console.log('Processing image file...');
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString('base64');
    const imageUrl = `data:${imageFile.type};base64,${base64Image}`;

    // Build prompt
    const prompt = buildPrompt(requirements);
    
    // Prepare API request
    const apiBaseUrl = process.env.BIGMODEL_API_BASE_URL || 'https://open.bigmodel.cn/api';
    const apiUrl = `${apiBaseUrl}/paas/v4/chat/completions`;
    const requestBody = {
      model: 'glm-4v-plus-0111',  // Using proven model from breed-identification
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { 
                url: imageUrl 
              }
            },
            {
              type: 'text',
              text: prompt
            }
          ]
        }
      ],
      temperature: 0.7,
      top_p: 0.8
    };

    console.log('Calling GLM-4V-Flash API...');
    console.log('API URL:', apiUrl);
    console.log('Model:', requestBody.model);
    console.log('Requirements:', requirements);
    console.log('API Key length:', apiKey.length);
    console.log('Image URL prefix:', imageUrl.substring(0, 50) + '...');
    console.log('Request body:', JSON.stringify({
      ...requestBody,
      messages: [{
        ...requestBody.messages[0],
        content: requestBody.messages[0].content.map((c: any, i: number) => 
          c.type === 'image_url' ? { type: 'image_url', imageSize: imageUrl.length } : c
        )
      }]
    }));

    // Call API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    console.log('API Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API error:', errorText);
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { error: { message: errorText } };
      }
      
      // Return fallback data on API error
      console.log('Returning fallback data due to API error');
      const fallbackProfile = generateFallbackProfile();
      return NextResponse.json({
        petProfile: fallbackProfile,
        uploadedImage: imageUrl,
        isFallback: true,
        error: 'API temporarily unavailable. Showing sample data.'
      });
    }

    // Parse API response
    const data = await response.json();
    console.log('API response received');
    
    if (!data.choices || data.choices.length === 0 || !data.choices[0].message?.content) {
      console.error('Invalid API response structure');
      const fallbackProfile = generateFallbackProfile();
      return NextResponse.json({
        petProfile: fallbackProfile,
        uploadedImage: imageUrl,
        isFallback: true,
        error: 'Invalid API response. Showing sample data.'
      });
    }

    // Extract and parse content
    const content = data.choices[0].message.content;
    console.log('Parsing pet profile...');
    
    try {
      const petProfile = parsePetProfile(content);
      console.log('Pet profile parsed successfully');
      console.log('Breed:', petProfile.breed);
      console.log('Names count:', petProfile.suggestedNames.length);
      
      return NextResponse.json({
        petProfile,
        uploadedImage: imageUrl,
        isFallback: false
      });
    } catch (parseError) {
      console.error('Failed to parse pet profile:', parseError);
      const fallbackProfile = generateFallbackProfile();
      return NextResponse.json({
        petProfile: fallbackProfile,
        uploadedImage: imageUrl,
        isFallback: true,
        error: 'Failed to parse response. Showing sample data.'
      });
    }

  } catch (error) {
    console.error('Error in pet naming API:', error);
    
    // Return fallback data on any error
    const fallbackProfile = generateFallbackProfile();
    return NextResponse.json({
      petProfile: fallbackProfile,
      isFallback: true,
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}
