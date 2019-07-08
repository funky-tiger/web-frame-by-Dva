import React from "react";
import { connect } from "dva";
import { Route } from "dva/router";
import NewsList from "../NewsList";
import styles from "./index.less";
function News({ match }) {
    console.log("match", match);
    return (
        <div className={styles.qiantaoRoute}>
            <div className={styles.RouteInfo}>嵌套路由</div>
            <Route path={`${match.url}/list`} exact component={NewsList} />
        </div>
    );
}

export default connect()(News);
