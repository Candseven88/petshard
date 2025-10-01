"use client";

import { Suspense } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

function NotFoundContent() {
  return (
    <Layout title="Page Not Found" showBackButton={false}>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-6xl font-bold text-pink-500 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
} 