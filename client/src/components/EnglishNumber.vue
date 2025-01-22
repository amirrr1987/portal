<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-text-field
      class="vira-input-number vira-ltr"
      :label="props.label"
      :rules="[rules.required, rules.enCharWidthNum]"
      :model-value="props.value"
      :append-icon="props.appendIcon"
      required
      @update:model-value="(event) => emit('input', event)"
    >
      <template #append>
        <span :class="!props.append ? 'red--text' : 'mr-3'">{{
          props.append
        }}</span>
      </template>
    </v-text-field>
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label?: string | undefined;
  value?: string | undefined;
  append?: string | undefined;
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
  append: undefined,
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
  enCharWidthNum: (v: string) => {
    const numEn = /^[0-9]+$/; // Regex to allow only English numbers
    return numEn.test(v) || "فقط اعداد انگلیسی مجاز است";
  },
};
</script>

<style lang="scss">
.vira-input-number {
  .v-input__append-inner {
    order: -1;
    line-height: 1 !important;
  }
}
</style>
