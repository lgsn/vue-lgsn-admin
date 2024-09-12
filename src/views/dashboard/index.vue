<template>
  <GViewCard>
    <div class="dashboard">首页</div>
  </GViewCard>
</template>

<script>
import GViewCard from "@/components/GViewCard";
export default {
  name: "index",
  components: {
    GViewCard,
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  padding-top: 300px;
  text-align: center;
  color: #475669;
  font-size: 30px;
  font-weight: bold;
}
</style>
