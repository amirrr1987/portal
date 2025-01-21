<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <slot name="before"></slot>
    <v-card class="mx-lg-1 mx-xl-4 my-3 py-5">
      <v-btn
        :color="iconBgColor"
        class="total-item"
        absolute
        min-width="0"
        width="50"
        height="50"
        tile
      >
        <slot name="iconName"></slot>
      </v-btn>
      <v-card-subtitle class="text-center grey--text font-lg-1">{{ title }}</v-card-subtitle>
      <v-card-subtitle class="text-h3 text-center">{{ total.toLocaleString() }}</v-card-subtitle>
    </v-card>
    <slot name="after"></slot>
  </v-col>
</template>

<script>
export default {
  name: "TotalItem",
  props: {
    title: { type: String, default: "title" },
    total: { default: "null" },
    iconBgColor: { type: String, default: null },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
};
</script>

<style>
.total-item {
  top: -20px !important;
  right: -20px !important;
}
</style>
