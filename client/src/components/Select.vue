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
  items?: any[];
  itemValue: string | undefined;
  itemText?: string | undefined;
  cols?: string | undefined;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  label: "آدرس",
  value: undefined,
  items: undefined,
  itemValue: undefined,
  itemText: "",
  cols: "12",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
});

const emit = defineEmits(["input"]);

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};
</script>
