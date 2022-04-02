<template>
  <div class="test-page">
    菜单
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  created() {
  },
  mounted() {
    location.href = 'weixin://wap/pay?prepayid%3Dwx311857306709771e8fecab3e4a8e640000&package=199218213&noncestr=1648724251&sign=14eb1c88157d0b9b7b38a37e95f61f41'
  }
}
</script>

<style lang="scss" scoped>
.test-page{
  padding: 24px;
}
</style>
