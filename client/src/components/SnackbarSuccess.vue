<template>
  <v-snackbar
    content-class="text-center"
    timeout="2000"
    color="green"
    app
    top
    left
    :value="value"
    @input="$emit('input', $event)"
  >
    درخواست شما با موفقیت انجام شد.
  </v-snackbar>
</template>
<script>
export default {
  name: "SnackbarSuccess",
  props: {
    value: { type: Boolean, default: false },
  },
};
</script>