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
  label?: string | undefined;
  counter?: string | undefined;
  value?: number | undefined;
  cols?: string | undefined;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  counter: undefined,
  value: undefined,
  cols: "12",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
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
