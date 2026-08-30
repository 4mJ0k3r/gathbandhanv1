import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // /about-us was a near-duplicate of /about; keep the old URL working.
      { source: "/about-us", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
