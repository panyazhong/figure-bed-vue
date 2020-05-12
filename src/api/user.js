import request from "@/utils/request"

/**
 * 用户登录
 */
export function userLoginApi(params) {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data: params
  })
}

/**
 * 获取用户信息
 */
export function getUserInfoApi() {
  return request({
    url: '/api/user/getUserInfo',
    method: 'GET'
  })
}