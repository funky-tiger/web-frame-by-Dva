import axios from "axios";
// import { merge } from "lodash";

import "./axiosSetting";

const request = async (method, url, params, ...opts) => {
    console.log("params::::::", params);
    let _options = {};
    if (method.indexOf("/") > -1) {
        // 不传method默认使用get
        _options = {
            method: "get",
            headers: params && params.headers ? params.headers : {},
            params: url,
            url: method
        };
    } else {
        _options = {
            method,
            url,
            ...opts[0]
        };
        // get/post
        switch (_options.method) {
            case "get":
                if (params) _options.params = params;
                break;
            case "post":
                if (params) _options.data = params;
                _options.headers = {
                    "Content-Type": "application/x-www-form-urlencoded",
                    ..._options.headers
                };
                break;
            default:
                _options.params = params;
        }
    }
    return axios(_options);
};

export default request;
