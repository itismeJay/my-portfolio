/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint is run separately via `npm run lint`; don't fail builds on lint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
