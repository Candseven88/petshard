import { NextResponse } from 'next/server';

/**
 * API Route: /api/pet-care-guide
 * 
 * This endpoint generates personalized pet care advice based on:
 * - Care topic (feeding, training, grooming, etc.)
 * - Pet information (type, breed, age, weight)
 * - Special conditions
 */

const topicPrompts: Record<string, string> = {
  "feeding": `Create a comprehensive, practical feeding guide in English covering:
## Nutritional Requirements
## Recommended Food Types
## Feeding Schedule
## Portion Sizes
## Foods to Avoid

IMPORTANT: Response must be entirely in English.`,

  "training": `Create a practical, actionable training guide in English covering:
## Basic Training Principles
## Essential Commands
## Training Schedule
## Common Behavioral Issues
## Positive Reinforcement Techniques

IMPORTANT: Response must be entirely in English.`,

  "environment": `Create a detailed environment setup guide in English covering:
## Safe Space Requirements
## Essential Equipment
## Temperature and Comfort
## Safety Hazards to Avoid
## Play and Rest Areas

IMPORTANT: Response must be entirely in English.`,

  "grooming": `Create a comprehensive grooming care guide in English covering:
## Coat Care and Brushing
## Bathing Guidelines
## Nail Care
## Dental Hygiene
## Ear and Eye Care

IMPORTANT: Response must be entirely in English.`,

  "puppy-kitten": `Create a detailed young pet care guide in English covering:
## Early Development Needs
## Vaccination Schedule
## Socialization Tips
## House Training
## Nutrition for Growth

IMPORTANT: Response must be entirely in English.`,

  "senior": `Create a comprehensive senior pet care guide in English covering:
## Age-Related Changes
## Dietary Adjustments
## Exercise Modifications
## Health Monitoring
## Comfort and Quality of Life

IMPORTANT: Response must be entirely in English.`
};

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    const apiKey = process.env.BIGMODEL_API_KEY;
    if (!apiKey || apiKey === 'your_bigmodel_api_key_here') {
      return NextResponse.json(
        { error: 'API key not configured properly. Please set up your BIGMODEL_API_KEY in .env.local' },
        { status: 500 }
      );
    }

    const data = await request.json();
    const topic = data.topic;
    const petType = data.petType || 'pet';
    const breed = data.breed || '';
    const age = data.age || '';
    const weight = data.weight || '';
    const specialConditions = data.specialConditions || '';
    
    if (!topic) {
      return NextResponse.json(
        { error: 'No topic provided' },
        { status: 400 }
      );
    }

    if (!topicPrompts[topic]) {
      return NextResponse.json(
        { error: 'Invalid topic' },
        { status: 400 }
      );
    }

    // Build pet description
    const petInfo = [];
    if (age) petInfo.push(`${age} years old`);
    if (breed) petInfo.push(breed);
    else petInfo.push(petType);
    if (weight) petInfo.push(`weighing ${weight}`);
    
    const petDescription = petInfo.join(' ');
    const specialNote = specialConditions 
      ? `\n\nIMPORTANT: Take into account these special conditions: ${specialConditions}`
      : '';

    const promptText = `You are a professional pet care expert with extensive experience in animal care and behavior. Please provide a detailed, personalized care guide for a ${petDescription}.

${topicPrompts[topic]}${specialNote}

CRITICAL REQUIREMENTS:
- Response MUST be entirely in English
- Keep each section practical and informative (2-4 paragraphs per section)
- Use clear, simple English language
- Provide specific, actionable advice based on best practices
- Consider the pet's age, breed, weight, and special conditions in your recommendations
- Use only ## for section headers
- Write in complete paragraphs, not bullet points or numbered lists
- If specific information is missing, provide general evidence-based advice for the pet type
- Make the advice as specific to the pet's characteristics as possible
- Include practical examples where helpful
- Prioritize safety and pet well-being in all recommendations

Your response must be professional, accurate, and entirely in English.`;

    console.log("Sending care guide request for topic:", topic);

    const apiUrl = "https://open.bigmodel.cn/api/paas/v4/chat/completions";
    const requestBody = {
      model: "glm-4-flash",
      messages: [
        {
          role: "user",
          content: promptText
        }
      ],
      temperature: 0.6,
      top_p: 0.95,
      max_tokens: 2048
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      let errorMessage = 'Failed to generate care guide';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
        console.error("API error:", errorData);
      } catch (e) {
        console.error("Error parsing API error response:", e);
      }
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    const apiResult = await response.json();
    const content = apiResult?.choices?.[0]?.message?.content || '';
    if (!content) {
      console.error("Empty content from API:", apiResult);
      return NextResponse.json({ error: 'No content returned from model' }, { status: 500 });
    }

    console.log("Care guide generated successfully");
    return NextResponse.json({ guide: content });
  } catch (err: any) {
    console.error("Pet care guide API error:", err);
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}

