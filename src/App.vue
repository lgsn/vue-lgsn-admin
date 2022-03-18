<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slide-right'
      }
    },
    watch:{
      '$route':function(){
        let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
        if(isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
