<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-text-field
      :type="iconPassword ? 'text' : 'password'"
      :model-value="props.value"
      :append-icon="iconPassword ? 'mdi-eye' : 'mdi-eye-off'"
      required
      class="vira-ltr vira-input-en vira-password-icon"
      label="تکرار رمز عبور"
      :rules="[rules.required, rules.passwordMatch]"
      autocomplete="on"
      placeholder=" "
      @update:model-value="(event) => emit('input', event)"
      @click:append="iconPassword = !iconPassword"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  value?: string | undefined;
  forCheck?: string | undefined;
  cols?: string | undefined;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  forCheck: undefined,
  cols: "12",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
});

const emit = defineEmits(["input"]);

const iconPassword = ref(false);

const checker = computed(() => {
  return props.forCheck === props.value;
});

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
  passwordMatch: () => checker.value || "رمز عبورهای وارد شده مغایرت دارند",
};
</script>

<style>
/* Add your styles here */
</style>
