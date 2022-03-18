<!--应用类型 公用布局-->
<template>
  <div class="basic-layout">

    <!--左侧 logo 菜单-->
    <Aside :width="!collapsed ? '200px' : '60px'" class="basic-layout-sider">

      <!--菜单顶部标题 logo-->
      <appMenuTitle :default-router="defaultPathUrl" :collapsed="collapsed" />

      <!--菜单-->
      <BasicMenu :collapsed="collapsed" />

      <!--展开/缩小菜单栏-->
      <div v-if="collapsedFooter" class="basic-layout-sider-footer" @click="toggleCollapsed">
        <GIcon :icon="collapsed ? 'icon-caidanzhankai' : 'icon-caidanshouqi'" />
      </div>

    </Aside>

    <!--右侧 导航 内容-->
    <div class="basic-layout-right">

      <!--导航-->
      <div class="layout-head">

        <!--菜单标签栏-->
        <NavTags :current-tag="currentTag" :tags="tagViews" @delTag="delTag" />

        <!--右侧操作栏-->
        <div class="layout-head-right">
          <quickSwitch />
          <avatarCom :size="26" :info="userInfo" />
        </div>

        <div class="layout-head-info">
          <!--展开/缩小菜单栏-->
          <GIcon @click.native="toggleCollapsed" class="menu-icon-collapsed" :icon="collapsed ? 'icon-caidanzhankai' : 'icon-caidanshouqi'" />

          <!--面包屑-->
          <Breadcrumb class="menu-breadcrumb">
            <BreadcrumbItem class="menu-breadcrumb-item">{{ APP_NAME }}</BreadcrumbItem>
            <BreadcrumbItem v-for="(item, index) in breadcrumbList" :key="index" class="menu-breadcrumb-item">{{ item.meta.name }}</BreadcrumbItem>
          </Breadcrumb>

        </div>

      </div>

      <!--内容-->
      <transition name="slide-fade" mode="out-in">
        <router-view class="layout-content" />
      </transition>

    </div>

  </div>

</template>

<script>
  import { Aside, Breadcrumb, BreadcrumbItem } from 'element-ui'
  import BasicMenu from './BasicMenu'
  import NavTags from '../component/navTags'
  import quickSwitch from '../component/quickSwitch'
  import appMenuTitle from '../component/appMenuTitle'
  import avatarCom from '../component/avatarCom'
  import { APP_NAME } from '@/config/public'
  import { mapGetters } from 'vuex'

  export default {
    name: 'BasicLayoutInline',
    components: {
      Aside,
      BasicMenu: BasicMenu,
      quickSwitch,
      avatarCom,
      appMenuTitle,
      Breadcrumb,
      BreadcrumbItem,
      NavTags
    },
    data() {
      return {
        APP_NAME,
        collapsed: false,
        collapsedFooter: false,
        breadcrumbList: [],
        tagViews: [],
        currentTag: '',
        defaultPathUrl: ''
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    watch: {
      $route(route) {
        this.initTag()
        if (route.path.startsWith('/redirect/')) {
          return
        }
        this.initBreadcrumb()
      }
    },
    created() {
      this.initBreadcrumb()
      this.initTag()
    },
    methods: {
      // 初始化面包屑导航
      initBreadcrumb() {
        this.defaultPathUrl = this.$route.matched[0].path
        this.breadcrumbList = this.$route.matched.filter(v => v.meta && v.meta.name)
      },
      // 初始化历史标签
      initTag() {
        const currentRoute = this.$route
        if (!currentRoute.meta || !currentRoute.meta.title) return
        if (this.tagViews.some(v => v.path === currentRoute.path)) {
          this.currentTag = currentRoute.meta.title
          return
        }
        this.tagViews.push(
          Object.assign({}, currentRoute)
        )
        this.currentTag = currentRoute.meta.title
      },
      // 展开/收缩菜单
      toggleCollapsed() {
        this.collapsed = !this.collapsed
      },
      // 删除标签视图
      delTag(index) {
        this.tagViews.splice(index, 1)
        if (this.tagViews.length) {
          this.$router.push(this.tagViews[this.tagViews.length - 1].path)
        }
      }
    }
  }
</script>

<style lang="scss">
  .basic-layout{
    width: 100%;
    height: 100%;
    display: flex;
    .basic-layout-sider{
      position: relative;
      z-index: 20;
      box-shadow: 10px 0 10px -10px #c7c7c7;
      transition: all .3s;
      overflow: hidden;
      .basic-layout-sider-footer {
        height: 48px;
        line-height: 48px;
        color: #fff;
        font-size: 16px;
        padding: 0 16px;
        cursor: pointer;
      }
    }
    .basic-layout-right{
      width: calc(100% - 200px);
      display: flex;
      flex: auto;
      flex-direction: column;
      min-height: 0;
      background: #f0f2f5;
    }
    .logo{
      height: 32px;
      margin: 16px;
      display: flex;
      align-items: center;
      cursor: pointer;
      .logo-img{
        width: 32px;
        height: 32px;
        margin: 0 auto;
      }
      .logo-name{
        display: inline-block;
        font-weight: 600;
        color: #37414b;
        font-size: 17px;
        margin: 0 0 0 12px;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .menu-style{
      width: 100%;
      color: #fff;
    }
    .layout-content{
      width: 100%;
      background-color: #f0f2f5;
      overflow: hidden;
    }
    .layout-head{
      padding: 0;
      box-shadow: var(--cardShadow);
      position: relative;
      z-index: 10;
      background: #f0f2f5;
      .layout-head-info{
        height: 48px;
        display: flex;
        background: #fff;
        padding: 0;
        user-select: none;
        outline: none;
        box-shadow: 2px 0 7px 0 rgb(153, 170, 192);
      }
      .menu-breadcrumb{
        line-height: 48px;
        .el-breadcrumb__inner{
          color: #8c8c8c;
        }
        .menu-breadcrumb-item:last-child{
          .el-breadcrumb__inner{
            color: #434343;
          }
        }
      }
      .layout-head-right{
        position: absolute;
        right: 16px;
        top: 0;
        display: flex;
        align-items: center;
        height: 40px;
        z-index: 101;
      }
    }
    .menu-icon-collapsed{
      display: inline-block;
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
      height: 48px;
      line-height: 48px;
      color: #475669;
      padding: 0 16px;
      box-sizing: content-box;
      &:hover{
        background-image: -webkit-gradient(linear,left top,right top,from(#ddd),to(transparent))
      }
    }
  }


  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
