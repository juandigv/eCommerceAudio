<template>
  <div class="main-content">
    <v-row justify="space-between" no-gutters>
      <v-col>
        <AccountForm />
      </v-col>
      <v-col>
         <h1>Blank</h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AccountForm from "@/components/AccountForm.vue";

export default {
  name: "Home",
  components: {
    AccountForm,
  },
};
</script>

<style scoped>
.main-content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
</style>
