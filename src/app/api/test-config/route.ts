import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.BIGMODEL_API_KEY;
  const apiBaseUrl = process.env.BIGMODEL_API_BASE_URL;
  
  return NextResponse.json({
    hasApiKey: !!apiKey,
    apiKeyLength: apiKey ? apiKey.length : 0,
    apiKeyPrefix: apiKey ? apiKey.substring(0, 10) + '...' : 'none',
    apiBaseUrl,
    nodeEnv: process.env.NODE_ENV
  });
} 