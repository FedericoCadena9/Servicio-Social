/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    STRAPI_API_KEY: process.env.STRAPI_API_KEY,
  }
}

module.exports = nextConfig
