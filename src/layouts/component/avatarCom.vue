<!--头像-->
<template>
  <div class="avatar-com">

    <Popover trigger="click" @show="visible = true" @after-leave="visible = false">

      <div class="avatar-popover-content">

        <div class="avatar-com-header">

          <GAvatar
              v-model="userInfo.avatarImg"
              :read-only="true"
              :size="38"
              @click="visible = true"
          >
            <span v-if="!userInfo.avatarImg && userInfo.userName">
              {{ userInfo.userName.substr(0, 1) }}
            </span>

          </GAvatar>

          <span class="user-name">{{ userInfo.userName }}</span>
        </div>
        <ul>
          <li @click="editPwd">
            <GIcon icon="icon-bianji"></GIcon>
            <span>修改密码</span>
          </li>
          <li @click="logOut">
            <GIcon icon="icon-tuichu"></GIcon>
            <span>退出登录</span>
          </li>
        </ul>
      </div>

      <div slot="reference" class="shw-avatar">
        <GAvatar
          v-model="userInfo.avatarImg"
          :read-only="true"
          @click="visible = true"
        >
          <span v-if="!userInfo.avatarImg && userInfo.userName">
            {{ userInfo.userName.substr(0, 1) }}
          </span>
        </GAvatar>
        <span>{{ userInfo.userName }}</span>
        <GIcon class="show-avatar-icon" :class="{ 'show-avatar-icon-down': visible }" icon="icon-xiajiantou" />
      </div>

    </Popover>

    <!--修改密码-->
    <editorPwd />

  </div>
</template>

<script>
  import { Popover } from 'element-ui'
  import GAvatar from '@/components/GAvatar'
  import editorPwd from './editorPwd'
  import { mapGetters } from 'vuex'
  export default {
    name: 'AvatarCom',
    components: {
      Popover,
      GAvatar,
      editorPwd
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      // 退出登录
      logOut() {
        this.$store.dispatch('clearTokenCookie').then(() => {
          this.$router.replace({ path: '/login' })
        })
      },

      editPwd() {
        this.$store.dispatch('baseInfo/editPwd', true).then(() => {
          this.close()
        })
      },

      close() {
        this.visible = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .avatar-com-img{
    transition: all .3s;
    height: inherit;
    &:hover{
      transform: scale(1.1);
    }
  }
  .avatar-com{
    height: 100%;
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .shw-avatar{
      display: flex;
      align-items: center;
      height: inherit;font-weight: 600;
      font-size: 14px;
      line-height: 40px;
      color: #303133;
      &>span{
        margin-left: 10px;
      }
    }
    .show-avatar-icon{
      transition: all .4s;
      font-size: 13px;
      margin-left: 8px;
      color: #37414b;
    }
    .show-avatar-icon-down{
      transform: rotate(180deg);
    }
  }
  .avatar-popover-content {
    min-width: 200px;
    .avatar-com-header {
      padding: 12px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      border-bottom: solid 1px rgba(23, 35, 61, 0.1);
      cursor: pointer;
      .user-name{
        margin-left: 12px;
        font-size: 16px;
        font-weight: 600;
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    ul{
      font-size: 14px;
      cursor: pointer;
      width: 100%;
      li {
        height: 48px;
        line-height: 48px;
        display: flex;
        align-items: center;
        color: rgba(23, 35, 61, 0.75);
        span {
        }
        & > .icon{
          width: 54px;
          font-size: 20px;
          color: #909194;
        }
        &:hover{
          background: rgba(23, 35, 61, 0.03);
        }
      }
    }
  }
</style>
