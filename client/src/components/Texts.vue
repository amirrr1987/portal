<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-text-field
      :label="label"
      :rules="validRules"
      :value="value"
      :class="isEng(value) ? `english-font vira-ltr` : ''"
      :append-icon="appendIcon"
      @input="$emit('input', $event)"
      required
    />
  </v-col>
</template>

<script>
export default {
  name: "Texts",
  props: {
    label: { type: String, default: "" },
    appendIcon: { type: String, default: "" },
    value: { type: String, default: "" },
    validations: { type: Array, default: null },
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
        persianAndEnghlish: (v) => {
          const persianAndEnghlish = /^[A-Za-z0-9آ-ی ء چ ۰-۹]+$/;
          if (!v == "") {
            return (
              persianAndEnghlish.test(v) || "فقط اعداد و حروف فارسی و انگلیسی مجاز است"
            );
          } else {
            return;
          }
        },
        persian: (v) => {
          const persian = /^[آ-ی ء چ ۰-۹]+$/;
          if (!v == "") {
            return persian.test(v) || "فقط فارسی مجاز است";
          } else {
            return;
          }
        },
        persianCharachter: (v) => {
          const persianCharachter = /^[آ-ی ء چ]+$/;
          if (!v == "") {
            return persianCharachter.test(v) || "فقط حروف فارسی مجاز است";
          } else {
            return;
          }
        },
        persianNumber: (v) => {
          const persianNumber = /^[۰-۹]+$/;
          if (!v == "") {
            return persianNumber.test(v) || "فقط اعداد فارسی مجاز است";
          } else {
            return ;
          }
        },
        english: (v) => {
          const english = /^[A-Za-z0-9]+$/;
          if (!v == "") {
            return english.test(v) || "فقط انگلیسی مجاز است";
          } else {
            return;
          }
        },
        englishCharachter: (v) => {
          const englishCharachter = /^[A-Za-z]+$/;
          if (!v == "") {
            return englishCharachter.test(v) || "فقط حروف انگلیسی مجاز است";
          } else {
            return;
          }
        },
        englishNumber: (v) => {
          const englishNumber = /^[0-9]+$/;
          if (!v == null) {
            return englishNumber.test(v) || "فقط اعداد انگلیسی مجاز است";
          } else {
            return;
          }
        },
      },
      validRules: [],
    };
  },
  methods: {
    isEng(str) {
      const en = /^[a-zA-Z0-9]/gi;
      return en.test(str);
    },
  },
  mounted() {
    this.validations.forEach((item) => {
      this.validRules.push(this.rules[item]);
    });
  },
};
</script>
<style lang="scss">
.english-font {
  input {
    font-family: Arial, sans-serif !important;
  }
}
</style>
