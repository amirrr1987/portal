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
        :class="!value ? 'red' : 'primary'"
        min-width="36"
        class="px-0"
        @click="show = true"
      >
        <IconDate width="25" />
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
import IconDate from "@/icons/Main/IconCalendar.vue";
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
};
</script>

<style>
.btn-date-picker .v-btn__content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 30px;
}
</style>
