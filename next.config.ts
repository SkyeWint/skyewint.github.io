import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '',
  output: 'export',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
