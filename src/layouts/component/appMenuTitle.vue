<template>
  <!--左侧顶部 logo 标题-->
  <div class="logo" @click="() => { $router.push(defaultRouter) }">
    <img v-if="baseInfo.appLogo" class="logo-img" alt="返回应用中心" :src="baseInfo.appLogo">
    <p v-if="!collapsed" class="logo-name">{{ baseInfo.appName }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'AppMenuTitle',
    props: {
      defaultRouter: {
        type: String,
        default: ''
      },
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters(['baseInfo'])
    }
  }
</script>

<style lang="scss" scoped>
  .logo-img{
    object-fit: scale-down;
  }
</style>
