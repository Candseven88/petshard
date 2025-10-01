import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { prompt, imageUrl } = await req.json();
    
    // 验证输入
    if (!prompt && !imageUrl) {
      return NextResponse.json({ error: 'Either prompt or imageUrl is required' }, { status: 400 });
    }
    
    const apiKey = process.env.BIGMODEL_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing BIGMODEL_API_KEY' }, { status: 500 });
    }
    
    // 准备请求体 - 注意cogvideox-flash模型的特殊限制
    const requestBody: any = {
      model: 'cogvideox-flash',
    };
    
    // 根据API文档，cogvideox-flash不支持quality、size、fps参数
    // 添加prompt如果存在
    if (prompt) {
      requestBody.prompt = prompt;
    }
    
    // 添加imageUrl如果存在
    if (imageUrl) {
      requestBody.image_url = imageUrl;
    }
    
    // 调用智谱AI的视频生成API
    const resp = await fetch('https://open.bigmodel.cn/api/paas/v4/videos/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });
    
    // 解析响应
    const data = await resp.json();
    
    // 检查错误
    if (!resp.ok || !data.id) {
      console.error('CogVideoX API error:', data);
      return NextResponse.json({ 
        error: data.error || 'Failed to create video task' 
      }, { status: resp.status || 500 });
    }
    
    // 返回成功结果
    return NextResponse.json({ 
      id: data.id,
      request_id: data.request_id,
      model: data.model,
      task_status: data.task_status
    });
  } catch (error) {
    console.error('Error in pet-video API:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    }, { status: 500 });
  }
} 