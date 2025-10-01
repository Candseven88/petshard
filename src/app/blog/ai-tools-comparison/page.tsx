"use client";

import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

const aiToolsComparison = [
  {
    name: "Ghostface AI",
    category: "Creative Content",
    description: "Professional AI-powered platform for creating supernatural ghost images, horror posters, eerie voices, and spooky content.",
    strengths: [
      "Specialized in horror/supernatural content",
      "Multiple content types (images, voice, video)",
      "Professional quality output",
      "User-friendly interface",
      "Free tier available"
    ],
    bestFor: "Horror content creators, Halloween projects, supernatural-themed marketing",
    pricing: "Free with premium features",
    url: "https://www.ghostfaceai.space/",
    rating: 4.8
  },
  {
    name: "PetShard Breed ID",
    category: "Pet Care",
    description: "AI-powered pet breed identification and health analysis system for pet owners.",
    strengths: [
      "Accurate breed identification",
      "Health risk assessment",
      "Personalized care recommendations",
      "Easy photo upload process",
      "Comprehensive breed database"
    ],
    bestFor: "Pet owners, veterinarians, animal shelters",
    pricing: "Free",
    url: "/breed-identification",
    rating: 4.9
  },
  {
    name: "Generic AI Image Generator",
    category: "General Images",
    description: "Standard AI image generation tool for various content types.",
    strengths: [
      "Versatile image generation",
      "Multiple art styles",
      "High resolution output",
      "Batch processing",
      "API access"
    ],
    bestFor: "General content creation, marketing materials",
    pricing: "Subscription-based",
    url: "#",
    rating: 4.2
  }
];

function AIToolsComparisonContent() {
  return (
    <Layout title="AI Tools Comparison" showBackButton={true}>
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>AI Tools</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Best AI Tools for Content Creation in 2024: A Comprehensive Comparison
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>December 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 w-full mb-12 rounded-xl overflow-hidden">
          <Image 
            src="/pet/3.jpg" 
            alt="AI Tools Comparison" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Introduction</h2>
            <p className="text-lg leading-relaxed">
              The AI landscape has exploded with innovative tools designed to enhance creativity, productivity, and specialized tasks. 
              From pet care to horror content creation, there's an AI tool for virtually every niche. In this comprehensive comparison, 
              we'll explore some of the most interesting and useful AI tools available today, helping you choose the right solution for your specific needs.
            </p>
          </div>

          {/* Tools Comparison Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Featured AI Tools Comparison</h2>
            
            <div className="space-y-8">
              {aiToolsComparison.map((tool, index) => (
                <div key={tool.name} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-pink-400">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-bold text-gray-800 mr-4">{tool.name}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tool.category}
                        </span>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="flex items-center mr-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-5 h-5 ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                          <span className="ml-2 text-gray-600">{tool.rating}/5</span>
                        </div>
                        <span className="text-green-600 font-medium">{tool.pricing}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-800">Key Strengths:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tool.strengths.map((strength, idx) => (
                        <li key={idx} className="flex items-center bg-green-50 p-3 rounded-lg">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-700">
                      <span className="font-semibold">Best For:</span> {tool.bestFor}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={tool.url}
                      target={tool.url.startsWith('http') ? "_blank" : "_self"}
                      rel={tool.url.startsWith('http') ? "nofollow" : ""}
                      className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors font-medium inline-flex items-center"
                    >
                      {tool.url.startsWith('http') ? 'Visit Tool' : 'Try Now'}
                      {tool.url.startsWith('http') && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Use Cases */}
          <div className="mb-12 bg-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Specialized Use Cases</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎃 Horror & Supernatural Content</h3>
                <p className="text-gray-700 mb-4">
                  For creators working on horror projects, Halloween content, or supernatural themes, specialized tools like 
                  <a href="https://www.ghostfaceai.space/" target="_blank" rel="nofollow" className="text-purple-600 hover:text-purple-800 underline mx-1">
                    Ghostface AI
                  </a>
                  offer unmatched capabilities. These tools understand the nuances of horror aesthetics and can generate 
                  content that truly captures the eerie atmosphere you're looking for.
                </p>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Pro Tip:</strong> Specialized AI tools often outperform general-purpose tools in their specific domains 
                    because they're trained on more targeted datasets.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🐾 Pet Care & Analysis</h3>
                <p className="text-gray-700 mb-4">
                  Pet-focused AI tools like our own breed identification system provide specialized knowledge that general AI tools 
                  simply can't match. They understand breed-specific characteristics, health predispositions, and care requirements.
                </p>
                <div className="bg-pink-100 p-4 rounded-lg">
                  <p className="text-sm text-pink-800">
                    <strong>Pro Tip:</strong> When dealing with specialized domains like pet care, always choose tools that are 
                    specifically designed for that purpose rather than trying to adapt general tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Choosing the Right Tool */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">How to Choose the Right AI Tool</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Consider These Factors:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <div>
                      <h4 className="font-semibold">Specialization vs. Versatility</h4>
                      <p className="text-sm text-gray-600">Specialized tools often produce better results in their niche</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <div>
                      <h4 className="font-semibold">Ease of Use</h4>
                      <p className="text-sm text-gray-600">Consider your technical expertise and time constraints</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <div>
                      <h4 className="font-semibold">Output Quality</h4>
                      <p className="text-sm text-gray-600">Test tools with your specific use cases before committing</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <div>
                      <h4 className="font-semibold">Pricing Model</h4>
                      <p className="text-sm text-gray-600">Consider both upfront costs and long-term value</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <div>
                      <h4 className="font-semibold">Integration Capabilities</h4>
                      <p className="text-sm text-gray-600">How well does it work with your existing workflow?</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">6</span>
                    <div>
                      <h4 className="font-semibold">Support & Updates</h4>
                      <p className="text-sm text-gray-600">Active development and community support matter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">Conclusion</h2>
            <p className="text-lg leading-relaxed mb-6">
              The AI tool landscape is incredibly diverse, with solutions for virtually every creative and practical need. 
              Whether you're creating horror content with Ghostface AI, analyzing your pet's breed with our identification system, 
              or using general-purpose image generators, the key is matching the tool to your specific requirements.
            </p>
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
              <p className="text-lg">
                <strong>Remember:</strong> The best AI tool is the one that consistently delivers the results you need, 
                fits your budget, and integrates well with your workflow. Don't be afraid to try multiple tools and 
                combine their strengths for optimal results.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools CTA */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 shadow-md mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Explore These AI Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="https://www.ghostfaceai.space/" 
              target="_blank" 
              rel="nofollow"
              className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all text-center"
            >
              <span className="text-2xl mb-2 block">👻</span>
              <h4 className="font-bold text-gray-800">Ghostface AI</h4>
              <p className="text-sm text-gray-600">Horror Content Creation</p>
            </a>
            <Link 
              href="/breed-identification"
              className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all text-center"
            >
              <span className="text-2xl mb-2 block">🐕</span>
              <h4 className="font-bold text-gray-800">Breed Identification</h4>
              <p className="text-sm text-gray-600">Pet Analysis & Care</p>
            </Link>
            <Link 
              href="/ai-tools"
              className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all text-center"
            >
              <span className="text-2xl mb-2 block">🤖</span>
              <h4 className="font-bold text-gray-800">AI Tools Directory</h4>
              <p className="text-sm text-gray-600">Discover More Tools</p>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function AIToolsComparison() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AIToolsComparisonContent />
    </Suspense>
  );
} 