import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import BottomFeederCard from "./components/BottomFeederCard";
import ProductRecommendation from "./components/ProductRecommendation";
import QuickActionPlan from "./components/QuickActionPlan";
import VideoEmbed from "./components/VideoEmbed";
import { bottomFeeders, products, proTips, comparisonTable } from "./data";

export const metadata = {
  title: "Best Bottom Feeders for Medium Fish: Complete Species Comparison Guide",
  description: "Discover the top 10 bottom feeders for 4-5 inch fish. Compare species, learn compatibility, and find the perfect cleanup crew for your community tank.",
  keywords: "bottom feeders, aquarium cleanup crew, Corydoras catfish, loaches, medium fish, community tank",
  openGraph: {
    title: "Best Bottom Feeders for Medium Fish: Complete Species Comparison Guide",
    description: "Expert guide to choosing bottom feeders that eat excess food and thrive with medium-sized fish. Compare 10 species with detailed compatibility information.",
    url: "https://petshard.com/blog/best-bottom-feeders-for-medium-fish",
    type: "article",
  },
};

function BottomFeedersContent() {
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
            Best Bottom Feeders for Medium Fish: Complete Species Comparison Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>November 23, 2024</span>
            <span>•</span>
            <span>18 min read</span>
            <span>•</span>
            <span>📝 Blog Post</span>
          </div>
        </header>
        {/* ========== Introduction Section ========== */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              Why Bottom Feeders Are Essential for Medium Fish Tanks
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Have you noticed uneaten food piling up at the bottom of your aquarium? Are you tired of constantly cleaning your tank? You're not alone. This is one of the most common problems aquarium owners face – and it can lead to cloudy water, ammonia spikes, and unhealthy fish. The solution? A well-chosen cleanup crew of bottom feeders specifically matched to your 4-5 inch fish.
            </p>
            <div className="bg-white rounded-lg p-5 mb-4 border-l-4 border-blue-400">
              <p className="text-lg font-medium text-gray-800">
                <span className="text-blue-600">Common Question:</span> "I have a community tank with 4-5 inch fish. What bottom feeders will eat excess food, keep my tank clean, and get along peacefully with my existing fish?"
              </p>
            </div>
            <p className="text-lg leading-relaxed">
              In this comprehensive guide, we'll reveal 10 proven bottom feeders that not only keep your tank clean but also thrive peacefully with medium-sized fish. We'll compare species by size, compatibility, cleaning power, and special abilities. Plus, we'll share expert tips and product recommendations to help you build the perfect cleanup crew for your specific tank setup.
            </p>
          </div>
          {/* ========== Background Knowledge Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Understanding Bottom Feeders for Medium Fish Tanks
            </h2>
            <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <strong className="text-yellow-700">🚨 Key Fact:</strong> Uneaten food that decays at the tank bottom produces ammonia and nitrite, which can spike to dangerous levels within 24-48 hours. A proper cleanup crew prevents this toxic buildup before it harms your fish.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  🐟 What Are Bottom Feeders?
                </h3>
                <p className="text-gray-700 text-sm">
                  Bottom feeders are aquatic animals that naturally scavenge for food at the tank floor. They play a crucial role in maintaining ecosystem balance by consuming leftover food, algae, and organic debris that other fish miss. They're not optional—they're essential for tank health.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  ⚖️ Size Compatibility Matters
                </h3>
                <p className="text-gray-700 text-sm">
                  Matching bottom feeders to your existing fish size prevents aggression and ensures peaceful coexistence. For 4-5 inch fish, look for species that are similar sized or smaller and have compatible temperaments. Mismatched sizes lead to stress and conflict.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  🧹 Three Types of Cleaning Power
                </h3>
                <p className="text-gray-700 text-sm">
                  Scavengers consume excess food, algae eaters target algae growth, and substrate sifters clean between gravel. Most species specialize in one area. Choose based on your specific tank needs and existing problems.
                </p>
              </div>
            </div>
          </div>
          {/* ========== Species Comparison Table ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Quick Species Comparison Table
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Use this table to quickly compare the top bottom feeders for medium fish tanks. Each species has unique strengths—choose based on your specific tank needs and existing fish.
            </p>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Species</th>
                    <th className="px-4 py-3 text-left font-bold">Size</th>
                    <th className="px-4 py-3 text-left font-bold">Compatibility</th>
                    <th className="px-4 py-3 text-left font-bold">Specialization</th>
                    <th className="px-4 py-3 text-left font-bold">Tank Size</th>
                    <th className="px-4 py-3 text-left font-bold">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{row.species}</td>
                      <td className="px-4 py-3 text-gray-700">{row.size}</td>
                      <td className="px-4 py-3 text-gray-700">{row.compatibility}</td>
                      <td className="px-4 py-3 text-gray-700">{row.specialization}</td>
                      <td className="px-4 py-3 text-gray-700">{row.tankSize}</td>
                      <td className="px-4 py-3 text-gray-700">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ========== Main Content: 10 Bottom Feeders ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Detailed Species Guide: Top 10 Bottom Feeders for Medium Fish
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Here's a detailed breakdown of each species, including their specific characteristics, compatibility with 4-5 inch fish, and why they excel at tank cleaning.
            </p>
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
          {/* ========== Related Resources & Internal Links ========== */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Aquarium & Pet Care Resources</h3>
            <p className="text-gray-700 mb-6">
              Explore these related articles to build a complete understanding of aquarium maintenance and pet care:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/blog/best-aquarium-thermometers-with-alarm" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-2xl">🌡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Aquarium Thermometers with Alarm</h4>
                  <p className="text-sm text-gray-600">Keep your tank temperature stable and safe</p>
                </div>
              </Link>
              <Link 
                href="/blog/best-full-spectrum-aquarium-lights" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-yellow-100 p-3 rounded-full">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Full Spectrum Aquarium Lights</h4>
                  <p className="text-sm text-gray-600">Optimize plant growth and fish health</p>
                </div>
              </Link>
              <Link 
                href="/blog/aquarium-water-quality-problems-solutions" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-2xl">💧</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Water Quality Problems & Solutions</h4>
                  <p className="text-sm text-gray-600">Maintain healthy water parameters</p>
                </div>
              </Link>
              <Link 
                href="/pet-care-guide" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Complete Pet Care Guide</h4>
                  <p className="text-sm text-gray-600">Comprehensive care for all pet types</p>
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
      <BottomFeedersContent />
    </Suspense>
  );
}
