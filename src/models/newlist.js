import { fetchData, fetchDataByPost } from "../services/products";
export default {
    namespace: "newlist",
    state: {
        initialData: "嵌套路由NewsList中的数据"
    },
    subscriptions: {
        // setup({ dispatch, history }) {
        //     history.listen(pathname => {
        //         console.log("路由监听", pathname);
        //     });
        // },
        // onClick({ dispatch }) {
        //     document.addEventListener("click", () => {
        //         dispatch({ type: "save" });
        //     });
        // }
    },
    reducers: {
        addData(state, action) {
            console.log("state, action:", state, action);
        }
    }
};
