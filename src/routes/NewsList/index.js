import React from "react";
import { connect } from "dva";
import styles from "./index.less";

function NewsList({ newlist }) {
    return (
        <React.Fragment>
            <div className={styles.newslist}>
                我是新闻列表页面
                <br />
                {newlist.initialData}
            </div>
        </React.Fragment>
    );
}

export default connect(({ newlist }) => ({ newlist }))(NewsList);
