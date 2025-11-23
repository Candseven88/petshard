import { NextResponse } from 'next/server';

/**
 * API Route: /api/health-guide
 * 
 * This endpoint generates pet health recommendations using Bigmodel GLM-4.5-Flash.
 * It accepts a breed name (string), pet age (optional) and returns a health guide in English.
 * 
 * Note: This endpoint is maintained for backward compatibility. 
 * New implementations should use /api/health-center instead.
 */

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

    // Get breed and age from request
    const data = await request.json();
    const breed = data.breed;
    const age = data.age;
    
    if (!breed || typeof breed !== 'string') {
      return NextResponse.json(
        { error: 'No breed provided' },
        { status: 400 }
      );
    }

    // Compose prompt with age information if available
    let promptText = `You are a professional veterinarian with extensive experience. Please provide a concise, practical health care guide for a pet of the following breed: ${breed}.`;

    // Add age information if available
    if (age !== undefined) {
      promptText += ` The pet is ${age} years old.`;
    }

    promptText += `

IMPORTANT: Your response MUST be entirely in English.

The guide should include these sections with ## as headers:
## Common Health Issues
## Recommended Diet
## Exercise Needs
## Preventive Care Tips
## Age-Specific Recommendations

Guidelines:
- Keep each section brief and focused, with 2-3 short paragraphs per section
- Use clear, simple English language
- Provide actionable, practical advice
- Use only ## for section headers
- Do not use bullet points or numbered lists
- Write in complete paragraphs
- Response must be in English`;

console.log("Sending prompt to API:", promptText);

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
      max_tokens: 1536
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
      let errorMessage = 'Failed to generate health guide';
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
    // 直接返回大模型的内容
    const content = apiResult?.choices?.[0]?.message?.content || '';
    if (!content) {
      console.error("Empty content from API:", apiResult);
      return NextResponse.json({ error: 'No content returned from model' }, { status: 500 });
    }

    console.log("API response received successfully");
    return NextResponse.json({ guide: content });
  } catch (err: any) {
    console.error("Health guide API error:", err);
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
} 