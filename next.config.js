/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "qtrnw26havrffysb.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
