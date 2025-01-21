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
      @keypress.e.prevent=""
      @keypress.+.prevent=""
      :label="props.label"
      :rules="[rules.required, rules.englishNumber]"
      :model-value="props.value"
      class="vira-input-number vira-ltr"
      @update:model-value="(event) => emit('input', event)"
      required
    >
      <template v-slot:append>
        {{ props.append }}
      </template>
    </v-text-field>
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label?: string;
  append?: string;
  value?: number | null;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  append: "",
  value: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
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
