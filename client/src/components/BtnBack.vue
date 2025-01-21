<template>
  <v-btn
    color="warning"
    dark
    width="140"
    height="45"
    class="d-flex align-center"
    rounded
    v-bind="$attrs"
  >
    <IconBack width="20" class="ml-6" />
    بازگشت
  </v-btn>
</template>

<script setup lang="ts">
import IconBack from "@/icons/Main/IconArrowRight.vue";
</script>
