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
  label?: string | undefined;
  counter?: string | undefined;
  value?: number | undefined;
  append?: string | undefined;
  cols?: string | undefined;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
  type?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  counter: undefined,
  value: undefined,
  append: "ریال",
  cols: "12",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: null,
  type: "info",
});

const emit = defineEmits(["input"]);
</script>
