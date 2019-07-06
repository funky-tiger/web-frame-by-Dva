import request from "../utils/request";

export function fetchData(params) {
    return request("/api/home", params, {
        headers: {
            "Content-Type": "text/html;charset=utf-8",
            "Funky-Tiger": "Popping",
            Accept: "application/json"
        }
    });
}

export function fetchDataByPost(params) {
    return request("post", "/api/post", params, {
        headers: {
            "Content-Type": "text/html;charset=utf-8",
            "Funky-Tiger": "Popping",
            Accept: "*/*"
        }
    });
}
