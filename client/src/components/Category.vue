<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-select
      :items="categories"
      item-text="title"
      item-value="_id"
      label="صنف"
      :rules="[rules.required]"
      required
      :model-value="props.value"
      @update:model-value="(value) => emit('update:modelValue', value)"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
interface Props {
  value: string;
  cols: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
// Define the props
const props = withDefaults(defineProps<Props>(), {
  value: null,
  cols: "12",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
});

// Define the emit function
const emit = defineEmits(["update:modelValue"]);

// Define reactive data
const allCategory = ref<Array<{ _id: number; title: string; stateId: number }>>(
  []
);

// Define rules
const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};

// Computed property for filtered categories
const categories = computed(() => {
  return allCategory.value.filter((item) => item.stateId === stateId.value);
});

// Fetch categories on mount
onMounted(async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_APP_API_CATEGORY}`);
    const data = await response.json();
    allCategory.value = data.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }
});
</script>
