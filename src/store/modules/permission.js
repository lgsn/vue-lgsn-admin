/**
 * @Description:
 * @author Chen Jing
 * @date 6:09 下午
 * 路由表
 */
import { routerFormat } from '@/utils/router'

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
    setRoutes: (state, routes) => {
      const defaultPage = routes && routes.length ? routes[0] : {}
      state.defaultPath = defaultPage.children.length ? defaultPage.children[0].path : defaultPage.path
      state.routes = routes
    },
    setRouteRightsMap: (state, routes) => {
      state.routeRightsMap = routes
    },
    setIsGetMenu: (state, flag) => {
      state.isGetMenu = flag
    }
  },
  actions: {
    // 菜单数据 处理为router格式
    generateRoutes({ commit }, data) {
      return new Promise(resolve => {

        // 转换路由数据格式
        const routes = routerFormat(data)
        commit('setRoutes', routes)
        commit('setIsGetMenu', true)
        resolve(routes)
      })
    }
  }
}
