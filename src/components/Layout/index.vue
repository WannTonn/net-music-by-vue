<!--
 * @Author: WannTonn
 * @Date: 2021-05-22 15:06:15
 * @LastEditTime: 2021-05-23 22:21:57
 * @LastEditors: WannTonn
 * @Description: 容器组件
 * @FilePath: /queryInput/src/components/Layout/index.vue
-->
<template>
  <div v-pagetitle="$route.meta.title">
    <el-row :gutter="24" style="margin-right: 0">
      <el-col :span="4" style="padding: 0 5px">
        <!-- 侧边菜单栏 -->
        <side-menu />
      </el-col>
      <el-col :span="20" style="padding: 0 5px">
        <div style="height: 100vh;overflow: auto">
          <!-- 内容部分 -->
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import sideMenu from "@/components/SideMenu/index.vue";
@Component({
  components: {
    sideMenu
  }
})
export default class Container extends Vue {}
</script>

<style lang="less" scoped></style>
