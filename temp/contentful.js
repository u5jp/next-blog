const contentful = require("contentful");

const options = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_API_KEY,
};

export default contentful.createClient(options);
