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

console.log(process.env.VUE_APP_BASE_API,'####',process.env.VUE_APP_SERVICE_URL)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
