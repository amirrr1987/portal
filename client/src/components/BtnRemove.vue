<template>
  <v-btn
    class="red"
    icon
    x-small
    v-on="$listeners"
  >
    <v-icon color="white">
      mdi-close
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
export default {
  name: "BtnRemove",
  components: {},
};
</script>
