import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['aisongmaker.pro'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aisongmaker.pro',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable experimental features for better performance
  experimental: {
    scrollRestoration: true,
  },
}

export default withNextIntl(nextConfig);
