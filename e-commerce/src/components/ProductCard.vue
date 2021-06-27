<template>
  <v-card
    class="product-card mx-auto my-12"
    width="208"
    height="344"
    color=var(--v-charcoal50-base)
  >
    <v-img
      class="product-image"
      :aspect-ratio="1 / 1"
      :src="items[0].src"
    ></v-img>

    <v-card class="product-info-card" flat tile :color="items[0].infoColor">
      <v-card-content class="product-info-text"
        >{{ items[0].info }}
      </v-card-content>
    </v-card>

    <div class="product-name-text">{{ items[0].name }}</div>
    <div class="product-detail-text">{{ items[0].detail }}</div>
    <div class="product-price-text">Price: ${{ items[0].price }}</div>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      items: [
        {
          src: "https://www.beatsbydre.com/content/dam/beats-support/global/images/product-hero/set-up-and-use-studio-wireless.jpg.large.1x.jpg",
          name: "Beats by Dre WIRED",
          detail: "Price depends on color",
          price: "25.99",
          infoColor: "#5865F2",
          info: "Coupons Available",
        },
        {
          src: "https://i.blogs.es/2f0daf/auriculares-beats-by-dr-dre/450_1000.jpg",
          name: "Beats by Dre WIRED",
          detail: "Price depends on color",
          price: "25.99",
          infoColor: "#5865F2",
          info: "Coupons Available",
        },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
.product-card{
box-shadow: 0px 4px 4px 0px var(--v-charcoal400-base) !important;
}
.product-image {
  width: 192px;
  top: 8px;
  margin: 8px;
  border-radius: 8px;
}
.product-info-card {
  text-align: center;
  top: 8px;
  width: 100%;
  height: 24px;
}
.product-info-text {
  color: var(--v-charcoal50-base);
  font-size: 12px;
  line-height: 18px;
}
.product-name-text {
  color: var(--v-charcoal900-base);
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
  height: 52px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 12px;
  display: flex;
  align-items: center;
}
.product-detail-text,
.product-price-text {
  color: var(--v-charcoal900-base);
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  height: 18px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 4px;
}
.product-detail-text,
.product-info-text {
  font-weight: 400;
}
</style>
