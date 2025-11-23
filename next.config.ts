import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    // Allow images from The Cat API, The Dog API, and Shopify CDN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.thedogapi.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.thecatapi.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.thedogapi.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      },
      {
        protocol: 'https',
        hostname: 'www.thesprucepets.com',
        pathname: '/thmb/**',
      }
    ],
  },
};

export default nextConfig;
