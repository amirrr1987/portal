<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-select
      :items="states"
      item-text="name"
      item-value="id"
      label="استان"
      :rules="[rules.required]"
      required
      :value="value"
      @input="$emit('input', $event)"
    />
  </v-col>
</template>

<script lang="ts">
export default {
  name: "State",

  props: {
    value: { type: Number, default: null },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
    countryId: { type: Number, default: null },
  },
  data() {
    return {
      allStates: [],
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
  computed: {
    states() {
      return this.allStates.filter((item) => item.countryId == this.countryId);
    },
  },
  mounted() {
    this.$http.get(process.env.VUE_APP_API_PROVINCE).then((res) => {
      this.allStates = res.data;
    });
  },
};
</script>
