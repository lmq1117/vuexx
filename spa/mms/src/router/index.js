import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/login'
import Layout from '../components/Layout.vue'

import Home from '@/views/home'
import Goods from '../views/goods'
import Supplier from '../views/supplier'
import Staff from '../views/staff'
import Member from '../views/member'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  //方式1 所有 /home /goods /members /staff /supplier 作为 / 的子路由， 子路由过于庞大 不采用
  // {
  //   path: '/',
  //   name: 'layout',
  //   component: Layout,
  //   redirect:'/home',
  //   children:[
  //     {
  //       path:'/home',
  //       component:Home
  //     },
  //     {
  //       path:'/goods',
  //       component:Goods
  //     }
  //   ]
  // }

  // 方式2 /home/ 作为 /home 子路由，/goods/ 作为 /goods 子路由
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  },
  {
    path:'/member',
    component:Layout,
    children:[
      {
        path:'/', // /member/
        component:Member,
        meta:{title:'会员管理'}
      }
    ]
  },
  {
    path:'/supplier',
    component:Layout,
    children:[
      {
        path:'/', // /member/
        component:Supplier,
        meta:{title:'供应商管理'}
      }
    ]
  },
  {
    path:'/goods',
    component:Layout,
    children:[
      {
        path:'/', // /member/
        component:Goods,
        meta:{title:'商品管理'}
      }
    ]
  },
  {
    path:'/staff',
    component:Layout,
    children:[
      {
        path:'/', // /member/
        component:Staff,
        meta:{title:'员工管理'}
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history",//history 无 /#/
  base: process.env.BASE_URL,
  routes
});

export default router;
