/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
})

module.exports = withPWA(nextConfig)
