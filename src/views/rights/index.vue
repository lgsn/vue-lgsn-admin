<template>
  <GViewCard>
    <el-button type="primary" v-rights="'edit'">编辑</el-button>
    <el-button type="danger" v-rights="'delete'">删除</el-button>
  </GViewCard>
</template>

<script>
import GViewCard from "@/components/GViewCard";
export default {
  components: {
    GViewCard,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>