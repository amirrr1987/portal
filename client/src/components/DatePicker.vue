<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <slot name="before" />
    <div class="d-flex mx-auto align-center">
      <v-btn
        :class="changeColor"
        class="btn-date-picker mx-auto"
        width="75%"
        height="45"
        @click="show = true"
      >
        <span
          v-show="!value"
          class="white--text"
        >{{ label }}</span>
        <span
          v-show="value"
          class="white--text"
        >{{ value }}</span>
        <span><IconDate width="20" /></span>
      </v-btn>
      <v-text-field
        v-show="false"
        id="my-custom-editable-input"
        type="text"
        class="form-control is-editable"
        placeholder="YYYY/MM/DD"
      />

      <DatePicker
        :value="value"
        color="#26caef"
        format="jYYYY/jMM/jDD"
        element="my-custom-editable-input"
        :editable="true"
        :show="show"
        :rules="[rules.required]"
        required
        @input="$emit('input', $event)"
        @close="show = false"
      />
    </div>
    <slot name="after" />
  </v-col>
</template>

<script lang="ts">
import DatePicker from "vue-persian-datetime-picker";
import IconDate from "@/icons/Main/IconCalendar";
export default {
  name: "Date",
  components: {
    DatePicker,
    IconDate,
  },
  props: {
    value: { type: String, default: null },
    label: { type: String, default: "انتخاب تاریخ" },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
    validated: { type: Boolean, default: false },
  },
  data() {
    return {
      date: "",
      show: false,
      error: "blue",
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
  computed: {
    changeColor() {
      return !this.value && this.validated ? "red" : "primary";
    },
  },
  methods: {},
};
</script>

<style>
.btn-date-picker .v-btn__content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 30px;
}
</style>
