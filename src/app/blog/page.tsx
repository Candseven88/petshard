"use client";

import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
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
  },
  // More blog posts can be added here in the future
];

function BlogContent() {
  return (
    <Layout title="Pet Health Blog" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">Pet Health & Wellness Blog</h1>
          <p className="text-gray-600 text-lg">
            Expert insights on pet health, disease prevention, and using AI to keep your furry friends safe and healthy.
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