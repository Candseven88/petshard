"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Health Guide Redirect Page
 * 
 * This page redirects users from the old /health-guide URL to the new /health-center
 * Maintains backward compatibility for bookmarks and external links
 */
export default function HealthGuideRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new Health Center page
    router.replace("/health-center");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mb-4"></div>
        <p className="text-gray-600 text-lg">Redirecting to Pet Health Center...</p>
      </div>
    </div>
  );
}
