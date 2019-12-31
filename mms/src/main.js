import Vue from "vue";

import ElementUI from "element-ui";//组件库
import 'element-ui/lib/theme-chalk/index.css';//样式

import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI);

//权限拦截
import './permission'

//消息提示与环境配置false 开发，true 生产
Vue.config.productionTip = process.env.NODE_ENV === 'production';


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

// console.log(process.env.VUE_APP_BASE_API)