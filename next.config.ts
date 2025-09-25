import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Add allowed development origins to fix WebSocket HMR issues
  allowedDevOrigins: [
    'preview-chat-56420133-bafe-4d5c-9fb5-51405531437c.space.z.ai',
    'localhost:3000',
    '127.0.0.1:3000'
  ],
  webpack: (config, { dev, isServer }) => {
    // Fix for WebSocket HMR issues
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  images: {
    // Allow external domains for Next.js Image component
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'demo-web.itzadarsh.co.in',
        pathname: '/**',
      },
    ],
    // Disable image optimization to allow all domains and file types
    unoptimized: true,
  },
};

export default nextConfig;
