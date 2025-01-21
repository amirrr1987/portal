<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-text-field
      :label="label"
      class="vira-ltr"
      type="number"
      :rules="[rules.required, rules.enNum]"
      :value="value"
      :counter="counter"
      append-icon="mdi-percent"
      required
      @input="$emit('input', parseInt($event))"
    />
  </v-col>
</template>

<script lang="ts">
export default {
  name: "FullName",

  props: {
    label: { type: String, default: null },
    counter: { type: String, default: null },
    value: { type: Number, default: null },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
        enNum: (value) => 100 > value > 0 || ""
      },
    };
  },
};
</script>
