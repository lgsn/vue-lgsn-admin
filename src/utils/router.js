/**
 * @Description:
 * @author Chen Jing
 * @date 3:54 下午
 * 路由工具函数
*/
const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

/**
 * 将菜单数据 转换为路由格式 进行注册
 */
export function routerFormat(asyncRouter) {
  if (!asyncRouter || !asyncRouter.length) return []
  return asyncRouter.filter(v => v.component).map(route => {

    let children = route.children || []

    return {
      path: `${route.path}`,
      name: route.name,
      component: route.component === 'layout' ? RouteView :  () => import(`@/views${route.component}.vue`),
      meta: {
        ...route.meta
      },
      children: children.length ? routerFormat(children, route) : []
    }
  })
}
