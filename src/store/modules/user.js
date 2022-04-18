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
          name: 'Dashboard',
          path: '/Dashboard',
          children: [
            {
              name: 'dashboard',
              path: '/dashboard',
              component: 'dashboard/index',
              meta: { title: '首页', 'icon': 'icon-shezhi' },
            }
          ]
        },
        {
          'name': 'setting',
          'path': '/setting',
          meta: { title: '系统设置', 'icon': 'icon-shezhi' },
          showRoot: true,
          children: [
            {
              'name': 'menu',
              'path': '/menu',
              component: 'menu/index',
              meta: { title: '菜单管理', 'icon': 'icon-kuaijiecaidan' }
            },
          ]
        }, {
          name: 'Business',
          path: '/Business',
          meta: {
            title: '业务',
            icon: 'icon-shezhi'
          },
          children: [
            {
              'name': 'business',
              'path': '/business',
              component: 'business/index',
              meta: { title: '业务组件', 'icon': 'icon-tongjifenxi' },
            },
            {
              'name': 'viewCard',
              'path': '/viewCard',
              component: 'business/viewCard',
              meta: { title: '业务布局', 'icon': 'icon-tongjifenxi' },
            }
          ]
        },
        {
          'name': 'link',
          'path': 'https://cn.vuejs.org/index.html',
          meta: { title: '外链菜单', 'icon': 'icon-tongjifenxi' },
        },
        {
          'name': 'components',
          'path': '/components',
          meta: {
            title: '组件', 'icon': 'icon-tongjifenxi',
          },
          children: [
            {
              'name': 'avatar', 'path': '/avatar', component: 'avatar/index', meta: { title: '头像' }
            },
            {
              'name': 'Icon', 'path': '/icon', component: 'icon/index', meta: { title: '图标', 'icon': '' }
            },
            {
              'name': 'editButton', 'path': '/editButton', component: 'editBtn/index', meta: { title: '操作按钮' }
            },
            {
              'name': 'pagination', 'path': '/pagination', component: 'business/pagiation', meta: { title: '分页', 'icon': '' }
            },
            {
              'name': 'upload', 'path': '/upload', component: 'upload/index', meta: { title: '上传', 'icon': '' }
            },
          ]
        },
        {
          'name': 'directive',
          'path': '/directive',
          meta: { title: '指令', 'icon': 'icon-tongjifenxi' },
          children: [
            {
              'name': 'copy',
              'path': '/copy',
              component: 'copy/index',
              meta: { title: '复制', 'icon': 'icon-tongjifenxi' },
            },
            {
              'name': 'permission',
              'path': '/permission',
              component: 'rights/index',
              meta: { title: '指令权限', 'icon': 'icon-tongjifenxi' },
            },
          ]
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
