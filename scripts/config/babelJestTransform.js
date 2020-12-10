"use strict";

const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: ["@babel/preset-env"],
  plugins: ["@babel/plugin-proposal-class-properties", "babel-plugin-rewire"],
  babelrc: false,
  configFile: false
});
