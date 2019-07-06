import React from "react";
import { Router, Route, Switch } from "dva/router";
// import asyncComponent from "./utils/asyncComponent.js";
import IndexPage from "./routes/IndexPage/IndexPage";
import News from "./routes/News/index";
import NewsDetail from "./routes/NewsDetail/index";
// 按需加载组件
// const IndexPage = asyncComponent(() => import("./routes/IndexPage/IndexPage"));
// const News = asyncComponent(() => import("./routes/News/index"));
// const NewsDetail = asyncComponent(() => import("./routes/NewsDetail/index"));

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/news" component={News} />
                <Route path="/news-detail/:id" component={NewsDetail} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
