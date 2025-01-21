<template>
  <v-dialog v-model="dialog" persistent max-width="490">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :color="props.btnColor"
        dark
        rounded
        width="140"
        height="45"
        v-bind="attrs"
        v-on="on"
      >
        {{ props.btnLabel }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        {{ props.dialogTitle }}
      </v-card-title>
      <v-card-text>{{ props.dialogText }}</v-card-text>
      <v-card-actions class="d-flex justify-space-around py-5">
        <v-btn
          :color="props.btnSuccessColor"
          dark
          @click="dialog = false"
          width="140"
          height="45"
          rounded
        >
          تائید
        </v-btn>
        <v-btn
          :color="props.btnErrorColor"
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

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  btnLabel?: string;
  btnColor?: string;
  btnSuccessColor?: string;
  btnErrorColor?: string;
  dialogTitle?: string;
  dialogText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  btnLabel: "ثبت",
  btnColor: "red",
  btnSuccessColor: "green",
  btnErrorColor: "red",
  dialogTitle: "red",
  dialogText: "red",
});

const dialog = ref(false);
</script>
