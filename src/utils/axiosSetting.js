import axios from "axios";
import { message } from "antd";
// import { routerRedux } from "dva/router";
// import { getToken } from "./auth";
// import store from "../index";

axios.defaults.withCredentials = true; //跨域请求时是否需要使用凭证
axios.defaults.timeout = 10000; // 请求超时的毫秒数

const codeMessage = {
    200: "服务器成功返回请求的数据。",
    201: "新建或修改数据成功。",
    202: "一个请求已经进入后台排队（异步任务）。",
    204: "删除数据成功。",
    400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
    401: "用户没有权限（令牌、用户名、密码错误）。",
    403: "用户得到授权，但是访问是被禁止的。",
    404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
    406: "请求的格式不可得。",
    410: "请求的资源被永久删除，且不会再得到的。",
    422: "当创建一个对象时，发生一个验证错误。",
    500: "服务器发生错误，请检查服务器。",
    502: "网关错误。",
    503: "服务不可用，服务器暂时过载或维护。",
    504: "网关超时。"
};
axios.interceptors.request.use(
    config => {
        // config.headers.Authorization = getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
        // const { url } = config;
        // if (/^\/api\//.test(url) && !window.location.href.indexOf("user") > -1) {
        //   const { dispatch } = store;
        //   dispatch(routerRedux.replace("/user/login")); // 跳转到登录页
        // }
        return config;
    },
    error => {
        console.log(error); // for debug
        Promise.reject(error);
    }
);
// respone拦截器
axios.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.status && res.status !== 200) {
            message.error(res.message);
            //     store.dispatch('LogOut').then(() => {
            //     })
            //   })
            //   return Promise.reject('error')
        } else {
            // message.success(codeMessage[res.status]);
            return response.data;
        }
    },
    error => {
        // Cannot GET /api/home1
        message.error(
            `Cannot ${error.config.method.toLocaleUpperCase()} ${
                error.config.url
            } with fail`
        );
        console.error(
            `Cannot ${error.config.method.toLocaleUpperCase()} ${
                error.config.url
            } with fail`
        ); // for debug
        if (error === undefined || error.code === "ECONNABORTED") {
            message.warning("服务请求超时");
            return Promise.reject(error);
        }

        // message.error(`${status}:${text}`);
        // return error
        return Promise.reject(error);
    }
);
