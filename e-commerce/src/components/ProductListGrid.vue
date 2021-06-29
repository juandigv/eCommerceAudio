<template>
  <div class="product-list-grid">
    <v-row justify="space-between" no-gutters>
      <v-col class="product-col" v-for="item in items1" :key="item.id">
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
    <div class="spacer52" />
    <v-row justify="space-between" no-gutters>
      <v-col class="product-col" v-for="item in items2" :key="item.id">
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
    <div class="spacer52" />
    <v-row justify="space-between" no-gutters>
      <v-col class="product-col" v-for="item in items3" :key="item.id">
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
    <div class="spacer52" />
    <v-row justify="space-between" no-gutters>
      <v-col class="product-col" v-for="item in items4" :key="item.id">
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
  name: "ProductListGrid",
  props: {
    items1: Array,
    items2: Array,
    items3: Array,
    items4: Array,
  },
  components: {
    ProductCard,
  },
};
</script>
<style src="./productListGrid.css" scoped></style>
