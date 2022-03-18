import router from './router'
import Cookies from 'js-cookie'
import store from './store'

// 页面白名单
const whiteRoutes = ['login', 'error', 'exception', 'fault']
// 登录页地址
const loginRouteName = 'login'

router.beforeEach(async(to, from, next) => {
  // 白名单不需要登录
  if (whiteRoutes.includes(to.name)) {
    next()
  } else if (Cookies.get('userToken')) {

    // 登录状态下 无需再次登陆 跳转到默认页
    if (to.name === loginRouteName) {
      next({ path: '/' })
    } else {
      const isGetMenu = store.state.permission.isGetMenu
      if (isGetMenu) {
        if (!to.name || to.path === '/') {
            // 是否在访问动态路由
            next(store.state.permission.defaultPath)
        } else {
          next()
        }
      }else {
        // 获取菜单
        const responseRouters = await store.dispatch('getUserInfo')
        /**
         * 动态生成路由表
         */
        const routes = await store.dispatch('permission/generateRoutes', responseRouters)
        // 注册路由
        routes.forEach(v => {
          router.addRoute(v)
        })
        next({ ...to, replace: true })
      }
    }
  } else {
    next({ name: loginRouteName })
  }
})
