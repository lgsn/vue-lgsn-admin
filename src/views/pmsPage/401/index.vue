<template>
  <div class="error-view">

    <div class="error-icon">
      <img src="@/assets/img/error-404.png" alt="">
    </div>

    <div class="error-desc">
      <p>401</p>
      <span>抱歉，暂无权限访问 ～～ 请联系管理员</span>
      <div class="error-desc-btn">
        <el-button size="large" @click="() => { this.$router.push('/') }">返回首页</el-button>
        <el-button type="primary" size="large" @click="() => { this.$router.go(-2) }">返回上页</el-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Exception',
  created() {
    this.$setWebSite({ title: `403` })
  }
}
</script>

<style lang="scss" scoped>
  .error-view{
    width: 100%;
    height: 100%;
    background: rgb(240, 242, 245);
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-items: center;
    .error-icon{
      width: 60%;
      text-align: center;
    }
    .error-desc{
      p{
        font-size: 100px;
        color: #409EFF;
        font-weight: 600;
        font-family: monospace;
      }
      &>span{
        display: block;
        margin-bottom: 36px;
        font-size: 24px;
        color: #909399;
      }
      .error-desc-btn{
        display: flex;
        align-items: center;
      }
    }
  }
</style>
