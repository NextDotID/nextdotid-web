/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: ".",
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};