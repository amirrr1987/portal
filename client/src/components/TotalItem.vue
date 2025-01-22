<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <slot name="before"></slot>
    <v-card class="mx-lg-1 mx-xl-4 my-3 py-5">
      <v-btn
        :color="props.iconBgColor"
        class="total-item"
        absolute
        min-width="0"
        width="50"
        height="50"
        tile
      >
        <slot name="iconName"></slot>
      </v-btn>
      <v-card-subtitle class="text-center grey--text font-lg-1">{{
        props.title
      }}</v-card-subtitle>
      <v-card-subtitle class="text-h3 text-center">{{
        totalFormatted
      }}</v-card-subtitle>
    </v-card>
    <slot name="after"></slot>
  </v-col>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  title?: string | undefined;
  total?: number | undefined;
  iconBgColor?: string | undefined;
  cols?: string | undefined;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  title: "title",
  total: 0,
  iconBgColor: undefined,
  cols: "12",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
});

const totalFormatted = computed(() => {
  if (typeof props.total === "number") {
    return props.total.toLocaleString();
  }
  return props.total;
});
</script>

<style>
.total-item {
  top: -20px !important;
  right: -20px !important;
}
</style>
