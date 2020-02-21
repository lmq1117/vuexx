import router from '@/router'
import {getUserInfo} from "@/api/login"

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('mms-token')
  if (!token) {
    //未从localstorage中拿到token 则跳转至登录页
    if (to.path !== '/login') {
      next({path: '/login'})
    } else {
      next()
    }
  } else {
    //拿到token了
    if (to.path === '/login') {
      next()
    } else {
      //请求非登录页 看是否有用户信息
      const userInfo = localStorage.getItem('mms-user')
      if (userInfo) {
        next()
      } else {
        //请求接口获取用户信息
        getUserInfo(token).then(response => {
          const resp = response.data
          if (resp.code != '200') {
            next({path: '/login'})
          } else {
            localStorage.setItem('mms-user', JSON.stringify(resp.data.userInfo))
            next()
          }
        })
      }
    }
  }
})
