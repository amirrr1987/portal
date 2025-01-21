<template>
  <div>
    <v-text-field
      :label="props.label"
      class="vira-input-ltr"
      :model-value="props.value"
      @update:model-value="(event) => emit('input', parseInt(event))"
      :counter="props.counter"
      :append-icon="props.appendIcon"
      required
    >
      <template v-slot:append>
        <span class="mr-3">{{ props.append }}</span>
      </template>
    </v-text-field>
    {{ props.type }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label?: string;
  counter?: string;
  value?: number | null;
  append?: string;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: null,
  counter: null,
  value: null,
  append: "ریال",
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
  type: "info",
});

const emit = defineEmits(["input"]);
</script>
