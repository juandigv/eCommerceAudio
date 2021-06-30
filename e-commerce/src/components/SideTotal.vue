<template>
  <v-container class="side-total">
    <v-row v-for="element in detailSale.listSale" :key="element">
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

<style scoped>
.side-total {
  max-width: 286px;
  padding: 0px;
}
.line {
  border-bottom: 1px solid var(--v-charcoal900-base);
}
.right-text {
  text-align: right;
}
.semibold {
  font-weight: 600;
}
.button-style {
  background-color: var(--v-primary500-base);
  color: var(--v-charcoal50-base);
  border-radius: 32px;
  width: 286px;
  height: 48px;
  font-size: 24px;
  line-height: 32px;
  margin-top: 32px;
  margin-bottom: 64px;
}
</style>
