import React from "react";
import { connect } from "dva";
import { Route } from "dva/router";
import NewsList from "../NewsList";
function News({ match }) {
    console.log("match", match);
    return (
        <div>
            嵌套路由
            <Route path={`${match.url}/list`} exact component={NewsList} />
        </div>
    );
}

export default connect()(News);
