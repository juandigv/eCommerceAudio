<template>
  <div class="bg-red">
    <h1 class="heading">Create Your Account</h1>
    <h2 class="subheading">First Name *</h2>
    <v-text-field
      class="text-field"
      background-color="var(--v-charcoal50-base)"
      single-line
      outlined
    ></v-text-field>
    <h2 class="subheading">Last Name *</h2>
    <v-text-field
      class="text-field"
      background-color="var(--v-charcoal50-base)"
      single-line
      outlined
    ></v-text-field>
    <h2 class="subheading">Email *</h2>
    <v-text-field
      class="text-field"
      background-color="var(--v-charcoal50-base)"
      single-line
      outlined
    ></v-text-field>
    <h2 class="subheading">Password *</h2>
    <v-text-field
      class="text-field"
      background-color="var(--v-charcoal50-base)"
      single-line
      outlined
    ></v-text-field>
    <div style="margin-top: 32px">
      <v-checkbox
        class="filter-checkbox"
        color="var(--v-primary500-base)"
        v-for="element in checkLegal"
        :key="element"
        :label="element"
        :value="element"
        dense
      />
    </div>
    <v-btn class="product-button" rounded color="var(--v-primary500-base)">
      Submit
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "AccountForm",
  data() {
    return {
      checkLegal: [
        "I agree to the applications terms and conditions",
        "I want to subscribe to the news feed",
      ],
    };
  },
};
</script>
<style src="./accountForm.css" scoped></style>
