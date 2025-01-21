<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-autocomplete
      :disabled="isUpdating"
      :items="users"
      :loading="isUpdating"
      :label="props.label"
      item-text="name"
      item-value="_id"
      :model-value="props.modelValue"
      :rules="[rules.required]"
      required
      @update:model-value="emit('update:modelValue', $event)"
      @change="submitUser"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import { useAuthStore } from "@/stores/authStore"; // Import Pinia store

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

const emit = defineEmits(["update:modelValue", "submit"]);

const authStore = useAuthStore(); // استفاده از Pinia store

const isUpdating = ref(false);
const users = ref<any[]>([]);

const rules = {
  required: (value: string) => !!value || "این فیلد الزامی است",
};

watch(isUpdating, (val) => {
  if (val) {
    setTimeout(() => (isUpdating.value = false), 3000);
  }
});

const getUsersData = async () => {
  try {
    const response = await axios.get(`${authStore.privateKey}/users`);
    users.value = response.data.ASREVIRA.users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const submitUser = (e: string) => {
  emit("update:modelValue", e);
  emit(
    "submit",
    users.value.find((item) => item._id === e)
  );
};

onMounted(() => {
  getUsersData();
});
</script>
