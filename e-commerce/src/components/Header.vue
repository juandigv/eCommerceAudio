<template>
  <div class="header">
    <img alt="" class="healthy-logo-2-1" src="../assets/HealthyLogo.png" />
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

<style scoped>
* {
  box-sizing: border-box;
}
*:focus,
*:hover {
  outline: none;
}

.header {
  background: linear-gradient(
      var(--v-primary500-base),
      var(--v-primary500-base)
    ),
    var(--v-charcoal50-base);
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.healthy-logo-2-1 {
  width: 144px;
  height: 80px;
  margin-right: 32px;
  border-radius: 8px;
  margin-left: 0px;
}
.buttons {
  display: flex;
  left: 220px;
  margin-right: 64px;
}

.button-header {
  width: 120px;
  height: 32px !important;
  margin-right: 16px;
  position: relative;
  text-transform: none;
}
.button {
  background-color: var(--v-charcoal50-base);
  border-radius: 32px;
  padding-left: 22px;
  padding-right: 1px;
  padding-top: 2px;
  padding-bottom: 2px;
  position: relative;
  background-color: var(--v-charcoal50-base);
  width: 120px;
  min-width: 30px;
  height: 32px;
}
.btn-label {
  margin: 0px;
  height: 100%;
  width: 100%;
  color: var(--v-primary500-base);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.vector {
  width: 20%;
  height: 75%;
  position: absolute;
  left: 14px;
  flex: 1;
  top: 4px;
}
.search-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.searchbar {
  padding: 8px;
  padding-left: 14px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  background-color: var(--v-charcoal50-base);
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  max-width: 280px;
  height: 42px;
}
.search-button {
  margin-top: 8px;
  background: var(--v-charcoal50-base);
  border: none;
  cursor: pointer;
  min-height: 42px;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  min-height: 42px;
}
</style>
