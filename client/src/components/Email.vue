<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
    class="d-flex"
  >
    <slot name="before" />
    <v-text-field
      class="vira-ltr vira-input-en"
      type="email"

      :label="label"
      :value="value"
      @input="$emit('input', $event)"
    />
    <slot name="after" />
  </v-col>
</template>
<script lang="ts">
export default {
  name: "Email",
  props: {
    label: { type: String, default: "پست الکترونیکی" },
    value: { type: String, default: null },
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
        email: (v) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(v) || "پست الکترونیک صحیح نمی‌باشد";
        },
      },
    };
  },
};
</script>
