<template>
  <GViewCard>
    <GBtnIcon
      class="edit-btn"
      v-for="(item, index) in iconList"
      :key="index"
      :icon="item"
    />
  </GViewCard>
</template>

<script>
import GViewCard from "@/components/GViewCard";
import GBtnIcon from "@/components/GBtnIcon";
export default {
  data() {
    return {
      iconList: ["edit", "deleted", "pause", "run", "revoke"],
    };
  },
  components: {
    GViewCard,
    GBtnIcon,
  },
};
</script>

<style lang="scss">
.edit-btn {
  margin: 0 12px 12px 0;
}
</style>