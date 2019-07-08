import { fetchData, fetchDataByPost } from "../services/products";
import key from "keymaster";

export default {
    namespace: "products",
    state: {
        userInfoList: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(pathname => {
                console.log("路由监听", pathname);
            });
        },
        onClick({ dispatch }) {
            document.addEventListener("click", e => {
                console.log("鼠标事件监听", e);
            });
        },
        keyEvent(dispatch) {
            key("⌘+up, ctrl+up", e => {
                console.log("键盘事件监听", e);
            });
        }
    },
    reducers: {
        delete(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
        addData(state, action) {
            console.log("state, action:", state, action);
        },
        setData(state, action) {
            return {
                ...state,
                // userInfoList: state.userInfoList
                //     ? state.userInfoList.concat(action.payload)
                //     : []
                userInfoList: [].concat(action.payload)
            };
        }
    },
    effects: {
        *asyncFetchData(action, { call, put }) {
            const response = yield call(fetchData, action.params);
            yield put({ type: "setData", payload: response.data });
        },
        *asyncFetchDataByPost(action, { call, put }) {
            const response = yield call(fetchDataByPost, action.params);
            yield put({ type: "setData", payload: response.data });
        }
    }
};
