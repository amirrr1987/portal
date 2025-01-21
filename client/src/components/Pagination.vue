<template>
  <v-row justify="center" class="py-4">
    <v-col cols="12" md="6">
      <v-pagination
        class="py-3 vira-ltr"
        :model-value="props.value"
        :total-visible="5"
        :length="props.length"
        circle
        prev-icon="mdi-chevron-double-right"
        next-icon="mdi-chevron-double-left"
        @update:model-value="(event) => emit('update:model-value', event)"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  value?: number | null;
  length?: number | null;
}

const props = withDefaults(defineProps<Props>(), {
  value: null,
  length: null,
});

const emit = defineEmits(["update:model-value"]);
</script>

<style>
/* Add your styles here */
</style>
