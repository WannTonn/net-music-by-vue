/*
 * @Author: WannTonn
 * @Date: 2021-05-23 11:23:59
 * @LastEditTime: 2021-05-23 20:22:54
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/store/modules/search.ts
 */

import Vue from "vue";

const menu = {
  state: {
    searchParams: []
  },
  mutations: {
    // 触发搜索事件
    SET_SEARCH_PARAMS: (state: any, searchParams: object) => {
      state.searchParams = JSON.parse(JSON.stringify(searchParams));
    }
  },
  actions: {
    // 触发搜索
    setSearchParams({commit}: any, data: any) {
      commit('SET_SEARCH_PARAMS', data)
    }
  }
};
export default menu;
