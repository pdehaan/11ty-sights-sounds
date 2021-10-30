module.exports = function filterByCategory(posts=[], category="") {
  return posts.filter(post => post.data.category === category);
};
