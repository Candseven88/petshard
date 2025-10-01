import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { birthday, zodiac, breed } = await req.json();
    const apiKey = process.env.BIGMODEL_API_KEY;
    if (!apiKey || apiKey === 'your_bigmodel_api_key_here') {
      return NextResponse.json(
        { error: 'API key not configured properly. Please set up your BIGMODEL_API_KEY in .env.local' },
        { status: 500 }
      );
    }

    // Compose prompt for structured pet horoscope analysis
    const promptText = `You are an expert pet astrologer and animal behaviorist. Please generate a detailed, engaging, and professional English pet horoscope analysis for the following pet:

- Breed: ${breed}
- Zodiac sign: ${zodiac}
- Birthday: ${birthday}

Your response must be a valid JSON object with the following structure:
{
  "zodiac": "", // Zodiac sign name
  "date_range": "", // Zodiac date range (e.g. August 23 – September 22)
  "keywords": ["", "", ""], // 3-5 representative keywords as short adjectives
  "sections": {
    "personality": "", // 2-3 sentences about personality traits combining breed and zodiac
    "compatibility": "", // 1-2 sentences about compatibility with owners/other pets
    "tips": "", // 2-3 short tips for owners
    "challenges": "" // 1-2 sentences about potential challenges
  },
  "lucky_color": "", // Lucky color (one word)
  "lucky_number": "", // Lucky number (single digit)
  "conclusion": "" // 1 sentence warm conclusion
}

Keep each section concise (2-3 sentences maximum) and focused on the most important points. The analysis should be lively, positive, and suitable for pet owners. Only output the JSON object, nothing else.`;

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
      let errorMessage = 'Failed to generate horoscope analysis';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch (e) {}
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    const apiResult = await response.json();
    let content = apiResult?.choices?.[0]?.message?.content || '';
    if (!content) {
      return NextResponse.json({ error: 'No content returned from model' }, { status: 500 });
    }
    // 兼容markdown代码块包裹的JSON
    if (content.startsWith('```json')) {
      content = content.replace(/^```json/, '').replace(/```$/, '').trim();
    } else if (content.startsWith('```')) {
      content = content.replace(/^```/, '').replace(/```$/, '').trim();
    }
    let result;
    try {
      result = JSON.parse(content);
      // Transform old format to new format if needed
      if (result.analysis && Array.isArray(result.analysis) && !result.sections) {
        result.sections = {
          personality: result.analysis[0] || "",
          compatibility: result.analysis[1] || "",
          tips: "",
          challenges: ""
        };
      }
    } catch (e) {
      return NextResponse.json({ error: 'Failed to parse model response as JSON', raw: content }, { status: 500 });
    }
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate analysis." }, { status: 500 });
  }
} 