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
      :rules="[rules.required]"
      :model-value="props.value"
      :append-icon="props.appendIcon"
      @update:model-value="(event) => emit('input', event)"
      required
    >
      <slot name="amirrr"></slot>
    </v-text-field>
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label?: string;
  value?: string | null;
  appendIcon?: string | null;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: null,
  value: null,
  appendIcon: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(["input"]);

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};
</script>
