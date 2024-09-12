<template>
  <GViewCard>
    <div class="copy-text" type="primary" v-copy="'文字复制'">点击文字复制</div>

    <el-button @click="copy" type="primary">点击按钮复制</el-button>
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
  methods: {
    copy() {
      this.$copy("按钮 - 复制");
    },
  },
};
</script>

<style lang="scss">
.copy-text{
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
