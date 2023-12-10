const postcss = require("rollup-plugin-postcss");

module.exports = {
  rollup(config, options) {
    config.plugin.push(
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        exstentions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      })
    );
    return config;
  },
};
