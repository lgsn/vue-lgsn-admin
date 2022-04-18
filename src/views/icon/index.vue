<template>
  <GViewCard>
    <div v-for="(item, index) in iconList" :key="index" class="icon-item">
      <GIcon :icon="`icon-${item['font_class']}`" />
      <span v-copy="item['font_class']">{{ item["font_class"] }}</span>
    </div>
  </GViewCard>
</template>

<script>
import iconfont from "@/assets/iconfont.json";
import GViewCard from "@/components/GViewCard";
export default {
  data() {
    return {
      iconList: iconfont["glyphs"],
    };
  },
  components: {
    GViewCard,
  },
};
</script>

<style lang="scss">
.icon-item {
  display: inline-block;
  margin: 0 12px 12px 0;
  width: 128px;
  height: 140px;
  text-align: center;
  color: #666;
  .icon {
    font-size: 40px;
    margin-top: 18px;
  }
  span {
    margin-top: 24px;
    display: block;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>