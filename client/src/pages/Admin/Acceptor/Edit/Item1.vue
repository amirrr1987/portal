<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <Texts
          md="4"
          label="نام و نام خانوادگی"
          v-model="itemData.user.name"
          :validations="['required', 'persianCharachter']"
        />
        <Texts
          md="4"
          label="نام پدر"
          v-model="itemData.user.fatherName"
          :validations="['required', 'persianCharachter']"
        />
        <Number md="4" label="تلفن همراه" v-model="itemData.user.mobile" />
      </v-row>
      <v-row>
        <Number md="4" label="کد ملی" v-model="itemData.user.nationalCode" />
        <Number
          md="4"
          label="شماره شناسنامه"
          v-model="itemData.user.certificateNumber"
        />
        <Number md="4" label="تلفن ثابت" v-model="itemData.user.phone" />
      </v-row>
      <v-row>
        <Country md="3" v-model="itemData.user.country" />
        <Province
          md="3"
          v-model="itemData.user.state"
          :countryId="itemData.user.country"
        />
        <City
          md="3"
          v-model="itemData.user.city"
          :stateId="itemData.user.state"
        />

        <Number md="3" label="کد پستی" v-model="itemData.user.postalcode" />
      </v-row>
      <v-row justify="space-between">
        <Email md="4" label="پست الکترونیکی" v-model="itemData.user.email" />
        <DatePicker md="4" v-model="itemData.user.birthdate">
          <slot name="before"> تاریخ تولد : </slot>
        </DatePicker>
      </v-row>
      <v-row>
        <Textarea label="آدرس محل سکونت" v-model="itemData.user.address" />
      </v-row>
      <v-row align="center">
        <v-col cols="12" md="8">
          <v-row>
            <English
              md="6"
              label="نام کاربری"
              v-model="itemData.user.username"
            />
            <Number
              md="6"
              label="کد کاربری معرف"
              v-model="itemData.user.referenceCode"
            />
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-row>
            <v-radio-group row v-model="itemData.user.gender" required>
              <v-radio label="مرد" value="0" />
              <v-radio label="زن" value="1" />
            </v-radio-group>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Texts from "@/components/Texts";
import Number from "@/components/EnglishNumber";
import Email from "@/components/Email";
import Country from "@/components/Country";
import Province from "@/components/Province";
import City from "@/components/City";
import Textarea from "@/components/Textarea";
import English from "@/components/English";
import DatePicker from "@/components/DatePicker";

export default {
  name: "Item1",
  components: {
    Texts,
    Number,
    Email,
    Country,
    Province,
    City,
    Textarea,
    English,
    DatePicker,
  },

  props: {
    itemData: { type: Object },
  },
  data() {
    return {
      owner: {
        city: 0,
        country: 0,
        province: 0,
        name: "",
        fatherName: "",
        mobile: "",
        nationalCode: "",
        status: -1,
        type: "",
        email: "",
        address: "",
        phone: "",
        birthCertificateNumber: "",
        username: "",
        referenceCode: "",
        password: "",
        passwordRepeat: "",
        birthdate: "",
        gender: null,
      },
    };
  },
  methods: {
    test() {

    },
  },
  mounted() {

  },
};
</script>

<style>
</style>