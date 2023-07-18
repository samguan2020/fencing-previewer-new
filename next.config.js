const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com', 'assets.trpc.io', 'youtube.com'],
  },

  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development'
  },
}

module.exports = nextConfig
