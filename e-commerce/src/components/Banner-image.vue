<template>
  <div
    class="banner"
    v-bind:style="{ backgroundImage: 'url(' + detailBanner2.src + ')' }"
  >
    <div class="banner-text">
      <h1>{{ detailBanner2.detail }}</h1>
      <p>{{ detailBanner2.subdetail }}</p>
    </div>
    <button class="button-style">SHOP</button>
  </div>
</template>

<script>
export default {
  name: "Banner-image",
  props: {
    detailBanner2: Object,
  },
};
</script>

<style lang="scss" src="./styles/banner-image.scss" scoped></style>
