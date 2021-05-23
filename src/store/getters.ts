/*
 * @Author: WannTonn
 * @Date: 2021-05-22 15:23:45
 * @LastEditTime: 2021-05-22 15:23:45
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/store/getters.ts
 */
const getter: any = {
    menuList: (state: any) => state.menu.menuList,
    searchParams: (state: any) => state.search.searchParams,
}
export default getter;