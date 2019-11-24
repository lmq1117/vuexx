//模块化的js代码 浏览器不识别 需要打包
//node_modules\.bin\webpack .\js\main.js -o .\js\bundle.js
//打包需要安装 webpack && webpack-cli
//本地安装
// D:\vue\vuexx\mxg-wp-01>npm install --save-dev webpack@v4.35.2
// D:\vue\vuexx\mxg-wp-01>npm install --save-dev webpack-cli

//查看版本
// D:\vue\vuexx\mxg-wp-01>node_modules\.bin\webpack -v
// D:\vue\vuexx\mxg-wp-01>node_modules\.bin\webpack-cli -v


/*
D:\vue\vuexx\mxg-wp-01>npm install --save-dev webpack@v4.35.2
npm WARN deprecated fsevents@1.2.9: One of your dependencies needs to upgrade to fsevents v2: 1) Proper nodejs v10+ support 2) No more fetching binaries from AWS, smaller package size
npm WARN saveError ENOENT: no such file or directory, open 'D:\vue\vuexx\mxg-wp-01\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
    npm WARN enoent ENOENT: no such file or directory, open 'D:\vue\vuexx\mxg-wp-01\package.json'
npm WARN mxg-wp-01 No description
npm WARN mxg-wp-01 No repository field.
    npm WARN mxg-wp-01 No README data
npm WARN mxg-wp-01 No license field.
    npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ webpack@4.35.2
added 323 packages from 198 contributors in 42.555s

D:\vue\vuexx\mxg-wp-01>npm install --save-dev webpack-cli
npm WARN saveError ENOENT: no such file or directory, open 'D:\vue\vuexx\mxg-wp-01\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'D:\vue\vuexx\mxg-wp-01\package.json'
npm WARN mxg-wp-01 No description
npm WARN mxg-wp-01 No repository field.
    npm WARN mxg-wp-01 No README data
npm WARN mxg-wp-01 No license field.
    npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ webpack-cli@3.3.10
added 64 packages from 30 contributors in 15.811s

D:\vue\vuexx\mxg-wp-01>node_modules\.bin\webpack -v
4.35.2

D:\vue\vuexx\mxg-wp-01>node_modules\.bin\webpack-cli -v
3.3.10
*/

var bar = require('./bar')

bar()