<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-text-field
      class="vira-ltr vira-input-en"
      :label="label"
      :rules="[rules.required, rules.enCharWidthNum]"
      :model-value="props.modelValue"
      required
      @update:model-value="emit('update:modelValue', $event)"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  label: { type: String, default: null },
  modelValue: { type: String, default: null },
  cols: { type: String, default: "12" },
  sm: { type: String, default: null },
  md: { type: String, default: null },
  lg: { type: String, default: null },
  xl: { type: String, default: null },
});

const emit = defineEmits(["update:modelValue"]);

const rules = {
  required: (value: string) => !!value || "این فیلد الزامی است",
  enCharWidthNum: (v: string) => {
    const numEn = /^[A-Za-z0-9]+$/;
    return numEn.test(v) || "فقط انگلیسی مجاز است";
  },
};
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
