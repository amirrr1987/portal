<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-select
      :items="props.items"
      :item-text="props.itemText"
      :item-value="props.itemValue"
      :label="props.label"
      :rules="[rules.required]"
      :model-value="props.value"
      @update:model-value="(event) => emit('input', event)"
      required
    />
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label?: string;
  value?: string | null;
  items?: any[];
  itemValue?: number | null;
  itemText?: string;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "آدرس",
  value: null,
  items: null,
  itemValue: null,
  itemText: "",
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
