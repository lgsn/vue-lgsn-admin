/**
 * @Description:
 * @author Chen Jing
 * @date 6:09 下午
 * 路由表
 */
import { routerFormat } from '@/utils/router'
import localRoutes from '@/config/config.router'

export default {
  namespaced: true,
  state: {
    // 路由表
    routes: [],
    // 指令权限
    directivePer: new Map(),
    // 默认路由地址
    defaultPath: '',
    // 路由权限表
    routeRightsMap: new Map(),
    isGetMenu: false
  },
  mutations: {
    setRouteRightsMap: (state, routes) => {
      state.routeRightsMap = routes
    },
    setIsGetMenu: (state, data) => {
      state.routes = data.routes
      state.defaultPath = data.defaultPath
      state.isGetMenu = data.flag
    }
  },
  actions: {
    // 菜单数据 处理为router格式
    generateRoutes({ commit }, data) {
      return new Promise(resolve => {

        // 转换路由数据格式
        let { routes, defaultPath } = routerFormat([ ...data, ...localRoutes], {}, '/401')

        // 默认地址

        commit('setIsGetMenu', { routes, defaultPath, flag: true })
        routes = [
          {
            path: '/',
            name: '',
            reject: defaultPath,
          },
          ...routes,
          { path: '*', redirect: '/404' }
        ]

        resolve(routes)
      })
    }
  }
}
