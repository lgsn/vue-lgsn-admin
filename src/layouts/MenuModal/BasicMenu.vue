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

      <template v-for="menu in routes">

        <!--一级菜单-->
        <MenuItem v-if="!menu.children || !menu.children.length" :key="menu.path" :index="menu.path">
          <GIcon v-if="menu.meta.icon" class="menu-icon anticon" :icon="menu.meta.icon" />
          <span>{{ menu.meta.title }}</span>
        </MenuItem>

        <!--包含子菜单-->
        <Submenu v-else :key="menu.path" :index="menu.path">

          <template slot="title">
            <GIcon class="menu-icon anticon" :icon="menu.meta.icon" />
            <span>{{ menu.meta.title }}</span>
          </template>

          <MenuItem v-for="menuChildren in menu.children" :key="menuChildren.path" :index="menuChildren.path">
            <GIcon v-if="menuChildren.meta.icon" class="menu-icon anticon" :icon="menuChildren.meta.icon" />
            <span>{{ menuChildren.meta.title }}</span>
          </MenuItem>

        </Submenu>

      </template>

    </Menu>

  </div>
</template>

<script type="jsx">
  import { Menu, MenuItem, Submenu } from 'element-ui'
  import { mapGetters } from 'vuex'
  export default {
    name: 'BasicMenu',
    components: {
      Menu,
      Submenu,
      MenuItem
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
    created() {
      this.defaultActive = this.$route.path
    },
    methods: {
      openView(index) {
        if (index === this.$route.name) return
        this.$router.replace({ path: index })
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    ::v-deep{
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
