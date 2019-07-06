// 创建上下文 解析.js文件
const context = require.context("./", false, /\.js$/);

// 导出所有model
export default context
    .keys()
    //过滤掉index.js
    .filter(item => item !== "./index.js")
    .map(key => context(key));
