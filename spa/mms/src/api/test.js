import request from "@/utils/request"

//测试1 使用get方法发送get请求
request.get("/members").then(response=>{
    console.log('测试1 #### ',response.data.data.total)
}).catch(error=>{
    console.log(err)
})


//测试2 使用对象形式传入请求配置 如url method param
request({
    method: "get",
    url: '/members'//要匹配 vue.config.js 中 proxy
}).then(response => {
    console.log('测试2 #### ', response.data)
}).catch(error=>{
    console.log(err)
})

// 测试3 导出默认对象
export default {
    getList(){
        const req = request({
            url:'/members',
            method:"get"
        })
        return req;
    }
}
