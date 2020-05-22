import Cookies from 'js-cookie'

export function setToken(token) {
  Cookies.set('token', token, {
    expires: new Date(Date.now() + 3 * 60 * 60 * 1000)  // 设置过期时间3h
  })
}

export function getToken() {
  return Cookies.get('token')
}