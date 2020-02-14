import request from "@/utils/request"

request({
    method: "get",
    url: '/api/members'//要匹配 vue.config.js 中 proxy
}).then(response => {
    console.log('get', response.data)
})