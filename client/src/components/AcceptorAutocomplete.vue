<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-autocomplete
      :disabled="isUpdating"
      :items="acceptors"
      :loading="isUpdating"
      :label="label"
      item-text="name"
      item-value="_id"
      :value="value"
      :rules="[rules.required]"
      required
      auto-select-first
      clearable
      @input="$emit('input', $event)"
    />
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Acceptors",

  props: {
    value: { type: String, default: null },
    label: { type: String, default: "" },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
emits: ['input'],
  data() {
    return {
      autoUpdate: true,
      isUpdating: false,
      acceptors: [],
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },
  beforeMount() {
    this.getAcceptorsData();
  },

  methods: {
    getAcceptorsData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(`${this.$privateKey}/accepter`)
          .then((res) => {
            this.acceptors = res.data.ASREVIRA.docs;

            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
};
</script>
