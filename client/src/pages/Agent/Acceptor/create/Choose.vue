<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validate">
    <v-row class="mb-16">
      <v-col cols="12">
        <span>انتخاب نوع ثبت</span>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12" md="4">
        <div>انتخاب شیوه ثبت پذیرنده</div>
      </v-col>
      <v-col cols="12" md="8">
        <v-radio-group
          v-model="choose.chooseModel"
          :rules="[rules.required]"
          required
        >
          <div class="d-inline-flex mb-2">
            <v-radio label="تکی" value="0" class="w-10" />
            <span class="mr-1">(ثبت اطلاعات توسط ادمین)</span>
          </div>
          <div class="d-inline-flex">
            <v-radio label="گروهی" value="1" class="w-10" />
            <span class="mr-1">( ثبت اطلاعات توسط آپلود فایل Excel )</span>
          </div>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row align="center" v-if="choose.chooseModel == 1">
      <v-col cols="12" md="4"> انتخاب بانک </v-col>
      <v-col cols="12" md="8">
        <v-radio-group
          v-model="choose.chooseBank"
          :rules="[rules.required]"
          required
        >
          <v-radio label="بانک ملت" value="0" class="mb-4" />
          <v-radio label="بانک سامان" value="1" />
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12" class="d-flex justify-space-around">
        <BtnNext type="submit" />
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import BtnNext from "@/components/BtnNext";
export default {
  name: "Choose",
  components: {
    BtnNext,
  },
  data() {
    return {
      choose: {
        chooseModel: "0",
        chooseBank: "0",
      },
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
  methods: {
    //////////////////////////////////
    // Start check form validation

    validate() {
      if (this.$refs.thisForm.validate()) {
        this.assign();
      }
    },

    //  End  check form validation
    //////////////////////////////////

    //////////////////////////////////
    // Start send data to Parent data
    assign() {
      this.$parent.$parent.create = {
        ...this.$parent.$parent.create,
        ...this.choose,
      };
      this.btnNext();
    },
    //  End send data to Parent data
    //////////////////////////////////
    //////////////////////////////////
    // Start brn next form
    btnNext() {
      this.$parent.$parent.step = 2;
      window.scrollTo(0, 0);
    },
    //  End  brn next form
    //////////////////////////////////
  },
};
</script>
