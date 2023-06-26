/** @type {import('next').NextConfig} */
//const dns = require("dns");
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
  webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
  },
};
//dns.setDefaultResultOrder("ipv4first")
module.exports = nextConfig;
