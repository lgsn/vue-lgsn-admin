<template>
  <GViewCard>
    <div class="content">业务布局</div>
  </GViewCard>
</template>

<script>
import GViewCard from "@/components/GViewCard";
export default {
  components: {
    GViewCard,
  },
};
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
}
</style>