import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/login'

Vue.use(VueRouter);

const routes = [
  {
    path:'/login',
    name:'login',
    component:Login
  }
];

const router = new VueRouter({
  // mode: "history",//history 无 /#/
  base: process.env.BASE_URL,
  routes
});

export default router;
