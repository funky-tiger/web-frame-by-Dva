import React from "react";
import { connect } from "dva";
import { Link } from "dva/router";
import { Spin } from "antd";
import HeaderBar from "../../components/HeaderBar/index";
import styles from "./IndexPage.less";
import dva from "../../assets/dva.jpeg";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: "products/getDevDataByCihai",
            params: { keyword: "", page: 1, size: 20 }
        });
        dispatch({
            type: "products/asyncFetchData",
            params: { name: "tigers", phone: "18721565476" }
        });
        dispatch({
            type: "products/asyncFetchDataByPost",
            params: { name: "tigers", phone: "18721565476" }
        });
    }
    render() {
        const { products, loading } = this.props;
        const { userInfoList } = products;
        /**
         * 两个请求方法
         * products/asyncFetchData
         * products/asyncFetchDataByPost
         * 都请求完成为false时，表示请求完毕
         */
        // 两个异步effects都为false时，loadStatus才会false，
        // 有一个是true时，就表示还在请求中，此时loadStatus也为false
        let loadStatus =
            loading.effects["products/asyncFetchData"] ||
            loading.effects["products/asyncFetchDataByPost"];
        // console.log("******************************************");
        // console.log("loading", loading.effects, "loadStatus", loadStatus);
        // console.log("******************************************");
        return (
            <div className={styles.bg}>
                <HeaderBar />
                <Spin spinning={loadStatus} tip="Loading..." />
                {userInfoList && (
                    <React.Fragment>
                        {userInfoList.map((item, index) => {
                            return (
                                <h1 key={index}>
                                    name:{item.name}-age:{item.age}
                                </h1>
                            );
                        })}
                    </React.Fragment>
                )}

                <h2>CSSModules</h2>
                <img style={{ height: "20rem" }} src={dva} alt="" />
                <Link to="/news/list">嵌套路由</Link>
                <Link to="/news-detail/1">动态路由</Link>
            </div>
        );
    }
}

export default connect(({ products, loading }) => ({ products, loading }))(
    IndexPage
);
