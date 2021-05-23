<!--
 * @Author: WannTonn
 * @Date: 2021-05-22 16:15:12
 * @LastEditTime: 2021-05-23 22:40:56
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/views/Intro/index.vue
-->
<template>
  <list-container
    :customFilterData="customFilterData"
    :columns="columns"
    :dataSource="dataSource"
    :loading="loading"
    @query="handleQuery"
  ></list-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ListContainer from "@/components/ListContainer/index.vue";
import { getMusicList } from "@/api/musicList/index.ts";

@Component({
  components: {
    ListContainer
  }
})
export default class MusicList extends Vue {
  columns: object[] = [];
  dataSource: object[] = [];
  loading: boolean = false;
  customFilterData: object[] = [
    {
      label: "类型",
      prop: "type",
      placeholder: "请选择查询类型",
      type: "select",
      // required: true,
      dataSource: [
        { label: "请选择", value: undefined },
        { label: "单曲", value: 1 },
        { label: "专辑", value: 10 },
        { label: "歌手", value: 100 },
        { label: "歌单", value: 1000 }
      ]
    },
    {
      label: "关键字",
      prop: "s",
      placeholder: "请输入关键字",
      // required: true,
      type: "input"
    },
    {
      label: "扩展部分",
      render: function(h: Function, row: any) {
        return h(
          "el-button",
          {
            props: {
              type: "text",
              size: "small",
              icon: "el-icon-magic-stick"
            }
          },
          "自定义 render渲染部分"
        );
      }
    }
  ];

  /*
   * 由组件传回请求的条件，用来请求数据 以及展示不同的table 头部
   */
  handleQuery(value: any) {
    let resMap: any = {
      1: "songs",
      10: "albums",
      100: "artists",
      1000: "playlists"
    };
    if (value.type) {
      switch (value.type) {
        case 1:
          this.columns = [
            {
              label: "歌曲名",
              prop: "name"
            },
            {
              label: "歌手",
              prop: "artists",
              render: (h: Function, params: any) => {
                return h(
                  "span",
                  {
                    props: {}
                  },
                  params.row.artists[0]["name"]
                );
              }
            },
            {
              label: "专辑图",
              prop: "artists",
              render: (h: Function, params: any) => {
               return h(
                  "div",
                  {
                    style: {
                      width: "100px",
                      height: "100px"
                    }
                  },
                  [
                    h("img", {
                      style: {
                        width: "100px",
                        height: "100px"
                      },
                      domProps: {
                        src: params.row.artists[0]['img1v1Url']
                      }
                    })
                  ]
                );
              }
            }
          ];
          break;
        case 10:
          this.columns = [
            {
              label: "专辑名",
              prop: "name"
            },
            {
              label: "歌手",
              prop: "artists",
              render: (h: Function, params: any) => {
                return h(
                  "span",
                  {
                    props: {}
                  },
                  params.row.artist["name"]
                );
              }
            }
          ];
          break;
        case 100:
          this.columns = [
            {
              label: "歌手名",
              prop: "name"
            },
            {
              label: "英文名",
              prop: "alia",
              render: (h: Function, params: any) => {
                return h("span", {}, params.row.alia[0]);
              }
            },
            {
              label: "头像",
              prop: "artists",
              render: (h: Function, params: any) => {
                return h(
                  "div",
                  {
                    style: {
                      width: "100px",
                      height: "100px"
                    }
                  },
                  [
                    h("img", {
                      style: {
                        width: "100px",
                        height: "100px"
                      },
                      domProps: {
                        src: params.row.img1v1Url
                      }
                    })
                  ]
                );
              }
            }
          ];
          break;
        case 1000:
          this.columns = [
            {
              label: "专辑名",
              prop: "name"
            },
            {
              label: "专辑图",
              prop: "artists",
              render: (h: Function, params: any) => {
                return h(
                  "div",
                  {
                    style: {
                      width: "100px",
                      height: "100px"
                    }
                  },
                  [
                    h("img", {
                      style: {
                        width: "100px",
                        height: "100px"
                      },
                      domProps: {
                        src: params.row.coverImgUrl
                      }
                    })
                  ]
                );
              }
            }
          ];
          break;
      }
    } else {
      this.columns = [];
    }
    this.loading = true;
    /* 
    * 获取列表数据
    */
    getMusicList(
      Object.assign(
        {
          csrf_token: "hlpretag",
          hlposttag: "",
          offset: 0,
          total: true,
          limit: 20
        },
        value
      )
    )
      .then((res: any) => {
        if (res.code === 200) {
          this.dataSource = res.result[resMap[value.type]];
        } else {
          this.dataSource = [];
          this.$message.error(res.msg);
        }
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>

<style lang="scss" scoped></style>
