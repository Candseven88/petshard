import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    // Allow images from The Cat API and The Dog API
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
      }
    ],
  },
};

export default nextConfig;
