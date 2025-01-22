<template>
  <v-main
    :class="{
      'grey lighten-3': isSmAndUp,
    }"
  >
    <v-container class="py-16 d-flex align-center">
      <v-row justify="center">
        <v-col cols="12" sm="12" md="10" lg="10" xl="8">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-main>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import Footer from "@/layouts/Admin/Footer";

const { smAndUp: isSmAndUp } = useDisplay();
</script>

<style lang="scss">
.v-main {
  min-height: calc(100vh - 64px);
}
.v-main__wrap {
  display: grid;
  grid-template-rows: 1fr max-content;
}
</style>
