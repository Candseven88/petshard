import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if API key is configured
    const apiKey = process.env.BIGMODEL_API_KEY;
    
    if (!apiKey || apiKey === 'your_bigmodel_api_key_here') {
      return NextResponse.json({
        status: 'error',
        message: 'API key not configured. Please set up your BIGMODEL_API_KEY in .env.local',
        details: {
          hasApiKey: !!apiKey,
          isDefaultValue: apiKey === 'your_bigmodel_api_key_here',
          keyLength: apiKey ? apiKey.length : 0
        }
      }, { status: 500 });
    }

    // Test API connection with a simple request
    const testPayload = {
      model: "glm-4v-plus-0111",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Hello, this is a test message. Please respond with 'API connection successful' if you can see this message."
            }
          ]
        }
      ],
      temperature: 0.01,
      max_tokens: 50
    };

    console.log('Testing Bigmodel API connection...');
    console.log('API Key length:', apiKey.length);

    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(testPayload)
    });

    console.log('Test response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API test error:', errorText);
      
      return NextResponse.json({
        status: 'error',
        message: 'API connection failed',
        details: {
          status: response.status,
          statusText: response.statusText,
          error: errorText
        }
      }, { status: response.status });
    }

    const data = await response.json();
    console.log('API test successful');

    return NextResponse.json({
      status: 'success',
      message: 'API connection successful',
      details: {
        model: data.model,
        hasChoices: !!data.choices,
        responseLength: data.choices?.[0]?.message?.content?.length || 0
      }
    });

  } catch (error) {
    console.error('Test API error:', error);
    
    return NextResponse.json({
      status: 'error',
      message: 'Unexpected error during API test',
      details: {
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }, { status: 500 });
  }
} 