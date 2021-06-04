/*
 * @Author: WannTonn
 * @Date: 2021-05-22 16:08:24
 * @LastEditTime: 2021-06-03 16:10:12
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: /queryInput/src/router/modules/intro/intro_list.ts
 */
const Container = () =>
  import(/* webpackChunkName: "container" */ "@/components/Layout/index.vue");
const IntroIndex = () =>
  import(/* webpackChunkName: "intro" */ "@/views/Intro/index.vue");
const Clipper = () =>
  import(/* webpackChunkName: "clipper" */ "@/views/Upload/index.vue");
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
      meta: { title: "音乐信息获取", icon: "el-icon-guide", groupName: "分组1" }
    }
  ]
};
