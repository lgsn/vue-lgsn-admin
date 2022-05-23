<template>
  <div class="g-view-card">
    <div
      class="g-view-content"
      :style="{
        height: showFooter ? 'calc(100% - 68px)' : '',
        'padding-bottom': showFooter ? '48px' : '',
      }"
    >
      <slot />
    </div>
    <div v-if="showFooter" class="g-view-card-footer">
      <el-button
        :loading="saveLoad"
        size="large"
        type="primary"
        @click="() => this.$emit('success')"
      >
        保 存
      </el-button>
      <el-button size="large" @click="() => this.$emit('cancel')">
        取 消
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GViewCard",
  props: {
    showFooter: {
      type: Boolean,
      default: false,
    },
    saveLoad: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.g-view-card {
  width: 100%;
  height: 100%;
  padding: 12px 0 12px 12px;
  overflow-y: auto;
  position: relative;
  overflow-y: auto;
  .g-view-content {
    width: calc(100% - 12px);
    height: 100%;
    padding: 12px;
    margin-right: 12px;
    box-shadow: 2px 0 7px 0 rgb(153, 170, 192);
    border-radius: 4px;
    background: #fff;
  }
  .g-view-card-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    background: #fff;
    box-shadow: 2px 0 7px 0 rgb(153, 170, 192);
    display: flex;
    align-items: center;
    padding: 0 24px;
    .ant-btn {
      width: 120px;
      margin-right: 16px;
    }
  }
}
</style>
