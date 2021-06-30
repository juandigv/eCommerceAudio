<template>
  <v-card
    class="product-card"
    width="286"
    height="500"
    color="var(--v-charcoal50-base)"
  >
    <div class="product-info-card">
      <v-card
        class="product-info-card"
        flat
        tile
        :color="getColor(item.infoColor)"
        v-if="item.info != ''"
      >
        <div class="product-info-text">{{ item.info }}</div>
      </v-card>
    </div>
    <div class="product-name-text">{{ item.name }}</div>
    <br />
    <div class="product-price-text">${{ item.price }}</div>

    <v-img class="product-image" :aspect-ratio="1 / 1" :src="item.src" contain></v-img>
    <v-btn class="product-button" rounded color="var(--v-primary500-base)"> BUY </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "ProductCardCheckout",
  props: {
    item: Object,
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
<style src="./productCardCheckout.css" scoped></style>
