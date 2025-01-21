<template>
  <v-card class="pa-16">
    <CardTitle label="انتخاب نوع تسویه حساب" color="#4fc7db" />
    <v-row>
      <v-radio-group row label="انتخاب نوع تسویه حساب : ">
        <v-radio label="تسویه حساب از طریق ثبت درخواست" />
        <v-radio label="تسویه حساب خودکار" />
      </v-radio-group>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-select
          :items="da"
          item-text="asd"
          item-value="das"
          label="کیف پول مبدا"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          :items="da"
          item-text="asd"
          item-value="das"
          label="حساب مقصد"
        />
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col cols="12">
        <v-card-title class="text-title primary--text"
          >تسویه حساب از طریق ثبت درخواست چیست؟</v-card-title
        >
        <v-card-text>
          در بخش تسویه، با ورود به قسمت ثبت درخواست جدید و پر کردن اطلاعات برای
          تسویه، با توجه به روند پرداخت و قوانین بانکی مبلغ.درخواستی شما پس از
          طی کردن مراحل لازم در سریعترین زمان به حساب شما واریز میگردد
        </v-card-text>
      </v-col>
      <v-col cols="12">
        <v-card-title class="text-title primary--text"
          >تسویه حساب خودکار چیست؟</v-card-title
        >
        <v-card-text>
          با انتخاب این نوع تسویه احتیاج به ثبت درخواست ندارید و سیستم به صورت
          کاملا هوشمند و بدون درگیر کردن کاربر تسویه حساب شما .را به صورت خودکار
          هر 6 ساعت یکبار انجام میدهد
        </v-card-text>
      </v-col>
      <v-col cols="12">
          <p class="red--text">
          <v-icon color="red" class="ml-3">mdi-alert</v-icon>
              <span>شما برای تغییر نوع تسویه حساب نیاز به تائید اپراتور دارید و پس از تائید، سیستم  تسویه حساب برای شما فعال میشود .</span>
          </p>
          <p class="red--text">
          <v-icon color="red" class="ml-3">mdi-alert</v-icon>
              <span>پس از اعمال شدن سیستم تسویه حساب خودکار، شما به بخش ثبت درخواست تسویه دسترسی ندارید .</span>
          </p>
          <p class="red--text">
          <v-icon color="red" class="ml-3">mdi-alert</v-icon>
              <span>پس از اعمال شدن سیستم تسویه حساب خودکار، قابلیت ساخت کارت اعتباری مجازی غیرفعال میشود .</span>
          </p>
      </v-col>
    </v-row>
    <v-row class="mt-16" justify="space-between">
        <v-btn color="red" width="140" height="45" dark rounded>انصراف</v-btn>
        <v-btn color="primary" width="140" height="45" dark rounded>ثبت درخواست</v-btn>
    </v-row>
  </v-card>
</template>

<script>
import CardTitle from "@/components/CardTitle";
export default {
  name: "Type",
  components: { CardTitle },
};
</script>

<style>
</style>