import request from '@/utils/request'

export function getFindListAPI(params) {
  return request({
    url: 'api/pic/getPicList',
    method: 'GET',
    params: params
  })
}

export function report(params) {
  return request({
    url: 'api/pic/report',
    method: 'post',
    data: params
  })
}