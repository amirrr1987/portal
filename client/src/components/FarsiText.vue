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
      :rules="[rules.required, rules.fa]"
      :value="value"
      :append-icon="appendIcon"
      required
      @input="$emit('input', $event)"
    />
  </v-col>
</template>

<script lang="ts">
export default {
  name: "TextFa",
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
        fa: (v) => {
          const fa = /^[آ-ی ء چ]+$/;
          return fa.test(v) || "فقط حروف فارسی مجاز است";
        },
      },
    };
  },
};
</script>
