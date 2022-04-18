<template>
  <GViewCard>
    <GPagination
      :total="total"
      :currentPage.sync="currentPage"
      :size.sync="size"
      @change="changePage"
    />
  </GViewCard>
</template>

<script>
import GViewCard from "@/components/GViewCard";
import GPagination from "@/components/GPagination";
export default {
  components: {
    GViewCard,
    GPagination,
  },
  data() {
    return {
      total: 100,
      currentPage: 1,
      size: 20,
    };
  },
  methods: {
    changePage(page) {
      console.log(page);
    },
  },
};
</script>