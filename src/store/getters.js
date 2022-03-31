/**
 * @Description:
 * @author Chen Jing
 * @date 8:22 下午
 * 统一暴露getters
 */

export default {
  routes: state => state.permission.routes,
  defaultPath: state => state.permission.defaultPath,
  directivePer: state => state.permission.directivePer,
  routeRightsMap: state => state.permission.routeRightsMap,
  baseInfo: state => state.baseInfo.baseInfo
}
