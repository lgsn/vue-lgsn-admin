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
            {{ menuChildren.meta.name }}
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
    .is-active{
      background-color: #5482ee;
      color: #e7f4ff;
      .menu-icon{
        color: #e7f4ff;
      }
    }
    .el-submenu{
      background-color: #fff;
      color: #303133;
    }
    ::v-deep{
      .el-submenu__title{
        i{
          opacity: .45;
          color: #37414b;
          font-weight: bold;
        }
      }
    }
    .is-opened{
      ::v-deep{
        .el-submenu__title{
          i{
            opacity: 1;
          }
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
</style>
