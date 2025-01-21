<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <!-- :rules="[rules.required, rules.enNum, rules.perscentNum]" -->
    <v-text-field
      :label="label"
      class="vira-input-ltr"
      type="number"
      :min="minCount"
      :max="maxCount"
      :rules="validRules"
      :value="value"
      :counter="counter"
      :append-icon="appendIcon"
      required
      @input="$emit('input', parseInt($event))"
    >
      <template #append>
        <span :class="append ? 'mr-3' : ''"> {{ append }}</span>
      </template>
    </v-text-field>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Number",

  props: {
    label: { type: String, default: null },
    counter: { type: String, default: null },
    value: { type: Number, default: null },
    appendIcon: { type: String, default: null },
    append: { type: String, default: null },
    cols: { type: String, default: "12" },
    minCount: { type: String, default: null },
    maxCount: { type: String, default: null },
    validations: { type: Array, default: null },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
        enNum: (v) => {
          const enNum = /^[0-9]/gi;
          return enNum.test(v) || "فقط اعداد انگلیسی مجاز است";
        },
        percentageNum:(v)=> {
          const percentageNum = /(^100([.]0{1,2})?)$|(^\d{1,2}([.]\d{1,2})?)$/i;
          return percentageNum.test(v) || "اعداد انگلیسی بین ۱ تا ۱۰۰ مجاز است";
        },
      },
      validRules: [],
    };
  },
  mounted() {
    this.validations.forEach((item) => {
      this.validRules.push(this.rules[item]);
    });
  },
};
</script>
