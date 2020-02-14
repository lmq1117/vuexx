import axios from 'axios'

const request = axios.create({
    baseURL:'http://localhost:8888',//相同域地址，会根据vue.config.js devServer.proxy配置规则使用代理
    timeout:5000
})

export default request