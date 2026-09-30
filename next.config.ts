import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  redirects() {
    return [
      {
        source: "/donate",
        destination: "https://pages.razorpay.com/ramleelasagarpur",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
