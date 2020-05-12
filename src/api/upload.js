import request from "@/utils/request"
/**
 * 文件上传
 */
export function uploadFile(params) {
  return request({
    url: '/api/pic/upload',
    method: "POST",
    data: params
  })
}
