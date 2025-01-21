<template>
  <v-form>
    <v-card class="pa-16 grey--text text--darken-2">
      <CardTitle label="ویرایش اطلاعات" color="#08b5dd" />
      <v-row>
        <v-col cols="12">
          <v-tabs
            v-model="tab"
            background-color="#e9e9e9"
            color="#0d8dbf"
            active-class="#a3d9e2"
            grow
            height="65"
            class="mb-8"
          >
            <v-tab href="#tab-1" active-class="tab-active-bg"
              >مشخصات مالک</v-tab
            >
            <v-tab href="#tab-2" active-class="tab-active-bg"
              >مشخصات پذیرنده</v-tab
            >
            <v-tab href="#tab-3" active-class="tab-active-bg"
              >مدارک ارسال شده</v-tab
            >
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-1">
              <Item1 :itemData="edit" />
            </v-tab-item>
            <v-tab-item value="tab-2">
              <Item2 :itemData="edit" />
            </v-tab-item>
            <v-tab-item value="tab-3">
              <Item3 :imageSrc="edit" />
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
      <v-row justify="flex-end">
        <v-col cols="12" class="d-flex justify-end">
          <Btn color="primary" label="تایید" dark />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useHttp } from "@/composables/useHttp"; // Replace with your HTTP composable or library
import CardTitle from "@/components/CardTitle.vue";
import Item1 from "@/pages/Admin/Acceptor/Edit/Item1.vue";
import Item2 from "@/pages/Admin/Acceptor/Edit/Item2.vue";
import Item3 from "@/pages/Admin/Acceptor/Edit/Item3.vue";
import Btn from "@/components/Btn.vue";

const route = useRoute();
const { get } = useHttp();

const tab = ref<string | null>(null);
const edit = ref({
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
  tags: [],
  user: {
    country: 0,
    state: 0,
    city: 0,
  },
});

const getItemData = async () => {
  try {
    const response = await get(
      `${import.meta.env.VITE_APP_PRIVATE_KEY}/accepter/${route.params.id}`
    );
    edit.value = response.data.ASREVIRA;
    edit.value.user.country = parseInt(response.data.ASREVIRA.user.country);
    edit.value.user.state = parseInt(response.data.ASREVIRA.user.state);
    edit.value.user.city = parseInt(response.data.ASREVIRA.user.city);
    edit.value.country = parseInt(response.data.ASREVIRA.country);
    edit.value.state = parseInt(response.data.ASREVIRA.state);
    edit.value.city = parseInt(response.data.ASREVIRA.city);
  } catch (error) {
    console.error("Failed to fetch item data:", error);
  }
};

onBeforeMount(async () => {
  await getItemData();
});
</script>

<style>
.v-tab {
  letter-spacing: normal !important;
}
.tab-active-bg {
  background-color: #a3d9e2;
}
</style>
