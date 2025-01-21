<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <div>
      <slot name="header" />
    </div>

    <v-textarea
      outlined
      :label="props.label"
      :value="props.value"
      :rules="[rules.required]"
      required
      :class="props.className"
      @input="onInput"
    />

    <slot name="after" />
  </v-col>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

interface Props {
  label?: string;
  value?: string | null;
  className?: string | null;
  cols?: string;
  sm?: string | null;
  md?: string | null;
  lg?: string | null;
  xl?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  label: "آدرس",
  value: null,
  className: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits<{
  (event: "input", value: string): void;
}>();

const onInput = (value: string) => {
  emit("input", value);
};

const rules = {
  required: (value: string) => !!value || "این فیلد الزامی است",
};
</script>

<style></style>
