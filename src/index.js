import dva from "dva";
import createLoading from "dva-loading";
// import { browserHistory } from "dva/router";
import { message } from "antd";
import { createLogger } from "redux-logger";
import history from "./utils/history";
import { createBrowserHistory as createHistory } from "history";
import "./index.css";
import "@babel/polyfill";
// 当前环境
console.log("当前环境:", process.env.NODE_ENV);
// 1. Initialize
// const app = dva();
const app = dva({
    // history: browserHistory,
    history,
    initialState: {
        products: [{ name: "dva", id: 1 }, { name: "antd", id: 2 }]
    },
    //全局错误处理
    onError(e) {
        message.error(e.message, 3);
    }
    // redux的action日志 debug
    // onAction: process.env.NODE_ENV === "development" ? createLogger() : () => {}
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
// app.model(require("./models/products").default);
require("./models").default.forEach(key => {
    app.model(key.default);
});

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
