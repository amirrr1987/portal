<template>
  <v-card class="pa-16">
    <CardTitle label="اطلاعات تخفیف" color="#5c67ae" />
    <v-row>
      <v-col cols="12" md="4"> کد تخفیف : {{}} </v-col>
      <v-col cols="12" md="4"> دسته بندی : {{}} </v-col>
      <v-col cols="12" md="4"> تاریخ ثبت : {{}} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> نوع تخفیف : {{}} </v-col>
      <v-col cols="12" md="4"> مقدار/درصد تخفیف : {{}} </v-col>
      <v-col cols="12" md="4"> تاریخ انقضا : {{}} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> نام ثبت کننده : {{}} </v-col>
      <v-col cols="12" md="4"> اشتراک عمومی : {{}} </v-col>
      <v-col cols="12" md="4"> نوع ایجاد الگو : {{}} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> نوع استفاده : {{}} </v-col>
      <v-col cols="12" md="4"> تعداد مجاز استفاده از کد : {{}} </v-col>
      <v-col cols="12" md="4"> استفاده شده : {{}} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> ایجاد شده برای : {{}} </v-col>
      <v-col cols="12" md="4">
        <v-checkbox checked label="کاربران ( کاربران ویژه)" />

        {{}}
      </v-col>
      <v-col cols="12" md="4">
        <v-checkbox label="پذیرندگان" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> کلید واژه الگو : : {{}} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <Btn label="ویرایش اطلاعات" color="#57cf8f" dark class="mt-16" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardTitle from "@/components/CardTitle";
export default {
  components: { CardTitle },
};
</script>

<style>
</style>