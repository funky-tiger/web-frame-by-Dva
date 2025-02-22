module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
        mocha: true
    },
    extends: ["eslint:recommended", "react-app"],
    rules: {
        strict: "error",
        indent: ["error", 4, { SwitchCase: 1 }],
        eqeqeq: "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["error", { max: 2 }],
        "no-param-reassign": "warn", // 函数参数未注册
        "no-spaced-func": "error",
        "no-use-before-define": "warn",
        "no-unused-vars": "warn",
        "no-with": "error", // 不要啊
        "default-case": "error",
        "key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "comma-spacing": ["error", { before: false, after: true }],
        "generator-star-spacing": ["error", { before: true, after: false }],
        semi: ["warn", "always", { omitLastInOneLineBlock: true }],
        "no-restricted-globals": "off",
        "array-callback-return": "off",
        "no-console": [
            "warn",
            {
                allow: ["info", "warn", "error", "time", "timeEnd"]
            }
        ],
        "react/react-in-jsx-scope": "warn"
    },
    settings: {
        react: {
            version: "detect" // 屏蔽React最新版本检测报错
        }
    }
};
