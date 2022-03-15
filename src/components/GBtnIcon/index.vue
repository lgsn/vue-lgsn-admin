<template>
  <span
    :class="`g-btn-icon ${icon}`"
    @click="$emit('click')"
  >
    <GIcon
      :icon="icon"
    />
  </span>
</template>

<script>
  /**
   * 图标按钮
   * 常用于表格操作列
   *
   * 编辑 icon-bianji1
   * 删除 icon-shanchu1
   * 暂停 icon-zanting
   * 执行 icon-zhihang
   * 恢复 icon-huifu
   */
  export default {
    name: 'GBtnIcon',
    props: {
      icon: {
        type: String,
        default: 'icon-bianji1'
      },
    }
  };
</script>

<style lang="scss" scoped>
.g-btn-icon{
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin-right: 12px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 6px;
  text-align: center;
  box-shadow: 2px 0 7px 0 rgb(153, 170, 192);
  cursor: pointer;
  color: #fff;
  background: #409EFF;
  &:last-child{
    margin: 0;
  }
}
.icon-bianji1{
  color: #fff;
  background: #409EFF;
}
.icon-shanchu1{
  color: #fff;
  background: #ff4d4f;
}
.icon-zanting{
  color: #fff;
  background: #E6A23C;
}
.icon-zhihang{
  color: #fff;
  background: #67C23A;
}
</style>
