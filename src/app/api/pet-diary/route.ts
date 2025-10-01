import { NextResponse } from 'next/server';

/**
 * API Route: /api/pet-diary
 * 
 * This endpoint generates a pet diary entry using Bigmodel GLM-4-Flash-250414.
 * It accepts a prompt (string) and returns a diary entry in English.
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

    // Get prompt from request
    const data = await request.json();
    const prompt = data.prompt;
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'No prompt provided' },
        { status: 400 }
      );
    }

    // Compose prompt for social media post generation
    const promptText = `You are a social media content creator for pets. Write a short, fun, and engaging English post for a mainstream social media platform (like Instagram, Facebook, or Twitter) based on the following topic or idea: "${prompt}". The post should be lively, use first-person as the pet, include some emojis, and be suitable for direct posting. Do NOT include any date, [Owner's Name], or technical details. Limit to 2-5 sentences.`;

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
      temperature: 0.7,
      top_p: 0.9,
      max_tokens: 800
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
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.error || 'Failed to generate diary entry from Bigmodel.' },
        { status: 500 }
      );
    }

    const result = await response.json();
    // 兼容不同模型返回结构
    let diary = '';
    if (result.choices && result.choices[0] && result.choices[0].message && result.choices[0].message.content) {
      diary = result.choices[0].message.content.trim();
    } else if (result.data && result.data.choices && result.data.choices[0] && result.data.choices[0].message && result.data.choices[0].message.content) {
      diary = result.data.choices[0].message.content.trim();
    } else {
      diary = JSON.stringify(result);
    }

    return NextResponse.json({ diary });
  } catch (err: unknown) {
    let message = 'Internal server error';
    if (
      err &&
      typeof err === 'object' &&
      'message' in err &&
      typeof (err as { message?: unknown }).message === 'string'
    ) {
      message = (err as { message: string }).message;
    }
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
} 