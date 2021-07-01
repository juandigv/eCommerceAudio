<template>
  <div class="header">
    <img alt="" class="healthy-logo-2-1" src="../assets/HealthyLogoV2.png" />
    <div class="buttons">
      <v-btn class="button-header" rounded :to="'/Products'">
        <div class="button">
          <p class="btn-label">Sales</p>
        </div>
        <img alt="" class="vector" src="../assets/sales.svg" />
      </v-btn>
      <v-btn class="button-header" rounded>
        <div class="button">
          <p class="btn-label">Support</p>
        </div>
        <img alt="" class="vector" src="../assets/support.svg" />
      </v-btn>
      <v-btn class="button-header" rounded :to="'/'">
        <div class="button">
          <p class="btn-label">Home</p>
        </div>
        <img alt="" class="vector" src="../assets/home.svg" />
      </v-btn>
      <v-btn class="button-header" rounded :to="'/Checkout'">
        <div class="button">
          <p class="btn-label">Cart</p>
        </div>
        <img alt="" class="vector" src="../assets/cart.svg" />
      </v-btn>
      <v-btn class="button-header" rounded>
        <div class="button">
          <p class="btn-label">Profile</p>
        </div>
        <img alt="" class="vector" src="../assets/profile.svg" />
      </v-btn>
    </div>
    <div class="search-container">
      <input type="text" class="searchbar" placeholder="Search.." />
      <v-btn icon color="var(--v-primary500-base)" class="search-button">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" src="./styles/header.scss" scoped></style>
