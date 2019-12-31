import router from './router'
import { getUserInfo } from './api/login'

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('mms-token')
    if (!token) {
        //无token
        //不允许访问其他路由 回到登录页
        if (to.path !== '/login') {
            next({ path: '/login' })
        } else {
            next()
        }

    } else {
        //有token
        if (to.path === '/login') {
            next()
        } else {
            //看下是否有用户信息
            const userInfo = localStorage.getItem('mms-user')
            if (userInfo) {
                next()
            } else {
                //通过token 获取用户信息
                getUserInfo(token).then(response => {
                    const respUser = response.data
                    if (respUser.code == "0000") {
                        localStorage.setItem("mms-user", JSON.stringify(respUser.data))
                        next()
                    } else {
                        next({path:'/login'})
                    }
                })
            }

        }

    }
})