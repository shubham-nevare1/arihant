/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
  },
};

export default nextConfig;
