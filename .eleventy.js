module.exports = function (config) {
  config.setBrowserSyncConfig({
    https: {
      key: "etc/secret/localhost.key",
      cert: "etc/secret/localhost.crt",
    },
  });

  config.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
  };
};
