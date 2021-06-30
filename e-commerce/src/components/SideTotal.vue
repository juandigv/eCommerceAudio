<template>
  <v-container>
    <v-col>
      <v-row v-for="element in detailSale.listSale" :key="element.item">
        <v-col>
          <h3>{{ element.item }}</h3>
        </v-col>
        <v-col>
          <h3 class="right-text">{{ element.price }}</h3>
        </v-col>
      </v-row>
      <hr class="line my-6" />
      <v-row>
        <v-col>
          <h3>Cart Total</h3>
        </v-col>
        <v-col>
          <h3 class="right-text">{{ detailSale.total }}</h3>
        </v-col>
      </v-row>
      <button class="button-style my-8">Checkout</button>
      <v-select
        :items="detailSale.coupons"
        label="Coupon Codes"
        dense
        outlined
      ></v-select>
    </v-col>
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
.line {
  border-bottom: 1px solid var(--v-charcoal900-base);
}
.right-text {
  text-align: right;
}
.button-style {
  background-color: var(--v-primary500-base);
  color: var(--v-charcoal50-base);
  border-radius: 32px;
  width: 286px;
  height: 48px;
  font-size: 24px;
  line-height: 32px;
  margin-top: 16px;
}
</style>
