import pxtorem from "postcss-pxtorem";
const path = require("path");

export default {
    extraPostCSSPlugins: [
        pxtorem({
            rootValue: 100,
            propWhiteList: []
        })
    ],
    env: {
        development: {
            extraBabelPlugins: ["dva-hmr", "transform-runtime"]
        }
    }
};
