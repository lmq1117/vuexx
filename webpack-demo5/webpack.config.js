const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:'./src/main.js',
    mode:'development',
    output:{
        path:path.join(__dirname,'./dist/'),
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:8087
    },
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']//内置好的转译工具
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    //先认识再装载
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template: './index.html'})
    ]
}