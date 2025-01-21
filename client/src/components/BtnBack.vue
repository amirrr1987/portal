<template>
  <v-btn
    color="warning"
    dark
    width="140"
    height="45"
    class="d-flex align-center"
    rounded
    v-on="$listeners"
  >
    <IconBack width="20" class="ml-6" />
    بازگشت
  </v-btn>
</template>

<script lang="ts">
import IconBack from "@/icons/Main/IconArrowRight";

export default {
  name: "BtnBack",
  components: {
    IconBack,
  },
};
</script>
