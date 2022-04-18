<!--图标-->
<template>
  <svg v-if="icon" class="icon" aria-hidden="true">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: "GIcon",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
