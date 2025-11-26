"use client";

import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import BottomFeederCard from "./components/BottomFeederCard";
import ProductRecommendation from "./components/ProductRecommendation";
import QuickActionPlan from "./components/QuickActionPlan";
import VideoEmbed from "./components/VideoEmbed";
import { bottomFeeders, products, proTips } from "./data";

// Metadata configuration - convert to server component if needed

function PodcastContent() {
  return (
    <Layout title="Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto px-4">
        
        {/* ========== Header Section ========== */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Aquarium Care</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Best Bottom Feeders for Community Tanks: 10 Perfect Clean-Up Crew Options
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>November 23, 2024</span>
            <span>•</span>
            <span>15 min read</span>
            <span>•</span>
            <span>📝 Blog Post</span>
          </div>
        </header>

        <div className="relative h-64 md:h-96 w-full mb-12 rounded-xl overflow-hidden">
          <Image 
            src="https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-2.jpg" 
            alt="Bottom feeder fish for community aquarium - Cory Catfish and Loaches" 
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
              Have you noticed uneaten food piling up at the bottom of your aquarium? 
              Are you tired of constantly cleaning your tank? You're not alone. This is 
              one of the most common problems aquarium owners face – and it can lead to 
              cloudy water, ammonia spikes, and unhealthy fish.
            </p>

            <div className="bg-white rounded-lg p-5 mb-4 border-l-4 border-blue-400">
              <p className="text-lg font-medium text-gray-800">
                <span className="text-blue-600">Reader Question:</span> "Looking for a bottom feeder for my community tank with 4-5 inch fish. Need something that will eat excess food and get along peacefully with my existing fish."
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              In this episode, we'll reveal 10 proven bottom feeders that not only keep 
              your tank clean but also thrive peacefully with medium-sized fish. Plus, 
              we'll share two game-changing products that make tank maintenance even easier.
            </p>
          </div>

          {/* ========== Background Knowledge Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Understanding Bottom Feeders
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  🐟 What Are They?
                </h3>
                <p className="text-gray-700 text-sm">
                  Bottom feeders are aquatic animals that naturally scavenge for food at the tank floor. They play a crucial role in maintaining ecosystem balance by consuming leftover food, algae, and organic debris that other fish miss.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  ⚖️ Size Compatibility
                </h3>
                <p className="text-gray-700 text-sm">
                  Matching bottom feeders to your existing fish size prevents aggression and ensures peaceful coexistence. For 4-5 inch fish, look for species that are similar sized or smaller and have compatible temperaments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  🧹 Cleaning Power
                </h3>
                <p className="text-gray-700 text-sm">
                  Evaluate effectiveness by feeding habits: scavengers consume excess food, algae eaters target algae growth, and substrate sifters clean between gravel. Choose based on your specific tank needs.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Main Content: 10 Bottom Feeders ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Top 10 Bottom Feeders for Your Community Tank
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bottomFeeders.map((feeder, index) => (
                <BottomFeederCard 
                  key={feeder.id} 
                  feeder={feeder} 
                  index={index}
                />
              ))}
            </div>

            {bottomFeeders.length < 10 && (
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  ⚠️ <strong>Note:</strong> Add remaining bottom feeder data in data.ts file to display all 10 species
                </p>
              </div>
            )}
          </div>

          {/* ========== Product Recommendations Section ========== */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-pink-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                🛠️ Essential Tools to Make Your Life Easier
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Even with the best bottom feeders, you still need proper maintenance. 
              Here are two products that work hand-in-hand with your clean-up crew:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <ProductRecommendation 
                  key={index} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* ========== Video Section ========== */}
          <div className="mb-12">
            <VideoEmbed 
              videoId="eTJasIQvYBI"
              title="Want to See Another Approach?"
              description="I found this excellent YouTube video that shows a different cleanup crew setup. While our recommendations focus on fish that eat excess food, this video explores alternative solutions you might also consider. It's always good to see multiple perspectives before making your decision."
            />
          </div>

          {/* ========== Quick Action Plan ========== */}
          <div className="mb-12">
            <QuickActionPlan proTips={proTips} />
          </div>

          {/* ========== Conclusion Section ========== */}
          <div className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Final Thoughts
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              We've explored 10 excellent bottom feeders that are perfect companions for your 4-5 inch fish. From the versatile Corydoras catfish to the algae-loving Bristlenose plecos, each species brings unique benefits to your aquarium ecosystem. The key to success is matching the right species to your specific tank conditions and existing fish community.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Remember, bottom feeders are part of your tank's cleaning crew, not a replacement for regular maintenance. Combine them with proper feeding practices and the right equipment to create a thriving, low-maintenance aquarium that you'll enjoy for years to come.
            </p>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
              <p className="text-lg">
                <strong>Remember:</strong> The best bottom feeder for your tank depends 
                on your specific setup, existing fish, and maintenance preferences. 
                Start with one species, observe how it works, and adjust accordingly.
              </p>
            </div>
          </div>

          {/* ========== Call to Action ========== */}
          <div className="bg-pink-50 rounded-xl p-6 shadow-md mb-8">
            <h3 className="text-xl font-bold text-pink-600 mb-2">
              💬 What's Your Experience?
            </h3>
            <p className="text-gray-700 mb-4">
              Which bottom feeder worked best for your tank? Do you have any tips to 
              share with fellow aquarium enthusiasts? Drop a comment below!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/contact"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors text-center font-semibold"
              >
                Share Your Story
              </Link>
              <Link 
                href="/blog"
                className="bg-white text-pink-600 border-2 border-pink-500 px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors text-center font-semibold"
              >
                More Blog Posts
              </Link>
            </div>
          </div>

          {/* ========== Related Resources ========== */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/health-guide" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Pet Health Guide</h4>
                  <p className="text-gray-600">Comprehensive health information</p>
                </div>
              </Link>

              <Link 
                href="/pet-care-guide" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Pet Care Guide</h4>
                  <p className="text-gray-600">Essential care tips and tricks</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ========== Structured Data (JSON-LD) ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BlogPosting",
              "headline": "Best Bottom Feeders for 4-5 Inch Fish: 10 Clean-Up Crew Options",
              "description": "Expert guide to choosing bottom feeders that eat excess food and thrive with medium-sized fish",
              "url": "https://petshard.com/blog/best-bottom-feeders-for-medium-fish",
              "datePublished": "2024-11-23",
              "author": {
                "@type": "Organization",
                "name": "PetShard"
              }
            })
          }}
        />
      </article>
    </Layout>
  );
}

export default function BottomFeedersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PodcastContent />
    </Suspense>
  );
}
