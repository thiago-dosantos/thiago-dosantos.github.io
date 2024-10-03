/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  redirects: async () => {
    return [];
  },
};

module.exports = {
  env: {
    NEXT_PUBLIC_BLOG_ID: process.env.NEXT_PUBLIC_BLOG_ID,
  },
};


export default nextConfig;
