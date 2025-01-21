<template>
  <v-app>
    <TheNavbar />
    <TheMain />
    <TheFooter />
  </v-app>
</template>

<script setup lang="ts">
import TheNavbar from "@/layouts/User/Navbar.vue";
import TheMain from "@/layouts/User/Main.vue";
import TheFooter from "@/layouts/User/Footer.vue";

// داده‌های reactive
const drawer = ref(true);
const clipped = ref(true);
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
