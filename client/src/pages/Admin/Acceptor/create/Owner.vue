<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validate">
    <v-row justify="center" class="mb-16">
      <v-col cols="12" lg="8" xl="6">
        <v-img
          src="@/assets/img/RegisterTab1.svg"
          lazy-src="@/assets/img/RegisterTab1.svg"
          class="w-100"
        />
      </v-col>
    </v-row>
    <v-row>
      <Title label="مشخصات مالک" />
    </v-row>
    <v-row>
      <Texts
        md="4"
        label="نام و نام خانوادگی"
        v-model="owner.ownerName"
        :validations="['required', 'persianCharachter']"
      />
      <Texts
        md="4"
        label="نام پدر"
        v-model="owner.fatherName"
        :validations="['required', 'persianCharachter']"
      />
      <Number md="4" label="تلفن همراه" v-model="owner.mobile" />
    </v-row>
    <v-row>
      <Number md="4" label="کد ملی" v-model="owner.nationalCode" />
      <Number md="4" label="شماره شناسنامه" v-model="owner.certificateNumber" />
      <Number md="4" label="تلفن ثابت" v-model="owner.ownerPhone" />
    </v-row>
    <v-row>
      <Country md="3" v-model="owner.ownerCountry" />
      <Province
        md="3"
        v-model="owner.ownerState"
        :countryId="owner.ownerCountry"
      />
      <City md="3" v-model="owner.ownerCity" :stateId="owner.ownerState" />
      <Number md="3" label="کد پستی" v-model="owner.postalcode" />
    </v-row>
    <v-row justify="space-between">
      <Email md="4" label="پست الکترونیکی" v-model="owner.email" />
      <DatePicker md="4" v-model="owner.birthdate" :validated="clicked">
        <slot name="before"> تاریخ تولد : </slot>
      </DatePicker>
    </v-row>
    <v-row>
      <Textarea label="آدرس محل سکونت" v-model="owner.ownerAddress" />
    </v-row>
    <v-row align="center">
      <v-col cols="12" md="8">
        <v-row>
          <Texts
            md="6"
            label="نام کاربری"
            v-model="owner.username"
            :validations="['required', 'english']"
          />

          <Texts
            md="6"
            label="کد کاربری معرف"
            v-model="owner.referenceCode"
            :validations="['english']"
          />
        </v-row>
        <v-row>
          <Password v-model="owner.password" md="6" />
          <PasswordRepeat
            v-model="owner.passwordRepeat"
            :forCheck="owner.password"
            md="6"
          />
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <!-- <Gender v-model="owner.gender" /> -->
          <!-- 
          <v-radio-group row v-model="owner.gender" required label="جنسیت : ">
            <v-radio label="مرد" value="0"  />
            <v-radio label="زن" value="1" />
          </v-radio-group> -->
          <Gender v-model="owner.gender" />
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <!-- <BtnBack label="بازگشت" dark class="mt-16" @click="btnBack" /> -->
      <BtnNext label="ادامه" dark class="mt-16" type="submit" />
    </v-row>
  </v-form>
</template>

<script>
import Title from "@/components/Title";
import Number from "@/components/EnglishNumber";
import Email from "@/components/Email";
import Country from "@/components/Country";
import Province from "@/components/Province";
import City from "@/components/City";
import Textarea from "@/components/Textarea";
import DatePicker from "@/components/DatePicker";
import Gender from "@/components/Gender";
import Password from "@/components/Password";
import PasswordRepeat from "@/components/PasswordRepeat";
import BtnNext from "@/components/BtnNext";
// import BtnBack from "@/components/BtnBack";
import Texts from "@/components/Texts";
export default {
  name: "Owner",
  components: {
    Title,
    Number,
    Email,
    Country,
    Province,
    City,
    Textarea,
    DatePicker,
    Gender,
    Password,
    PasswordRepeat,
    BtnNext,
    // BtnBack,
    Texts,
  },
  data() {
    return {
      clicked: false,
      owner: {
        ownerName: "",
        fatherName: "",
        mobile: "",
        nationalCode: "",
        certificateNumber: "",
        email: "",
        ownerCountry: null,
        ownerCity: null,
        ownerState: null,
        postalCode: "",
        ownerAddress: "",
        ownerPhone: "",
        username: "",
        referenceCode: "",
        password: "",
        uid: "",
        passwordRepeat: "",
        birthdate: "",
        gender: null,
      },
    };
  },
  methods: {
    //////////////////////////////////
    // Start check form validation

    validate() {
      this.clicked = true;
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
        ...this.owner,
      };
      this.btnNext();
    },
    //  End send data to Parent data
    //////////////////////////////////
    //////////////////////////////////
    // Start brn next form
    btnNext() {
      this.$parent.$parent.step = 3;
      window.scrollTo(0, 0);
      this.$root.$emit("startMap");
    },
    //  End  brn next form
    //////////////////////////////////

    //////////////////////////////////
    // Start brn next form
    btnBack() {
      this.$parent.$parent.step = 1;
      window.scrollTo(0, 0);
    },
    //  End  brn next form
    //////////////////////////////////
  },
};
</script>

<style lang="scss">
.w-100 {
  .v-responsive__content{
    width: 100% !important;

  }
}
</style>
