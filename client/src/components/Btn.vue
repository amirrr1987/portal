<template>
  <v-btn
    :color="color"
    min-width="140"
    height="45"
    rounded
    :dark="props.dark"
    class="d-flex justify-space-around"
    :text="props.text"
    :to="to"
    v-on="$listeners"
  >
    <slot name="before" />
    <slot name="label">
      {{ props.label }}
    </slot>
    <slot name="after" />
  </v-btn>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  to: string;
  text: boolean;
  color: string;
  dark: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  label: "",
  to: "",
  text: false,
  color: "",
  dark: false,
});
</script>
