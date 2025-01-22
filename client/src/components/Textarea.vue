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
  label?: string | undefined;
  value?: string | undefined;
  className?: string | undefined;
  cols?: string;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  label: "آدرس",
  value: undefined,
  className: undefined,
  cols: "12",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
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
