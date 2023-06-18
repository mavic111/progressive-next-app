/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    '@heroicons/react/24/outline/?(((\\w*)?/?)*)': {
      transform: '@heroicons/react/24/outline/{{ matches.[1] }}/{{member}}',
    },
  },
}

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
})

module.exports = withPWA(nextConfig)
