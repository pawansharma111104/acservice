/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: "/ac-service", // Replace with your GitHub repo name
  images: {
    unoptimized: true, // Fixes issues with Next.js Image component
  },
};

export default nextConfig;
