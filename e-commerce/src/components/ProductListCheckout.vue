<template>
  <div class="product-list-checkout">
    <v-row justify="space-between" no-gutters>
      <v-col class="product-col" v-for="item in items" :key="item.id">
        <ProductCardCheckout
          :item="item"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCardCheckout from "../components/ProductCardCheckout";

export default {
  name: "ProductListCheckout",
  props: {
    items: Array,
  },
  components: {
    ProductCardCheckout,
  },
};
</script>
<style src="./productListCheckout.css" scoped></style>
