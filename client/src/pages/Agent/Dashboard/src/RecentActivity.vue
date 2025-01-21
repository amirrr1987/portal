<template>
  <v-data-table
    :items-per-page="5"
    class="elevation-1 pt-16 pb-10 position-relative text-center"
    :headers="recentViolationsHeader"
    :items="recentViolationsData"
    hide-default-footer
    loading
    loading-text="در حال بار گذاری ..."
  >
    <template v-slot:header>
      <CardTitle label="آخرین تخلفات ثبت شده" color="#ef3f3f" />
    </template>
    <template v-slot:footer>
      <v-btn color="primary" class="pt-6" text link to="/">
        بیشتر
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import CardTitle from "@/components/CardTitle";
export default {
  name: "LastViolation",
  components: {
    CardTitle,
  },
  data() {
    return {
      recentViolationsHeader: [
        { text: "نام کاربری", value: "username", align: "center" },
        { text: "کد کاربری", value: "usercode", align: "center" },
        { text: "نقش", value: "role", align: "center" },
        { text: "نوع فعالیت", value: "activityType", align: "center" },
        { text: "تاریخ و ساعت", value: "activityDate", align: "center" },
      ],
      recentViolationsData: [
        {
          username: "usename_82",
          usercode: "456456",
          role: "ادمین",
          activityType: "ایجاد تخفیف",
          activityDate: "1399/12/31",
          activityTime: "23:59:59",
        },
        {
          username: "usename_12",
          usercode: "123123",
          role: "نماینده",
          activityType: "ایجاد تخفیف",
          activityDate: "1399/05/31",
          activityTime: "23:59:59",
        },
        {
          username: "usename_82",
          usercode: "456456",
          role: "ادمین",
          activityType: " تخلف",
          activityDate: "1409/12/31",
          activityTime: "23:59:59",
        },
        {
          username: "usename_62",
          usercode: "6757",
          role: "پذیرنده",
          activityType: "ایجاد",
          activityDate: "1349/12/31",
          activityTime: "23:59:59",
        },
        {
          username: "usename_362",
          usercode: "4324",
          role: "پذیرنده",
          activityType: "ایجاد",
          activityDate: "1319/12/31",
          activityTime: "23:59:59",
        },
      ],
    };
  },
};
</script>
