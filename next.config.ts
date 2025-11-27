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
      },
      {
        protocol: 'https',
        hostname: 'www.hygger-online.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'i.redd.it',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'images1.ratemyfishtank.com',
        pathname: '/photo/**',
      },
      {
        protocol: 'https',
        hostname: 'images2.ratemyfishtank.com',
        pathname: '/photo/**',
      },
      {
        protocol: 'https',
        hostname: 'images3.ratemyfishtank.com',
        pathname: '/photo/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
