<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-text-field
      class="vira-input-number  vira-ltr"
      :label="label"
      :rules="[rules.required, rules.enCharWidthNum]"
      :value="value"
      :append-icon="appendIcon"
      required
      @input="$emit('input', $event)"
    >
      <template #append>
        <span :class="!append==null ? 'red--text' : 'mr-3' "> {{ append }}</span>
      </template>
    </v-text-field>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "TextEnNum",
  props: {
    label: { type: String, default: null },
    value: { type: String, default: null },
    append: { type: String, default: null },
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
        enCharWidthNum: (v) => {
          const numEn = /[0-9]$/gi;
          return numEn.test(v) || "فقط اعداد انگلیسی مجاز است";
        },
      },
    };
  },
};
</script>
<style lang="scss">
.vira-input-number {
  .v-input__append-inner {
    order: -1;
    // padding-right: 1rem !important;
    line-height: 1 !important;
  }
}
</style>
