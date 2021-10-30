const filterTags = require("./filter_tags");

module.exports = function tagSet(posts=[]) {
  const tagSet = new Set();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagSet.add(tag);
    }
  }
  // Convert `Set` to an array (of deduped values), filter unwanted tags, then
  // sort the remaining tags.
  return filterTags([...tagSet]).sort();
};
