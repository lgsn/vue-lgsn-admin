<template>
  <GBusiness
    :tableColumn="tableColumn"
    :tableData="tableData"
  >

    <template slot="filter">
      <el-form inline>
        <el-form-item>
          <el-input placeholder="输入筛选条件搜索" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-form-item>
      </el-form>
    </template>

    <template slot="edit">
      <el-button type="primary" @click="lockDetail">详情</el-button>
    </template>

  </GBusiness>
</template>

<script>
  import GBusiness from '@/components/GBusiness'
  export default {
    name: 'index',
    components: {
      GBusiness
    },
    data() {
      return {
        tableColumn: [
          { label: '操作', prop: 'edit', slotTemplate: 'edit' }
        ],
        tableData: [1]
      }
    },
    methods: {
      lockDetail() {
        this.$router.push('details')
      }
    }
  };
</script>

<style lang="scss">

</style>
