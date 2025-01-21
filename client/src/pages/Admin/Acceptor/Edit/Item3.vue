<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <ImageUploader :img-src="imageSrc.logo" img-name="logo" md="4" required>
          <template #header> بارگذاری لوگو </template>
        </ImageUploader>
      </v-row>
      <v-row>
        <ImageUploader :img-src="imageSrc.pic1" img-name="pic1" md="4" />
        <ImageUploader :img-src="imageSrc.pic2" img-name="pic2" md="4" />
        <ImageUploader :img-src="imageSrc.pic3" img-name="pic3" md="4" />
        <ImageUploader :img-src="imageSrc.pic4" img-name="pic4" md="4" />
        <ImageUploader :img-src="imageSrc.pic5" img-name="pic5" md="4" />
      </v-row>
      <v-row>
        <ImageUploader
          :img-src="imageSrc.nationalCodeCard"
          img-name="nationalCodeCard"
          md="4"
          required
        >
          <template #header> بارگذاری تصویر کارت ملی </template>
        </ImageUploader>
        <ImageUploader
          :img-src="imageSrc.birthCertificate"
          img-name="birthCertificate"
          md="4"
          required
        >
          <template #header> بارگذاری تصویر شناسنامه </template>
        </ImageUploader>
        <ImageUploader
          :img-src="imageSrc.businessLicense"
          img-name="businessLicense"
          md="4"
          required
        >
          <template #header> بارگذاری پروانه کسب مربوطه </template>
        </ImageUploader>
        <ImageUploader
          :img-src="imageSrc.ownershipDocument"
          img-name="ownershipDocument"
          md="4"
          required
        >
          <template #header> بارگذاری اجاره نامه یا سند مالکیت </template>
        </ImageUploader>
        <ImageUploader
          :img-src="imageSrc.bills"
          img-name="bills"
          md="4"
          required
        >
          <template #header> بارگذاری قبض (برق، آب و...) </template>
        </ImageUploader>
      </v-row>

      <v-row>
        <ImageUploader
          :img-src="imageSrc.contract1"
          img-name="contract1"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract2"
          img-name="contract2"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract3"
          img-name="contract3"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract4"
          img-name="contract4"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract5"
          img-name="contract5"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract6"
          img-name="contract6"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract7"
          img-name="contract7"
          md="4"
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { EventBus } from "@/mixins/EventBus.js";
import ImageUploader from "@/components/ImgUploader";

const props = defineProps({
  imageSrc: { type: Object, required: true },
});

const validate = () => {
  assign();
};

const assign = () => {
  const parent = (parent as any).$parent;
  parent.create = {
    ...parent.create,
    ...props.imageSrc,
  };
  submitForm();
};

const btnBack = () => {
  const parent = (parent as any).$parent;
  parent.step = 3;
  window.scrollTo(0, 0);
};

const submitForm = async () => {
  const parent = (parent as any).$parent;
  try {
    await fetch(`${import.meta.env.VITE_API_ACCEPTER}`, {
      method: "POST",
      body: JSON.stringify(parent.create),
    });
    parent.dialog = true;
  } catch (error) {
    parent.error = true;
    console.error(error);
  }
};

onMounted(() => {
  EventBus.on("selectImg", (data) => {
    props.imageSrc[data.name] = data.src;
  });
});
</script>

<style></style>
