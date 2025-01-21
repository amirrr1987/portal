<template>
  <v-card class="pa-16">
    <CardTitle label="درخواست تسویه حساب" color="#eb5fa5" />
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card
          color="#48beb2"
          class="white--text text-center px-8 py-6 rounded-lg-6"
        >
          <div>موجودی :</div>
          <div class="d-flex justify-space-between">
            <span> دویست و پنجاه هزار میلیون ریال</span>
            <span>250.000.000 ریال</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-select
          label="کیف پول مبدا"
          :items="asd"
          item-text="asd"
          item-value="asd"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          label="مبلغ درخواستی"
          type="number"
          class="vira-input-en vira-input-ltr"
        >
          <template v-slot:append> <span class="mr-3">ریال</span> </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="حساب مقصد"
          :items="asd"
          item-text="asd"
          item-value="asd"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="red--text">
          <v-icon color="red" class="ml-3">mdi-alert</v-icon>
          <span>
            حداقل مبلغ تسویه حساب پانصد هزار ریال (500000 ریال) میباشد .
          </span>
        </p>
        <p class="red--text">
          <v-icon color="red" class="ml-3">mdi-alert</v-icon>
          <span>کارمزد تسویه حساب بانکی 0.07 % میباشد .</span>
        </p>
        <p class="red--text">
          <v-icon color="red" class="ml-3">mdi-alert</v-icon>
          <span
            >تسویه حساب بانکی در باشگاه مشتریان عصرویرا مبتنی بر قوانین بانکی
            جمهوری اسلامی ایران میباشد .</span
          >
        </p>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-btn color="primary" width="140" height="43" dark rounded>
        ثبت درخواست
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
import CardTitle from "@/components/CardTitle";
export default {
  name: "Create",
  components: { CardTitle },
};
</script>
