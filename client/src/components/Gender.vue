<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-radio-group
      row
      :label="props.label"
      :model-value="props.value"
      :rules="[rules.required]"
      required
      @update:model-value="changeValue"
    >
      <v-radio label="مرد" value="0" />
      <v-radio label="زن" value="1" />
    </v-radio-group>
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label?: string;
  value?: string | null;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "جنسیت",
  value: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(["input"]);

const rules = {
  required: (v: any) => !!v || "این فیلد الزامی است",
};

const changeValue = (e: string) => {
  emit("input", e);
};
</script>

<style lang="scss">
.v-input--radio-group {
  .v-messages__message {
    margin-right: 5rem;
  }
}
</style>
