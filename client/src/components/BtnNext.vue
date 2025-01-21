<template>
  <v-btn :color="color" dark width="140" height="45" rounded v-on="$listeners" :link="link" :to="to">
    {{label}}
    <IconNext width="20" class="mr-6" />
  </v-btn>
</template>
<script lang="ts">
import IconNext from "@/icons/Main/IconArrowLeft";

export default {
  name: "BtnNext",
  props: {
    label: { type: String, default: "ادامه"},
    color: { type: String, default: "primary"},
    link: { type: Boolean, default: false },
    to: { type: String, default: ""}
  },
  components: {
    IconNext,
  },
};
</script>
