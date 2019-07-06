import { fetchData, fetchDataByPost } from "../services/products";
export default {
    namespace: "products",
    state: {
        userInfoList: []
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
