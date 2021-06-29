<template>
  <div class="banner">
    <div class="banner-text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        pellentesque ante non nisl dignissim,
      </p>
      <button class="button-style">Learn More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
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
  padding: 70px;
  position: relative;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
}
.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--v-charcoal900-base);
}
.button-style {
  background-color: var(--v-charcoal100-base);
  border: 1px solid var(--v-primary500-base);
  color: var(--v-primary500-base);
  border-radius: 32px;
  width: 180px;
  height: 30px;
}
</style>
