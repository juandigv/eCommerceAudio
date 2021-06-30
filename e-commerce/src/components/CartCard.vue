<template>
  <v-card width="906px" height="192px" color="var(--v-charcoal100-base)">
    <v-row>
      <v-col class="col-separation">
        <v-img
          class="product-image"
          :aspect-ratio="1 / 1"
          :src="detailCard.img"
        ></v-img>
      </v-col>
      <v-col>
        <div>
          <div class="main-title">{{ detailCard.title }}</div>
          <div class="description1">{{ detailCard.description1 }}</div>
          <div class="description2">{{ detailCard.description2 }}</div>
          <v-row class="div-inside">
            <v-select class="dropdown" :items="items"></v-select>
            <button class="button-style">Remove</button>
            <div class="price">{{ detailCard.price }}</div>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CartCard",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  components: {},
  computed: {},
  methods: {},
  props: {
    detailCard: Object,
  },
};
</script>

<style scoped>
.product-image {
  width: 144px;
  margin: 24px;
}
.row {
  margin: 0px;
}
.col {
  padding: 0px;
}
.col-separation {
  width: 256px;
  margin-right: -520px;
}
.div-inside {
  margin: 0px;
  margin-top: 20px;
}
.main-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  margin-top: 24px;
}
.description1 {
  font-size: 12px;
  line-height: 18px;
  margin-top: 16px;
}
.description2 {
  font-size: 12px;
  line-height: 18px;
  margin-top: 12px;
}
.dropdown {
  max-height: 34px;
  max-width: 52px;
  font-size: 12px;
  line-height: 18px;
  margin-right: 24px;
}
.v-text-field {
  padding-top: 0px;
  margin-top: 0px;
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 34px;
  max-width: 52px;
}
.button-style {
  background-color: var(--v-charcoal100-base);
  color: var(--v-primary500-base);
  width: 128px;
  height: 34px;
  font-size: 12px;
  line-height: 18px;
  margin-right: 400px;
}
.price {
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  text-align: right;
  margin-right: 24px;
  align-self: center;
}
</style>
