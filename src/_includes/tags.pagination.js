const slugFilter = require("@11ty/eleventy/src/Filters/Slug");
const tagSetFilter = require("../../11ty/filters/tag_set");

module.exports = {
  eleventyComputed: {
    pagination(data) {
      return {
        data: `collections.${data.category}`,
        size: 1,
        alias: "tag",
        before: (posts) => tagSetFilter(posts),
      };
    },
    permalink(data) {
      const categorySlug = slugFilter(data.category);
      // For a brief moment during first pass `data.tag` is undefined which
      // breaks the `slug` filter since it expects a string. So we hack in a
      // default empty string here until the second layout pass.
      const tagSlug = slugFilter(data.tag || "");
      // Example: "/sights/tag/hip-hop/"
      return `/${ categorySlug }/tag/${ tagSlug }/`;
    },
    title(data) {
      return `${data.category} "${data.tag}" Archive`
    }
  }
};
