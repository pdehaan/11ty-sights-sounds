const categories = require("../src/_data/categories");

module.exports = eleventyConfig => {
  for (const category of categories) {
    // NOTE: This is a bit sketchy, but was seemingly needed for the dynamic
    // collection tag list creation using dynamic pagination.
    eleventyConfig.addCollection(category, collectionApi => {
      return collectionApi.getFilteredByTags("post", category);
    });
  }
};
