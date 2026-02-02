/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_KEY: process.env.API_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.BASE_URL,
  },
  reactCompiler: true,
};

export default nextConfig;
