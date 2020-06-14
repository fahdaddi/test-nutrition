<template>
  <div class="wrappalble">
    <template v-for="item in products">
      <item-card :item="item" :key="`products_${item.id}`" />
    </template>
  </div>
</template>

<script>
import itemCard from "~/components/itemCard";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  components: {
    itemCard
  }
};
</script>

<style scoped>
.wrappalble {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
