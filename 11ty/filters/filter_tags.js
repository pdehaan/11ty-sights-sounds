const categories = require("../../src/_data/categories");

module.exports = function filterTags(tags=[], excludeTags=categories) {
  excludeTags.push("post");
  return tags.filter(tag => !excludeTags.includes(tag))
};
