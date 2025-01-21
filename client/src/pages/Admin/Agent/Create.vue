<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validateForm">
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
        <Number v-model="agent.mobile" md="4" label="تلفن همراه" />
      </v-row>
      <v-row>
        <Number v-model="agent.nationalCode" md="4" label="کد ملی" />
        <Number
          v-model="agent.certificateNumber"
          md="4"
          label="شماره شناسنامه"
        />
        <Email v-model="agent.email" md="4" label="پست الکترونیکی" />
      </v-row>
      <v-row>
        <Country v-model="agent.country" md="3" />
        <Province v-model="agent.state" md="3" :country-id="agent.country" />
        <City v-model="agent.city" md="3" :state-id="agent.state" />
        <Number v-model="agent.postalCode" md="3" label="کد پستی" />
      </v-row>
      <v-row>
        <Textarea
          v-model="agent.address"
          label="آدرس محل سکونت"
          class-name="rounded-lg-1"
        />
      </v-row>
      <v-row>
        <English v-model="agent.phone" md="4" label="تلفن ثابت" />
        <v-col cols="12" md="4">
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
        <v-col cols="12" md="4">
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
        <v-col cols="12" md="8">
          <v-row>
            <English v-model="agent.username" md="6" label="نام کاربری" />
            <Number
              v-model="agent.referenceCode"
              md="6"
              label="کد کاربری معرف"
            />
          </v-row>
          <v-row>
            <Password v-model="agent.password" md="6" />
            <PasswordRepeat
              v-model="agent.passwordRepeat"
              :for-check="agent.password"
              md="6"
            />
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-row>
            <DatePicker v-model="agent.birthdate" :validated="clicked" />
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
          <template #header> بارگذاری تصویر کارت ملی </template>
        </ImageUploader>
        <ImageUploader
          :img-src="agent.birthCertificateImage"
          img-name="birthCertificateImage"
          md="4"
          required
          :validated="clicked"
        >
          <template #header> بارگذاری تصویر شناسنامه </template>
        </ImageUploader>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center mt-16">
          <Btn label="تايید نهایی" color="#57cf8f" dark type="submit">
            <template #after>
              <IconCheck width="23" height="23" />
            </template>
          </Btn>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Title from "@/components/Title.vue";
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
import ImageUploader from "@/components/ImgUploader.vue";
import Btn from "@/components/Btn.vue";
import IconCheck from "@/icons/Main/IconCheckedCircle.vue";
import Texts from "@/components/Texts.vue";
import { EventBus } from "@/mixins/EventBus";

const router = useRouter();
const thisForm = ref<any>(null);

const allStatus = ref([
  { id: 0, name: "غیر فعال", value: "-1" },
  { id: 2, name: "در حال رسیدگی", value: "0" },
  { id: 3, name: "فعال", value: "1" },
]);

const alltypes = ref([
  { id: "0", name: "تکی" },
  { id: "1", name: "استانی" },
]);

const agent = ref({
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
});

const clicked = ref(false);

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
  status: (value: any) =>
    value === "1" || value === "0" || value === "-1" || "این فیلد الزامی است",
};

const validateForm = () => {
  clicked.value = true;
  if (thisForm.value.validate()) {
    submitForm();
  }
};

const submitForm = async () => {
  try {
    await fetch(`${import.meta.env.VITE_API_AGENT}`, {
      method: "POST",
      body: JSON.stringify(agent.value),
    });
    routerToList();
  } catch (error) {
    console.error(error);
  }
};

const routerToList = () => {
  setTimeout(() => {
    router.push("/admin/agent/list");
  }, 600);
};

onMounted(() => {
  EventBus.on("selectImg", (data) => {
    agent.value[data.name] = data.src;
  });
});
</script>
