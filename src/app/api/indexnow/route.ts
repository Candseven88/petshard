import { NextRequest, NextResponse } from 'next/server'

// IndexNow API key - 在生产环境中应该从环境变量获取
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'your-indexnow-key-here'
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.petshard.online'

// IndexNow 支持的搜索引擎端点
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
]

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()
    
    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      )
    }

    const results = []

    // 向每个搜索引擎发送 IndexNow 请求
    for (const endpoint of INDEXNOW_ENDPOINTS) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            host: new URL(SITE_URL).hostname,
            key: INDEXNOW_KEY,
            keyLocation: `${SITE_URL}/indexnow-key.txt`,
            urlList: urls.map(url => url.startsWith('http') ? url : `${SITE_URL}${url}`)
          })
        })

        results.push({
          endpoint,
          status: response.status,
          success: response.ok
        })
      } catch (error) {
        results.push({
          endpoint,
          error: error instanceof Error ? error.message : 'Unknown error',
          success: false
        })
      }
    }

    return NextResponse.json({
      message: 'IndexNow requests sent',
      results,
      urls: urls.length
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process IndexNow request' },
      { status: 500 }
    )
  }
}

// GET 请求返回 IndexNow 状态
export async function GET() {
  return NextResponse.json({
    service: 'IndexNow API',
    status: 'active',
    endpoints: INDEXNOW_ENDPOINTS,
    keyLocation: `${SITE_URL}/indexnow-key.txt`,
    usage: 'POST to this endpoint with {"urls": ["url1", "url2"]} to notify search engines'
  })
} 