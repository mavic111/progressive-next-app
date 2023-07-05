/** @type {import('next').NextConfig} */
const runtimeCaching = require('./pwa/runtimeCaching')

const nextConfig = {
  reactStrictMode: true,
}

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  extendDefaultRuntimeCaching: runtimeCaching,
})

module.exports = withPWA(nextConfig)
