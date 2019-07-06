import request from "../utils/request";

export function query() {
    return request("get", "/api/users", { name: "tiger" });
}
