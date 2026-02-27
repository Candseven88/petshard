/**
 * API Route: /api/monkey-identifier
 *
 * Identifies primate species from uploaded photos using Bigmodel GLM-4V.
 * Built as part of the "Punch the Monkey" tribute feature.
 */

import { NextResponse } from 'next/server';

interface PrimateProfile {
  species: string;
  confidence: number;
  scientificName: string;
  habitat: string;
  diet: string;
  socialBehavior: string;
  conservationStatus: string;
  funFact: string;
  similarityToPunch: string;
}

function generateFallbackProfile(): PrimateProfile {
  return {
    species: 'Japanese Macaque',
    confidence: 0.85,
    scientificName: 'Macaca fuscata',
    habitat: 'Forests of Japan, from subtropical lowlands to subarctic mountains.',
    diet: 'Omnivorous — fruits, seeds, leaves, insects, and occasionally small invertebrates.',
    socialBehavior: 'Highly social primates living in troops of 20–100 individuals with complex hierarchies.',
    conservationStatus: 'Least Concern (IUCN)',
    funFact: 'Japanese macaques are famous for bathing in hot springs during winter — the only non-human primates known to do so.',
    similarityToPunch: 'Punch is a Japanese macaque just like this one! They share the same expressive faces and strong social bonds.',
  };
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.BIGMODEL_API_KEY;
    if (!apiKey || apiKey === 'your_bigmodel_api_key_here') {
      return NextResponse.json(
        { error: 'API key not configured properly.' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const imageFile = formData.get('image') as File;

    if (!imageFile) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }
    if (!imageFile.type.startsWith('image/')) {
      return NextResponse.json({ error: 'File must be an image' }, { status: 400 });
    }
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (imageFile.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'Image file size exceeds 5MB limit' }, { status: 400 });
    }

    const bytes = await imageFile.arrayBuffer();
    const base64Image = Buffer.from(bytes).toString('base64');

    const promptText = `You are an expert primatologist. Analyze this image and identify the primate species (monkey, ape, or lemur). If the image does not contain a primate, say so clearly.

Your response MUST be a valid JSON object with this structure:
{
  "species": "Common name of the primate species",
  "confidence": 0.95,
  "scientificName": "Latin binomial name",
  "habitat": "Natural habitat description",
  "diet": "Dietary habits",
  "socialBehavior": "Social structure and behavior",
  "conservationStatus": "IUCN conservation status",
  "funFact": "An interesting fact about this species",
  "similarityToPunch": "How this primate compares to Punch, the famous Japanese macaque at Ichikawa City Zoo who went viral in 2025-2026"
}

If the image does NOT contain a primate, return:
{
  "species": "Not a primate",
  "confidence": 0,
  "scientificName": "N/A",
  "habitat": "N/A",
  "diet": "N/A",
  "socialBehavior": "N/A",
  "conservationStatus": "N/A",
  "funFact": "Upload a photo of a monkey, ape, or lemur to learn about them!",
  "similarityToPunch": "N/A"
}

Only output the JSON object, nothing else.`;

    const requestBody = {
      model: 'glm-4v-plus-0111',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: `data:${imageFile.type};base64,${base64Image}` },
            },
            { type: 'text', text: promptText },
          ],
        },
      ],
      temperature: 0.1,
      top_p: 0.8,
      max_tokens: 1500,
    };

    try {
      const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Monkey identifier API error:', errorText);
        return NextResponse.json({
          profile: generateFallbackProfile(),
          isFallback: true,
          error: 'API temporarily unavailable. Showing sample data.',
        });
      }

      const data = await response.json();
      if (!data.choices?.[0]?.message?.content) {
        return NextResponse.json({
          profile: generateFallbackProfile(),
          isFallback: true,
          error: 'Invalid API response.',
        });
      }

      let content = data.choices[0].message.content.trim();
      if (content.startsWith('```json')) {
        content = content.replace(/^```json/, '').replace(/```$/, '').trim();
      } else if (content.startsWith('```')) {
        content = content.replace(/^```/, '').replace(/```$/, '').trim();
      }

      const profile: PrimateProfile = JSON.parse(content);
      return NextResponse.json({ profile, isFallback: false });
    } catch (apiError) {
      console.error('Monkey identifier API call failed:', apiError);
      return NextResponse.json({
        profile: generateFallbackProfile(),
        isFallback: true,
        error: 'API call failed. Showing sample data.',
      });
    }
  } catch (error) {
    console.error('Error in monkey-identifier:', error);
    return NextResponse.json({
      profile: generateFallbackProfile(),
      isFallback: true,
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
}
