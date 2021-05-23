<!--
 * @Author: WannTonn
 * @Date: 2021-05-23 10:03:38
 * @LastEditTime: 2021-05-23 22:41:58
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/components/ListContainer/index.vue
-->

<template>
  <div class="list-container">
    <div>
      <customRender></customRender>
      <search-bar
        :filterData="customFilterData"
        @query="handleQuery"
        :queryForm="queryForm"
      />
    </div>
    <div>
      <el-table
        v-if="columns.length"
        :data="dataSource"
        v-loading="loading"
        border
        style="width: 100%"
      >
        <el-table-column
          v-for="(item, index) in columns"
          header-align="center"
          align="center"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        >
          <template slot-scope="scope">
            <customRender
              v-if="item.render"
              :render="item.render"
              :row="scope.row"
              :index="scope.$index"
              :column="item"
            ></customRender>
            <span v-else>{{ scope.row[item.prop] || "-" }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
let customRender: any = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h: Function, data: any) => {
    if (data) {
      const params: any = {
        row: data.props.row,
        index: data.props.index
      };
      if (data.props.column) {
        params.column = data.props.column;
      }
      return data.props && data.props.render && data.props.render(h, params);
    }
  }
};
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import searchBar from "@/components/SearchBar/index.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    searchBar,
    customRender
  },
  computed: {
    ...mapGetters(["searchParams"])
  }
})
export default class listContainer extends Vue {
  searchParams: any;
  searchBarFilters: any;
  queryForm: object = {};
  // table数据源
  @Prop({})
  dataSource!: object[];
  // 自定义搜索条件
  @Prop({
    type: Object
  })
  customFilterData!: object;
  // table 查询loading遮罩状态
  @Prop()
  loading!: boolean;
  // table表头
  @Prop()
  columns!: object[];

  beforeMount() {
    // 获取与转换路由上的参数
    this.defaultRouterQuery();
    // 触发执行搜索
    this.handleSearchData();
  }
  /**
   *
   * @param data
   * 设置默认路由参数
   */
  defaultRouterQuery() {
    this.getRouteSearchParams();
  }

  /*
   * 获取路由参数
   */
  getRouteSearchParams(query?: any) {
    let url: any = window.decodeURIComponent(this.getURLParams());
    let params: any = {};
    if (url) {
      // 正则判断是否是base64
      let patt: any = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
      if (!patt.test(url)) {
        return "";
      }
      params = JSON.parse((this as any).Base64.decode(url));
    }
    this.$store.dispatch("setSearchParams", params);
    this.queryForm = params;
  }
  /*
   * 获取路由query上的q
   */
  getURLParams() {
    let q: any = this.$route.query ? this.$route.query.q : false;
    if (q) {
      let str = q.replace(/\"/g, "");
      return str;
    }
    return "";
  }
  /*
   * 触发执行搜索
   */
  handleSearchData() {
    this.$emit("query", this.searchParams);
  }

  /*
   * 回车操作
   */
  handleQuery(val: any) {
    this.setRouteQuery(val);
    this.handleSearchData();
  }

  /*
   * 将路由转换成Base64 并赋值到路由URL
   */
  setRouteQuery(data: any) {
    let searchBase64 = (this as any).Base64.encode(JSON.stringify(data));
    this.$store.dispatch("setSearchParams", data);

    this.$router
      .push({
        query: data && Object.keys(data).length ? { q: searchBase64 } : {}
      })
      .catch((error: any) => error);
  }
}
</script>

<style lang="less" scoped></style>
