<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validate">
    <v-card class="pa-16">
      <CardTitle label="ویرایش نماینده" color="warning" />
      <v-row>
        <Title label="مشخصات نماینده" />
      </v-row>
      <v-row>
        <Farsi v-model="itemData.name" md="4" label="نام و نام خانوادگی" />
        <Farsi v-model="itemData.fatherName" md="4" label="نام پدر" />
        <Number v-model="itemData.mobile" md="4" label="تلفن همراه" />
      </v-row>
      <v-row>
        <Number v-model="itemData.nationalCode" md="4" label="کد ملی" />
        <Number
          v-model="itemData.certificateNumber"
          md="4"
          label="شماره شناسنامه"
        />
        <Email v-model="itemData.email" md="4" label="پست الکترونیکی" />
      </v-row>
      <v-row>
        <Country v-model="itemData.country" md="3" />
        <Province
          v-model="itemData.state"
          md="3"
          :country-id="itemData.country"
        />
        <City v-model="itemData.city" md="3" :state-id="itemData.state" />
        <Number v-model="itemData.postalCode" md="3" label="کد پستی" />
      </v-row>
      <v-row>
        <Textarea
          v-model="itemData.address"
          label="آدرس محل سکونت"
          class-name="rounded-lg-1"
        />
      </v-row>
      <v-row>
        <English v-model="itemData.phone" md="4" label="تلفن ثابت" />
        <v-col cols="12" md="4">
          <v-select
            v-model="itemData.status"
            item-text="name"
            item-value="value"
            label="وضعیت"
            :rules="[rules.required]"
            :items="allStatus"
            required
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            v-model="itemData.type"
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
            <English v-model="itemData.username" md="6" label="نام کاربری" />
            <Number
              v-model="itemData.referenceCode"
              md="6"
              label="کد کاربری معرف"
            />
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-row>
            <DatePicker v-model="itemData.birthdate" />
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-radio-group v-model="itemData.gender" row required>
          <v-radio label="مرد" value="0" />
          <v-radio label="زن" value="1" />
        </v-radio-group>
      </v-row>

      <v-row>
        <Title label="بارگذاری تصاویر مدارک" />
      </v-row>
      <v-row>
        <ImageUploader
          :img-src="itemData.nationalCardImage"
          img-name="nationalCardImage"
          md="4"
          required
        >
          <template #header> بارگذاری تصویر کارت ملی </template>
        </ImageUploader>
        <ImageUploader
          :img-src="itemData.birthCertificateImage"
          img-name="birthCertificateImage"
          md="4"
          required
        >
          <template #header> بارگذاری تصویر شناسنامه </template>
        </ImageUploader>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="12" class="d-flex justify-center">
          <Btn
            label="ویرایش اطلاعات"
            color="#57cf8f"
            dark
            class="mt-16"
            type="submit"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
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
import ImageUploader from "@/components/ImgUploader.vue";
import Btn from "@/components/Btn.vue";
import CardTitle from "@/components/CardTitle.vue";
import { EventBus } from "@/mixins/EventBus";

const router = useRouter();
const thisForm = ref<any>(null);

const allStatus = ref([
  { id: 0, name: "غیر فعال", value: -1 },
  { id: 1, name: "در حال رسیدگی", value: 0 },
  { id: 2, name: "فعال", value: 1 },
]);

const alltypes = ref([
  { id: "0", name: "تکی" },
  { id: "1", name: "استانی" },
]);

const itemData = ref<any>({});

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};

const validate = () => {
  if (thisForm.value.validate()) {
    updateForm();
  }
};

const updateForm = async () => {
  try {
    await fetch(
      `${import.meta.env.VITE_API_AGENT}/${
        router.currentRoute.value.params.id
      }`,
      {
        method: "PUT",
        body: JSON.stringify(itemData.value),
      }
    );
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

const getItemData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_AGENT}/${router.currentRoute.value.params.id}`
    );
    const data = await response.json();
    itemData.value = data.ASREVIRA;
    itemData.value.country = parseInt(data.ASREVIRA.country);
    itemData.value.state = parseInt(data.ASREVIRA.state);
    itemData.value.city = parseInt(data.ASREVIRA.city);
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  EventBus.on("selectImg", (data) => {
    itemData.value[data.name] = data.src;
  });
  getItemData();
});
</script>
