<template>
  <v-form
    ref="thisForm"
    lazy-validation
    @submit.prevent="validateForm"
  >
    <v-card class="pa-10">
      <v-row>
        <Title label="مشخصات نماینده" />
      </v-row>
      <v-row>
        <Texts
          v-model="agent.name"
          md="4"
          label="نام و نام خانوادگی"
          :validations="['required', 'persianCharachter']"
        />

        <Texts
          v-model="agent.fatherName"
          md="4"
          label="نام پدر"
          :validations="['required', 'persianCharachter']"
        />
        <Number
          v-model="agent.mobile"
          md="4"
          label="تلفن همراه"
        />
      </v-row>
      <v-row>
        <Number
          v-model="agent.nationalCode"
          md="4"
          label="کد ملی"
        />
        <Number
          v-model="agent.certificateNumber"
          md="4"
          label="شماره شناسنامه"
        />
        <Email
          v-model="agent.email"
          md="4"
          label="پست الکترونیکی"
        />
      </v-row>
      <v-row>
        <Country
          v-model="agent.country"
          md="3"
        />
        <Province
          v-model="agent.state"
          md="3"
          :country-id="agent.country"
        />
        <City
          v-model="agent.city"
          md="3"
          :state-id="agent.state"
        />
        <Number
          v-model="agent.postalCode"
          md="3"
          label="کد پستی"
        />
      </v-row>
      <v-row>
        <Textarea
          v-model="agent.address"
          label="آدرس محل سکونت"
          class-name="rounded-lg-1"
        />
      </v-row>
      <v-row>
        <English
          v-model="agent.phone"
          md="4"
          label="تلفن ثابت"
        />
        <v-col
          cols="12"
          md="4"
        >
          <v-select
            v-model="agent.status"
            item-text="name"
            item-value="value"
            label="وضعیت"
            :rules="[rules.status]"
            :items="allStatus"
            required
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-select
            v-model="agent.type"
            label="نوع نماینده"
            item-text="name"
            item-value="id"
            :rules="[rules.required]"
            :items="alltypes"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="8"
        >
          <v-row>
            <English
              v-model="agent.username"
              md="6"
              label="نام کاربری"
            />
            <Number
              v-model="agent.referenceCode"
              md="6"
              label="کد کاربری معرف"
            />
          </v-row>
          <v-row>
            <Password
              v-model="agent.password"
              md="6"
            />
            <PasswordRepeat
              v-model="agent.passwordRepeat"
              :for-check="agent.password"
              md="6"
            />
          </v-row>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-row>
            <DatePicker
              v-model="agent.birthdate"
              :validated="clicked"
            />
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <Gender v-model="agent.gender" />
      </v-row>

      <v-row>
        <Title label="بارگذاری تصاویر مدارک" />
      </v-row>
      <v-row>
        <ImageUploader
          :img-src="agent.nationalCardImage"
          img-name="nationalCardImage"
          md="4"
          required
          :validated="clicked"
        >
          <template #header>
            بارگذاری تصویر کارت ملی
          </template>
        </ImageUploader>
        <ImageUploader
          :img-src="agent.birthCertificateImage"
          img-name="birthCertificateImage"
          md="4"
          required
          :validated="clicked"
        >
          <template #header>
            بارگذاری تصویر شناسنامه
          </template>
        </ImageUploader>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="d-flex justify-center mt-16"
        >
          <Btn
            label="تايید نهایی"
            color="#57cf8f"
            dark
            type="submit"
          >
            <template #after>
              <IconCheck
                width="23"
                height="23"
              />
            </template>
          </Btn>
        </v-col>
      </v-row>
    </v-card>
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
import English from "@/components/English";
import DatePicker from "@/components/DatePicker";
import Gender from "@/components/Gender";
import Password from "@/components/Password";
import PasswordRepeat from "@/components/PasswordRepeat";
import ImageUploader from "@/components/ImgUploader";
import Btn from "@/components/Btn";
import IconCheck from "@/icons/Main/IconCheckedCircle";
import { EventBus } from "@/mixins/EventBus.js";
import Texts from "@/components/Texts";
export default {
  name: "Create",
  components: {
    Texts,
    Title,
    Number,
    Email,
    Country,
    Province,
    City,
    Textarea,
    English,
    DatePicker,
    Gender,
    Password,
    PasswordRepeat,
    ImageUploader,
    Btn,
    IconCheck,
  },
  data() {
    return {
      allStatus: [
        { id: 0, name: "غیر فعال", value: "-1" },
        { id: 2, name: "در حال رسیدگی", value: "0" },
        { id: 3, name: "فعال", value: "1" },
      ],
      statusList: [],

      alltypes: [
        { id: "0", name: "تکی" },
        { id: "1", name: "استانی" },
      ],
      agent: {
        city: 0,
        country: 0,
        state: 0,
        name: "",
        fatherName: "",
        mobile: "",
        nationalCode: "",
        certificateNumber: "",
        status: null,
        type: "",
        email: "",
        address: "",
        phone: "",
        username: "",
        postalCode: "",
        referenceCode: "",
        password: "",
        passwordRepeat: "",
        birthdate: "",
        gender: null,
        nationalCardImage: "",
        birthCertificateImage: "",
      },
      clicked: false,
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
        status: (value) =>
          !!value == "1" ||
          value == "0" ||
          value == "-1" ||
          "این فیلد الزامی است",
      },
    };
  },
  mounted() {
    EventBus.$on("selectImg", (data) => {
      this.agent[data.name] = data.src;
    });
  },
  methods: {
    //////////////////////////////////
    // Start check form validation

    validateForm() {
      this.clicked = true;
      if (this.$refs.thisForm.validate()) {
        this.submitForm();
      }
    },

    //  End  check form validation
    //////////////////////////////////

    //////////////////////////////////
    // Start send data
    submitForm() {
      const formData = new FormData();
      const oFormData = this.agent;

      for (const key in oFormData) {
        if (oFormData[key] != null) formData.append(key, oFormData[key]);
      }

      this.$http
        .post(`${this.$privateKey}/agent`, this.agent)
        .then(() => {

          this.dialog = true;
          this.routerToList();
        })
        .catch(() => {
          this.error = true;
        });
    },
    //  End  send data
    //////////////////////////////////

    //////////////////////////////////
    // Start router to list
    routerToList() {
      setTimeout(() => {
        this.$router.push(`/admin/agent/list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////
  },
  // computed: {
  //   ruless() {
  //     return [
  //       this.agent.gender.length > 0 || "At least one item should be selected"
  //     ];
  //   }
  // }
};
</script>
