const path = require('path')

/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = config
