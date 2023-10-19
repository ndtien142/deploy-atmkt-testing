/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["s3.ap-southeast-1.amazonaws.com"],
  },
};

const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate(nextConfig);
