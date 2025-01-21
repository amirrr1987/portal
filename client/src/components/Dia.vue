<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="290"
  >
    <template #activator="{ on, attrs }">
      <Btn
        label="تائید نهایی"
        :color="color"
        dark
        :class="btnClass"
        :type="btnType"
        v-bind="attrs"
        v-on="on"
      >
        <template #after>
          <Checked
            width="25"
            height="25"
          />
        </template>
      </Btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        Use Google's location service?
      </v-card-title>
      <v-card-text>
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Disagree
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Btn from "@/components/Btn.vue";
import Checked from "@/icons/Main/IconCheckedCircle.vue";
export default {
  name: "TheDialog",
  components: {
    Btn,
    Checked,
  },
  props: {
    color: {type: String, default: ""},
    btnClass: {type: String, default: ""},
    btnType: {type: String, default: ""},
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
