<template>
  <v-col v-bind="colProps">
    <v-autocomplete
      :disabled="isUpdating"
      :items="acceptors"
      :loading="isUpdating"
      :label="label"
      item-text="name"
      item-value="_id"
      :model-value="modelValue"
      :rules="[rules.required]"
      required
      auto-select-first
      clearable
      @update:model-value="updateModelValue"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount, computed } from "vue";
import { useAuthStore } from "@/stores/authStore";
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

const authStore = useAuthStore();
const isUpdating = ref(false);
const acceptors = ref<any[]>([]);

const colProps = computed(() => ({
  cols: props.cols,
  sm: props.sm,
  md: props.md,
  lg: props.lg,
  xl: props.xl,
}));

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};

const updateModelValue = (value: string) => {
  emit("update:modelValue", value);
};

watch(isUpdating, (val) => {
  if (val) {
    setTimeout(() => (isUpdating.value = false), 3000);
  }
});

onBeforeMount(() => {
  getAcceptorsData();
});

const getAcceptorsData = async () => {
  try {
    const response = await axios.get(`${authStore.privateKey}/accepter`);
    acceptors.value = response.data.ASREVIRA.docs;
  } catch (err) {
    console.error(err);
  }
};
</script>
