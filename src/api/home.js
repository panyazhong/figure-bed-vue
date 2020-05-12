import request from "@/utils/request"

/**
 * 获取图片类型列表
 */
export function getPicTypes() {
  return request({
    url: '/api/pic_types/getPicTypeList',
    method: 'GET'
  })
}