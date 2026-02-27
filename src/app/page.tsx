"use client";

import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import StructuredData from "@/components/ui/StructuredData";

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

const coreFeatures = [
  {
    title: "Pet Name Generator",
    desc: "Upload your pet's photo and get the perfect name with a complete personality profile.",
    img: "/pet/1.jpg",
    href: "/pet-naming",
    badge: "NEW",
    highlight: true
  },
  {
    title: "Pet Health Center",
    desc: "Check symptoms and get breed-specific health advice instantly.",
    img: "/pet/7.jpg",
    href: "/health-center",
    badge: "HOT",
    highlight: true
  },
  {
    title: "Pet Care Guide",
    desc: "Get personalized care advice for feeding, training, and more.",
    img: "/pet/8.jpg",
    href: "/pet-care-guide",
    highlight: false
  },
  {
    title: "Pet Breed Identification",
    desc: "Upload a photo and let AI tell you your pet's breed.",
    img: "/pet/2.jpg",
    href: "/breed-identification"
  }
];

const minorFeatures = [
  { title: "Punch the Monkey", icon: "🐒", desc: "Viral macaque tribute & primate ID", href: "/punch-the-monkey" },
  { title: "Age Calculator", icon: "📅", desc: "Convert pet age to human years", href: "/pet-age-calculator" },
  { title: "Virtual Breeding", icon: "🧬", desc: "Predict offspring appearance", href: "/virtual-breeding" },
  { title: "Video Generator", icon: "🎬", desc: "Create fun pet videos", href: "/pet-video" },
  { title: "Pet Diary", icon: "📔", desc: "Record your pet's daily life", href: "/pet-diary" },
  { title: "Pet Horoscope", icon: "🔮", desc: "Discover your pet's zodiac", href: "/pet-horoscope" },
];

function HomeContent() {
  const [heroImgIdx, setHeroImgIdx] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((idx) => (idx + 1) % petImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <StructuredData type="website" data={{}} />
      <StructuredData type="organization" data={{}} />
      <StructuredData type="product" data={{}} />
      <Layout title="PetShard" showBackButton={false}>
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
          <div className="flex-1 z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">Welcome to PetShard!</h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">Discover, analyze, and have fun with your pets using AI.</p>
            <a href="#core-features" className="inline-block px-8 py-3 bg-pink-400 text-white font-bold rounded-full shadow-lg hover:bg-pink-500 active:scale-95 transition-all text-lg animate-bounce">Try Now</a>
          </div>
          <div className="flex-1 flex justify-center items-center relative min-h-[260px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 blur-2xl opacity-60 animate-gradient-move" />
            <Image
              src={petImages[heroImgIdx]}
              alt="Pet Hero"
              width={340}
              height={340}
              className="rounded-3xl shadow-xl border-4 border-white object-cover transition-all duration-700 animate-fade-in"
              priority
            />
          </div>
        </section>

        {/* Core Features Section */}
        <section id="core-features" className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((f, i) => (
            <a key={f.title} href={f.href} className={`group bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in relative ${
              f.highlight ? 'border-2 border-pink-400 ring-2 ring-pink-200' : 'border-2 border-transparent hover:border-pink-200'
            }`} style={{ animationDelay: `${i * 100}ms` }}>
              {f.badge && (
                <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                  {f.badge}
                </span>
              )}
              <div className="w-28 h-28 mb-4 relative">
                <Image src={f.img} alt={f.title} fill className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className={`text-lg font-bold mb-2 text-center ${f.highlight ? 'text-pink-600' : 'text-pink-500'}`}>
                {f.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">{f.desc}</p>
            </a>
          ))}
        </section>

        {/* Minor Features Section */}
        <section className="mt-12 flex flex-col md:flex-row gap-6 items-center justify-center animate-fade-in">
          {minorFeatures.map((f) => (
            <a key={f.title} href={f.href} className="flex flex-col items-center bg-yellow-50 rounded-xl px-6 py-4 shadow hover:bg-yellow-100 hover:scale-105 transition-all duration-200 cursor-pointer">
              <span className="text-3xl mb-2">{f.icon}</span>
              <span className="font-semibold text-blue-500">{f.title}</span>
              <span className="text-gray-500 text-sm text-center">{f.desc}</span>
            </a>
          ))}
        </section>

        {/* AI Tools Recommendation Section */}
        <section className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Explore More AI Tools</h2>
            <p className="text-gray-600 text-lg">
              Discover other innovative AI-powered tools that can enhance your creative projects and daily life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Creative AI Tools</h3>
                  <p className="text-gray-600 text-sm">Generate stunning visual content</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Create professional-quality images, posters, and visual content for your pet-related projects with advanced AI technology.
              </p>
              <a 
                href="https://www.ghostfaceai.space/" 
                target="_blank" 
                rel="nofollow"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
              >
                Try Ghostface AI
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">🐾</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Pet Care Resources</h3>
                  <p className="text-gray-600 text-sm">Comprehensive pet health information</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Access our extensive library of pet health guides, breed information, and AI-powered tools for better pet care.
              </p>
              <a 
                href="/health-guide" 
                className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium"
              >
                Explore Health Guide
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
} 