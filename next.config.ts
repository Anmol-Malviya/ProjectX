import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow external image sources for portfolio/project images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Allow local video sources
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "media-src 'self' data: blob:;",
          },
        ],
      },
    ];
  },
  // Enable network access
  async rewrites() {
    return []
  },
  // Configure for network access
  env: {
    HOSTNAME: '0.0.0.0'
  }
};

export default nextConfig;
