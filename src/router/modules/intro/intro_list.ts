/*
 * @Author: WannTonn
 * @Date: 2021-05-22 16:08:24
 * @LastEditTime: 2021-05-23 19:26:43
 * @LastEditors: WannTonn
 * @Description:
 * @FilePath: /queryInput/src/router/modules/intro/intro_list.ts
 */
const Container = () =>
  import(/* webpackChunkName: "container" */ "@/components/Layout/index.vue");
const IntroIndex = () =>
  import(/* webpackChunkName: "intro" */ "@/views/Intro/index.vue");
export default {
  path: "/intro",
  redirect: "/intro/index",
  name: "intro",
  component: Container,
  meta: { title: "网易云音乐获取", icon: "el-icon-service" },
  children: [
    {
      path: "index",
      name: "introIndex",
      component: IntroIndex,
      meta: { title: "音乐信息获取", icon: "el-icon-guide" }
    }
  ]
};
