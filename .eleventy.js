module.exports = (eleventyConfig) => {
  require("./11ty/config")(eleventyConfig);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
