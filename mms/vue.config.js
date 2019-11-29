module.exports = {
    devServer: {
        port: 8888,
        host: "localhost",
        https: false,
        open: true,

        //代理
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true,
                //重写 暂时不需要
            },
        }
    },
    lintOnSave: false,
    productionSourceMap: false,
}