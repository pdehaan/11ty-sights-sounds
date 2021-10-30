module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("inspect", require("util").inspect);

  eleventyConfig.addFilter("filter_by_category", require("./filters/filter_by_category"));
  eleventyConfig.addFilter("filter_by_tag", require("./filters/filter_by_tag"));
  eleventyConfig.addFilter("filter_tags", require("./filters/filter_tags"));
  eleventyConfig.addFilter("tag_set", require("./filters/tag_set"));
};
