<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <v-btn
      color="var(--v-primary500-base)"
      width="96px"
      height="96px"
      fixed
      fab
      right
      bottom
      large
    >
      <img alt="" src="./assets/chat.svg" />
    </v-btn>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Header,
    Footer,
  },
};
</script>
