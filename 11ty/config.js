module.exports = eleventyConfig => {
  eleventyConfig.setDataDeepMerge(true);

  require("./filters")(eleventyConfig);
  require("./collections")(eleventyConfig);
};
