"use client";

import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

const aiTools = [
  {
    id: "ghostface-ai",
    name: "Ghostface AI",
    category: "Image Generation",
    description: "Professional AI-powered platform to create supernatural ghost images and eerie voices. Transform photos into haunting apparitions, generate spooky content, and bring your horror projects to life with cutting-edge paranormal AI technology.",
    features: [
      "Ghost Image Generator",
      "Horror Poster Creation", 
      "Voice Generation",
      "Story Generator",
      "Image Transformation",
      "Video Generation"
    ],
    url: "https://www.ghostfaceai.space/",
    pricing: "Free with premium options",
    rating: 4.8,
    image: "/pet/8.jpg", // Using existing pet image as placeholder
    tags: ["Horror", "Creative", "Image Generation", "Voice AI"],
    useCase: "Perfect for creating spooky content, horror movie posters, Halloween decorations, and supernatural-themed pet content."
  },
  {
    id: "petshard-breed",
    name: "PetShard Breed ID",
    category: "Pet Care",
    description: "AI-powered pet breed identification system that helps you understand your pet's genetic background and health predispositions.",
    features: [
      "Breed Identification",
      "Health Risk Assessment",
      "Genetic Analysis",
      "Care Recommendations"
    ],
    url: "/breed-identification",
    pricing: "Free",
    rating: 4.9,
    image: "/pet/2.jpg",
    tags: ["Pet Care", "Health", "Identification"],
    useCase: "Essential for new pet owners and those wanting to understand their pet's specific needs and health risks."
  },
  {
    id: "petshard-health",
    name: "Pet Health Guide",
    category: "Pet Care",
    description: "Comprehensive AI-driven health guidance system for pets, providing personalized care recommendations and health monitoring.",
    features: [
      "Health Monitoring",
      "Symptom Analysis", 
      "Care Guidelines",
      "Preventive Measures"
    ],
    url: "/health-guide",
    pricing: "Free",
    rating: 4.7,
    image: "/pet/5.jpg",
    tags: ["Health", "Monitoring", "Prevention"],
    useCase: "Ideal for proactive pet owners who want to maintain their pet's optimal health and catch issues early."
  }
];

const categories = ["All", "Image Generation", "Pet Care", "Creative", "Health"];

function AIToolsContent() {
  return (
    <Layout title="AI Tools Directory" showBackButton={true}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            AI Tools Directory
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover powerful AI tools that can enhance your pet care, creative projects, and daily life. 
            From pet health monitoring to creative content generation, find the perfect AI solution for your needs.
          </p>
        </div>

        {/* Featured Tool Spotlight */}
        <div className="mb-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="bg-yellow-400 text-purple-800 px-3 py-1 rounded-full text-sm font-bold mr-3">
                  Featured Tool
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="ml-2 text-sm">4.8/5</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ghostface AI</h2>
              <p className="text-lg mb-6 opacity-90">
                Create supernatural ghost images and eerie content with professional AI technology. 
                Perfect for horror enthusiasts, content creators, and anyone looking to add a spooky touch to their projects.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Horror", "Creative", "Image Generation", "Voice AI"].map((tag) => (
                  <span key={tag} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href="https://www.ghostfaceai.space/" 
                target="_blank" 
                rel="nofollow"
                className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Try Ghostface AI Free
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-48 bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
                <span className="text-6xl">👻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src={tool.image} 
                  alt={tool.name} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {tool.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <span className="text-sm font-medium">{tool.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tool.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {tool.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{tool.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Use Case:</span> {tool.useCase}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-green-600">{tool.pricing}</span>
                  <div className="flex flex-wrap gap-1">
                    {tool.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={tool.url}
                  target={tool.url.startsWith('http') ? "_blank" : "_self"}
                  rel={tool.url.startsWith('http') ? "nofollow" : ""}
                  className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors text-center block font-medium"
                >
                  {tool.url.startsWith('http') ? 'Visit Tool' : 'Try Now'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Looking for More AI Tools?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            The AI landscape is constantly evolving. We regularly update our directory with the latest and most innovative AI tools. 
            Check back often to discover new solutions that can enhance your projects and workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors font-medium"
            >
              Read Our AI Blog
            </Link>
            <Link 
              href="/contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Suggest a Tool
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function AITools() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AIToolsContent />
    </Suspense>
  );
} 