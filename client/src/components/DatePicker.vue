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
        :class="changeColor"
        class="btn-date-picker mx-auto"
        width="75%"
        height="45"
        @click="show = true"
      >
        <span v-show="!props.value" class="white--text">{{ props.label }}</span>
        <span v-show="props.value" class="white--text">{{ props.value }}</span>
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
import { ref, computed } from "vue";
import DatePicker from "vue-persian-datetime-picker";
import IconDate from "@/icons/Main/IconCalendar";

interface Props {
  value?: string | null;
  label?: string;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  validated?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  value: null,
  label: "انتخاب تاریخ",
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
  validated: false,
});

const emit = defineEmits(["input"]);

const show = ref(false);
const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};

const changeColor = computed(() => {
  return !props.value && props.validated ? "red" : "primary";
});
</script>

<style>
.btn-date-picker .v-btn__content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 30px;
}
</style>
