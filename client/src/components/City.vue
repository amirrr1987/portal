<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-select
      :items="cities"
      item-text="name"
      item-value="id"
      label="شهر"
      :rules="[rules.required]"
      required
      :value="value"
      @input="$emit('input', $event)"
    />
  </v-col>
</template>

<script lang="ts">
export default {
  name: "City",

  props: {
    value: { type: Number, default: null },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
    stateId: { type: Number, default: null },
  },
  data() {
    return {
      allCities: [],
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
  computed: {
    cities() {
      return this.allCities.filter((item) => item.stateId == this.stateId);
    },
  },
  mounted() {
    this.$http.get(process.env.VUE_APP_API_CITY).then((res) => {
      this.allCities = res.data;
    });
  },
};
</script>
