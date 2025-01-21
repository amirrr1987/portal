<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-select
      :items="categories"
      item-text="title"
      item-value="_id"
      label="صنف"
      :rules="[rules.required]"
      required
      :value="value"
      @input="$emit('input', $event)"
    />
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Category",

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
      allCategory: [

      ],
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
  computed: {
    categories() {
      return this.allCategory.filter((item) => item.stateId == this.stateId);
    },
  },



  mounted() {
    this.$http.get(`${process.env.VUE_APP_API_CATEGORY}`).then((res) => {
      this.allCategory = res.data.data;
    });
  },


};
</script>
