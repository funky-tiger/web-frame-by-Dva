import React from "react";
import { connect } from "dva";

function NewsDetail({ match }) {
    console.log("match", match);
    return <div>动态路由：{match.params.id}</div>;
}

export default connect()(NewsDetail);
