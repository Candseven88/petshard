import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { dentalIssues, dentalCareTimeline, faqItems, useCaseItems } from "./data";

export const metadata: Metadata = {
  title: "Pet Dental Health: Complete Care Guide for Dogs and Cats",
  description: "Learn essential pet dental health care. Understand common dental issues, prevention strategies, and when to seek professional dental treatment.",
  keywords: ["pet dental health", "dog dental care", "cat dental health", "pet teeth cleaning", "dental disease prevention", "pet oral health"],
  openGraph: {
    title: "Pet Dental Health: Complete Care Guide for Dogs and Cats",
    description: "Learn essential pet dental health care. Understand common dental issues, prevention strategies, and when to seek professional dental treatment.",
    type: "article",
    url: "https://petshard.com/blog/pet-dental-health",
    siteName: "PetShard",
    images: [{
      url: "https://cdn2.thecatapi.com/images/ag4.jpg",
      width: 1200,
      height: 630,
      alt: "Pet Dental Health: Complete Care Guide"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Dental Health: Complete Care Guide for Dogs and Cats",
    description: "Learn essential pet dental health care. Understand common dental issues, prevention strategies, and when to seek professional dental treatment.",
    images: ["https://cdn2.thecatapi.com/images/ag4.jpg"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/pet-dental-health"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pet Dental Health: Complete Care Guide for Dogs and Cats",
  "description": "Learn essential pet dental health care. Understand common dental issues, prevention strategies, and when to seek professional dental treatment.",
  "author": {
    "@type": "Organization",
    "name": "PetShard"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PetShard",
    "logo": {
      "@type": "ImageObject",
      "url": "https://petshard.com/logo.png"
    }
  },
  "datePublished": "2025-11-28T03:43:39.193Z",
  "dateModified": "2025-11-28T03:43:39.193Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://petshard.com/blog/pet-dental-health"
  }
})
  }
};

function PetDentalHealthGuideContent() {
  return (
    <Layout title="Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto px-4">
        
        {/* ========== Header Section ========== */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Pet Care</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pet Dental Health: Expert Tips and Professional Advice
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>🐾 Pet Care</span>
          </div>
        </header>

        <div className="relative h-64 md:h-96 w-full mb-12 rounded-xl overflow-hidden">
          <Image 
            src="https://cdn2.thecatapi.com/images/ag4.jpg" 
            alt="Pet Dental Health: Expert Tips and Professional Advice" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* ========== Introduction Section ========== */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              Introduction
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Pet dental health is one of the most overlooked aspects of pet care, yet it's crucial for your pet's overall wellbeing. Dental disease affects approximately 80% of pets over age three, making preventive care essential for every pet owner.
            </p>

            <p className="text-lg leading-relaxed">
              <p className="text-lg leading-relaxed mb-4">
                Poor dental health can lead to serious complications including tooth loss, bone damage, and systemic infections that affect the heart, kidneys, and liver. This comprehensive guide covers common dental issues, prevention strategies, and professional care options to help you maintain your pet's oral health.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Whether you're a new pet owner or have years of experience, understanding pet dental health can significantly improve your pet's quality of life. We'll cover specific dental conditions, their symptoms, prevention measures, and when to seek professional veterinary care.
              </p>
            </p>
          </div>

          {/* ========== Core Content Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Common Dental Issues in Pets
            </h2>

            <div className="space-y-8">
              {dentalIssues.map((issue, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{index + 1}. {issue.title}</h3>
                  <p className="text-gray-700 mb-2"><strong>Description:</strong> {issue.description}</p>
                  <p className="text-gray-700 mb-2"><strong>Causes:</strong> {issue.causes}</p>
                  <p className="text-gray-700 mb-2"><strong>Severity:</strong> {issue.severity}</p>
                  <p className="text-gray-700"><strong>When to Call Vet:</strong> {issue.whenToCallVet}</p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8 mt-8">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">
                💡 Prevention Tips
              </h3>
              <ul className="space-y-2 text-yellow-900">
                <li>• Brush your pet's teeth daily or at least 3-4 times per week</li>
                <li>• Use pet-specific toothpaste and toothbrushes</li>
                <li>• Schedule annual professional dental cleanings</li>
                <li>• Provide dental-friendly toys and treats</li>
                <li>• Feed a balanced diet with appropriate texture</li>
                <li>• Monitor for signs of dental disease regularly</li>
              </ul>
            </div>
          </div>

          {/* ========== Dental Care Timeline Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Dental Care Timeline by Life Stage
            </h2>

            <div className="space-y-4">
              {dentalCareTimeline.map((stage, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{stage.age}</h3>
                  <p className="text-gray-700">{stage.care}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========== Use Cases Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Practical Use Cases
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCaseItems.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {index + 1}. {useCase.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{useCase.description}</p>
                  {useCase.example && (
                    <p className="text-gray-600 text-sm italic">Example: {useCase.example}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ========== FAQ Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Q{index + 1}: {item.question}
                  </h3>
                  <p className="text-gray-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========== Conclusion Section ========== */}
          <div className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
              Conclusion
            </h2>
            
            <p className="text-lg leading-relaxed">
              <p className="text-lg leading-relaxed mb-4">
                Pet dental health is a critical component of overall pet wellness that deserves attention and care. By understanding common dental issues, implementing preventive measures, and maintaining regular professional care, you can help your pet avoid serious dental complications.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Start with daily brushing, provide appropriate dental toys and treats, and schedule annual professional cleanings. Remember that each pet is unique, and your veterinarian can provide personalized recommendations based on your pet's age, breed, and health status.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                With consistent effort and professional guidance, you can maintain your pet's dental health and contribute to their overall happiness and quality of life for years to come.
              </p>
            </p>
          </div>

          {/* ========== Related Articles Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Pet Health Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/pet-emergency-signs" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🚨 Pet Emergency Signs</h3>
                <p className="text-gray-600">Learn to recognize emergency symptoms that require immediate veterinary attention.</p>
              </Link>
              
              <Link href="/blog/pet-first-aid" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🏥 Pet First Aid</h3>
                <p className="text-gray-600">Essential first aid procedures and techniques for common pet injuries.</p>
              </Link>

              <Link href="/blog/common-dog-diseases" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🐕 Common Dog Diseases</h3>
                <p className="text-gray-600">Understand common health conditions affecting dogs and prevention strategies.</p>
              </Link>

              <Link href="/blog/cat-health-symptoms" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🐱 Cat Health Symptoms</h3>
                <p className="text-gray-600">Recognize common cat health symptoms and when to seek veterinary care.</p>
              </Link>
            </div>
          </div>

          {/* ========== Pet Care Tools Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Explore Our Pet Care Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/health-center" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🏥 Pet Health Center</h3>
                <p className="text-gray-600">Get personalized health advice and symptom checking for your pet.</p>
              </Link>
              
              <Link href="/pet-care-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">📋 Pet Care Guide</h3>
                <p className="text-gray-600">Comprehensive care instructions tailored to your pet's needs.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function PetDentalHealthGuide() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PetDentalHealthGuideContent />
    </Suspense>
  );
}
