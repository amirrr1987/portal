<template>
  <v-card
    :color="color"
    dark
    width="200"
    height="50"
    class="d-flex align-center justify-center position-absolute"
    tile
    style="top: -20px; right: -20px; cursor: default;"
  >
    {{ label }}
  </v-card>
</template>

<script lang="ts">
export default {
  name: "CardTitle",
  props: {
    color: { type: String, default: null },
    label: { type: String, default: "عنوان" },
  },
};
</script>
<style lang="scss">
.card-title {
  top: -25px;
  right: -25px;
  cursor: default;
}
</style>
