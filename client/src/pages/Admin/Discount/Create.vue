<template>
  <v-form ref="form" lazy-validation @submit.prevent="validateForm">
    <v-card class="pa-16">
      <CardTitle label="تعریف تخفیف" color="#d55789" />
      <v-row v-if="false">
        <v-col cols="12" md="3">
          <v-select
            label="انتخاب دسته بندی"
            :items="categories"
            v-model="category"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-radio-group
            class="vira-radio-btn"
            label="اشتراک تخفیف"
            v-model="discount.publicType"
          >
            <v-radio label="عمومی" :value="1"></v-radio>
            <v-radio label="خصوصی" :value="2"></v-radio>
          </v-radio-group>
        </v-col>
        <Number label="تعداد کدها" v-model="discount.codeCount" md="3" />
      </v-row>
      <v-row v-if="discount.publicType == 2" class="mb-16">
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <v-checkbox label="کاربران" v-model="activeUsers" class="ml-10" />

          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                min-width="45"
                width="45"
                height="40"
                :disabled="!activeUsers"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">
                Use Google's location service?
              </v-card-title>
              <v-card-text
                >Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Disagree
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <v-checkbox
            label="پذیرندگان"
            v-model="activeAcceptors"
            class="ml-10"
          />

          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                min-width="45"
                width="45"
                height="40"
                :disabled="!activeAcceptors"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">
                Use Google's location service?
              </v-card-title>
              <v-card-text
                >Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Disagree
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-radio-group
            class="vira-radio-btn"
            label="نوع تخفیف"
            v-model="discount.discountType"
          >
            <v-radio label="مقداری" :value="1"></v-radio>
            <v-radio label="درصدی" :value="2"></v-radio>
          </v-radio-group>
        </v-col>

        <Number
          md="4"
          append="ریال"
          placeholder="30000"
          v-model="discount.amount"
          v-if="discount.discountType == 1"
        />
        <Number
          md="4"
          append="%"
          maxCount="100"
          minCount="0"
          v-model="discount.amount"
          v-if="discount.discountType == 2"
          :rules="[rules.required, rules.percentageNum]"
        />
        <DatePicker md="4" v-model="discount.expireTime" />
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-radio-group
            class="vira-radio-btn"
            label="نوع استفاده"
            v-model="discount.count"
          >
            <v-radio label="یکبار مصرف" :value="1"></v-radio>
            <v-radio label="استفاده تعدادی" :value="2"></v-radio>
          </v-radio-group>
        </v-col>
        <Number
          md="4"
          label="تعداد کدها"
          v-model="discount.count"
          v-if="discount.count >= 2"
        />
      </v-row>
      <v-row v-if="false">
        <v-col cols="12" md="8">
          <v-radio-group
            class="vira-radio-btn vira-radio-btn--custom"
            label="نوع ایجاد کدها"
            v-model="codeCountCreateType"
          >
            <v-radio label="آپلود فایل اکسل برای ثبت کدها" :value="1"></v-radio>
            <v-radio label="وارد کردن الگو برای کدها" :value="2"></v-radio>
            <v-radio label="به صورت خودکار توسط سیستم" :value="3"></v-radio>
            <v-radio label="وارد کردن دستی" :value="4"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col cols="12">
          <Btn label="ثبت" color="primary" type="submit" class="float-left" />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import Number from "@/components/Number";
import DatePicker from "@/components/DatePicker";

import Btn from "@/components/Btn";
export default {
  name: "Create",
  components: {
    CardTitle,
    Number,
    DatePicker,
    Btn,
  },
  data() {
    return {
      discounts: [123, 2131],
      activeUsers: false,
      activeAcceptors: false,
      dialog: false,
      codeCountCreateType: 1,
      discount: {
        publicType: 1, // اشتراک تخفیف  1-2
        discountType: 1, // نوع تخفیف 1-2
        count: 1, // یا تعدا دومی  نوع استفاده
        codeCount: 12, // تعداد کد ها
        amount: 34567, // نوع تخفیف مقدارش
        expireTime: null,
        userType: true, //
        accepterType: true,
        accepters: ["606eb8b6dd8fff76ed95711a", "606eb8b6dd8fff76ed95711a"],
        user: ["606eb8b6dd8fff76ed95711a", "606eb8b6dd8fff76ed95711a"],
      },
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },

  methods: {
    //////////////////////////////////
    // Start router to list
    routerToList() {
      setTimeout(() => {
        this.$router.push(`/admin/discount/list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////
    //////////////////////////////////
    // Start check form validation
    validateForm() {
      // if (this.$refs.thisForm.validate()) {
      this.submitForm();
      // }
      // alert("234");
    },
    //  End  check form validation
    //////////////////////////////////

    //////////////////////////////////
    // Start
    submitForm() {
      this.$http
        .post(process.env.VUE_APP_API_DISCOUNT, this.category)
        .then(() => {
          this.routerToList();
        })
        .catch(() => {
          this.error = true;
        });
    },
    //  End
    //////////////////////////////////
  },
  computed: {},
};
</script>

<style>
.vira-radio-btn .v-input--radio-group__input {
  grid-template-columns: 8rem 1fr !important;
}
.vira-radio-btn legend {
  text-align: right !important;
}
.vira-radio-btn--custom legend {
  text-align: right !important;
  grid-row: 1/10 !important;
}
</style>
