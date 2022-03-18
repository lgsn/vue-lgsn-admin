<template>
  <GBusiness
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

  </GBusiness>
</template>

<script>
  import GBusiness from '@/components/GBusiness'
  export default {
    name: 'index',
    components: {
      GBusiness
    }
  };
</script>

<style lang="scss">

</style>
