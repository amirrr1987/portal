<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
export default {
  name: "TheMain",
  data() {
    return {};
  },
};
</script>

<style>
</style>
