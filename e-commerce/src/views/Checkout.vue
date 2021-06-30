<template>
  <div class="main-content">
    <ProductListCheckout :items="products" />
  </div>
</template>

<script>
import ProductListCheckout from "../components/ProductListCheckout";

export default {
  name: "Checkout",
  data() {
    return {
      products: [
        {
          id: 1,
          src: "https://media.zenfs.com/en/mybest_news_781/20b220612c3e35b0ad088056d14a8181",
          name: "Beats Flex - All-Day Wireless Earphones",
          detail: "-",
          price: "49.99",
          infoColor: "3",
          info: "",
        },
        {
          id: 2,
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgalaxystore.com.ua%2Fimages%2F16%2F80711217998559_small6.png&f=1&nofb=1",
          name: "JBL Tune 120TWS",
          detail: "-",
          price: "89.95",
          infoColor: "3",
          info: "",
        },
         {
          id: 3,
          src: "https://switch.com.my/wp-content/uploads/2020/05/Soundlink-Micro-Orange-1.png",
          name: "SoundLink Micro Bluetooth® speaker",
          detail: "-",
          price: "99.00",
          infoColor: "2",
          info: "Special offer",
        },
      ],
    };
  },
  components: {
    ProductListCheckout,
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
