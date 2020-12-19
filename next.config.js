const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  options: {
    sourcemaps: "production", // possible values can be production, development, or none
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY,
    CONTENTFUL_PREVIEW_API_KEY: process.env.CONTENTFUL_PREVIEW_API_KEY,
    CONTENTFUL_MANAGEMENT_API_KEY: process.env.CONTENTFUL_MANAGEMENT_API_KEY,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_PREVIEW_SECRET: process.env.CONTENTFUL_PREVIEW_SECRET,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
});
