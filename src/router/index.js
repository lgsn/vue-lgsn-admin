/**
 * @Description:
 * @author Chen Jing
 * @date 17:40 下午
 * 路由配置
*/
import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/pmsPage/404')
    },
    {
      path: '/401',
      name: '401',
      component: () => import('@/views/pmsPage/401')
    },
    {
      path: '/500',
      name: '500',
      component: () => import('@/views/pmsPage/502')
    }
  ]
})
