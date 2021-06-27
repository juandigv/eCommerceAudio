<template>
  <v-container
    class="px-0"
    fluid
  >
		<v-col>
			<h3>Filter Brand</h3>
			<v-checkbox
				class="filter-colors"
				v-model="brands"
				v-for="(element) in filterBrand"
				:key="element"
				:label="element"
				:value="element"
			></v-checkbox>

			<h3>Filter Type</h3>
			<v-checkbox
				class="filter-colors"
				v-model="types"
				v-for="(element) in filterType"
				:key="element"
				:label="element"
				:value="element"
			></v-checkbox>

			<h3>Sort By</h3>
			<v-radio-group v-model="radioGroup">
				<v-radio
					class="filter-colors"
					v-for="(element, index) in sortBy"
					:key="index"
					:label="element"
					:value="element"
				></v-radio>
			</v-radio-group>
		</v-col>
  </v-container>
</template>

<script>
export default {
  name: "Filters",

  data () {
		return {
			brands: [],
			types: [],
			radioGroup: 1,
			filterBrand: ["Bose", "Beats", "LG", "Sony"],
			filterType: ["Speakers", "Headphones", "Headsets", "Earpods"],
			sortBy: ["Relevant", "Price: Lowest", "Price: Highest", "Highest Rated"],
		}
	},
};
</script>

<style lang="scss" scoped>
@import '../sass/variables.scss';

.filter-colors {
	color: var(--v-primary500-base) !important;
	font-family: $body-font-family;
}
.v-application .primary--text {
    color: var(--v-primary500-base) !important;
    caret-color: var(--v-primary500-base) !important;
}
</style>