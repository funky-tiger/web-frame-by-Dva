const pxtorem = require("postcss-pxtorem");
const pxtorem2 = _interopRequireDefault(pxtorem).default;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
export default {
    plugins: [
        [
            "import",
            { libraryName: "antd", libraryDirectory: "es", style: "css" }
        ]
    ],
    proxy: {
        "/api": {
            target: "http://127.0.0.1:3001",
            changeOrigin: true
        }
    },
    entry: "./src/index.js",
    env: {
        development: {
            extraBabelPlugins: [
                [
                    "import",
                    {
                        style: "css",
                        libraryName: "antd",
                        libraryDirectory: "lib"
                    }
                ]
            ],
            publicPath: "/",
            extraPostCSSPlugins: [
                pxtorem2({ rootValue: 32, propWhiteList: [] })
            ]
        },
        production: {
            extraBabelPlugins: [
                [
                    "import",
                    {
                        style: "css",
                        libraryName: "antd",
                        libraryDirectory: "lib"
                    }
                ]
            ],
            publicPath: "/pad4/dist/",
            extraPostCSSPlugins: [
                pxtorem2({ rootValue: 32, propWhiteList: [] })
            ]
        }
    }
};
