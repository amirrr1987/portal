<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-card
      :color="color"
      class="bank-card text-center"
    >
      <v-responsive
        class="d-flex align-center"
        :aspect-ratio="16 / 9"
      >
        <div class="white--text vira-ltr pb-3">
          IR{{ sheba }}
        </div>
        <div class="white--text">
          {{ label }}
        </div>
        <v-btn
          icon
          class="position-absolute"
        >
          <IconDelete
            width="18"
            height="18"
          />
        </v-btn>
      </v-responsive>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import IconDelete from "@/icons/Main/IconDelete";
export default {
  name: "BankCard",
  components: {
    IconDelete,
  },
  props: {
    label: { type: String, default: "بانک گلابی" },
    sheba: { type: String, default: "------------------" },
    color: { type: String, default: "black" },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  computed: {},
};
</script>

<style>

.position-absolute {
  position: absolute !important;
  right: 10px;
  bottom: 10px;
}
</style>
