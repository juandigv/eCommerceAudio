<template>
  <v-container class="px-0" fluid>
    <v-col>
      <h3 class="titles">Filter Brand</h3>
      <v-checkbox
        class="filter-checkbox"
        color="var(--v-primary500-base)"
        v-model="brands"
        v-for="element in filterBrand"
        :key="element"
        :label="element"
        :value="element"
      ></v-checkbox>

      <h3 class="titles">Filter Type</h3>
      <v-checkbox
        class="filter-checkbox"
        color="var(--v-primary500-base)"
        v-model="types"
        v-for="element in filterType"
        :key="element"
        :label="element"
        :value="element"
      ></v-checkbox>

      <h3 class="titles">Sort By</h3>
      <v-radio-group v-model="radioGroup">
        <v-radio
          color="var(--v-primary500-base)"
          v-for="(element, index) in sortBy"
          :key="index"
          :label="element"
          :value="element"
        ></v-radio>
      </v-radio-group>

      <v-btn class="button-style">CLEAR</v-btn>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Filters",

  data() {
    return {
      brands: [],
      types: [],
      radioGroup: 1,
      filterBrand: ["Bose", "Beats", "LG", "Sony"],
      filterType: ["Speakers", "Headphones", "Headsets", "Earpods"],
      sortBy: ["Relevant", "Price: Lowest", "Price: Highest", "Highest Rated"],
    };
  },
};
</script>

<style lang="scss" src="./styles/filters.scss" scoped></style>
