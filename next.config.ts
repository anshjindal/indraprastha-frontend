import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
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
