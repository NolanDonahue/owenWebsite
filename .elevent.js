const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addFilter("copyrightDate", (dateObj) => {
    var d = DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_SHORT);
    d.toFormat("yyyy");
    return d;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};