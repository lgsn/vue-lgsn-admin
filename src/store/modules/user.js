import Cookie from 'js-cookie'

const state = {
  userInfo: {}
}

const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  userInfo(state, data) {
    state.userInfo = data
  }
}

const actions = {
  // 获取用户信息
  async getUserInfo({ commit }) {
    return new Promise((resolve) => {
      commit('userInfo', {
        'userId': 'admin',
        'userName': 'admin'
      })

      const asyncRouters = [
        {
          name: 'dashboard',
          path: '/dashboard',
          component: '/dashboard/index',
          layout: true,
          meta: { title: '首页', 'icon': 'icon-shezhi' },
        },
        {
          'name': 'setting',
          'path': '/setting',
          component: '/menu/index',
          meta: { title: '系统设置', 'icon': 'icon-shezhi' },
          children: [
            {
              'name': 'menu',
              'path': '/menu',
              component: '/menu/index',
              meta: { title: '菜单管理', 'icon': 'icon-kuaijiecaidan' }
            },
          ]
        },
        {
          'name': 'business',
          'path': '/business',
          component: '/business/index',
          meta: { title: '业务模版', 'icon': 'icon-tongjifenxi' },
        },
        {
          'name': 'link',
          'path': '/link',
          component: '/menu/index',
          meta: { title: '外链菜单', 'icon': 'icon-tongjifenxi' },
        },
        {
          'name': 'components',
          'path': '/components',
          component: '/menu/index',
          meta: {
            title: '组件', 'icon': 'icon-tongjifenxi',
          },
          children: [
            {
              'name': 'avatar', 'path': '/avatar', component: '/menu/index', meta: { title: '头像' }
            },
            {
              'name': 'Icon', 'path': '/icon', component: '/menu/index', meta: { title: '图标', 'icon': '' }
            },
            {
              'name': 'editButton', 'path': '/editButton', component: '/menu/index', meta: { title: '操作按钮' }
            },
            {
              'name': 'pagination', 'path': '/pagination', component: '/menu/index', meta: { title: '分页', 'icon': '' }
            },
            {
              'name': 'upload', 'path': '/upload', component: '/menu/index', meta: { title: '上传', 'icon': '' }
            },
          ]
        },
        {
          'name': 'copy',
          'path': '/copy',
          component: '/menu/index',
          meta: { title: '复制', 'icon': 'icon-tongjifenxi' },
        },
        {
          'name': 'permission',
          'path': '/permission',
          component: '/menu/index',
          meta: { title: '指令权限', 'icon': 'icon-tongjifenxi' },
        },
      ]
      resolve(asyncRouters)
    })
  },

  // 退出登录
  clearTokenCookie() {
    return new Promise(resolve => {
      Cookie.set('userToken', '')
      resolve()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
