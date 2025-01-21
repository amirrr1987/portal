<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validateForm">
    <v-card class="pa-16">
      <CardTitle label="ثبت پیام های پیش فرض" color="#4fc7db" />
      <v-row>
        <Texts label="عنوان" v-model="itemData.title" md="8" />
      </v-row>
      <v-row>
        <v-col cols="12">
          <Editor
            api-key="no-api-key"
            v-model="itemData.body"
            :init="{
              height: 500,
              menubar: false,
              rtl: true,
              directionality: 'rtl',
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | rtl',
            }"
          />
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="12" class="d-flex justify-end">
          <Btn color="#4fc7db" label="ثبت" dark type="submit" />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios"; // Import axios
import CardTitle from "@/components/CardTitle.vue";
import Texts from "@/components/Texts.vue";
import Editor from "@tinymce/tinymce-vue";
import Btn from "@/components/Btn.vue";

const router = useRouter();
const route = useRoute();

const thisForm = ref<any>(null);
const itemData = ref({
  title: "",
  body: "",
});

const validateForm = () => {
  if (thisForm.value.validate()) {
    submitForm();
  }
};

const submitForm = async () => {
  try {
    await axios.post(
      import.meta.env.VITE_APP_API_DEFAULT_MESSAGE,
      itemData.value
    );
    routerToList();
  } catch (error) {
    console.error("Failed to submit form:", error);
  }
};

const routerToList = () => {
  setTimeout(() => {
    router.push("/admin/default-message/list");
  }, 600);
};

const getItemData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_DEFAULT_MESSAGE}/${route.params.id}`
    );
    itemData.value = response.data.data;
  } catch (error) {
    console.error("Failed to fetch item data:", error);
  }
};

onBeforeMount(async () => {
  await getItemData();
});
</script>

<style>
/* Add your styles here */
</style>
