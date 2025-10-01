"use client";

import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ImageUploader from "@/components/ui/ImageUploader";
import BreedResultsList from "@/components/ui/BreedResultsList";
import LoadingButton from "@/components/ui/LoadingButton";
import Image from "next/image"; // This is a valid import in Next.js

interface Breed {
  breed: string;
  confidence: number;
}

interface Section {
  title: string;
  content: string;
}

interface BreedResults {
  breeds: Breed[];
  sections: Section[];
}

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

const coreFeatures = [
  {
    title: "Dog Breed Identifier",
    desc: "Upload a photo and let AI tell you what breed your dog is.",
    img: "/pet/2.jpg",
    href: "/breed-identification"
  },
  {
    title: "Virtual Breeding Analysis",
    desc: "See what your pet's offspring might look like!",
    img: "/pet/4.jpg",
    href: "/virtual-breeding"
  },
  {
    title: "Pet Video Generator",
    desc: "Create fun videos of your pet with AI magic.",
    img: "/pet/1.jpg",
    href: "/pet-video"
  }
];

const minorFeatures = [
  { title: "Health Guide", icon: "🩺", desc: "AI health tips for your pet", href: "/health-guide" },
  { title: "Pet Diary", icon: "📔", desc: "Record your pet's daily life", href: "/pet-diary" },
  { title: "Pet Horoscope", icon: "🔮", desc: "Discover your pet's zodiac", href: "/pet-horoscope" },
];

// FAQ content for SEO
const dogBreedFAQs = [
  {
    question: "How does the dog breed identifier work?",
    answer: "Our dog breed recognition tool uses advanced AI to analyze your dog's photo. Simply upload a picture, and our dog breed identifier will determine what breed your dog is with high accuracy."
  },
  {
    question: "What kind of dog is this tool best for?",
    answer: "Our dog breed finder works for all types of dogs - purebreds, mixed breeds, puppies, and adult dogs. Whether you're wondering 'what breed is my dog' or 'what dog breed is this,' our tool can help identify dog breeds from any photo."
  },
  {
    question: "Can I use this to determine puppy weight or age?",
    answer: "While our primary function is dog breed identification, the detailed breed information includes size ranges that can help with puppy weight estimation. We're currently developing specialized Dog Age Calculator and Puppy Weight Predictor tools that will be available soon."
  },
  {
    question: "What if I don't have a dog but want to know 'what dog am I'?",
    answer: "For fun personality matching like 'what dog breed am I' or 'what type of dog am I,' we're developing an interactive 'What Dog Am I Quiz' feature that will match your personality to a dog breed. This feature will be available soon!"
  },
  {
    question: "How accurate is the dog breed recognition?",
    answer: "Our dog breed identifier by picture uses advanced AI technology with over 95% accuracy for purebred dogs and provides confidence scores for each potential breed match."
  }
];

const additionalTools = [
  { 
    title: "Dog Age Calculator", 
    icon: "🔢", 
    desc: "Convert dog years to human years", 
    href: "/pet-age-calculator", 
    comingSoon: false
  },
  { 
    title: "What Dog Am I Quiz", 
    icon: "🧩", 
    desc: "Discover which breed matches your personality", 
    href: "#", 
    comingSoon: true
  },
  { 
    title: "Puppy Weight Predictor", 
    icon: "⚖️", 
    desc: "Determine puppy weight at maturity", 
    href: "#", 
    comingSoon: true
  },
];

export default function BreedIdentification() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<BreedResults | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isNewUpload, setIsNewUpload] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Hero区图片轮播
  const [heroImgIdx, setHeroImgIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((idx) => (idx + 1) % petImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleFileChange = (selectedFile: File | null) => {
    setError(null);
    
    if (!selectedFile) {
      setFile(null);
      setPreview(null);
      setIsNewUpload(false);
      return;
    }

    setFile(selectedFile);
    setIsNewUpload(true);
    
    // Create preview URL
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 如果已经有结果显示，且用户点击了"Analyze Another Image"按钮
    if (results && !isNewUpload) {
      // 只打开文件选择对话框，不清除结果
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
      return;
    }
    
    if (!file) {
      setError("Please select an image first");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      // Create form data for API request
      const formData = new FormData();
      formData.append('image', file);
      
      // Send request to our API endpoint
      const response = await fetch('/api/identify-breed', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        let errorMessage = 'Failed to identify breed';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {}
        throw new Error(errorMessage);
      }
      
      const data = await response.json();
      if (!data.breeds || !Array.isArray(data.breeds) || data.breeds.length === 0) {
        throw new Error('Invalid response from server');
      }
      setResults(data);
      setIsNewUpload(false);
    } catch (err: any) {
      setError(err.message || "An error occurred while identifying the breed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    // 只触发文件选择，不清除结果
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 按钮文案
  const getButtonText = () => {
    if (!results) return "Identify Dog Breed";
    if (isNewUpload) return "Analyze This Dog Photo";
    return "Identify Another Dog";
  };

  // 按钮禁用状态
  const isButtonDisabled = () => {
    if (isNewUpload) return !file;
    return false;
  };

  return (
    <Layout title="Pet Breed Identifier" showBackButton={false}>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
        <div className="flex-1 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">
            Dog Breed Identifier: What Breed Is My Dog?
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">
            Upload a photo to identify your dog's breed with our AI-powered dog breed recognition tool.
          </p>
          <a href="#identify-breed" className="inline-block px-8 py-3 bg-pink-400 text-white font-bold rounded-full shadow-lg hover:bg-pink-500 active:scale-95 transition-all text-lg animate-bounce">
            Identify My Dog
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center relative min-h-[340px] h-[340px] max-h-[340px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 blur-2xl opacity-60 animate-gradient-move" />
          <Image
            src={petImages[heroImgIdx]}
            alt="Dog breed identification example"
            width={340}
            height={340}
            className="rounded-3xl shadow-xl border-4 border-white object-cover w-[340px] h-[340px] transition-all duration-700 animate-fade-in"
            priority
          />
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="my-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover What Kind of Dog You Have</h2>
        <p className="text-lg text-gray-600">
          Ever wondered "what type of dog is this" or "what breed is my dog"? Our dog breed identifier by picture 
          uses advanced AI technology to analyze your dog's unique features and identify their breed with high accuracy.
          Whether you have a purebred or mixed breed dog, our dog breed finder tool can help you learn more about your furry friend.
        </p>
      </section>

      {/* Core Features Section */}
      <section id="core-features" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {coreFeatures.map((f, i) => (
          <a key={f.title} href={f.href} className="group bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-200 cursor-pointer animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="w-32 h-32 mb-4 relative">
              <Image src={f.img} alt={f.title} fill className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-pink-500 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-center">{f.desc}</p>
          </a>
        ))}
      </section>

      {/* Dog Breed Identification Tool */}
      <div id="identify-breed" className="max-w-3xl mx-auto mt-16 animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Dog Breed Identifier Tool</h2>
          <p className="text-gray-600">
            Upload a photo of your dog and our AI will identify what breed your dog is with high accuracy
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <ImageUploader 
            onFileChange={handleFileChange}
            preview={preview}
            error={error}
            fileInputRef={fileInputRef}
            videoPreview={!preview ? "/pet/2.mp4" : null}
          />
          <div className="text-center mt-8">
            <LoadingButton
              type="submit"
              loading={loading}
              disabled={isButtonDisabled()}
              loadingText="Identifying Dog Breed..."
            >
              {getButtonText()}
            </LoadingButton>
          </div>
        </form>

        {/* Error Message */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
            <div className="flex">
              <svg className="h-5 w-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium">{error}</p>
                <button 
                  onClick={handleRetry} 
                  className="text-sm text-red-600 hover:text-red-800 underline mt-1"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">Analyzing your dog's photo...</p>
            <p className="text-gray-500 text-sm mt-2">Our dog breed recognition system is working to identify your dog</p>
          </div>
        )}

        {/* Results Section */}
        {results && !loading && (
          <>
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Dog Breed Identification Results</h3>
              <p className="text-gray-600">Here's what our dog identifier found about your pet</p>
            </div>
            <BreedResultsList 
              breeds={results.breeds} 
              sections={results.sections} 
            />
            <div className="mt-6 text-center">
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
              >
                Identify Another Dog Breed
              </button>
            </div>
          </>
        )}
      </div>

      {/* Additional Tools Section */}
      <section className="mt-16 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">More Dog Breed Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalTools.map((tool) => (
            <div key={tool.title} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow relative">
              {tool.comingSoon && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  COMING SOON
                </div>
              )}
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.desc}</p>
              {tool.comingSoon ? (
                <span className="text-gray-400 font-medium">
                  Available Soon
                </span>
              ) : (
                <a href={tool.href} className="text-blue-500 hover:text-blue-700 font-medium">
                  Try Tool →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="my-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">How Our Dog Breed Identifier Works</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <ol className="space-y-6">
            <li className="flex">
              <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <h3 className="font-semibold text-lg">Upload Your Dog's Photo</h3>
                <p className="text-gray-600">Take a clear photo of your dog and upload it to our dog breed identifier by picture tool.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <h3 className="font-semibold text-lg">AI Analysis</h3>
                <p className="text-gray-600">Our dog breed recognition technology analyzes over 200 unique features to determine what breed your dog is.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <h3 className="font-semibold text-lg">Get Detailed Results</h3>
                <p className="text-gray-600">Receive comprehensive information about your dog's breed, including physical traits, temperament, and care tips.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="my-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions About Dog Breed Identification</h2>
        <div className="space-y-6">
          {dogBreedFAQs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-16 text-center">
        <div className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Out What Breed Your Dog Is?</h2>
          <p className="text-lg mb-6">Stop wondering "what kind of dog is this" and get accurate breed identification now!</p>
          <a 
            href="#identify-breed" 
            className="inline-block px-8 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 active:scale-95 transition-all"
          >
            Identify My Dog's Breed
          </a>
        </div>
      </section>
    </Layout>
  );
} 