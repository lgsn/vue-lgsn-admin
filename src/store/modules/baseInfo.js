/**
 * 公用信息
 */

export default {
    namespaced: true,
    state: {
        isShowEditorPwd: false, // 是否展示修改密码弹框
        baseInfo: {
            appName: 'vue-lgsn-admin', // 应用名称
            appLogo: 'https://blog.vuejs.org/logo.svg' // 应用图标
        },
        quickAppLinks: [
            { title: '菜单管理', link: '/menu' }
        ]
    },
    mutations: {
        setShowEditPwd(state, data) {
            state.isShowEditorPwd = data
        }
    },
    actions: {
        editPwd({ commit }, data) {
            commit('setShowEditPwd', data)
        }
    }
}
