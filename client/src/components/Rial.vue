<template>
  <div class="">
  <v-text-field
    :label="label"
    class="vira-input-ltr"
    :value="value"
    @input="$emit('input', parseInt($event))"
    :counter="counter"
    :append-icon="appendIcon"
    required
  >
    <template v-slot:append>
      <span class="mr-3"> {{ append }}</span>
    </template>
  </v-text-field>{{type}}</div>
</template>

<script>
export default {
  name: "Rial",
  props: {
    label: { type: String, default: null },
    counter: { type: String, default: null },
    value: { type: Number, default: null },
    append: { type: String, default: "ریال" },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },

    type: {
      required: false,
      type: String,
      default: "info",
      validator: (value) =>value.toLowerCase(),
    },
  },
};
</script>

<style>
</style>