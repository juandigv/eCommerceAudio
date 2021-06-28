<template>
  <div>
    <ProductListSimple :items="items" />
    <v-divider />
    <v-row justify="space-between">
      <v-col width="256px">
        <ProductCard
          :src="extra[0].src"
          :name="extra[0].name"
          :detail="extra[0].detail"
          :price="extra[0].price"
          :info="extra[0].info"
          :infoColor="extra[0].infoColor"
        />
      </v-col>
      <v-col>
        <ProductListGrid
          :items1="items1"
          :items2="items2"
          :items3="items3"
          :items4="items4"
      /></v-col>
    </v-row>
  </div>
</template>

<script>
import ProductListSimple from "../components/ProductListSimple";
import ProductListGrid from "../components/ProductListGrid";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          id: 1,
          src: "https://images-na.ssl-images-amazon.com/images/I/51HCqxJ35OL._AC_SL1000_.jpg",
          name: "Beats by Dre WIRED",
          detail: "Price depends on color",
          price: "25.99",
          infoColor: "1",
          info: "",
        },
        {
          id: 2,
          src: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/soundsport_free/product_silo_images/soundsport_free_wireless_black_EC_02.psd/jcr:content/renditions/cq5dam.web.320.320.png",
          name: "Bose water proof earbuds",
          detail: "Price depends on color",
          price: "17.99",
          infoColor: "1",
          info: "Coupons Available",
        },
        {
          id: 3,
          src: "data:image/jpeg;base64,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",
          name: "Razer Gaming earbuds",
          detail: "Available Shipping",
          price: "49.99",
          infoColor: "2",
          info: "Most Sold",
        },
        {
          id: 4,
          src: "https://i.insider.com/5d4af4a1100a241844468889?width=1024&format=jpeg",
          name: "Bose Earphones WIRED",
          detail: "Price depends on color",
          price: "25.99",
          infoColor: "3",
          info: "Editor's Choice",
        },
        {
          id: 5,
          src: "https://www.beatsbydre.com/content/dam/beats-support/global/images/product-hero/set-up-and-use-studio-wireless.jpg.large.1x.jpg",
          name: "Beats by Dre Studio 3 Wireless",
          detail: "Price depends on color",
          price: "17.99",
          infoColor: "4",
          info: "Coupons Available",
        },
      ],
      items1: [
        {
          id: 1,
          src: "https://http2.mlstatic.com/D_NQ_NP_839384-MPE44659208575_012021-O.jpg",
          name: "Acoustic Audio AA321B",
          detail: "Free Shipping",
          price: "33.88",
          infoColor: "1",
          info: "",
        },
        {
          id: 2,
          src: "https://images-na.ssl-images-amazon.com/images/I/71kzQ1lgpqL._AC_SY355_.jpg",
          name: "Edifier R1280Ts",
          detail: "Free Shipping",
          price: "109.99",
          infoColor: "1",
          info: "Most Sold",
        },
        {
          id: 3,
          src: "https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzcxREdwNXFwUVZMLl9TUzQwMF8uanBn.jpg",
          name: "Moukey Peak Power",
          detail: "Free Shipping",
          price: "79.88",
          infoColor: "1",
          info: "Coupons Available",
        },
        {
          id: 4,
          src: "https://images-na.ssl-images-amazon.com/images/I/41vpoj6ikaL._AC_.jpg",
          name: "Fluace Signature Hifi 2",
          detail: "Available in Black Ash",
          price: "199.99",
          infoColor: "3",
          info: "Low Stock",
        },
      ],
      items2: [
        {
          id: 1,
          src: "https://media.ldlc.com/r1600/ld/products/00/05/58/75/LD0005587578_2.jpg",
          name: "Triangle Hifi Speakers",
          detail: "Re-stocking soon",
          price: "456.16",
          infoColor: "3",
          info: "Low Stock",
        },
        {
          id: 2,
          src: "https://images-na.ssl-images-amazon.com/images/I/61nXILRTADL._AC_SL1000_.jpg",
          name: "AVX 6.5 inch audio",
          detail: "Available Shipping",
          price: "64.99",
          infoColor: "1",
          info: "",
        },
        {
          id: 3,
          src: "https://themusiclovershop.com/estore/123/audioengine-hd3-wireless-speakers-pair.jpg",
          name: "Audioengine HD3 wireless",
          detail: "Available in other colors",
          price: "349.00",
          infoColor: "1",
          info: "",
        },
        {
          id: 4,
          src: "https://m.media-amazon.com/images/I/81bWVGPr9zL._AC_SS450_.jpg",
          name: "Polk Audio S-15 American Hi-fi",
          detail: "Re-stocking soon",
          price: "229.00",
          infoColor: "3",
          info: "Low Stock",
        },
      ],
      items3: [
        {
          id: 1,
          src: "https://ae01.alicdn.com/kf/H198074837e464dd5bc3fb332f3170c1an/Original-Cowin-E7-Upgraded-ANC-bluetooth-Headphone-wireless-bluetooth-headset-Earphone-Active-Noise-Cancelling-headphones.jpg_Q90.jpg_.webp",
          name: "Cowin E7 headset",
          detail: "Available Shipping",
          price: "49.99",
          infoColor: "1",
          info: "Sponsored",
        },
        {
          id: 2,
          src: "https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxU3NCNFhyeUVMLl9TUzQwMF8uanBn.jpg",
          name: "Cowin SE8 headset",
          detail: "Available Shipping",
          price: "139.99",
          infoColor: "1",
          info: "Sponsored",
        },
        {
          id: 3,
          src: "https://m.media-amazon.com/images/I/71bA41wJZCL._AC_SS450_.jpg",
          name: "Soundcore Ankerlife Q20",
          detail: "Price depends on color",
          price: "49.99",
          infoColor: "1",
          info: "",
        },
        {
          id: 4,
          src: "https://m.media-amazon.com/images/I/51sMkuA2DrL._AC_SS450_.jpg",
          name: "Beats Studio 3",
          detail: "No shipping",
          price: "160.00",
          infoColor: "3",
          info: "",
        },
      ],
      items4: [
        {
          id: 1,
          src: "https://static-01.shop.com.mm/p/1de87f4e69700eeee0325ce37d25007a.jpg",
          name: "Skullcandy Crusher Evo",
          detail: "Available in cold grey",
          price: "131.00",
          infoColor: "2",
          info: "Members discount",
        },
        {
          id: 2,
          src: "https://m.media-amazon.com/images/I/6123zCDo14S._AC_SS450_.jpg",
          name: "HROEENOI JZ02",
          detail: "Available shipping",
          price: "39.99",
          infoColor: "1",
          info: "Sponsored",
        },
        {
          id: 3,
          src: "https://images-na.ssl-images-amazon.com/images/I/61BI8etghvL._AC_SX425_.jpg",
          name: "PowerLocus Foldable wireless",
          detail: "Price depends on color",
          price: "25.99",
          infoColor: "1",
          info: "",
        },
        {
          id: 4,
          src: "https://images-na.ssl-images-amazon.com/images/I/41-yZ0SyxtL.jpg",
          name: "iJoy Premium Rechargeable Wireless Headphones",
          detail: "Requires external DAC",
          price: "379.99",
          infoColor: "3",
          info: "Low Stock",
        },
      ],
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
      ],
    };
  },
  components: {
    ProductListSimple,
    ProductListGrid,
    ProductCard,
  },
};
</script>
