/*
 * @Author: WannTonn
 * @Date: 2021-05-22 09:10:53
 * @LastEditTime: 2021-05-23 16:17:34
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/store/index.ts
 */
import Vue from "vue";
import Vuex from "vuex";
import menu from "@/store/modules/menu";
import search from "@/store/modules/search";
import getters from "@/store/getters";
import {} from 'vue-router';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    search
  },
  getters
});
