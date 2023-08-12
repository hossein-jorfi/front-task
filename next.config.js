const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["shopapi.liateam.com"],
  },
};

module.exports = nextConfig;
