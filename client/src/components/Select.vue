<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-select
        :items="items"
      :item-text="itemText"
      :item-value="itemValue"
      :label="label"
      :rules="[rules.required]"
      :value="value"
      @input="$emit('input', $event)"
      required
    />
  </v-col>
</template>
<script>
export default {
  name: "Select",
  props: {
    label: { type: String, default: "آدرس" },
    value: { type: String, default: null },
    items: { type: Array, default: null },
    itemValue: { type: Number, default: null  },
    itemText: { type: String, default: "" },
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