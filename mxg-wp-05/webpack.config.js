const path = require('path')
module.exports = {
    //development production
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',//识别css
                    'css-loader'//转换为js 下面的先执行
                ]
            }
        ]
    }

}