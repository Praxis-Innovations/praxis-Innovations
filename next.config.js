/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.praxisinnovations.ca' }],
        destination: 'https://praxisinnovations.ca/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://praxisinnovations.ca/:path*',
        permanent: true,
      },
    ];
  },
  output: 'standalone', // Enable standalone output for Docker
  images: {
    domains: [],
  },
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig
