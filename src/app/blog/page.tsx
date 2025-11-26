"use client";

import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: "best-full-spectrum-aquarium-lights",
    title: "Best Full Spectrum Aquarium Lights for Planted Tanks: Complete Guide 2024",
    description: "Expert guide to choosing full-spectrum aquarium lights. Learn about color spectrum, intensity, and light spread. Compare 5 budget-friendly options tested for real plant growth.",
    image: "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_601059413_97867db7-ccf6-45e3-b082-d4af94f1777f.jpg?v=1573605721",
    date: "November 24, 2024",
    tags: ["aquarium lighting", "planted tank", "full spectrum", "LED lights", "plant growth"],
    featured: true
  },
  {
    id: "best-aquarium-thermometers-with-alarm",
    title: "Best Aquarium Thermometers with High Temp Alarm: Keep Your Fish Safe 24/7",
    description: "Expert guide to choosing thermometers with alarm functions. Compare digital LED, LCD, and traditional types. Includes top 3 product recommendations with alarm capability.",
    image: "https://www.thesprucepets.com/thmb/DWmPXX3FB2nkHBvvqo-asPo5BWQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Aquarium-digital-thermometer-59000ef63df78ca1591de6b0.jpg",
    date: "November 23, 2024",
    tags: ["aquarium equipment", "thermometer", "temperature alarm", "fish safety"],
    featured: true
  },
  {
    id: "best-bottom-feeders-for-medium-fish",
    title: "Best Bottom Feeders for Community Tanks: 10 Perfect Clean-Up Crew Options",
    description: "Expert guide to choosing bottom feeders that eat excess food and thrive peacefully with 4-5 inch community fish. Includes compatibility ratings, care tips, and essential products.",
    image: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-2.jpg",
    date: "November 26, 2024",
    tags: ["aquarium care", "bottom feeders", "fish compatibility", "tank maintenance", "community tank"],
    featured: true
  },
  {
    id: "best-quiet-filters-40-gallon-tank",
    title: "Best Quiet Filters for 40-Gallon Tanks: 2025 Complete Guide",
    description: "Expert guide to choosing quiet, efficient filters for 40-gallon aquariums. Compare top 10 models with noise levels, flow rates, and performance reviews for whisper-quiet operation.",
    image: "https://images1.ratemyfishtank.com/photo/9/660x508c/47000/46502/23234-1-40-gallon-tank-102c3lb4buxgy.webp",
    date: "November 26, 2024",
    tags: ["aquarium equipment", "filters", "quiet operation", "40 gallon tank", "2025 guide"],
    featured: true
  },
  {
    id: "ai-tools-comparison",
    title: "Best AI Tools for Content Creation in 2024: A Comprehensive Comparison",
    description: "Discover the most innovative AI tools for creative projects, from horror content creation to pet care analysis. Compare features, pricing, and find the perfect tool for your needs.",
    image: "/pet/3.jpg",
    date: "December 15, 2024",
    tags: ["AI tools", "comparison", "creative content", "technology"],
    featured: true
  },
  {
    id: "pet-ranking",
    title: "Pet Popularity Contest: Vote for the Cutest Pets",
    description: "Join our viral pet ranking game inspired by teaspill! Vote between adorable cats and dogs to help crown the cutest pet.",
    image: "/pet/9.jpg",
    date: "August 1, 2023",
    tags: ["pet contest", "teaspill", "viral", "pet ranking"],
    featured: true
  },
  {
    id: "pet-health-risks-lyme-legionnaires",
    title: "Pet Health Risks: Lyme Disease and Legionnaires' Disease",
    description: "Learn about these zoonotic diseases, how they affect your pets, and prevention strategies.",
    image: "/pet/5.jpg",
    date: "August 1, 2023",
    tags: ["health", "disease prevention", "pet care"],
    featured: true
  }
];

function BlogContent() {
  return (
    <Layout title="Pet Health Blog" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">Pet Care & Aquarium Blog</h1>
          <p className="text-gray-600 text-lg">
            Expert insights on pet health, aquarium care, disease prevention, and practical tips to keep your pets thriving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              href={post.id === "pet-ranking" ? `/pet-ranking` : `/blog/${post.id}`}
              key={post.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  {post.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Featured</span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
} 