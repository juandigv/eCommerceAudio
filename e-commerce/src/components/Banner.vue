<template>
  <div class="banner">
    <div>
      <p class="banner-text">
        {{ detailBanner.detail }}
      </p>
      <button class="button-style">Learn More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    detailBanner: Object,
  },
};
</script>

<style lang="scss" src="./styles/banner.scss" scoped></style>
