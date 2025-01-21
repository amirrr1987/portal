<template>
  <v-dialog v-model="dialog" persistent max-width="490">
    <template v-slot:activator="{on, attrs }">
      <v-btn :color="btnColor" dark rounded width="140" height="45" v-bind="attrs" v-on="on">{{
        btnLabel
      }}</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        {{ dialogTitle }}
      </v-card-title>
      <v-card-text>{{ dialogText }}</v-card-text>
      <v-card-actions class="d-flex justify-space-around py-5">
        <v-btn
          :color="btnSuccessColor"
          dark
          @click="dialog = false"
          width="140"
          height="45"
          rounded
        >
          تائید
        </v-btn>
        <v-btn
          :color="btnErrorColor"
          dark
          @click="dialog = false"
          width="140"
          height="45"
          rounded
        >
          انصراف
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "Dialog",
  props: {
    btnLabel: { type: String, default: "ثبت" },
    btnColor: { type: String, default: "red" },
    btnSuccessColor: { type: String, default: "green" },
    btnErrorColor: { type: String, default: "red" },
    dialogTitle: { type: String, default: "red" },
    dialogText: { type: String, default: "red" },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>