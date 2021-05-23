/*
 * @Author: WannTonn
 * @Date: 2021-05-22 22:50:36
 * @LastEditTime: 2021-05-23 09:32:49
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/api/musicLIst/index.ts
 */
import request from "@/utils/request"

const api: any = {
  list: '/api/search/get/web'
}

export function getMusicList(params: object) {
  return request({
    url: api.list,
    method: 'get',
    params
  })
}