<template>
  <v-snackbar
    content-class="text-center"
    timeout="2000"
    color="red"
    app
    top
    left
    :value="value"
    @input="$emit('input', $event)"
  >
    در خواست شما با مشکل مواجه شد.
  </v-snackbar>
</template>
<script>
export default {
  name: "SnackbarError",
  props: {
    value: { type: Boolean, default: false },
  },
};
</script>
