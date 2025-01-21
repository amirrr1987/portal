<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-text-field
      :type="iconPassword ? 'text' : 'password'"
      :value="value"
      :append-icon="iconPassword ? 'mdi-eye' : 'mdi-eye-off'"
      required
      class="vira-ltr vira-input-en vira-password-icon"
      label="تکرار رمز عبور"
      :rules="[rules.required, rules.passwordMatch]"
      autocomplete="on"
      placeholder=" "
      @input="$emit('input', $event)"
      @click:append="iconPassword = !iconPassword"
    />
  </v-col>
</template>

<script lang="ts">
export default {
  name: "PasswordRepeat",
  props: {
    value: { type: String, default: "" },
    forCheck: { type: String, default: "" },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      iconPassword: false,
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
        passwordMatch: () =>
          this.checker || "رمز عبورهای وارد شده مغایرت دارند",
      },
    };
  },
  computed: {
    checker() {
      return this.forCheck === this.value;
    },
  },
};
</script>
