/*
 * @Author: WannTonn
 * @Date: 2021-05-22 16:10:35
 * @LastEditTime: 2021-05-22 16:54:58
 * @LastEditors: WannTonn
 * @Description:
 * @FilePath: /queryInput/src/router/modules/intro/index.ts
 */
const files = ["intro_list"];
const routers: any = [];

files.forEach((e: any) => {
  routers.push(require(`@/router/modules/intro/${e}`)["default"]);
});

export default routers;
