<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-card :color="color" class="bank-card text-center">
      <v-responsive class="d-flex align-center" :aspect-ratio="16 / 9">
        <div class="white--text vira-ltr pb-3">IR{{ sheba }}</div>
        <div class="white--text">
          {{ label }}
        </div>
        <v-btn icon class="position-absolute" @click="onDelete">
          <IconDelete width="18" height="18" />
        </v-btn>
      </v-responsive>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import IconDelete from "@/icons/Main/IconDelete";

interface Props {
  label?: string;
  sheba?: string;
  color?: string;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "بانک گلابی",
  sheba: "------------------",
  color: "black",
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits<{
  (event: "delete"): void;
}>();

const onDelete = () => {
  emit("delete");
};
</script>

<style scoped>
.position-absolute {
  position: absolute !important;
  right: 10px;
  bottom: 10px;
}
</style>
