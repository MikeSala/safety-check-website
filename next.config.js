const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lirp.cdn-website.com",
      },
    ],
    unoptimized: true,
  },
  // i18n: {
  //   locales: ["pl"],
  //   defaultLocale: "pl",
  // },
  productionBrowserSourceMaps: true,
};

module.exports = withBundleAnalyzer(nextConfig);
