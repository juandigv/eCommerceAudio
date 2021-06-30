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
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.banner {
  /*background: linear-gradient(#D2CFCF, #D2CFCF);*/
  background: linear-gradient(
    var(--v-charcoal200-base),
    var(--v-charcoal200-base)
  );
  width: 1280px;
  height: 144px;
  position: relative;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
  padding: 24px;
}
.banner-text {
  color: var(--v-charcoal900-base);
  margin-bottom: 24px;
}
.button-style {
  background-color: var(--v-charcoal100-base);
  color: var(--v-primary500-base);
  border-radius: 32px;
  width: 216px;
  height: 40px;
  font-size: 24px;
  line-height: 32px;
}
</style>
