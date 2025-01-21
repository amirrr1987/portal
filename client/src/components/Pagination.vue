<template>
  <v-row
    justify="center"
    class="py-4"
  >
    <v-col
      cols="12"
      md="6"
    >
      <v-pagination
        class="py-3 vira-ltr"
        :value="value"
        :total-visible="5"
        :length="length"
        circle
        prev-icon="mdi-chevron-double-right"
        next-icon="mdi-chevron-double-left"
        v-on="$listeners"
      />
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  name: "Pagination",
  props: {
    value: { type: Number, default: null },
    length: { type: Number, default: null },
  },
};
</script>
