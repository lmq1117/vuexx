import request from "@/utils/request";

export function login(username, password) {
    let params = new URLSearchParams()
    params.append("username", username)
    params.append("password", password)
    return request({
        url: "user/login",
        method: "post",
        data: params,
    })
}

export function getUserInfo(token) {
    console.log(token)
    return request({
        url: `user/info/${token}`,
        method: "post",
    })
}

export function logout(token) {
    let params = new URLSearchParams()
    params.append("token", token)
    return request({
        url: `user/logout`,
        method: "post",
        data: params,
    })
}