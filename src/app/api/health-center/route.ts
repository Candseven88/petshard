import { NextResponse } from 'next/server';

/**
 * API Route: /api/health-center
 * 
 * This endpoint provides two services:
 * 1. Breed Health Guide - Generates health recommendations for specific breeds
 * 2. Symptom Checker - Analyzes pet symptoms and provides advice
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

    const data = await request.json();
    const type = data.type; // "breed-health" or "symptom-check"
    
    if (!type) {
      return NextResponse.json(
        { error: 'No type specified' },
        { status: 400 }
      );
    }

    let promptText = '';

    // Handle Breed Health Guide
    if (type === 'breed-health') {
      const breed = data.breed;
      
      if (!breed || typeof breed !== 'string') {
        return NextResponse.json(
          { error: 'No breed provided' },
          { status: 400 }
        );
      }

      promptText = `You are a professional veterinarian with extensive experience in pet health care. Please provide a concise, practical health care guide specifically for a ${breed}.

IMPORTANT: Your response MUST be in English only.

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
    }
    
    // Handle Symptom Checker
    else if (type === 'symptom-check') {
      const petType = data.petType || 'pet';
      const breed = data.breed || '';
      const age = data.age || '';
      const symptoms = data.symptoms || [];
      const additionalInfo = data.additionalInfo || '';

      if (symptoms.length === 0 && !additionalInfo) {
        return NextResponse.json(
          { error: 'No symptoms provided' },
          { status: 400 }
        );
      }

      const petDescription = `${age ? `${age}-year-old ` : ''}${breed || petType}`;
      const symptomsText = symptoms.length > 0 ? `Selected symptoms: ${symptoms.join(', ')}` : '';
      const additionalText = additionalInfo ? `Additional information: ${additionalInfo}` : '';

      promptText = `You are a professional veterinarian assistant with expertise in pet symptom analysis. A pet owner has reported the following symptoms for their ${petDescription}:

${symptomsText}
${additionalText}

IMPORTANT: Your response MUST be in English only.

Please provide a professional assessment with the following sections (use ## for section headers):

## Severity Assessment
Evaluate if this is: MILD (can wait for regular vet visit), MODERATE (should see vet within 24-48 hours), or URGENT (seek immediate veterinary care). Explain clearly why you made this assessment.

## Possible Causes
List and briefly explain the most likely medical causes of these symptoms for this specific pet type.

## Recommended Actions
Provide specific, actionable steps the owner should take immediately based on the severity level.

## Home Care Tips
If applicable and safe, provide home care advice (only for mild cases). If not applicable, state why.

## When to Seek Veterinary Care
Provide clear, specific indicators that immediate professional veterinary help is needed.

CRITICAL REQUIREMENTS:
- Start with this exact disclaimer: "⚠️ This is AI-generated advice. If symptoms worsen or you're concerned, please contact a veterinarian immediately."
- Keep each section brief and practical (2-3 paragraphs maximum)
- Use clear, simple English language
- Do not use bullet points or numbered lists
- Write in complete paragraphs
- Be specific to the pet type and symptoms described
- Response must be entirely in English`;
    }
    
    else {
      return NextResponse.json(
        { error: 'Invalid type. Must be "breed-health" or "symptom-check"' },
        { status: 400 }
      );
    }

    console.log("Sending prompt to API:", promptText.substring(0, 200) + "...");

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
      max_tokens: type === 'symptom-check' ? 2048 : 1536
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
    const content = apiResult?.choices?.[0]?.message?.content || '';
    if (!content) {
      console.error("Empty content from API:", apiResult);
      return NextResponse.json({ error: 'No content returned from model' }, { status: 500 });
    }

    console.log("API response received successfully");
    return NextResponse.json({ guide: content });
  } catch (err: any) {
    console.error("Health center API error:", err);
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}

