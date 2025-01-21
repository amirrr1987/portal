<template>
  <v-btn
    :color="props.color"
    dark
    width="140"
    height="45"
    rounded
    v-bind="$attrs"
    :link="props.link"
    :to="props.to"
  >
    {{ props.label }}
    <IconNext width="20" class="mr-6" />
  </v-btn>
</template>

<script setup lang="ts">
import IconNext from "@/icons/Main/IconArrowLeft.vue";

interface Props {
  label?: string;
  color?: string;
  link?: boolean;
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "ادامه",
  color: "primary",
  link: false,
  to: "",
});
</script>
