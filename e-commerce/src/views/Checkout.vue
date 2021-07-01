<template>
  <div class="main-content">
    <v-row justify="space-between" no-gutters>
      <v-col>
        <div style="margin-left: 32px">
          <h1 class="text-sub">Cart items</h1>
          <CartCard
            v-for="element in cart"
            :key="element.title"
            :detailCard="element"
          />
          <h1 class="text-sub">You might want to add ...</h1>
          <ProductListCheckout :items="products" />
        </div>
      </v-col>
      <v-col>
        <SideTotal :detailSale="detailSale" class="info-cart" />
      </v-col>
    </v-row>
    <div style="margin-top: 76px; margin-bottom: 64px">
      <Banner :detailBanner="detailBanner" />
    </div>
  </div>
</template>

<script>
import CartCard from "@/components/CartCard.vue";
import ProductListCheckout from "../components/ProductListCheckout";
import Banner from "../components/Banner.vue";
import SideTotal from "../components/SideTotal.vue";

export default {
  name: "Checkout",
  data() {
    return {
      detailSale: {
        listSale: [
          { item: "JBL Link 20", price: "$99.00" },
          { item: "Bose Sport Earbuds", price: "$159.00" },
          { item: "Beats Solo3 Wireless Headphones", price: "$199.95" },
        ],
        coupons: ["AdMw", "CpEs", "8S5A1", "ADMW"],
        total: "22.549,68$",
      },
      cart: [
        {
          img: "https://co.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw9a5c1d67/JBL-LINK-20-Back-BLK_1605x1605px.png?sw=537&sfrm=png",
          title: "JBL Link 20",
          description1: "Voice-activated portable speaker",
          description2: "Hands-free voice control",
          price: "$99.00",
        },
        {
          img: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/earbuds_500/product_silo_images/seb_product_slideshow_black_ec_hero_web.png/jcr:content/renditions/cq5dam.web.320.320.png",
          title: "Bose Sport Earbuds",
          description1: "Baltic Blue",
          description2: "Brand new",
          price: "$159.00",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/33/Apple/2020/FamilyStripe/Beats/Studio3_Wireless_240x240._CB407686784_.png",
          title: "Beats Solo3 Wireless Headphones",
          description1: "The Beats Icon Collection",
          description2: "Matte Black",
          price: "$199.95",
        },
      ],
      detailBanner: {
        detail:
          "A message to Professional customers: An important loudspeaker recall notice",
      },
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
    CartCard,
    ProductListCheckout,
    SideTotal,
    Banner,
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/variables.scss";

.main-content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
.info-cart {
  margin-top: 112px;
  margin-left: 24px;
}
.text-sub {
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px !important;
  line-height: 32px;
  font-weight: $font-weight-semibold;
}
</style>
