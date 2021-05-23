/*
 * @Author: WannTonn
 * @Date: 2021-05-22 09:10:53
 * @LastEditTime: 2021-05-22 21:44:29
 * @LastEditors: WannTonn
 * @Description:
 * @FilePath: /queryInput/src/router/index.ts
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import intro from "@/router/modules/intro/";
const Layout = () =>
  import(
    /* webpackChunkName: "Layout" */ "@/components/Layout/index.vue"
  );
const Home = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Home/index.vue");
Vue.use(VueRouter);
export const asyncRouteMaps: RouteConfig[] = [...intro];
const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/home",
    name: "index",
    component: Layout,
    meta: { title: "首页", icon: "home", hidden: true }
  },
  {
    path: "/home",
    redirect: "/home/index",
    name: "Home",
    component: Layout,
    meta: { title: "首页", icon: "home", hidden: true },
    children: [
      {
        path: "index",
        name: "index",
        component: Home,
        meta: { title: "首页", icon: "home", hidden: false }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...routes, ...intro]
});

export default router;
