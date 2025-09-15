const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lirp.cdn-website.com"],
  },
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
  productionBrowserSourceMaps: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/przeglad-instalacji-elektrycznej",
        destination: "/electrical-safety-check",
      },
      {
        source: "/przeglad-instalacji-gazowej",
        destination: "/gas-safety-check",
      },
      {
        source: "/przeglad-czujnikow-dymu",
        destination: "/smoke-alarm-safety-check",
      },
      {
        source: "/przeglad-instalacji-gazowej-przyczepy",
        destination: "/caravan-gas-compliance-check",
      },
      {
        source: "/modernizacja-rozdzielnicy",
        destination: "/electrical-switchboard-upgrade",
      },
      { source: "/przeglad-hydrauliczny", destination: "/general-plumbing" },
      { source: "/zasieg-i-wylaczenia", destination: "/inclusions-exclusions" },
      {
        source: "/abonament-na-zgodnosc",
        destination: "/property-compliance-subscription",
      },
      {
        source: "/dla-zarzadcow-nieruchomosci",
        destination: "/solutions-for-property-managers",
      },
      {
        source: "/dla-wlascicieli-mieszkan",
        destination: "/solutions-for-landlords",
      },
      {
        source: "/dla-administratorow-budynkow",
        destination: "/solutions-for-building-managers",
      },
      {
        source: "/dla-wlascicieli-domow",
        destination: "/solutions-for-homeowners",
      },
      {
        source: "/dla-biur-nieruchomosci",
        destination: "/solutions-for-real-estate",
      },
      { source: "/faq", destination: "/faq" },
      {
        source: "/wlaczenia-wylaczenia",
        destination: "/inclusions-exclusions",
      },
      { source: "/o-nas", destination: "/about-us" },
      { source: "/kontakt", destination: "/contact-us" },
      { source: "/praca-z-nami", destination: "/work-with-us" },
      { source: "/uslugi", destination: "/services" },
      { source: "/legislacja", destination: "/legislation" },
      { source: "/rozwiazania", destination: "/solutions" },
      { source: "/zarezerwuj-przeglad", destination: "/book-now" },
      { source: "/polityka-prywatnosci", destination: "/privacy-policy" },
    ];
  },
  async redirects() {
    return [
      {
        source: "/electrical-safety-check",
        destination: "/404",
        permanent: false,
      },
      { source: "/gas-safety-check", destination: "/404", permanent: false },
      {
        source: "/smoke-alarm-safety-check",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/caravan-gas-compliance-check",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/electrical-switchboard-upgrade",
        destination: "/404",
        permanent: false,
      },
      { source: "/general-plumbing", destination: "/404", permanent: false },
      {
        source: "/inclusions-exclusions",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/property-compliance-subscription",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/solutions-for-property-managers",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/solutions-for-landlords",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/solutions-for-building-managers",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/solutions-for-homeowners",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/solutions-for-real-estate",
        destination: "/404",
        permanent: false,
      },
      { source: "/about-us", destination: "/404", permanent: false },
      { source: "/contact-us", destination: "/404", permanent: false },
      { source: "/work-with-us", destination: "/404", permanent: false },
      { source: "/services", destination: "/404", permanent: false },
      { source: "/solutions", destination: "/404", permanent: false },
      { source: "/legislation", destination: "/404", permanent: false },
      { source: "/book-now", destination: "/404", permanent: false },
      { source: "/privacy-policy", destination: "/404", permanent: false },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
