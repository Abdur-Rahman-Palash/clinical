import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false, // disable to avoid conflicts with Framer Motion
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
