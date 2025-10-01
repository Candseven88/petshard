import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // 获取请求参数
    const requestData = await request.json().catch(() => ({}));
    const service = requestData.service || 'pet-service';
    const amount = requestData.amount || '0.80'; // 默认金额为0.80美元
    
    // PayPal API base URL depends on mode (sandbox or live)
    const baseUrl = process.env.PAYPAL_MODE === 'live'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com'
    
    // Get access token
    const authResponse = await fetch(`${baseUrl}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`).toString('base64')}`
      },
      body: 'grant_type=client_credentials'
    })

    const authData = await authResponse.json()
    
    if (!authResponse.ok) {
      console.error('PayPal auth error:', authData)
      return NextResponse.json({ error: 'Failed to authenticate with PayPal' }, { status: 500 })
    }

    // 根据服务类型设置描述
    let description = 'Pet Service';
    if (service === 'pet-video') {
      description = 'Pet Video Generation';
    } else if (service === 'breeding-analysis') {
      description = 'Pet Breeding Analysis';
    }

    // Create order
    const orderResponse = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authData.access_token}`
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: amount
            },
            description: description
          }
        ],
        application_context: {
          brand_name: 'PetShard',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${process.env.NEXT_PUBLIC_APP_URL}/${service}`,
          cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/${service}`
        }
      })
    })

    const orderData = await orderResponse.json()
    
    if (!orderResponse.ok) {
      console.error('PayPal order creation error:', orderData)
      return NextResponse.json({ error: 'Failed to create PayPal order' }, { status: 500 })
    }

    return NextResponse.json({ id: orderData.id })
  } catch (error) {
    console.error('Error creating PayPal order:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 