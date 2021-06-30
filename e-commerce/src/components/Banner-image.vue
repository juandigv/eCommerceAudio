<template>
  <div
    class="banner"
    v-bind:style="{ backgroundImage: 'url(' + detailBanner2.src + ')' }"
  >
    <div class="banner-text">
      <h1>{{ detailBanner2.detail }}</h1>
      <p>{{ detailBanner2.subdetail }}</p>
    </div>
    <button class="button-style">Shop</button>
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
<style scoped>
.banner {
  /*background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://i.picsum.photos/id/442/1280/280.jpg?hmac=SYktyVfXpa33RkMlDuZULCXzt-8mfv6F0GNyseUlkDE");*/
  /*background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../assets/Banner1.png");*/
  padding: 140px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.banner-text {
  position: absolute;
  text-align: right;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--v-charcoal50-base);
  font-family: "Poppins", sans-serif;
}
.button-style {
  background-color: var(--v-charcoal100-base);
  border: 1px solid var(--v-primary500-base);
  color: var(--v-primary500-base); /*#5865F2;*/
  position: absolute;
  border-radius: 32px;
  top: 71%;
  left: 66%;
  width: 120px;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  /*font-weight: bold;*/
}
h1 {
  font-weight: 600;
  font-size: 48px;
}
p {
  font-size: 18px;
}
</style>
