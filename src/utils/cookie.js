import Cookie from 'js-cookie'

export function setCookie(name, val, ops) {
  Cookie.set(name, val, ops)
}

export function getCookie(name) {
  return Cookie.get(name)
}