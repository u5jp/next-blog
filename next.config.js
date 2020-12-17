module.exports = {
  options: {
    sourcemaps: "production", // possible values can be production, development, or none
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY,
    CONTENTFUL_PREVIEW_API_KEY: process.env.CONTENTFUL_PREVIEW_API_KEY,
    CONTENTFUL_MANAGEMENT_API_KEY: process.env.CONTENTFUL_MANAGEMENT_API_KEY,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
  },
};
