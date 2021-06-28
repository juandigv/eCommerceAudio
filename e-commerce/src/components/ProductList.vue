<template>
  <div class="product-list">
    <v-row justify="space-between" no-gutters>
      <v-col class="product-col" v-for="item in items" :key="item.id">
        <ProductCard
          :src="item.src"
          :name="item.name"
          :detail="item.detail"
          :price="item.price"
          :info="item.info"
          :infoColor="item.infoColor"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";

export default {
  name: "ProductList",
  props: {
    items: Array
  },
  components: {
    ProductCard,
  },
};
</script>
<style src="./productList.css" scoped></style>