<template>
  <v-card class="cart-card">
    <v-row no-gutters>
      <v-col class="col-separation">
        <v-img
          class="product-image"
          :aspect-ratio="1 / 1"
          :src="detailCard.img"
        ></v-img>
      </v-col>
      <v-col>
        <div>
          <div class="main-title">{{ detailCard.title }}</div>
          <div class="description1">{{ detailCard.description1 }}</div>
          <div class="description2">{{ detailCard.description2 }}</div>
          <v-row class="div-inside" no-gutters>
            <v-select class="dropdown" :items="items"></v-select>
            <button class="button-style">Remove</button>
            <div class="price">{{ detailCard.price }}</div>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CartCard",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  components: {},
  computed: {},
  methods: {},
  props: {
    detailCard: Object,
  },
};
</script>

<style lang="scss" src="./styles/cartCard.scss" scoped></style>
