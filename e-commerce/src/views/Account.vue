<template>
  <div class="main-content">
    <v-row justify="space-between" no-gutters>
      <v-col>
        <AccountForm />
      </v-col>
      <v-col>
        <BannerRegister :detailBanner="bannerReg" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AccountForm from "@/components/AccountForm.vue";
import BannerRegister from "@/components/BannerRegister.vue";

export default {
  name: "Home",
  data() {
    return {
      bannerReg: {
        img: "https://d2rbodpj0xodc.cloudfront.net/stories/1441380214247523754/bad03d87-9aae-45ac-8362-648c3de21e77.jpeg",
        detail: "Sign up",
        detail2: "Exclusive offers",
        detail3: "Exclusive product",
        detail4: "Exclusive clients",
      },
    };
  },
  components: {
    AccountForm,
    BannerRegister,
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
