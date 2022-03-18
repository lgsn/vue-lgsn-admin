/**
 * @Description:
 * @author Chen Jing
 * @date 3:54 下午
 * 路由工具函数
*/

const routeView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

/**
 * 将菜单数据 转换为路由格式 进行注册
 */

export function routerFormat(asyncRouter) {
  if (!asyncRouter || !asyncRouter.length) return []
  return asyncRouter.map(route => {

    let children = route.children && route.children.length ? routerFormat(route.children) : []

    return {
      ...route,
      path: `${route.path}`,
      name: route.name,
      component: route.component ? () => import(`@/views${route.component}.vue`) : routeView,
      meta: {
        ...route.meta,
        activeMenu: route.activeMenu || '',
        onAccess: route.onAccess || false,
        icon: route.meta.icon || '',
        title: route.meta.title || ''
      },
      children
    }
  })
}
