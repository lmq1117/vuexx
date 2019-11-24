//模块化的js代码 浏览器不识别 需要打包
//node_modules\.bin\webpack .\js\main.js -o .\js\bundle.js
var bar = require('./bar')

bar()