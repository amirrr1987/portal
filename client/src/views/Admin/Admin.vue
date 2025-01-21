<template>
  <v-app>
    <TheNavbar />
    <TheMenu />
    <TheMain />
  </v-app>
</template>

<script setup lang="ts">
import TheNavbar from "@/layouts/Admin/Navbar.vue";
import TheMain from "@/layouts/Admin/Main.vue";
import TheMenu from "@/layouts/Admin/Menu.vue";

// داده‌های reactive
const drawer = ref(true);
const clipped = ref(true);
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
