import axios from 'axios'

const request = axios.create({
    // baseURL:'http://localhost:8888',//相同域地址，会根据vue.config.js devServer.proxy配置规则使用代理
    // baseURL:'/',
    //以下修改需要同时修改test.js中 url
    // baseURL:'/api',
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000
})

export default request