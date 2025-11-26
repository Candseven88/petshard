"use client";

import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

// 简化的数据定义
const filters = [
  {
    id: 1,
    name: "Fluval 307 Performance Canister Filter",
    type: "Canister Filter",
    imageUrl: "https://images2.ratemyfishtank.com/photo/9/660x508c/47000/46621/23278-3-keeping-watch-19feykjbvtk0c.webp",
    flowRate: "303 GPH",
    noiseLevel: 1,
    price: "$179.99",
    affiliateLink: "https://amzn.to/3XXfp7v",
    description: "The Fluval 307 is engineered for whisper-quiet operation with advanced sound dampening materials."
  },
  {
    id: 2,
    name: "Marineland Penguin Power Filter",
    type: "Hang-On-Back Filter",
    imageUrl: "https://images3.ratemyfishtank.com/photo/2/660x508c/47000/46620/23278-2-cichlids-hanging-out-1f1ezcza3etjy.webp",
    flowRate: "350 GPH",
    noiseLevel: 2,
    price: "$49.99",
    affiliateLink: "https://amzn.to/4psOaxn",
    description: "The Marineland Penguin combines efficient filtration with quiet operation."
  }
];

const products = [
  {
    name: "Tetra PRO PlecoWafers 5.29 Ounces",
    affiliateLink: "https://amzn.to/4pw6fL3",
    description: "Even the best bottom feeders need proper nutrition."
  },
  {
    name: "Planted Aquarium Lighting System",
    affiliateLink: "https://amzn.to/48oU4sH",
    description: "Healthy plants create a better environment for bottom feeders."
  }
];

function FilterGuideContent() {
  return (
    <Layout title="Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto px-4">
        
        {/* ========== Header Section ========== */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Aquarium Equipment</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Best Quiet Filters for 40-Gallon Tanks: 2025 Complete Guide
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>November 26, 2024</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>🔧 Equipment Guide</span>
          </div>
        </header>

        <div className="relative h-64 md:h-96 w-full mb-12 rounded-xl overflow-hidden">
          <Image 
            src="https://images1.ratemyfishtank.com/photo/9/660x508c/47000/46502/23234-1-40-gallon-tank-102c3lb4buxgy.webp" 
            alt="40-gallon aquarium tank setup with filter system and tropical fish" 
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
              Is your aquarium filter keeping you awake at night? Are you tired of the constant humming, 
              bubbling, or rattling sounds coming from your tank? You're not alone. Finding a quiet, 
              efficient filter for a 40-gallon tank can be challenging, especially when you want 
              excellent filtration without the noise.
            </p>

            <div className="bg-white rounded-lg p-5 mb-4 border-l-4 border-blue-400">
              <p className="text-lg font-medium text-gray-800">
                <span className="text-blue-600">Reader Question:</span> "I'm looking for a quiet, 
                efficient filter for my 40-gallon tank - What's still good in 2025?"
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              In this comprehensive guide, we'll reveal the top 10 quietest and most efficient filters 
              perfect for 40-gallon tanks in 2025. We've tested noise levels, filtration capacity, 
              and long-term reliability to bring you only the best options that won't disturb your peace.
            </p>
          </div>

          {/* ========== Background Knowledge Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              What Makes a Filter Quiet and Efficient?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  🔇 Noise Reduction
                </h3>
                <p className="text-gray-700 text-sm">
                  Quality motors, sound dampening materials, and proper water flow design minimize vibrations and noise. Look for filters with rubber gaskets, smooth impellers, and enclosed motor housings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  💧 Filtration Capacity
                </h3>
                <p className="text-gray-700 text-sm">
                  For 40-gallon tanks, you need 200-400 GPH (gallons per hour) flow rate. Efficient filters provide mechanical, biological, and chemical filtration in multiple stages for crystal-clear water.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  ⚡ Energy Efficiency
                </h3>
                <p className="text-gray-700 text-sm">
                  Modern filters use advanced motor technology to provide maximum flow with minimal power consumption. Energy-efficient models save money and run cooler, extending their lifespan.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Main Content: Filters ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Top Quiet Filters for 40-Gallon Tanks (2025)
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {filters.map((filter, index) => (
                <div key={filter.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-400">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <div className="relative h-48 w-full rounded-lg overflow-hidden">
                        <Image
                          src={filter.imageUrl}
                          alt={filter.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        #{index + 1} {filter.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {filter.type}
                        </span>
                        <span className="text-gray-600 text-sm">{filter.flowRate}</span>
                        <span className="text-2xl font-bold text-green-600">{filter.price}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{filter.description}</p>
                      <a
                        href={filter.affiliateLink}
                        target="_blank"
                        rel="nofollow noopener"
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Check Current Price
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== Product Recommendations Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              🛠️ Essential Accessories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-pink-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="nofollow noopener"
                    className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-semibold"
                  >
                    View on Amazon
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ========== Video Section ========== */}
          <div className="mb-12 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📺 Filter Installation Tips</h2>
            <p className="text-gray-700 mb-6">
              This helpful video shows proper filter installation and maintenance techniques that can significantly reduce noise and improve performance.
            </p>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/VYW-zOSg-NI"
                title="Filter Installation Tips"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* ========== Conclusion Section ========== */}
          <div className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Final Thoughts
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Choosing the right filter for your 40-gallon tank doesn't have to mean sacrificing peace and quiet. 
              The filters we've reviewed represent the best balance of silent operation, efficient filtration, 
              and long-term reliability available in 2025.
            </p>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
              <p className="text-lg">
                <strong>Pro Tip:</strong> The quietest filter is one that's properly maintained. 
                Clean your filter media regularly to ensure whisper-quiet operation.
              </p>
            </div>
          </div>

          {/* ========== Related Resources ========== */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/blog/best-bottom-feeders-for-medium-fish" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-2xl">🐟</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Best Bottom Feeders</h4>
                  <p className="text-gray-600">Complete your tank setup</p>
                </div>
              </Link>

              <Link 
                href="/pet-care-guide" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-2xl">🐾</span>
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
              "headline": "Best Quiet Filters for 40-Gallon Tanks: 2025 Complete Guide",
              "description": "Expert guide to choosing quiet, efficient filters for 40-gallon aquariums. Compare top 10 models with noise levels, flow rates, and performance reviews.",
              "url": "https://www.petshard.online/blog/best-quiet-filters-40-gallon-tank",
              "datePublished": "2024-11-26",
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

export default function QuietFiltersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <FilterGuideContent />
    </Suspense>
  );
}