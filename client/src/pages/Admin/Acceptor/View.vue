<template>
  <v-card class="pa-16 grey--text text--darken-2">
    <CardTitle label="اطلاعات پذیرنده" color="#08b5dd" />
    <v-row>
      <Title
        label="مشخصات مالک"
        class="d-flex align-content-center"
        icon-user2
        icon-size="30"
      />
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        نام و نام خانوادگی : {{ itemDataUser.name }}
      </v-col>
      <v-col cols="12" md="4"> نام پدر : {{ itemDataUser.fatherName }} </v-col>
      <v-col cols="12" md="4">
        تاریخ تولد : {{ itemDataUser.birthdate }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> کد ملی : {{ itemDataUser.nationalCode }} </v-col>
      <v-col cols="12" md="4">
        شماره شناسنامه : {{ itemDataUser.certificateNumber }}
      </v-col>
      <v-col cols="12" md="4">
        جنسیت :
        <span v-show="itemDataUser.gender == 0">مرد</span>
        <span v-show="itemDataUser.gender == 1">زن</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> کشور : {{ itemDataUser.country.name }} </v-col>
      <v-col cols="12" md="4"> استان : {{ itemDataUser.state.name }} </v-col>
      <v-col cols="12" md="4"> شهر : {{ itemDataUser.city.name }} </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4"> شماره همراه : {{ itemDataUser.mobile }} </v-col>
      <v-col cols="12" md="4"> شماره ثابت : {{ itemDataUser.phone }} </v-col>
      <v-col cols="12" md="4">
        ایمیل : <span class="vira-en">{{ itemDataUser.email }}</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8" class="d-flex">
        <v-row>
          <v-col cols="12" md="2" class="px-0"> آدرس منزل : </v-col>
          <v-col cols="12" md="10" class="px-0">
            {{ itemDataUser.address }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4"> کد پستی : {{ itemDataUser.postalCode }} </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        نام کاربری : <span class="vira-en">{{ itemDataUser.username }}</span>
      </v-col>
      <v-col cols="12" md="4">
        کد کاربری : <span class="vira-en">{{ itemDataUser._id }}</span>
      </v-col>
      <v-col cols="12" md="4">
        کد کاربر معرف :
        <span class="vira-en">{{ itemDataUser.referenceCode }}</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-divider />
      </v-col>
    </v-row>

    <v-row>
      <Title
        label="مشخصات پذیرنده"
        class="d-flex align-content-center"
        icon-store
        icon-size="30"
      />
    </v-row>

    <v-row>
      <v-col cols="12" md="4"> نام پذیرنده : {{ itemData.name }} </v-col>
      <v-col cols="12" md="4"> کد قرارداد : {{ itemData.contractCode }} </v-col>
      <v-col cols="12" md="4"> تلفن ثابت : {{ itemData.phone }} </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4"> صنف : {{ itemData.category.title }} </v-col>
      <v-col cols="12" md="4">
        مقدار تخفیف کلی : {{ itemData.discount }}
      </v-col>
      <v-col cols="12" md="4">
        موقیعت :
        <v-dialog v-model="openMap" width="500" @click="startMap">
          <template #activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              مشاهده
            </v-btn>
          </template>
          <v-card>
            <Maps
              v-if="openMap"
              :default-lat="itemData.lat"
              :default-lng="itemData.lng"
            />
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4"> کشور : {{ itemData.country.name }} </v-col>
      <v-col cols="12" md="4"> استان : {{ itemData.state.name }} </v-col>
      <v-col cols="12" md="4"> شهر : {{ itemData.city.name }} </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        آدرس پذیرنده :
        <p>{{ itemData.address }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        تگ های پذیرنده :
        <p>
          <span v-for="(tag, index) in itemData.tags" :key="index" class="ml-1">
            {{ tag }},
          </span>
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        درباره پذیرنده :
        <p>{{ itemData.address }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        توضیحات پذیرنده :
        <p>{{ itemData.address }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider />
      </v-col>
    </v-row>

    <v-row>
      <Title
        label="تصاویر پذیرنده"
        class="d-flex align-content-center mt-6 mb-3"
        icon-images
        icon-size="30"
      />
    </v-row>

    <v-row>
      <ImageUploader
        v-show="itemData.logo"
        :img-src="itemData.logo"
        img-name="logo"
        sm="4"
        :remove="false"
      >
        <template #header> تصویر لوگو </template>
      </ImageUploader>
    </v-row>

    <v-row>
      <ImageUploader
        v-show="itemData.pic1"
        :img-src="itemData.pic1"
        img-name="pic1"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.pic2"
        :img-src="itemData.pic2"
        img-name="pic2"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.pic3"
        :img-src="itemData.pic3"
        img-name="pic3"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.pic4"
        :img-src="itemData.pic4"
        img-name="pic4"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.pic5"
        :img-src="itemData.pic5"
        img-name="pic5"
        md="4"
        :remove="false"
      />
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider class="my-6" />
      </v-col>
    </v-row>

    <v-row>
      <Title
        label="مدارک"
        class="d-flex align-content-center mt-6 mb-3"
        icon-papers
        icon-size="30"
      />
    </v-row>

    <v-row>
      <ImageUploader
        v-show="itemData.nationalCodeCard"
        :img-src="itemData.nationalCodeCard"
        img-name="nationalCodeCard"
        md="4"
        :remove="false"
      >
        <template #header> بارگذاری تصویر کارت ملی </template>
      </ImageUploader>
      <ImageUploader
        v-show="itemData.birthCertificate"
        :img-src="itemData.birthCertificate"
        img-name="birthCertificate"
        md="4"
        :remove="false"
      >
        <template #header> بارگذاری تصویر شناسنامه </template>
      </ImageUploader>
      <ImageUploader
        v-show="itemData.businessLicense"
        :img-src="itemData.businessLicense"
        img-name="businessLicense"
        md="4"
        :remove="false"
      >
        <template #header> بارگذاری پروانه کسب مربوطه </template>
      </ImageUploader>
      <ImageUploader
        v-show="itemData.ownershipDocument"
        :img-src="itemData.ownershipDocument"
        img-name="ownershipDocument"
        md="4"
        :remove="false"
      >
        <template #header> بارگذاری اجاره نامه یا سند مالکیت </template>
      </ImageUploader>
      <ImageUploader
        v-show="itemData.bills"
        :img-src="itemData.bills"
        img-name="bills"
        md="4"
        :remove="false"
      >
        <template #header> بارگذاری قبض (برق، آب و...) </template>
      </ImageUploader>
    </v-row>
    <v-row class="mt-16">
      <v-col> تصاویر پذیرنده </v-col>
    </v-row>
    <v-row>
      <ImageUploader
        v-show="itemData.contract1"
        :img-src="itemData.contract1"
        img-name="contract1"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.contract2"
        :img-src="itemData.contract2"
        img-name="contract2"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.contract3"
        :img-src="itemData.contract3"
        img-name="contract3"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.contract4"
        :img-src="itemData.contract4"
        img-name="contract4"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.contract5"
        :img-src="itemData.contract5"
        img-name="contract5"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.contract6"
        :img-src="itemData.contract6"
        img-name="contract6"
        md="4"
        :remove="false"
      />
      <ImageUploader
        v-show="itemData.contract7"
        :img-src="itemData.contract7"
        img-name="contract7"
        md="4"
        :remove="false"
      />
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { EventBus } from "@/mixins/EventBus.js";
import CardTitle from "@/components/CardTitle";
import Title from "@/components/Title";
import Maps from "@/components/MapShow";
import ImageUploader from "@/components/ImgUploader";

const route = useRoute();
const openMap = ref(false);
const itemData = ref({});
const itemDataUser = ref({});

const startMap = () => {
  EventBus.emit("startMap");
};

const getItemData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/accepter/${route.params.id}`
    );
    const data = await response.json();
    itemData.value = data.ASREVIRA;
    itemDataUser.value = data.ASREVIRA.user;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  EventBus.on("selectImg", (data) => {
    itemData.value[data.name] = data.src;
  });

  EventBus.on("selectLatLng", (data) => {
    itemData.value.lat = data.lat;
    itemData.value.lng = data.lng;
  });

  getItemData();
});
</script>
