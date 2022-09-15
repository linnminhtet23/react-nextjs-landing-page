const nextTranslate = require("next-translate");
const configs = require("./configs.json");

module.exports = {
  images: {
    domains: ["localhost", configs.STRAPI_URL],
  },
  reactStrictMode: true,
  ...nextTranslate(),
};
