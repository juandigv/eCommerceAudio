<template>
  <div
    class="banner"
    v-bind:style="{ backgroundImage: 'url(' + detailBanner.img + ')' }"
  >
    <div class="banner-text">
      <div class="detail-title">{{ detailBanner.detail }}</div>
      <div class="detail">{{ detailBanner.detail2 }}</div>
      <div class="detail">{{ detailBanner.detail3 }}</div>
      <div class="detail">{{ detailBanner.detail4 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerRegister",
  props: {
    detailBanner: Object,
  },
};
</script>

<style lang="scss" src="./styles/bannerRegister.scss" scoped></style>
