<template>
  <v-snackbar
    content-class="text-center"
    timeout="2000"
    color="green"
    app
    top
    left
    :model-value="props.value"
    @update:model-value="(event) => emit('input', event)"
  >
    درخواست شما با موفقیت انجام شد.
  </v-snackbar>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  value?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  value: false,
});

const emit = defineEmits(["input"]);
</script>

<style>
/* Add your styles here */
</style>
