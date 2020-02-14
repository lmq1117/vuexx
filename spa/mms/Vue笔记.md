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

5.3.2 ElementUI安装

```shell
npm i -S element-ui
```

5.3.3 完整引入ElementUI

