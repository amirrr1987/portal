<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-text-field
      type="number"
      pattern="[0-9]"
      :label="props.label"
      :rules="[rules.required, rules.englishNumber]"
      :model-value="props.value"
      class="vira-input-number vira-ltr"
      required
      @keypress.e.prevent=""
      @keypress.+.prevent=""
      @update:model-value="(event) => emit('input', event)"
    >
      <template #append>
        {{ props.append }}
      </template>
    </v-text-field>
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label?: string | undefined;
  append?: string | undefined;
  value?: number | null | undefined;
  cols?: string | undefined;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  append: undefined,
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
  englishNumber: (v: string) => {
    const englishNumber = /^[0-9]+$/;
    return englishNumber.test(v) || "فقط اعداد انگلیسی مجاز است";
  },
};
</script>

<style lang="scss">
.vira-input-number {
  .v-input__append-inner {
    order: -1;
    padding-right: 1rem !important;
    line-height: 1 !important;
  }
}
</style>
