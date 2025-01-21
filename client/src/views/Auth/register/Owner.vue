<template>
  <v-form
    ref="thisForm"
    lazy-validation
    @submit.prevent="validate"
  >
    <v-row
      justify="center"
      class="mb-16"
    >
      <v-col
        cols="12"
        lg="8"
        xl="6"
      >
        <v-img
          src="@/assets/img/RegisterTab1.svg"
          lazy-src="@/assets/img/RegisterTab1.svg"
        />
      </v-col>
    </v-row>
    <v-row>
      <Title label="مشخصات مالک" />
    </v-row>
    <v-row>
      <Farsi
        v-model="owner.ownerName"
        md="4"
        label="نام و نام خانوادگی"
        required
      />
      <Farsi
        v-model="owner.fatherName"
        md="4"
        label="نام پدر"
      />
      <Number
        v-model="owner.mobile"
        md="4"
        label="تلفن همراه"
      />
    </v-row>
    <v-row>
      <Number
        v-model="owner.nationalCode"
        md="4"
        label="کد ملی"
      />
      <Number
        v-model="owner.certificateNumber"
        md="4"
        label="شماره شناسنامه"
      />
      <Number
        v-model="owner.ownerPhone"
        md="4"
        label="تلفن ثابت"
      />
    </v-row>
    <v-row>
      <Country
        v-model="owner.ownerCountry"
        md="3"
      />
      <Province
        v-model="owner.ownerState"
        md="3"
        :country-id="owner.ownerCountry"
      />
      <City
        v-model="owner.ownerCity"
        md="3"
        :state-id="owner.ownerState"
      />
      <Number
        v-model="owner.postalcode"
        md="3"
        label="کد پستی"
      />
    </v-row>
    <v-row justify="space-between">
      <Email
        v-model="owner.email"
        md="4"
        label="پست الکترونیکی"
      />
      <DatePicker
        v-model="owner.birthdate"
        md="4"
      >
        <template #before>
          تاریخ تولد :
        </template>
      </DatePicker>
    </v-row>
    <v-row>
      <Textarea
        v-model="owner.ownerAddress"
        label="آدرس محل سکونت"
      />
    </v-row>
    <v-row align="center">
      <v-col
        cols="12"
        md="8"
      >
        <v-row>
          <English
            v-model="owner.username"
            md="6"
            label="نام کاربری"
          />
          <Number
            v-model="owner.referenceCode"
            md="6"
            label="کد کاربری معرف"
          />
        </v-row>
        <v-row>
          <Password
            v-model="owner.password"
            md="6"
          />
          <PasswordRepeat
            v-model="owner.passwordRepeat"
            :for-check="owner.password"
            md="6"
          />
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <v-row>
          <Gender v-model="owner.gender" />
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <BtnNext
        label="ادامه"
        dark
        class="mt-16"
        type="submit"
      />
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Title from "@/components/Title.vue";
import Farsi from "@/components/FarsiText.vue";
import Number from "@/components/EnglishNumber.vue";
import Email from "@/components/Email.vue";
import Country from "@/components/Country.vue";
import Province from "@/components/Province.vue";
import City from "@/components/City.vue";
import Textarea from "@/components/Textarea.vue";
import English from "@/components/English.vue";
import DatePicker from "@/components/DatePicker.vue";
import Gender from "@/components/Gender.vue";
import Password from "@/components/Password.vue";
import PasswordRepeat from "@/components/PasswordRepeat.vue";
import BtnNext from "@/components/BtnNext.vue";

const thisForm = ref<HTMLFormElement | null>(null);
const owner = ref({
  ownerName: "",
  fatherName: "",
  mobile: "",
  nationalCode: "",
  certificateNumber: "",
  email: "",
  ownerCountry: "",
  ownerCity: "",
  ownerState: "",
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
});

const validate = () => {
  if (thisForm.value?.validate()) {
    assign();
  }
};

const assign = () => {
  // ارسال داده‌ها به کامپوننت والد
  const parent = inject("parentComponent"); // اگر از provide/inject استفاده می‌کنید
  if (parent) {
    parent.create = {
      ...parent.create,
      ...owner.value,
    };
  }
  btnNext();
};

const btnNext = () => {
  const parent = inject("parentComponent"); // اگر از provide/inject استفاده می‌کنید
  if (parent) {
    parent.step = 2;
  }
  window.scrollTo(0, 0);
  emit("startMap");
};
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
