<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-text-field
      :label="props.label"
      class="vira-ltr"
      type="number"
      :rules="[rules.required, rules.enNum]"
      :model-value="props.value"
      :counter="props.counter"
      append-icon="mdi-percent"
      required
      @update:model-value="(event) => emit('input', parseInt(event))"
    />
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label?: string;
  counter?: string;
  value?: number | null;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: null,
  counter: null,
  value: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(["input"]);

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
  enNum: (value: number) =>
    (value > 0 && value < 100) || "عدد باید بین 0 و 100 باشد",
};
</script>

<style>
/* Add your styles here */
</style>
