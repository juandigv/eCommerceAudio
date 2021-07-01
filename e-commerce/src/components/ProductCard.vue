<template>
  <v-card
    class="product-card"
    width="208"
    height="344"
    color="var(--v-charcoal50-base)"
  >
    <v-img class="product-image" :aspect-ratio="1 / 1" :src="src"></v-img>

    <div class="product-info-card">
      <v-card
        class="product-info-card"
        flat
        tile
        :color="getColor(infoColor)"
        v-if="info != ''"
      >
        <div class="product-info-text">{{ info }}</div>
      </v-card>
    </div>
      <span class="product-name-text">{{ name }}</span>
      <span class="product-detail-text">{{ detail }}</span>
      <span class="product-price-text">Price: ${{ price }}</span>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    src: String,
    name: String,
    detail: String,
    price: String,
    info: String,
    infoColor: String,
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    getColor(type) {
      switch (type) {
        case "1":
          return this.$vuetify.theme.themes.light.primary500;
        case "2":
          return this.$vuetify.theme.themes.light.success500;
        case "3":
          return this.$vuetify.theme.themes.light.error500;
        case "4":
          return this.$vuetify.theme.themes.light.info500;
      }
    },
  },
};
</script>

<style lang="scss" src="./styles/productCard.scss" scoped></style>
