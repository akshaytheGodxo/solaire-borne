import type { NextConfig } from "next";
import {withPayload} from "@payloadcms/next/withPayload";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3000",
        protocol: "http",
      }
    ]
  }
};

export default withPayload(nextConfig);
