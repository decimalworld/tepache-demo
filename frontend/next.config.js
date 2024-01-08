/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tepache-mock-1.s3.ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/development/**'
      }
    ]
  },
  output: 'standalone'
}

module.exports = nextConfig
