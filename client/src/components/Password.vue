<template>
  <v-col
    :cols="cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-text-field
      label="رمز عبور"
      class="vira-ltr vira-input-en vira-password-icon"
      counter
      required
      :type="iconPassword ? 'text' : 'password'"
      :rules="[rules.required, rules.passwordMin, rules.english]"
      :append-icon="iconPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :model-value="props.modelValue"
      autocomplete="on"
      placeholder=" "
      @update:model-value="emit('update:modelValue', $event)"
      @click:append="iconPassword = !iconPassword"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  modelValue: string;
  cols: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  cols: "12",
  sm: "",
  md: "",
  lg: "",
  xl: "",
});

const emit = defineEmits(["update:modelValue"]);

const iconPassword = ref(false);

const rules = {
  required: (value: string) => !!value || "این فیلد الزامی است",
  passwordMin: (value: string) =>
    value.length >= 4 || "رمز عبور باید حداقل ۸ کاراکتر باشد",
  english: (v: string) => {
    const en = /^[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%^&*|']+$/;
    return en.test(v) || "فقط اعداد و حروف انگلیسی مجاز است";
  },
};
</script>
