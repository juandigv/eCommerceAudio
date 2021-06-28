<template>
  <v-container
    class="px-0"
    fluid
  >
		<v-col>
			<h3 class="titles">Filter Brand</h3>
			<v-checkbox
				class="filter-checkbox"
				v-model="brands"
				v-for="(element) in filterBrand"
				:key="element"
				:label="element"
				:value="element"
			></v-checkbox>

			<h3 class="titles">Filter Type</h3>
			<v-checkbox
				class="filter-checkbox"
				v-model="types"
				v-for="(element) in filterType"
				:key="element"
				:label="element"
				:value="element"
			></v-checkbox>

			<h3 class="titles">Sort By</h3>
			<v-radio-group v-model="radioGroup">
				<v-radio
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

.col {
	max-width: 288px;
	padding-left: 32px;
	padding-right: 32px;
	padding-top: 0px;
	padding-bottom: 0px;
}

.titles {
	margin-top: 40px;
	margin-bottom: 16px;
	font-size: 18px;
    line-height: 26px;
    font-weight: 600;
}

.filter-checkbox {
	color: var(--v-primary500-base) !important;
	margin-top: 0px;
	padding-top: 0px;
	margin-bottom: 16px;
	height: 24px;
	font-size: 18px;
    line-height: 26px;
    font-weight: 400;
}

.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child) {
    margin-bottom: 16px;
}

.v-application .primary--text {
    color: var(--v-primary500-base) !important;
    caret-color: var(--v-primary500-base) !important;
}
</style>