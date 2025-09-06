import type { NextConfig } from 'next';

const env = process.env.NODE_ENV;
// const isDev = env === 'development';

const nextConfig: NextConfig = {
  basePath: '',
  output: 'export',
  // ...(isDev ? { output: 'export' } : {}),
  reactStrictMode: true,
};

export default nextConfig;
