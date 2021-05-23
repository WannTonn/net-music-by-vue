/*
 * @Author: WannTonn
 * @Date: 2021-05-23 22:02:19
 * @LastEditTime: 2021-05-23 22:02:20
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/directive/index.ts
 */

/* 
* 自定义页面title
*/
export const pagetitle: any = (el: any, title: any = {value: ''}) => {
  document.title = title.value;
}