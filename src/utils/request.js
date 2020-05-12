import axios from 'axios'
import {Message} from 'element-ui'
import {getCookie} from '@/utils/cookie'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 6000,
})

request.interceptors.request.use(
  config => {
    const token = getCookie('token')
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
      if (msg) {
        Message(msg, 'success', 3000)
      }
      return Promise.resolve(data)
    } else {
      Message(msg, 'error', 3000)
      return Promise.reject(data)
    }
  },
  async error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default request