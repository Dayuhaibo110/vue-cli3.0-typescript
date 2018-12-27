<template>
  <div class="pagination">
    <el-pagination
      @size-change="paginationSizeChange"
      @current-change="paginationPageChange"
      :current-page="page"
      :page-sizes="duration"
      :page-size="size"
      :layout='layout'
      :total='total'>
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props:{
    page: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    duration: {
      type: Array,
      default: () => {
        return [10, 20, 50, 100, 200, 400, 800]
      }
    },
    paginationSizeChange: {
      type: Function,
      default: () => {
        // 条数的修改
      },
    },
    paginationPageChange: {
      type: Function,
      default: () => {
        // 页数的修改
      },
    },
  }
})
export default class Pagination extends Vue {
}
</script>

<style scoped lang="scss">

</style>
