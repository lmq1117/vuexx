module.exports = {
    devServer: {
        port: 8888,//如果端口号被占用 会自动+1
        host: "localhost", //生产环境 0.0.0.0
        https: false,
        open: true,//启动服务时自动打开浏览器访问

        //代理
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true,
                //重写 暂时不需要
            },
        }
    },
    lintOnSave: false,//关闭格式检查
    productionSourceMap: false,//打包时不生成.map文件，加快打包速度
}