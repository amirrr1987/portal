<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <slot name="before" />
    <div class="d-flex mx-auto align-center">
      <v-btn
        :class="!props.value ? 'red' : 'primary'"
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
        :value="props.value"
        color="#26caef"
        format="jYYYY/jMM/jDD"
        element="my-custom-editable-input"
        :editable="true"
        :show="show"
        :rules="[rules.required]"
        required
        @input="(event) => emit('input', event)"
        @close="show = false"
      />
    </div>
    <slot name="after" />
  </v-col>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DatePicker from "vue-persian-datetime-picker";
import IconDate from "@/icons/Main/IconCalendar.vue";

interface Props {
  value?: string | null;
  label?: string;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: null,
  label: "انتخاب تاریخ",
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(["input"]);

const show = ref(false);
const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};
</script>

<style>
.btn-date-picker .v-btn__content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 30px;
}
</style>
