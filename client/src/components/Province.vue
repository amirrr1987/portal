<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-select
      :items="states"
      item-text="name"
      item-value="id"
      label="استان"
      :rules="[rules.required]"
      required
      :model-value="props.value"
      @update:model-value="(event) => emit('input', event)"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface State {
  id: number;
  name: string;
  countryId: number;
}

interface Props {
  value?: number | null;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  countryId?: number | null;
}

const props = withDefaults(defineProps<Props>(), {
  value: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
  countryId: null,
});

const emit = defineEmits(["input"]);

const allStates = ref<State[]>([]);
const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};

const states = computed(() => {
  return allStates.value?.filter((item) => item.countryId === props.countryId);
});

onMounted(async () => {
  const response = await fetch(import.meta.env.VITE_APP_API_PROVINCE); // Replace with your environment variable
  allStates.value = response.data;
});
</script>

<style>
/* Add your styles here */
</style>
