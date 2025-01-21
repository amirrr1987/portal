<template>
  <v-app class="agent">
    <TheNavbar />
    <TheMenu />
    <TheMain />
  </v-app>
</template>

<script setup lang="ts">
import TheNavbar from "@/layouts/Agent/Navbar.vue";
import TheMain from "@/layouts/Agent/Main.vue";
import TheMenu from "@/layouts/Agent/Menu.vue";

// داده‌های reactive
const drawer = ref(true);
const clipped = ref(true);
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
