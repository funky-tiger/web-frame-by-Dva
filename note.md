## 通过 npm 安装 antd 和 babel-plugin-import。

- babel-plugin-import 用来按需加载 antd 的脚本和样式
- npm install antd babel-plugin-import --save

## dva 介绍

- dva 是基于 react + redux 最佳实践而实现的封装方案，简化了 redux 和 redux-saga 使用上的诸多繁琐步骤

## 目录

├── mock // mock 数据文件夹
├── node_modules // 第三方的依赖
├── public // 存放公共 public 文件的文件夹
├── src // 最重要的文件夹，编写代码都在这个文件夹下
│ ├── assets // 可以放图片等公共资源
│ ├── components // 就是 react 中的木偶组件
│ ├── models // dva 最重要的文件夹，所有的数据交互及逻辑都写在这里
│ ├── routes // 就是 react 中的智能组件，不要被文件夹名字误导。
│ ├── services // 放请求借口方法的文件夹
│ ├── utils // 自己的工具方法可以放在这边
│ ├── index.css // 入口文件样式
│ ├── index.js // 入口文件
│ └── router.js // 项目的路由文件
├── .eslintrc // eslint 安装目录的配置
├── .editorconfig // 配置编辑器设置;缩进:indent_size = 4,4 个缩进.
├── .gitignore // git 上传时忽略的文件
├── .roadhogrc.js // 项目的配置文件，配置接口转发，css_module 等都在这边。
├── .roadhogrc.mock.js // 项目的配置文件
└── package.json // 当前整一个项目的依赖

## 待解决的问题

- 1. 🙆‍ 配置全局请求 axios （axios/fetch）
- 2. 🙆‍ lodash -> import \* as lodash from 'lodash';
- 3. 🙆 .eslintrc 配置
- 4. 🙆 后台真实接口代理 proxy 配置
     > effects 中请求接口，填充数据
- 5. 🙆 app.use(hooks)
     > 配置 hooks 或者注册插件。（插件最终返回的是 hooks ）
- 6. 🙆 复杂页面的 model 架构整理
- 7. dva 数据的 mock
     > https://blog.csdn.net/yjaspire/article/details/90180226/
- 8. .stylelintrc 配置
- 9. axios 拦截器中使用 store 的 dispatch 实现路由跳转
- 10. 🙆 全局 global 样式文件
- 11. 配置全局的 font-size 来配合使用 rem
- 12. ️️️⚠️ 区分开发/生产环境 .env
- 13. .editorconfig 配置 - 配置编辑器的一些设置
- 14. ⚠️ subscriptions/生命周期
- 15. 🙆browserRouter/hashRouter
- 16. dva-hmr
- 17. 配置动态加载 dva/dynamic

## subscriptions 监听

- 监听路由变化，鼠标，键盘变化，服务器连接变化，状态变化等，根据不同的变化做出相应的处理

## browserHistory 问题：二级路由如（localhost:8080/message/detail/:id）,在开发环境下刷新后会报错

- 解决办法：
  > index.html 中，设置引用为绝对路径 /src/somefile.js 而不是 src/somefile.js

## 优化复杂页面的 model 和 routes 架构整理

- require.context()函数创建上下文
- 允许传入一个目录进行搜索，一个标志指示是否应该搜索子目录，还有一个正则表达式来匹配文件
- 在构建时 webpack 会解析 require.context()代码
- 取出当前目录下的 js 文件，并过滤掉 index.js 文件，再用 map 遍历文件名，context 返回 default 方法

  > models/index.js
  > index.js

- app.dva({})所有可配置的钩子
  > const app = dva({
  > history,
  > initialState,
  > onError,
  > onAction,
  > onStateChange,
  > onReducer,
  > onEffect,
  > onHmr,
  > extraReducers,
  > extraEnhancers,
  > })

## 配置全局请求 axios

- npm i axios -S
- 相应配置文件
  > /utils/axiosSetting.js
  > /utils/request.js

## 配置全局处理错误

- 1. 在 axios 拦截器中实现
- 2. 在 index.js 中 app.dva({onError:})实现

## 打印 redux 日志

- npm i redux-logger -D
- 在 index.js 中 app.dva({onAction:})实现

## dva 中派发动作的两种方式

- model 中通过 effects 中的 put 去派发
- 组件中通过 this.props.dispatch 去派发

## dva 中使用 dva-router 的 routerRedux 来跳转路由跳转

- 跳转
  > this.props.dispatch(routerRedux.push({
  > pathname: 'url'
  > }));
- 跳转传参

  > this.props.dispatch(routerRedux.push({
  > pathname: 'url',
  > query: {id: id}
  > }));

- 获取参数
  > const params = location.query;

## .eslintrc.js 使用规则

- 推荐插件 prettier
- prettier:https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- prettier-eslint 并 prettier-tslint 包含在此扩展程序的安装中。无需为功能单独的本地或全局安装。
- prettier 配置读取优先级别
  > .editorconfig
  > VSCode 默认设置

## .editorconfig 编辑器配置

- 推荐插件 EditorConfig
- https://editorconfig.org/
- https://juejin.im/post/5b50269b5188251a9f249ed2

## 过渡组件 dva-loading

- npm i dva-loading -S
- dva-loading 提供异步加载的状态
- index.js 中引入 createLoading; app.use(createLoading());
- page 中 connect 引入 loading,打印 loading，即出现异步 effects 请求状态;true 为正在请求，false 为请求完毕;
- 具体加载样式由对应组件根据 loading 状态提供

## 配置 proxy 代理

- .webpackrc 中配置 proxy
- "proxy": {
  "/api": {
  "target": "http://127.0.0.1:3001",
  "changeOrigin": true,
  //"pathRewrite": { "^/api" : "" } // 将前端请求地址的/api 删除
  }
- }
- 前端：http://localhost:8000/api/home
- 后端：http"//127.0.0.1:3001/api/home

## 业务开发步骤

- routes/中新建 page，并在 router.js 导入
- models/中新建相应的模型，初始化 state-reducer-effects 等等
- services/中创建相应的请求相关接口，并在相应模型中处理好 effects 来异步请求数据
- 回到相应 page 中，通过 this.props.dispatch({})派发相应 action，通过 connect 来获取相应数据
- OK👌

## roadhog(路霸)

- npm i roadhog -g
- 相当于 dva 中的 webpack
- 命令行工具，类似于 CRA
