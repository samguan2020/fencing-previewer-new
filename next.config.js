/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['via.placeholder.com', 'assets.trpc.io', 'youtube.com'],
  },
}

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA(nextConfig)
