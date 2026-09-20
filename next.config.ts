import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Cloudflare Pages: static HTML export (no Node server) */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
