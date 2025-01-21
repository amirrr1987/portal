<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-radio-group
      row
      :label="label"
      :value="value"
      :rules="[rules.required]"
      required
      @change="changeValue"
    >
      <v-radio
        label="مرد"
        value="0"
      />
      <v-radio
        label="زن"
        value="1"
      />
    </v-radio-group>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Gender",
  props: {
    label: { type: String, default: "جنسیت" },
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
        required: v => !!v || "این فیلد الزامی است",


      },
    };
  },
  methods: {
    changeValue(e) {
      this.$emit("input", e);
    },
  },
};
</script>
<style lang="scss">
.v-input--radio-group{

.v-messages__message {
    margin-right: 5rem;
}
}
</style>
