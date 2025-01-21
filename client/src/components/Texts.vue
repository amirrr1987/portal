<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-text-field
      :label="props.label"
      :rules="validRules"
      :value="props.value"
      :class="isEng(props.value) ? 'english-font vira-ltr' : ''"
      :append-icon="props.appendIcon"
      required
      @input="onInput"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Props {
  label?: string;
  appendIcon?: string;
  value?: string;
  validations?: string[];
  cols?: string;
  sm?: string | null;
  md?: string | null;
  lg?: string | null;
  xl?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  appendIcon: "",
  value: "",
  validations: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits<{
  (event: "input", value: string): void;
}>();

const rules = {
  required: (value: string) => !!value || "این فیلد الزامی است",
  persianAndEnglish: (v: string) =>
    /^[A-Za-z0-9آ-ی ء چ ۰-۹]+$/.test(v) ||
    "فقط اعداد و حروف فارسی و انگلیسی مجاز است",
  persian: (v: string) => /^[آ-ی ء چ ۰-۹]+$/.test(v) || "فقط فارسی مجاز است",
  persianCharacter: (v: string) =>
    /^[آ-ی ء چ]+$/.test(v) || "فقط حروف فارسی مجاز است",
  persianNumber: (v: string) =>
    /^[۰-۹]+$/.test(v) || "فقط اعداد فارسی مجاز است",
  english: (v: string) => /^[A-Za-z0-9]+$/.test(v) || "فقط انگلیسی مجاز است",
  englishCharacter: (v: string) =>
    /^[A-Za-z]+$/.test(v) || "فقط حروف انگلیسی مجاز است",
  englishNumber: (v: string) =>
    /^[0-9]+$/.test(v) || "فقط اعداد انگلیسی مجاز است",
};

const validRules = ref<(value: string) => string | boolean>([]);

const isEng = (str: string): boolean => /^[a-zA-Z0-9]/gi.test(str);

onMounted(() => {
  props.validations?.forEach((item) => {
    if (rules[item as keyof typeof rules]) {
      validRules.value.push(rules[item as keyof typeof rules]);
    }
  });
});

const onInput = (value: string) => {
  emit("input", value);
};
</script>

<style lang="scss">
.english-font {
  input {
    font-family: Arial, sans-serif !important;
  }
}
</style>
