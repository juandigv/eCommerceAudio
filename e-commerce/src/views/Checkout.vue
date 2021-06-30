<template>
  <div class="main-content">
    <v-row justify="space-around" no-gutters>
      <v-col style="max-width:min-content;max-height:min-content;display:flex;">
        <ProductCardCheckout
        :item="extra[0]"
      /></v-col>
       <v-col style="max-width:min-content;max-height:min-content;display:flex;">
        <ProductCardCheckout
        :item="extra[1]"
      /></v-col>
    </v-row>
    
  </div>
</template>

<script>
import ProductCardCheckout from "../components/ProductCardCheckout";

export default {
  name: "Home",
  data() {
    return {
      extra: [
        {
          id: 1,
          src: "https://pontreyes.com/1243-large_default/auriculares-sennheiser-hd600.jpg",
          name: "Sennheiser HD600",
          detail: "Requires external DAC",
          price: "379.99",
          infoColor: "3",
          info: "Low Stock",
        },
         {
          id: 2,
          src: "https://switch.com.my/wp-content/uploads/2020/05/Soundlink-Micro-Orange-1.png",
          name: "SoundLink Micro Bluetooth® speaker",
          detail: "Requires external DAC",
          price: "99.00",
          infoColor: "2",
          info: "Special offer",
        },
      ],
    };
  },
  components: {
    ProductCardCheckout,
  },
};
</script>

<style scoped>
.main-content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
</style>
