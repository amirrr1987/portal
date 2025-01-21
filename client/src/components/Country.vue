<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-select
      :items="allCountry"
      item-text="name"
      item-value="id"
      label="کشور"
      :rules="[rules.required]"
      required
      :value="value"
      @input="$emit('input', $event)"
    />
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Country",

  props: {
    value: { type: Number, default: null },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      allCountry: [],
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
  mounted() {
    this.$http.get(process.env.VUE_APP_API_COUNTRY).then((res) => {
      this.allCountry = res.data;
    });
  },
};
</script>
