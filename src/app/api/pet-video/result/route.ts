import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ status: 'FAIL', error: 'Missing id' }, { status: 400 });
    }
    
    const apiKey = process.env.BIGMODEL_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ status: 'FAIL', error: 'Missing BIGMODEL_API_KEY' }, { status: 500 });
    }
    
    // 调用智谱AI的异步结果查询API
    const resp = await fetch(`https://open.bigmodel.cn/api/paas/v4/async-result/${id}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    
    // 解析响应
    const data = await resp.json();
    
    // 检查错误
    if (!resp.ok) {
      console.error('CogVideoX result API error:', data);
      return NextResponse.json({ 
        status: 'FAIL', 
        error: data.error || 'Failed to query video task' 
      }, { status: resp.status || 500 });
    }
    
    // 如果任务成功完成并且有视频结果
    if (data.task_status === 'SUCCESS' && data.video_result && data.video_result[0]?.url) {
      return NextResponse.json({ 
        status: 'SUCCESS', 
        videoUrl: data.video_result[0].url,
        coverImageUrl: data.video_result[0].cover_image_url,
        model: data.model,
        request_id: data.request_id
      });
    }
    
    // 如果任务失败
    if (data.task_status === 'FAIL') {
      return NextResponse.json({ 
        status: 'FAIL',
        error: 'Video generation failed'
      });
    }
    
    // 如果任务仍在处理中
    return NextResponse.json({ 
      status: data.task_status,
      request_id: data.request_id,
      model: data.model
    });
  } catch (error) {
    console.error('Error in pet-video result API:', error);
    return NextResponse.json({ 
      status: 'FAIL',
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    }, { status: 500 });
  }
} 