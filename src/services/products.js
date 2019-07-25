import request from "../utils/request";
export function getDevData(params) {
    return request("/api/goods/list", params);
}

export function fetchData(params) {
    return request("/node/home", params, {
        headers: {
            "Content-Type": "text/html;charset=utf-8",
            "Funky-Tiger": "Popping",
            Accept: "application/json"
        }
    });
}

export function fetchDataByPost(params) {
    return request("post", "/node/post", params, {
        headers: {
            "Content-Type": "text/html;charset=utf-8",
            "Funky-Tiger": "Popping",
            Accept: "*/*"
        }
    });
}
