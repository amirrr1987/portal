<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-select
      :items="allCountry"
      item-text="name"
      item-value="id"
      label="کشور"
      :rules="[rules.required]"
      required
      :model-value="props.value"
      @update:model-value="(event) => emit('update:model-value', event)"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useHttp } from "@/composables/useHttp"; // Replace with your HTTP composable or library

interface Props {
  value?: number | null;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(["update:model-value"]);

const allCountry = ref<Array<{ id: number; name: string }>>([]);
const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};

onMounted(async () => {
  const { get } = useHttp();
  const response = await get(import.meta.env.VITE_APP_API_COUNTRY); // Replace with your environment variable
  allCountry.value = response.data;
});
</script>
