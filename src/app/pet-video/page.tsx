"use client";

import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Head from 'next/head';

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

// 使用环境变量中的PayPal Client ID
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export default function PetVideoPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [heroImgIdx, setHeroImgIdx] = useState(0);
  const paypalRef = useRef<HTMLDivElement>(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((idx) => (idx + 1) % petImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 动态加载PayPal SDK
  useEffect(() => {
    if (!PAYPAL_CLIENT_ID) {
      console.error("PayPal Client ID is missing");
      return;
    }
    
    if ((window as any).paypal) {
      setPaypalLoaded(true);
      return;
    }
    
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&intent=capture&components=buttons`;
    script.async = true;
    script.onload = () => setPaypalLoaded(true);
    script.onerror = () => {
      console.error("Failed to load PayPal SDK");
      setError("Failed to load payment system. Please try again later.");
    };
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // 渲染PayPal按钮（仅在showPayPal为true时渲染）
  useEffect(() => {
    if (!paypalLoaded || !paypalRef.current) return;
    if (!imageFile || !prompt.trim()) return;
    if (!showPayPal) {
      paypalRef.current.innerHTML = '';
      return;
    }
    
    paypalRef.current.innerHTML = '';
    
    try {
      (window as any).paypal.Buttons({
        style: { 
          layout: 'vertical', 
          color: 'blue', 
          label: 'pay', 
          height: 40 
        },
        
        // 创建订单
        createOrder: async () => {
          setPaymentProcessing(true);
          setPaymentError(null);
          
          try {
            const response = await fetch('/api/create-paypal-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                service: 'pet-video',
                amount: '0.80'
              })
            });
            
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || 'Failed to create order');
            }
            
            const data = await response.json();
            return data.id;
          } catch (err) {
            setPaymentProcessing(false);
            setPaymentError('Failed to create order. Please try again.');
            throw err;
          }
        },
        
        // 订单批准处理
        onApprove: async (data: any, actions: any) => {
          try {
            // 调用后端捕获订单
            const response = await fetch('/api/capture-paypal-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                orderId: data.orderID
              })
            });
            
            const captureData = await response.json();
            
            if (!response.ok || !captureData.success) {
              throw new Error(captureData.error || 'Payment failed');
            }
            
            // 支付成功
            setPaymentProcessing(false);
            setPaymentSuccess(true);
            setShowPayPal(false);
            setLoading(true); // 支付成功后立即进入生成中
            
            // 支付成功，调用生成视频
            await handleSubmit();
          } catch (err) {
            setPaymentProcessing(false);
            setPaymentError('Payment processing failed. Please try again.');
            console.error('Error processing PayPal payment:', err);
          }
        },
        
        onCancel: () => {
          setPaymentProcessing(false);
          setShowPayPal(false);
          setPaymentError('Payment cancelled.');
        },
        
        onError: (err: any) => {
          console.error('PayPal error:', err);
          setPaymentProcessing(false);
          setShowPayPal(false);
          setPaymentError('PayPal payment failed. Please try again.');
        }
      }).render(paypalRef.current);
    } catch (error) {
      console.error("Error rendering PayPal buttons:", error);
      setPaymentError('Failed to load payment system. Please try again later.');
    }
  }, [paypalLoaded, imageFile, prompt, showPayPal]);

  // 处理图片上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setImageFile(file);
    setImagePreview(previewUrl);
    setError(null);
  };

  // 处理表单提交
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!imageFile || !prompt.trim()) {
      setError('Please upload an image and enter a prompt');
      setLoading(false);
      return;
    }
    setError(null);
    setVideoUrl(null);
    try {
      // 1. 先POST，拿到任务id
      const base64Image = await convertFileToBase64(imageFile);
      const resp = await fetch('/api/pet-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, imageUrl: `data:${imageFile.type};base64,${base64Image}` }),
      });
      
      if (!resp.ok) {
        const errorData = await resp.json();
        throw new Error(errorData.error || 'Failed to create video task');
      }
      
      const { id, error } = await resp.json();
      if (!id) throw new Error(error || 'Failed to create video task');
      
      // 2. 轮询查询
      let status = 'PROCESSING', videoUrl = '';
      for (let i = 0; i < 40 && status === 'PROCESSING'; i++) { // 最多轮询40次（约2分钟）
        await new Promise(res => setTimeout(res, 3000));
        const poll = await fetch(`/api/pet-video/result?id=${id}`);
        
        if (!poll.ok) {
          const errorData = await poll.json();
          throw new Error(errorData.error || 'Failed to query video task');
        }
        
        const data = await poll.json();
        status = data.status;
        videoUrl = data.videoUrl;
        if (status === 'SUCCESS' && videoUrl) break;
        if (status === 'FAIL') throw new Error('Video generation failed');
      }
      
      if (status === 'SUCCESS' && videoUrl) {
        setVideoUrl(videoUrl);
      } else {
        throw new Error('Video generation timed out or failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // 将文件转换为base64
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <Head>
        <title>Free AI Image to Video Generator for Pets | Image to Video AI Free</title>
        <meta name="description" content="Use the best free AI image to video generator to turn your pet photos into videos. No sign up, no watermark. Try our AI image to video tool for free!" />
      </Head>
      <Layout title="Pet Video Generator" showBackButton={false}>
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
          <div className="flex-1 z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">
              Free AI Image to Video Generator for Pets
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">
              Transform your pet photos into stunning videos with our AI image to video generator. Try for free, no sign up, no watermark!
            </p>
            <ul className="text-base text-gray-600 mb-4 list-disc list-inside">
              <li>Supports image to video AI, AI image to video, and image to video AI generator</li>
              <li>Free to use, no sign up required</li>
              <li>No watermark on generated videos</li>
              <li>Perfect for pets, animals, and more</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center relative min-h-[340px] h-[340px] max-h-[340px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 blur-2xl opacity-60 animate-gradient-move" />
            <Image
              src={petImages[heroImgIdx]}
              alt="Pet Hero"
              width={340}
              height={340}
              className="rounded-3xl shadow-xl border-4 border-white object-cover w-[340px] h-[340px] transition-all duration-700 animate-fade-in"
              priority
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-3xl mx-auto mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Why Choose Our AI Image to Video Tool?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Powered by advanced AI image to video technology for smooth, natural results</li>
            <li>Free AI image to video generator, no sign up required</li>
            <li>No watermark on your videos</li>
            <li>Simple to use: upload an image and get your video</li>
            <li>Works for pets, people, landscapes, and more</li>
            <li>Compatible with all major social platforms</li>
          </ul>
        </section>

        {/* Main Card Section - Upload/Generate Logic */}
        <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8 animate-fade-in">
          <form onSubmit={e => e.preventDefault()} className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 flex flex-col items-center">
                <label className="block text-lg font-semibold text-blue-500 mb-2">Upload Pet Photo</label>
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-blue-200 rounded-xl bg-blue-50 min-h-[180px]">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <div className="relative w-40 h-40 mx-auto mb-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="object-contain w-full h-full rounded-xl shadow bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImageFile(null);
                            setImagePreview(null);
                          }}
                          className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full text-lg font-bold shadow hover:bg-red-600 transition p-0"
                          style={{lineHeight: 1}}
                          aria-label="Remove image"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <>
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-pink-500 hover:text-pink-600 px-4 py-2 border border-pink-200 shadow">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                        {/* 示例视频效果 */}
                        <div className="w-40 aspect-square mx-auto mt-4 rounded-xl overflow-hidden shadow bg-black flex items-center justify-center">
                          <video
                            src="/pet/1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full rounded-xl"
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-2">See the effect: AI-generated pet video example</p>
                      </>
                    )}
                    <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <label className="block text-lg font-semibold text-pink-500 mb-2">Video Description</label>
                <textarea
                  value={prompt}
                  onChange={(e) => {
                    setPrompt(e.target.value);
                  }}
                  className="w-full px-3 py-2 border border-pink-200 rounded-lg shadow-sm focus:outline-none focus:ring-pink-400 focus:border-pink-400"
                  rows={4}
                  placeholder="Describe what you want to see in the video"
                  disabled={loading}
                />
                {/* Generate for $0.8 按钮 */}
                <button
                  type="button"
                  className={`btn-primary mt-4 w-full py-3 text-lg flex items-center justify-center ${loading || !imageFile || !prompt.trim() || paymentProcessing ? 'opacity-60 cursor-not-allowed' : ''}`}
                  disabled={loading || !imageFile || !prompt.trim() || paymentProcessing}
                  onClick={() => {
                    setShowPayPal(true);
                    setPaymentError(null);
                    setPaymentSuccess(false);
                  }}
                >
                  {(loading || paymentProcessing) ? (
                    <span className="animate-spin mr-2 w-5 h-5 border-2 border-t-2 border-white border-t-pink-400 rounded-full"></span>
                  ) : null}
                  Generate for $0.8
                </button>
                {/* PayPal弹窗区域 */}
                {showPayPal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="bg-white rounded-xl shadow-lg p-6 min-w-[320px] relative">
                      <button
                        className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full text-lg font-bold shadow hover:bg-red-600 transition p-0"
                        style={{lineHeight: 1}}
                        aria-label="Close PayPal"
                        onClick={() => { setShowPayPal(false); setPaymentProcessing(false); }}
                      >×</button>
                      <div ref={paypalRef}></div>
                      {paymentProcessing && (
                        <div className="text-center text-pink-500 mt-4">Processing payment...</div>
                      )}
                    </div>
                  </div>
                )}
                {/* 支付成功/失败提示 */}
                {paymentSuccess && (
                  <div className="text-green-600 text-center mt-2">Payment successful! Generating video...</div>
                )}
                {paymentError && (
                  <div className="text-red-500 text-center mt-2">{paymentError}</div>
                )}
              </div>
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center animate-fade-in">
                {error}
              </div>
            )}
            {loading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500 mb-2"></div>
                <p className="text-gray-600">Generating video...</p>
              </div>
            )}
            {videoUrl && !loading && (
              <div className="mt-8 text-center">
                <div className="mx-auto rounded-xl shadow-lg w-full max-w-md aspect-video bg-black flex items-center justify-center">
                  <video src={videoUrl} controls className="w-full h-full object-contain rounded-xl" />
                </div>
                <p className="text-green-600 font-semibold mt-2">Your AI-generated pet video is ready!</p>
              </div>
            )}
          </form>
        </section>

        {/* How to Use */}
        <section className="max-w-3xl mx-auto mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">How to Use the AI Image to Video Generator?</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Upload your pet image (JPG, PNG, GIF up to 5MB)</li>
            <li>Enter a video description (e.g., "My cat playing in the garden")</li>
            <li>Click the "Generate" button. Our AI will create your video</li>
            <li>Download or share your AI-generated video</li>
          </ol>
          <p className="mt-2 text-gray-500 text-sm">
            Free to try. Some advanced features may require payment. Experience the best free image to video AI generator!
          </p>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mt-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-pink-600">1. Is this AI image to video tool free?</h3>
              <p>Yes, you can try our image to video AI generator for free. No sign up required and no watermark on your videos.</p>
            </div>
            <div>
              <h3 className="font-semibold text-pink-600">2. What image formats are supported?</h3>
              <p>We support JPG, PNG, and GIF formats up to 5MB.</p>
            </div>
            <div>
              <h3 className="font-semibold text-pink-600">3. Are the generated videos watermark-free?</h3>
              <p>Yes, videos generated with our free AI image to video tool have no watermark.</p>
            </div>
            <div>
              <h3 className="font-semibold text-pink-600">4. Do I need to create an account?</h3>
              <p>No, you can use our free image to video AI generator without signing up.</p>
            </div>
            <div>
              <h3 className="font-semibold text-pink-600">5. What can I use this tool for?</h3>
              <p>It's perfect for pet photos, animals, people, landscapes, and more. Try the best image to video AI generator for your creative needs!</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
} 