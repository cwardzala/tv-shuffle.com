module.exports = function (eleventyConfig) {
    // Copy the `img/` directory
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy({ favicon: '/' });

    return {
        passthroughFileCopy: true
    };
};
