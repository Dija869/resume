import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
remotePatterns: [
  {
    protocol: "https",
    hostname: "creatio2demo.wordpress.com",
    pathname: "/**",
  },
  {
    protocol: "https",
    hostname: "backoffice.orio.digital",
    pathname: "/**",
  },
]
  }
};

export default nextConfig;
