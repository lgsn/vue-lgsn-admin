import localRouter from '../../config/localRouter'
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
      resolve(localRouter)
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
