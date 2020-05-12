<template>
  <div class="pagination">
    <el-pagination
      layout="sizes, prev, pager, next"
      :background=true
      :current-page="page.currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="page.pageSize"
      :hide-on-single-page=true
      :total="page.total"
      @size-change="sizeChange"
      @current-change="pageChange"></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  props: {
    paginationParams: {}
  },
  computed: {
    page() {
      return this.paginationParams
    }
  },
  methods: {
    sizeChange(val) {
      let params = {
        page: this.page.currentPage,
        pageSize: val
      }
      this.$emit('init-data', params)
    },
    pageChange(val) {
      let params = {
        page: val,
        pageSize: this.page.pageSize
      }
      this.$emit('init-data', params)
    }
  }
}
</script>

<style scoped lang="scss">
  .pagination {
    position: relative;
    width: 100%;
    margin-top: 20px;
    text-align: right;
  }
</style>
