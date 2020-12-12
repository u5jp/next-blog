const contentful = require("contentful");

const options = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_API_KEY,
  host:"https://cdn.contentful.com"
};

const previewOptions = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_API_KEY,
  host:"preview.contentful.com"
};

export const previewClient = contentful.createClient(previewOptions)

export default contentful.createClient(options);
