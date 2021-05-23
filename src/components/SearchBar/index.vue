<!--
 * @Author: WannTonn
 * @Date: 2021-05-22 17:25:56
 * @LastEditTime: 2021-05-23 21:42:54
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/components/SearchBar/index.vue
-->
<template>
  <div class="search-wrapper">
    <el-form ref="form" :model="searchForm" inline>
      <template v-for="(item, index) in filterData">
        <el-form-item
          :label="item.label"
          :prop="item.prop"
          :key="item"
          :required="item.required"
        >
          <!-- 当没有自定义组件的时候 -->
          <template v-if="!item.render">
            <template v-if="item.type === 'input'">
              <el-input
                v-model="searchForm[item.prop]"
                @input="handleQuery"
                :placeholder="item.placeholder"
              />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                v-model="searchForm[item.prop]"
                :placeholder="item.placeholder"
              >
                <el-option
                  v-for="e in item.dataSource"
                  :key="e"
                  :label="e.label"
                  :value="e.value"
                >
                </el-option>
              </el-select>
            </template>
          </template>
          <template v-else>
            <customRender
              :render="item.render"
              :row="item"
              :index="index"
            ></customRender>
          </template>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button
          @click="handleQuery"
          type="primary"
          size="small"
          icon="el-icon-search"
        ></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
let customRender: any = {
  functional: true,
  props: {
    row: {
      type: Object,
      default: null
    },
    render: Function
  },
  render: function(h: Function, row: any) {
    return row && row.props && row.props.render && row.props.render(h, row);
  }
};
import { Vue, Watch, Component, Prop } from "vue-property-decorator";
import { debounce } from "@/utils/utils";
@Component({
  components: {
    customRender
  }
})
export default class SearchBar extends Vue {
  @Prop()
  filterData!: object;
  @Prop({
    default: {}
  })
  queryForm!: object;

  searchForm: any = {};
  mounted() {
    this.handleQuery = debounce(this.handleQuery, 500, false);
  }

  handleQuery() {
    // 触发query事件
    this.$emit("query", { ...this.searchForm });
  }

  @Watch("queryForm", { deep: true, immediate: true })
  handleQueryFormChange(val: any) {
    this.searchForm = val;
  }
}
</script>

<style lang="less" scoped>
.search-wrapper {
  padding-top: 35px;
}
</style>
