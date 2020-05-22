import axios from 'axios'
import store from '@/store'
import {Message} from 'element-ui'
import { getToken} from '@/utils/cookie'

const request = axios.create({
  baseURL: 'http://192.168.120.227:3000',
  timeout: 6000,
})

request.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    } else {
      
    }
    return config

  },
  err => {
    Promise.reject(err)
  }
)

request.interceptors.response.use(
  async response => {
    const {data} = response
    const msg = data.msg || data.message
    if (data.code === 20000) {
      store.commit('SET_LOGINDIALOG', false)
      if (msg) {
        Message({
          message: msg,
          type: 'success'
        })
      }
      return Promise.resolve(data)
    } else {
      //token error with code 500**
      //50011 用户在其他地方登陆   50012 token timeout   50013 token error  50014 without token
      if (data.code === 50011 || data.code === 50012 || data.code === 50013 || data.code === 50014) {
        store.commit('SET_LOGINDIALOG', true)
      }
      Message({
        message: msg,
        type: 'error'
      })
      return Promise.reject(data)
    }
  },
  async error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default request