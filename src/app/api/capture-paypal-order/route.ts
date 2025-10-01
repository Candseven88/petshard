import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json()
    
    if (!orderId) {
      return NextResponse.json({ error: 'Order ID is required' }, { status: 400 })
    }
    
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

    // Capture order
    const captureResponse = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authData.access_token}`
      }
    })

    const captureData = await captureResponse.json()
    
    if (!captureResponse.ok) {
      console.error('PayPal capture error:', captureData)
      return NextResponse.json({ error: 'Failed to capture PayPal payment' }, { status: 500 })
    }

    // Check if payment was completed
    const paymentStatus = captureData.status
    
    if (paymentStatus === 'COMPLETED') {
      // Here you would typically update your database to record the payment
      // and grant access to the service
      
      return NextResponse.json({ 
        success: true,
        orderId: captureData.id,
        status: paymentStatus
      })
    } else {
      return NextResponse.json({ 
        success: false,
        status: paymentStatus,
        message: 'Payment not completed'
      }, { status: 400 })
    }
  } catch (error) {
    console.error('Error capturing PayPal payment:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 