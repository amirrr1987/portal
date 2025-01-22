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
      :rules="[rules.required, rules.fa]"
      :model-value="props.value"
      :append-icon="props.appendIcon"
      required
      @update:model-value="(event) => emit('input', event)"
    />
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label?: string | undefined;
  value?: string | undefined;
  appendIcon?: string | undefined;
  cols?: string | undefined;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  value: undefined,
  appendIcon: undefined,
  cols: "12",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
});

const emit = defineEmits(["input"]);

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
  fa: (v: string) => {
    const fa = /^[آ-ی ء چ]+$/;
    return fa.test(v) || "فقط حروف فارسی مجاز است";
  },
};
</script>

<style>
/* Add your styles here */
</style>
