/*
 * @Author: WannTonn
 * @Date: 2021-05-22 15:26:55
 * @LastEditTime: 2021-05-22 17:15:02
 * @LastEditors: WannTonn
 * @Description:
 * @FilePath: /queryInput/src/store/modules/menu.ts
 */
import Vue from "vue";
import { asyncRouteMaps } from "@/router/";

const menu = {
  state: {
    menuList: []
  },
  mutations: {
    SET_MENU_LIST: (state: any) => {
      state.menuList = asyncRouteMaps;
    }
  },
  actions: {}
};
export default menu;
