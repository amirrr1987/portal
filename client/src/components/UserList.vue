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
      return-object
      :model-value="props.value"
      required
      :rules="[rules.required]"
      v-on="$attrs"
      @update:model-value="submitUser"
    />
  </v-col>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount } from "vue";

interface User {
  _id: string;
  name: string;
}

interface Props {
  value?: string | null;
  label?: string;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: null,
  label: "",
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(["input", "submit"]);

const isUpdating = ref(false);
const users = ref<User[]>([]);
const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};

watch(isUpdating, (val) => {
  if (val) {
    setTimeout(() => (isUpdating.value = false), 3000);
  }
});

const getUsersData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_PRIVATE_KEY}/users`
    ); // Replace with your environment variable
    users.value = response.data.ASREVIRA.users;
  } catch (err) {
    console.error("Failed to fetch users:", err);
  }
};

const submitUser = (e: string) => {
  emit("input", e);
  const selectedUser = users.value.find((item) => item._id === e);
  if (selectedUser) {
    emit("submit", selectedUser);
  }
};

onBeforeMount(() => {
  getUsersData();
});
</script>

<style>
/* Add your styles here */
</style>
