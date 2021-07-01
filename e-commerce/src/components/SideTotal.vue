<template>
  <v-container class="side-total">
    <v-row v-for="element in detailSale.listSale" :key="element.item">
      <v-col>
        <h3 class="semibold">{{ element.item }}</h3>
      </v-col>
      <v-col>
        <h3 class="right-text semibold">{{ element.price }}</h3>
      </v-col>
    </v-row>
    <hr class="line my-6" />
    <v-row>
      <v-col>
        <h3 class="semibold">Cart Total</h3>
      </v-col>
      <v-col>
        <h3 class="right-text semibold">{{ detailSale.total }}</h3>
      </v-col>
    </v-row>
    <button class="button-style semibold">CHECKOUT</button>
    <v-select
      :items="detailSale.coupons"
      label="Coupon Codes"
      dense
      outlined
    ></v-select>
  </v-container>
</template>

<script>
export default {
  name: "SideTotal",
  props: {
    detailSale: Object,
  },
};
</script>

<style lang="scss" src="./styles/sideTotal.scss" scoped></style>
