## 5 项目环境搭建

### 5.1 基于Vue-CLI 3.x 创建项目

Vue CLI 环境要求： nodejs 8.9+ 推荐8.11.0+

#### 5.1.1 Vue CLI安装

1 全局安装 Vue CLI

```shell
npm install -g @vue/cli
```

2 安装成功后 在命令行可以使用vue命令 比如查看版本

```shell
vue -v
```

- vue 不是内部或外部命令解决办法

- 解决方法 配置环境变量

  1. 查看 全局安装目录

     ```shell
     npm root -g
     ```

     ![image-20200213230151098](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200213230151098.png)

  2. 将全局安装目录的父目录加入环境变量 
  
     D:\app\npm 该目录下有 vue.cmd

#### 5.1.2 Vue CLI 创建项目

创建项目命令

```shell
vue create mms
```

创建过程

1. 手动配置
2. babel router css 预处理 语法检查

![image-20200214091637682](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214091637682.png)



![image-20200214091724502](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214091724502.png)

![image-20200214091749174](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214091749174.png)

![image-20200214091820679](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214091820679.png)

![image-20200214091848727](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214091848727.png)

![image-20200214091911225](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214091911225.png)

![image-20200214091930561](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214091930561.png)

![image-20200214091957376](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214091957376.png)

![image-20200214092014583](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214092014583.png)



### 5.2 初始化项目

#### 5.2.1 更改标题

#### 5.2.2 更改ico

#### 5.2.3 配置vue.config.js

mms根目录下创建vue.config.js 配置如下

```javascript
module.exports = {
    devServer:{
      port:8888,//端口，若被占用则自动+1
      host:"localhost",
      https:false,
      open:true,//启动时自动打开浏览器访问
    },
    
    lintOnSave:false,//关闭格式检查
    productionSourceMap:false,//打包时不生成.map文件，加快打包速度
}
```



#### 5.2.4 整合第三方库

1. 安装axios处理异步请求

   ```shell
   npm i -S axios
   ```

   

2. 安装pubsub-js 实现非父子组件间通信

   ```shell
   npm i -S pubsub-js
   ```

3. 查看package.json中是否有对应依赖

### 5.3 整合ElementUI

#### 5.3.1 ElementUI简介

#### 5.3.2 ElementUI安装

```shell
npm i -S element-ui
```

5.3.3 完整引入ElementUI

在mms\src\main.js 中 引入 element-ui 和 element-ui/lib/theme-chalk/index.css

使用Vue.use(ElementUI);

```javascript
import Vue from "vue";
import ElementUI from 'element-ui';//组件库
import 'element-ui/lib/theme-chalk/index.css'//样式
import App from "./App.vue";
import router from "./router";

//使用ElementUI
Vue.use(ElementUI);

//false 开发环境 更多警告来方便调试代码
//true 生产环境 警告没有用 反而增加应用体积???
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
```

#### 5.3.4 ElementUI 插件安装

安装如下两个插件

1. ==Element UI Snipptes==
2. ==HTML CSS Support==

## 第六章 Axios封装 和 跨域

6.1 封装Axios对象

1. 在src目录下创建 utils\request.js

### 6.5 解决开发环境跨域问题

1. 在vue.config.js中使用devServer.proxy选项进行代理设置

   ```javascript
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
   ```

   

2. test.js

   ```javascript
   import request from "@/utils/request"
   
   request({
       method: "get",
       url: '/api/members'//要匹配 vue.config.js 中 proxy
   }).then(response => {
       console.log('get', response.data)
   })
   ```

   

3. utils/request.js

   ```javascript
   import axios from 'axios'
   
   const request = axios.create({
       baseURL:'http://localhost:8888',//相同域地址，会根据vue.config.js devServer.proxy配置规则使用代理
       timeout:5000
   })
   
   export default request
   ```

   

4. HelloWorld.vue中引入 test.js

   ```javascript
   <script>
   //引入test.js
   import testApi from "@/api/test"
   export default {
     name: "HelloWorld",
     props: {
       msg: String
     }
   };
   </script>
   ```

   

5. 测试

   重启项目 防止不生效

   查看console，已获取golang后端返回数据

   ![image-20200214192933675](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214192933675.png)

### 6.7 配置不同环境 常量值

1. 在mms根目录下创建 .env.development 和 .env.production 文件 并安装插件 ==DotENV==

2. .env.development

   ```javascript
   #使用 VUE_APP_ 开头的变量会被webpack自动加载
   
   #定义请求的基础URL 方便跨域请求时使用
   VUE_APP_BASE_API='/api'
   
   #接口服务地址
   VUE_APP_SERVICE_URL='http://localhost:8000'
   ```

   

3. .env.production

   ```javascript
   #使用 VUE_APP_ 开头的变量会被webpack自动加载
   
   #定义请求的基础URL 方便跨域请求时使用
   VUE_APP_BASE_API='/pro_api'
   ```

   

4. 测试 在main.js中添加以下代码，看浏览器控制台是否会输出

   ```javascript
   console.log(process.env.VUE_APP_BASE_API,'####',process.env.VUE_APP_SERVICE_URL)
   ```

   ![image-20200214203142087](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214203142087.png)

### 6.8 重构代理配置

1. 在vue.config.js的 devServer.proxy 代理配置 


- ==process.env.VUE_APP_BASE_API==
- ==process.env.VUE_APP_SERVICE_URL==

```javascript
module.exports = {
    devServer: {
        port: 8888,
        host: "localhost",
        https: false,
        open: true,
        //匹配api开头的请求
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                //目标服务器，代理访问到 http://localhost:8001 golang后端端口
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true,//开启代理
                pathRewrite: {
                    ['^'+process.env.VUE_APP_BASE_API]: '/api/v1',
                }

            }
        }
    },

    lintOnSave: false,//关闭格式检查
    productionSourceMap: false//打包时不生成.map文件 加快打包速度
}
```

2. 修改 utils/request.js 中 baseURL

   ```javascript
   import axios from 'axios'
   
   const request = axios.create({
       // baseURL:'http://localhost:8888',//相同域地址，会根据vue.config.js devServer.proxy配置规则使用代理
       // baseURL:'/',
       //以下修改需要同时修改test.js中 url
       // baseURL:'/api',
       baseURL:process.env.VUE_APP_BASE_API,
       timeout:5000
   })
   
   export default request
   ```

   

3. 根据2中注释修改 api/test.js  url

   ```javascript
   import request from "@/utils/request"
   
   request({
       method: "get",
       url: '/members'//要匹配 vue.config.js 中 proxy
   }).then(response => {
       console.log('get', response.data)
   })
   ```

   

4. 重启项目 查看console

   ![image-20200214204148525](C:\Users\kevin\AppData\Roaming\Typora\typora-user-images\image-20200214204148525.png)

## 第七章 系统登录管理

### 7.1 需求分析

开发登录页面，当输入账号 密码 验证通过后，允许进行到首页。

### 7.2 路由配置

1. 在src/views/login目录下新建index.vue
2. 在src/router/index.js中配置路由 （把原有的路由删除） 如下

第八章 项目布局、权限、退出

8.1 需求分析

上、下（左右）布局，分别为 头部 左侧导航 右侧主区域

8.2 路由配置



