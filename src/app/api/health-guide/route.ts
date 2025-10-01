import { NextResponse } from 'next/server';

/**
 * API Route: /api/health-guide
 * 
 * This endpoint generates pet health recommendations using Bigmodel GLM-4-Flash-250414.
 * It accepts a breed name (string), pet age (optional) and returns a health guide in English.
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
    let promptText = `You are a professional veterinarian. Please provide a concise, practical health care guide in English for a pet of the following breed: ${breed}.`;

    // Add age information if available
    if (age !== undefined) {
      promptText += ` The pet is ${age} years old.`;
    }

    promptText += ` The guide should include these sections with ## as headers:
## Common Health Issues
## Recommended Diet
## Exercise Needs
## Preventive Care Tips
## Age-Specific Recommendations

Keep each section brief and focused, with 1-3 short paragraphs per section. Use clear, simple language. Do not use any markdown formatting except for the ## section headers. Do not use bullet points or numbered lists. Each paragraph should be a single line of text without line breaks within paragraphs.`;

console.log("Sending prompt to API:", promptText);

    const apiUrl = "https://open.bigmodel.cn/api/paas/v4/chat/completions";
    const requestBody = {
      model: "glm-4-flash-250414",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: promptText
            }
          ]
        }
      ],
      temperature: 0.2,
      top_p: 0.8,
      max_tokens: 1200
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