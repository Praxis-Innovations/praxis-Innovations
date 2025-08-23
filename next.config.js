/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Enable standalone output for Docker
  images: {
    domains: [],
  },
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig
