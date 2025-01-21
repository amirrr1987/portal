<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-text-field
      :label="label"
      :rules="[rules.required]"
      :value="value"
      :append-icon="appendIcon"
      @input="$emit('input', $event)"
      required
    >
      <slot name="amirrr"> </slot>
    </v-text-field>
  </v-col>
</template>

<script>
export default {
  name: "Texts",
  props: {
    label: { type: String, default: null },
    value: { type: String, default: null },
    appendIcon: { type: String, default: null },
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
      },
    };
  },
};
</script>
