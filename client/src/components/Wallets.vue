<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-select
      :items="wallets"
      item-text="title"
      item-value="_id"
      :label="label"
      :value="value"
      @input="$emit('input', $event)"
      :rules="[rules.required]"
      required
    />
  </v-col>
</template>

<script>
export default {
  name: "Wallets",
  props: {
    value: { type: String, default: null },
    label: { type: String, default: "" },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      wallets: [],
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
  mounted() {
    this.$http.get(process.env.VUE_APP_API_WALLET).then((res) => {
      this.wallets = res.data.data;
    });
  },
};
</script>

<style>
</style>