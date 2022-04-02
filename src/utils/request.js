import axios from 'axios'
import { Message } from 'element-ui'
import Router from '../router'
import store from '@/store'
import Cookies from 'js-cookie'

// 公用前缀
const baseURL = '/'

axios.interceptors.response.use(response => {
  return response
}, () => {
  return Promise.reject()
})

// 响应拦截器
function checkResponse(response) {
  // 校验HTTP 状态
  if (response && ([200, 304, 400].includes(Number(response.status)))) {
    const code = response.data.code
    if (code === 0) {
      return response.data
    } else if (code === 401) {
      Message.error('登录失效, 请重新登录')
      store.dispatch('clearTokenCookie').then(() => {
        Router.replace({ path: '/login' })
      })
      return Promise.reject(response.data)
    } else if (response.data instanceof Blob || Array.isArray(response.data)) {
      return response
    } else {
      Message.error(response.data.msg)
      return Promise.reject(response.data)
    }
    // 校验业务CODE
  } else {
    Message.error('服务睡着了啦，快去叫醒它吧。')
    return Promise.reject()
  }
}

const http = (method, url, data, header, config) => {
  const request = {
    url,
    baseURL,
    headers: {
      token: Cookies.get('token') || '',
      ...header
    },
    timeout: 60000
  }
  return axios({
    ...request,
    method: method,
    data: method === 'post' ? data : {},
    params: method === 'get' ? data : {},
    ...config
  }).then(response => (checkResponse(response))).catch(res => {
    if (res === undefined) {
      Router.push('fault')
      throw new Error('服务器错误')
    } else {
      return Promise.reject(res)
    }
  })
}

export default http
