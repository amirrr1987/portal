<template>
  <v-data-table
    :items-per-page="5"
    class="elevation-1 pt-16 pb-10 position-relative text-center"
    :headers="recentActivitiesHeader"
    :items="recentActivitiesData"
    hide-default-footer
    loading
    loading-text="در حال بار گذاری ..."
  >
    <template #header>
      <CardTitle label="آخرین تخلفات ثبت شده" color="#ef3f3f" />
    </template>
    <template #footer>
      <v-btn color="primary" class="pt-6" text link to="/"> بیشتر </v-btn>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardTitle from "@/components/CardTitle.vue";

const recentActivitiesHeader = ref([
  { text: "نام کاربری", value: "username", align: "center" },
  { text: "کد کاربری", value: "usercode", align: "center" },
  { text: "نقش", value: "role", align: "center" },
  { text: "نوع فعالیت", value: "activityType", align: "center" },
  { text: "تاریخ و ساعت", value: "activityDate", align: "center" },
]);

const recentActivitiesData = ref([
  {
    username: "usename_434",
    usercode: "234",
    role: "کاربر",
    activityType: "ایجاد تخفیف",
    activityDate: "1399/12/31",
    activityTime: "23:59:59",
  },
  {
    username: "usename_12",
    usercode: "4567",
    role: "کاربر",
    activityType: "ایجاد",
    activityDate: "1379/12/31",
    activityTime: "23:59:59",
  },
  {
    username: "usename_12",
    usercode: "4567",
    role: "کاربر",
    activityType: "ایجاد",
    activityDate: "1379/12/31",
    activityTime: "23:59:59",
  },
  {
    username: "usename_434",
    usercode: "234",
    role: "کاربر",
    activityType: "ایجاد تخفیف",
    activityDate: "1399/12/31",
    activityTime: "23:59:59",
  },
  {
    username: "usename_12",
    usercode: "4567",
    role: "کاربر",
    activityType: "ایجاد",
    activityDate: "1379/12/31",
    activityTime: "23:59:59",
  },
]);
</script>
