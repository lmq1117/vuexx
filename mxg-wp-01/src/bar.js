//打包
// D:\vue\vuexx\mxg-wp-01>node_modules\.bin\webpack .\src\main.js -o .\dist\bundle.js

/*
D:\vue\vuexx\mxg-wp-01>node_modules\.bin\webpack .\src\main.js -o .\dist\bundle.js
Hash: d043d98db058f8f754e4
Version: webpack 4.35.2
Time: 385ms
Built at: 2019-11-24 22:17:15
Asset        Size  Chunks             Chunk Names
bundle.js  1010 bytes       0  [emitted]  main
Entrypoint main = bundle.js
    [0] ./src/main.js 33 bytes {0} [built]
    [1] ./src/bar.js 73 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'productio
n' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
*/

//打包命令
//D:\vue\vuexx\mxg-wp-01>node_modules\.bin\webpack
/*
D:\vue\vuexx\mxg-wp-01>node_modules\.bin\webpack
Hash: 0ca3eced5f5e3ff75721
Version: webpack 4.35.2
Time: 419ms
Built at: 2019-11-24 22:29:24
    Asset        Size  Chunks             Chunk Names
bundle.js  1010 bytes       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/main.js 33 bytes {0} [built]
[1] ./src/bar.js 910 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'productio
n' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

D:\vue\vuexx\mxg-wp-01>node_modules\.bin\webpack
Hash: 8520fa0da4288a95631f
Version: webpack 4.35.2
Time: 400ms
Built at: 2019-11-24 22:29:41
    Asset        Size  Chunks             Chunk Names
bundle.js  1010 bytes       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/main.js 33 bytes {0} [built]
[1] ./src/bar.js 910 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'productio
n' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

*/

module.exports = function () {
    console.log('我是 bar 模块03')
}