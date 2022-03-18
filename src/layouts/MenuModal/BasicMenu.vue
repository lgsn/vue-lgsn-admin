<!--应用类型 公用导航-->
<template>
  <div class="basic-menu">

    <Menu
        class="menu-item"
        mode="vertical"
        :collapse="collapsed"
        :default-active="defaultActive"
        @select="openView"
    >

      <BasicMenuItem v-for="menu in routes" :menu="menu" :key="menu.name" />

    </Menu>

  </div>
</template>

<script type="jsx">
  import { Menu } from 'element-ui'
  import BasicMenuItem from './BasicMenuItem'
  import { mapGetters } from 'vuex'
  export default {
    name: 'BasicMenu',
    components: {
      Menu,
      BasicMenuItem
    },
    props: {
      collapsed: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        defaultActive: ''
      }
    },
    computed: {
      ...mapGetters(['routes'])
    },
    watch: {
      '$route': function () {
        this.defaultActive = this.$route.meta.activeMenu || this.$route.name
      }
    },
    created() {
      this.defaultActive = this.$route.name
    },
    methods: {
      openView(routeName) {
        if (routeName === this.$route.name) return
        this.$router.push(routeName)
      }
    }
  }
</script>

<style lang="scss">
  .basic-menu{
    flex: 1 1 0;
    height: calc(100% - 64px);
    overflow: hidden auto;
    .menu-item{
      .menu-icon{
        margin-right: 10px;
        font-size: 16px;
        color: #37414b;
        vertical-align: middle;
      }
    }
    .menu-item:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .el-menu-item.is-active{
      background-color: #5482ee;
      color: #e7f4ff;
      .menu-icon{
        color: #e7f4ff;
      }
    }
    .el-submenu__title{
      color: #333;
      i{
        opacity: .45;
        color: #37414b;
        font-weight: bold;
      }
    }
  }

  .el-menu--popup{
    .is-active{
      background-color: #5482ee;
      color: #e7f4ff;
      .menu-icon{
        color: #fff;
      }
    }
  }

  .basic-menu::-webkit-scrollbar {
    width: 0;
    height: 0;
    opacity: 0.2;
  }
  .basic-menu::-webkit-scrollbar-track-piece {
    -webkit-border-radius: 0;
    opacity: 0.2;
  }
  .basic-menu::-webkit-scrollbar-thumb:vertical {
    height: 0;
    -webkit-border-radius: 0;
  }
  .basic-menu::-webkit-scrollbar-thumb:horizontal {
    width: 0;
  }
</style>
