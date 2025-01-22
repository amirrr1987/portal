<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validateForm">
    <v-card class="pa-lg-16">
      <CardTitle label="ثبت تخفیفات پذیرنده" color="#08b5dd" />
      <v-row>
        <AcceptorAutocomplete
          v-model="itemData.accepter"
          label="انتخاب پذیرنده"
          md="4"
        />
        <Texts v-model="itemData.title" label="نام گروه تخفیف" md="4" />
        <Number
          v-model="itemData.discount"
          label="درصد تخفیف گروه"
          append-icon="mdi-percent"
          append="%"
          md="4"
          class="vira-icon-right"
          :rules="[rules.persent]"
          min-count="0"
          max-count="100"
        />
      </v-row>
      <v-row class="mt-10 mb-16">
        <v-btn color="#08b5dd" class="white--text py-6" tile @click="addCard">
          <span>اضافه کردن محصولات یا خدمات</span>
          <v-icon color="#08b5dd" class="white mr-3" large> mdi-plus </v-icon>
        </v-btn>
      </v-row>

      <v-row v-for="(product, index) in itemData.products" :key="index">
        <v-col cols="12">
          <v-card color="#F1F1F1" class="pa-6 rounded-lg-2 mb-16">
            <v-btn icon class="red" x-small>
              <v-icon color="white" @click="removeCard(index)">
                mdi-close
              </v-icon>
            </v-btn>
            <v-row>
              <v-col cols="12" md="8">
                <v-row>
                  <Texts v-model="product.name" label="نام" md="6" />
                  <Number v-model="product.price" label="قیمت" md="6" />
                  <Texts v-model="product.description" label="توضیحات" />
                </v-row>
              </v-col>
              <ImageUploader
                :img-src="product.image"
                :img-name="`${index}`"
                md="4"
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="end">
        <Btn label="ثبت و تائید" color="#4fc7db" dark type="submit" />
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Texts from "@/components/Texts";
import CardTitle from "@/components/CardTitle";
import Btn from "@/components/Btn";
import ImageUploader from "@/components/ImgUploader";
import Number from "@/components/Number";
import AcceptorAutocomplete from "@/components/AcceptorAutocomplete";
import { EventBus } from "@/mixins/EventBus.js";

const router = useRouter();
const thisForm = ref<any>(null);

const itemData = ref({
  accepter: "",
  title: "",
  discount: 0,
  products: [],
});

const rules = {
  persent: (value: number) =>
    (value > 0 && value < 100) || "این فیلد الزامی است",
};

const addCard = () => {
  itemData.value.products.push({
    name: "",
    price: null,
    description: "",
    image: "",
  });
};

const removeCard = (index: number) => {
  itemData.value.products.splice(index, 1);
};

const validateForm = () => {
  if (thisForm.value.validate()) {
    submitForm();
  }
};

const submitForm = async () => {
  try {
    await fetch(import.meta.env.VITE_API_ACCEPTOR_DISCOUNT, {
      method: "POST",
      body: JSON.stringify(itemData.value),
    });
    routerToList();
  } catch (error) {
    console.error(error);
  }
};

const routerToList = () => {
  setTimeout(() => {
    router.push("/admin/acceptor/discount-list");
  }, 600);
};

onMounted(() => {
  EventBus.on("selectImg", (data) => {
    itemData.value.products[data.name].image = data.src;
  });
});
</script>
