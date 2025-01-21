<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-select
      :items="wallets"
      item-text="title"
      item-value="_id"
      :label="props.label"
      :model-value="props.modelValue"
      :rules="[rules.required]"
      required
      @update:model-value="emit('update:modelValue', $event)"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface Props {
  modelValue?: string;
  label?: string;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  label: "",
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(["update:modelValue"]);

const wallets = ref<any[]>([]);

const rules = {
  required: (value: string) => !!value || "این فیلد الزامی است",
};

onMounted(async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_APP_API_WALLET);
    wallets.value = response.data.data;
  } catch (error) {
    console.error("Error fetching wallets:", error);
  }
});
</script>
