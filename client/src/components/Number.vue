<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-text-field
      :label="label"
      class="vira-input-ltr"
      type="number"
      :min="minCount"
      :max="maxCount"
      :rules="validRules"
      :value="value"
      :counter="counter"
      :append-icon="appendIcon"
      required
      @input="onInput"
    >
      <template #append>
        <span :class="append ? 'mr-3' : ''"> {{ append }}</span>
      </template>
    </v-text-field>
  </v-col>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label?: string;
  counter?: string;
  value?: number;
  appendIcon?: string;
  append?: string;
  cols?: string;
  minCount?: number;
  maxCount?: number;
  validations?: string[];
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: null,
  counter: null,
  value: null,
  appendIcon: null,
  append: null,
  cols: "12",
  minCount: null,
  maxCount: null,
  validations: [],
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits<{
  (event: "update:value", value: number): void;
}>();

const rules = {
  required: (value: number | null) => !!value || "این فیلد الزامی است",
  enNum: (v: string | number) => {
    const enNum = /^[0-9]+$/;
    return enNum.test(String(v)) || "فقط اعداد انگلیسی مجاز است";
  },
  percentageNum: (v: string | number) => {
    const percentageNum = /^(100([.]0{1,2})?|[0-9]{1,2}([.]\d{1,2})?)$/;
    return (
      percentageNum.test(String(v)) || "اعداد انگلیسی بین ۱ تا ۱۰۰ مجاز است"
    );
  },
};

const validRules = computed(() => {
  return (props.validations || []).map((rule) => rules[rule]);
});

const onInput = (value: string) => {
  const parsedValue = parseInt(value, 10);
  emit("update:value", parsedValue);
};
</script>

<style scoped></style>
