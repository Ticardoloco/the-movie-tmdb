/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
       {
      protocol: 'https',
      hostname: 'secure.gravatar.com',
    },
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

    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyCY4yBY88xDY4bjgYygvATzJx8KzAaFxPo",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "taiwo-tmdb.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "taiwo-tmdb",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "taiwo-tmdb.firebasestorage.app",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "132263332385",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:132263332385:web:cfe5561c5214a77018b160",
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-L93BDM30GV"
  },
  reactCompiler: true,
};

export default nextConfig;
