<template>
  <v-form ref="form" lazy-validation @submit.prevent="validate">
    <v-card class="pa-16">
      <CardTitle label="تعریف تخفیف" color="#d55789" />
      <v-row>
        <v-col cols="12" md="3">
          <v-select
            label="انتخاب دسته بندی"
            :items="discounts"
            v-model="discount.type"
            item-text="name"
            item-value="_id"
            :rules="[rules.required]"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-radio-group
            class="vira-radio-btn"
            label="اشتراک تخفیف"
            v-model="discount.DiscountSubscription"
          >
            <v-radio label="عمومی" value="public"></v-radio>
            <v-radio label="خصوصی" value="privaite"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" md="4" v-if="discount.DiscountSubscription == `public`">
          <v-checkbox label="کاربران" />
          <v-select
            label="انتخاب دسته بندی"
            :items="discounts"
            v-model="discount.type"
            item-text="name"
            item-value="_id"
            :rules="[rules.required]"
            required
          />
          <Number label="تعداد کدها" />
        </v-col>
        <v-col cols="12" md="4" v-if="discount.DiscountSubscription == `public`">
          <v-checkbox label="پذیرندگان" />
          <span>تمامی پذیرندگان</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-radio-group
            class="vira-radio-btn"
            label="نوع تخفیف"
            v-model="discount.DiscountSubscription"
          >
            <v-radio label="درصدی" value="Percent"></v-radio>
            <v-radio label="خصوصی" value="privaite"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-radio-group
            class="vira-radio-btn"
            label="اشتراک تخفیف"
            v-model="discount.DiscountSubscription"
          >
            <v-radio label="مقداری" value="radio-1"></v-radio>
            <v-radio label="درصدی" value="radio-2"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-radio-group
            class="vira-radio-btn"
            label="اشتراک تخفیف"
            v-model="discount.DiscountSubscription"
          >
            <v-radio label="یکبار مصرف" value="radio-1"></v-radio>
            <v-radio label="استفاده تعدادی" value="radio-2"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-radio-group
            class="vira-radio-btn"
            label="اشتراک تخفیف"
            v-model="discount.DiscountSubscription"
          >
            <v-radio
              label="آپلود فایل اکسل برای ثبت کد ها"
              value="radio-1"
            ></v-radio>
            <v-radio label="وارد کردن الگو برای کدها" value="radio-2"></v-radio>
            <v-radio
              label="به صورت خودکار توسط سیستم"
              value="radio-2"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import Number from "@/components/Number";
export default {
  name: "Create",
  components: {
    CardTitle,
    Number,
  },
  data() {
    return {
      discounts: [123, 2131],
      discount: {
        type: "",
        DiscountSubscription: "",
      },
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
};
</script>

<style></style>
