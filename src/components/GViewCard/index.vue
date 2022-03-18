<template>
  <div class="g-view-card">
    <div class="g-view-content">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  };
</script>

<style lang="scss" scoped>
  .g-view-card{
    width: 100%;
    height: 100%;
    padding: 12px 0 12px 12px;
    overflow-y: auto;
    .g-view-content{
      width: calc(100% - 12px);
      height: 1200px;
      padding: 12px;
      margin-right: 12px;
      box-shadow: 2px 0 7px 0 rgb(153, 170, 192);
      border-radius: 4px;
      background: #fff;
    }
  }
</style>
