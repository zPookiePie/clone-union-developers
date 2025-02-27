import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.graphassets.com','avatars.githubusercontent.com','placehold.co'],
    dangerouslyAllowSVG:true
  },
};

export default nextConfig;
