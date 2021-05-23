/*
 * @Author: WannTonn
 * @Date: 2021-05-22 22:41:30
 * @LastEditTime: 2021-05-23 20:45:27
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/utils/request.ts
 */
import Vue from 'vue';
import axios from 'axios';

const service = axios.create({
  baseURL: "/api",
  timeout: 60000
})

// request拦截器
service.interceptors.request.use((config: any) => {
  return config
}, (error: any) => {
  const res: any = error.response;
  if (res) {
    // 这里填写报错拦截器的返回
  }
  return Promise.reject(error);
});

// response 拦截器
service.interceptors.response.use((response: any) => {
  let obj = response.data;

  return obj;
}, (error: any) => {
  if (error.reponse === undefined) {
    Vue.prototype.$message.error("接口返回错误,请稍后再试", 3000)
  }
  switch(error.respones) {
    
  }

})

export default service;