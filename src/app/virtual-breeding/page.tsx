"use client";

import { useState, useRef, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ImageUploader from '@/components/ui/ImageUploader';
import LoadingButton from '@/components/ui/LoadingButton';
import BreedingResultsDisplay from '@/components/ui/BreedingResultsDisplay';
import Image from 'next/image';

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

// Define the result type
interface BreedingAnalysisResult {
  compatibility: string;
  puppyDescription: string;
  traits: string[];
  healthConsiderations: string[];
}

export default function VirtualBreedingPage() {
  const [firstDogImage, setFirstDogImage] = useState<File | null>(null);
  const [secondDogImage, setSecondDogImage] = useState<File | null>(null);
  const [firstPreview, setFirstPreview] = useState<string | null>(null);
  const [secondPreview, setSecondPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BreedingAnalysisResult | null>(null);
  const [heroImgIdx, setHeroImgIdx] = useState(0);
  
  // PayPal相关状态
  const paypalRef = useRef<HTMLDivElement>(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  
  // PayPal Client ID
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  // Hero区图片轮播
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
    if (!firstDogImage || !secondDogImage) return;
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
                service: 'breeding-analysis',
                amount: '0.50'
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
        onApprove: async (data: any) => {
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
            
            // 支付成功后调用分析API
            await handleAnalysis();
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
  }, [paypalLoaded, firstDogImage, secondDogImage, showPayPal]);

  const handleFirstDogChange = (file: File | null) => {
    setFirstDogImage(file);
    setError(null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFirstPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFirstPreview(null);
    }
  };

  const handleSecondDogChange = (file: File | null) => {
    setSecondDogImage(file);
    setError(null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSecondPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSecondPreview(null);
    }
  };

  // 处理支付按钮点击
  const handlePaymentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!firstDogImage || !secondDogImage) {
      setError("Please upload both dog images");
      return;
    }
    setError(null);
    setShowPayPal(true);
    setPaymentError(null);
    setPaymentSuccess(false);
  };

  // 处理分析API调用
  const handleAnalysis = async () => {
    if (!firstDogImage || !secondDogImage) {
      setError("Please upload both dog images");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('firstDogImage', firstDogImage);
      formData.append('secondDogImage', secondDogImage);
      const response = await fetch('/api/virtual-breeding/analyze', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API request failed with status ${response.status}`);
      }
      const analysisResult = await response.json();
      setResult(analysisResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to analyze dog pairing. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToAnalysis = () => {
    setResult(null);
    setError(null);
    setPaymentSuccess(false);
  };

  return (
    <Layout title="Virtual Breeding Analysis" showBackButton={false}>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
        <div className="flex-1 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">Virtual Breeding Analysis</h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">See what your pet's offspring might look like! Upload two dog photos and let AI do the magic.</p>
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

      {/* Main Card Section */}
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8 animate-fade-in">
        {result ? (
          <BreedingResultsDisplay 
            result={result}
            firstDogPreview={firstPreview}
            secondDogPreview={secondPreview}
            onBack={handleBackToAnalysis}
          />
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-500">First Dog</h2>
                <ImageUploader
                  onFileChange={handleFirstDogChange}
                  preview={firstPreview}
                  error={error}
                  videoPreview={!firstPreview ? "/pet/2.mp4" : null}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-pink-500">Second Dog</h2>
                <ImageUploader
                  onFileChange={handleSecondDogChange}
                  preview={secondPreview}
                  error={error}
                  videoPreview={!secondPreview ? "/pet/3.mp4" : null}
                />
              </div>
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center animate-fade-in">
                {error}
              </div>
            )}
            
            {/* 支付错误提示 */}
            {paymentError && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center animate-fade-in">
                {paymentError}
              </div>
            )}
            
            {/* 支付成功提示 */}
            {paymentSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 text-center animate-fade-in">
                Payment successful! Analyzing breeding compatibility...
              </div>
            )}
            
            <div className="text-center">
              <LoadingButton
                type="button"
                loading={loading || paymentProcessing}
                disabled={!firstDogImage || !secondDogImage || loading || paymentProcessing}
                onClick={() => handlePaymentClick(new MouseEvent('click') as unknown as React.MouseEvent)}
              >
                Analyze Breeding Compatibility for $0.5
              </LoadingButton>
            </div>
            
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
          </form>
        )}
      </section>
    </Layout>
  );
} 