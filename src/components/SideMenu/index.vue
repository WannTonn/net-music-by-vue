<!--
 * @Author: WannTonn
 * @Date: 2021-05-22 17:26:16
 * @LastEditTime: 2021-05-23 22:11:15
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/components/SideMenu/index.vue
-->
<template>
  <div class="side-wrapper">
    <div class="avatar-wrapper">
      <img
        width="60"
        height="60"
        style="border-radius: 50%; margin-top: 5px"
        ref="avatar"
        :src="imgSrc"
        v-on:error="handleImgError"
        alt="头像"
      />
      <div>WannTonn</div>
    </div>
    <el-menu mode="vertical" style="height: calc(100vh - 100px); border-right: 0 none;" :default-active="defaultActive" router>
      <el-menu-item index="Home" :route="{ name: 'Home' }">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <template v-for="item in menuList">
        <template v-if="item.children">
          <el-submenu :key="item">
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{ item.meta.title }}</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <i :class="item.children[0]['meta']['icon'] || ''"></i>
              </template>
              <el-menu-item
                v-for="i in item.children"
                :key="i"
                :index="i.name"
                :route="{ name: i.name }"
              >
                {{ i.meta.title }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
        <template v-else> </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
@Component({
  computed: {
    ...mapGetters({
      menuList: "menuList"
    })
  }
})
export default class SideMenu extends Vue {
  menuList: any;
  defaultActive: any = '';
  imgSrc: String =
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
  splitImg: any = require("@/assets/pictureSplit.svg"); // 当图片丢失的时候显示图片丢失的图
  mounted() {
    this.defaultActive = this.$route.name;
    // 在页面渲染后 将图片替换成无法读取的图片，测试onerror
    setTimeout(() => {
      this.imgSrc =
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c2594117123jpeg.jpeg";
    }, 5000);
  }
  handleImgError() {
    (this as any).$refs.avatar.src = this.splitImg;
  }
}
</script>

<style lang="less" scoped>
.side-wrapper {
  width: 100%;
  border-right: 1px solid #e6e6e6;
.avatar-wrapper {
    width: 100%;
    height: 100px;
    text-align: center;
  }
}
</style>
