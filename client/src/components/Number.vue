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
  label?: string | undefined;
  counter?: string | undefined;
  value?: number;
  appendIcon?: string | undefined;
  append?: string | undefined;
  cols?: string | undefined;
  minCount?: number;
  maxCount?: number;
  validations?: string[] | null;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  counter: undefined,
  value: undefined,
  appendIcon: undefined,
  append: undefined,
  cols: "12",
  minCount: undefined,
  maxCount: undefined,
  validations: null,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
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
