module.exports = {
    devServer: {
        port: 8888,
        host: "localhost",
        https: false,
        open: true,
        //匹配api开头的请求
        proxy: {
            '/api': {
                //目标服务器，代理访问到 http://localhost:8001 golang后端端口
                target: 'http://localhost:8000',
                changeOrigin: true,//开启代理
                pathRewrite: {
                    '^/api': '/api/v1',
                }

            }
        }
    },

    lintOnSave: false,//关闭格式检查
    productionSourceMap: false//打包时不生成.map文件 加快打包速度
}