import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
env: {
  RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
},

};

export default nextConfig;
