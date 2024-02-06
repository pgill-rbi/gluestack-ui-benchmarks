const path = require("path");

module.exports = function (api) {
  api.cache(false);
  return {
    presets: [
      "babel-preset-expo",
      ["@babel/preset-react", { runtime: "automatic" }],
      "@babel/preset-typescript",
    ],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin",
    ],
  };
};
