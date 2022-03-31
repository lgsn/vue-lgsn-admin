/**
 * @Description:
 * @author Chen Jing
 * @date 3:54 下午
 * 路由工具函数
 */

/**
 * 将菜单数据 转换为路由格式 进行注册
 */

export function routerFormat(asyncRouter, parent = {}, defaultPath) {
  let path = defaultPath || '/401'
  if (!asyncRouter || !asyncRouter.length) return []
  const routes = asyncRouter.map(route => {

    let children = []
    if (route.children && route.children.length) {
      const routeObj = routerFormat(route.children, route, path)
      children = routeObj.routes
      path = routeObj.defaultPath
    }

    route.meta = route.meta || {}
    route.meta.onAccess = parent.onAccess || route.onAccess

    if (path === '/401' && !route.meta.onAccess) {
      path = route.path
    }

    return {
      ...route,
      path: `${route.path}`,
      name: route.name,
      component: route.component && route.component !== 'layout' ? () => import(`@/views/${route.component}.vue`) : () => import('@/layouts/BasicLayout'),
      meta: {
        ...route.meta,
        activeMenu: route.activeMenu || '',
        icon: route.meta.icon || '',
        title: route.meta.title || ''
      },
      children
    }
  })
  return {
    routes,
    defaultPath: path
  }
}
