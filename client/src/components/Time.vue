<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-text-field
      type="number"
      pattern="[0-9]"
      @keypress.e.prevent=""
      @keypress.+.prevent=""
      :label="label"
      :rules="[rules.required, rules.englishNumber]"
      :value="value"
      class="vira-input-number vira-ltr"
      @input="$emit('input', $event)"
      required
    >
      <template v-slot:append>
        {{ append }}
      </template>
    </v-text-field>
  </v-col>
</template>

<script>
export default {
  name: "Numbers",
  props: {
    label: { type: String, default: "" },
    append: { type: String, default: "" },
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
        englishNumber: (v) => {
          const englishNumber = /^[0-9]+$/;
          return englishNumber.test(v) || "فقط اعداد انگلیسی مجاز است";
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
    padding-right: 1rem !important;
    line-height: 1 !important;
  }
}
</style>
