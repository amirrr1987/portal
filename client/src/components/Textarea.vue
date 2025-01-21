<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <div>
      <slot name="header" />
    </div>

    <v-textarea
      outlined
      :label="label"
      :value="value"
      :rules="[rules.required]"
      required
      :class="className"
      @input="$emit('input', $event)"
    />

    <slot name="after" />
  </v-col>
</template>

<script lang="ts">
export default {
  name: "TheTextarea",
  props: {
    label: { type: String, default: "آدرس" },
    value: { type: String, default: null },
    className: { type: String, default: null },
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

<style></style>
