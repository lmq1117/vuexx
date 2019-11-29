module.exports = {
    devServer: {
        port: 8888,
        host: "localhost",
        https: false,
        open: true,

        //代理
        proxy: {
            '/api': {
                target: 'http://localhost:8087',
                changeOrigin: true,
                //重写 暂时不需要
            },
        }
    },
    lintOnSave: false,
    productionSourceMap: false,
}