<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
    class="d-flex"
  >
    <slot name="before" />
    <v-text-field
      class="vira-ltr vira-input-en"
      type="email"
      :label="props.label"
      :model-value="props.value"
      @update:model-value="(event) => emit('input', event)"
      :rules="[rules.required, rules.email]"
    />
    <slot name="after" />
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Props {
  label?: string;
  value?: string | null;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: 'پست الکترونیکی',
  value: null,
  cols: '12',
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(['input']);

const rules = {
  required: (value: any) => !!value || 'این فیلد الزامی است',
  email: (v: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(v) || 'پست الکترونیک صحیح نمی‌باشد';
  },
};
</script>

<style>
/* Add your styles here */
</style>