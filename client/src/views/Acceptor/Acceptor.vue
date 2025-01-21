<template>
  <v-app>
    <TheNavbar />
    <TheMenu />
    <TheMain />
  </v-app>
</template>

<script setup lang="ts">
import TheNavbar from "@/layouts/Acceptor/Navbar.vue";
import TheMain from "@/layouts/Acceptor/Main.vue";
import TheMenu from "@/layouts/Acceptor/Menu.vue";

// داده‌های reactive
const drawer = ref(true);
const clipped = ref(true);
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
