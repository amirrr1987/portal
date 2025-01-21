<template>
  <v-card class="pa-16" style="color: #686868">
    <CardTitle label="اطلاعات نماینده" color="#f1c60a" />
    <v-row>
      <v-col cols="12" md="4"> نام و نام خانوادگی: {{ itemData.name }} </v-col>
      <v-col cols="12" md="4"> نام پدر: {{ itemData.fatherName }} </v-col>
      <v-col cols="12" md="4"> تاریخ تولد: {{ itemData.birthDate }} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> کد ملی: {{ itemData.nationalCode }} </v-col>
      <v-col cols="12" md="4">
        شماره شناسنامه: {{ itemData.certificateNumber }}
      </v-col>
      <v-col cols="12" md="4"> جنسیت: 
        
        <span v-show="itemData.gender == 0">مرد</span>
        <span v-show="itemData.gender == 1">زن</span> </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> کشور: {{ itemData.country.name }} </v-col>
      <v-col cols="12" md="4"> استان: {{ itemData.state.name }} </v-col>
      <v-col cols="12" md="4"> شهر: {{ itemData.city.name }} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> شماره همراه: {{ itemData.mobile }} </v-col>
      <v-col cols="12" md="4"> شماره ثابت: {{ itemData.phone }} </v-col>
      <v-col cols="12" md="4">
        :ایمیل
        <span class="vira-en">{{ itemData.email }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8"> آدرس منزل: {{ itemData.address }} </v-col>
      <v-col cols="12" md="4"> کد پستی: {{ itemData.postalCode }} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        نام کاربری :
        <span class="vira-en">{{ itemData.username }}</span>
      </v-col>
      <v-col cols="12" md="4">
        کد کاربری: <span class="vira-en">{{ itemData._id }}</span>
      </v-col>
      <v-col cols="12" md="4">
        کد کاربر معرف: {{ itemData.referenceCode }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        وضعیت:

        <span v-show="itemData.status == -1">غیر فعال</span>
        <span v-show="itemData.status == 0">در حال رسیدگی</span>
        <span v-show="itemData.status == 1">فعال</span>
      </v-col>
      <v-col cols="12" md="4">
        نوع نماینده:

        <span v-show="itemData.type == 0">تکی</span>
        <span v-show="itemData.type == 1">استانی</span>
      </v-col>
      <v-col cols="12" md="4">
        تعداد پذیرنده ها: {{ itemData.accepters.length }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardTitle from "@/components/CardTitle";
export default {
  name: "Create",
  components: {
    CardTitle,
  },
  data() {
    return {
      itemData: {},
    };
  },
  methods: {
    getItemData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(`${this.$privateKey}/agent/${this.$route.params.id}`)
          .then((res) => {
            this.itemData = res.data.ASREVIRA;
            this.itemData.country = this.findCountry(this.itemData.country);
            this.itemData.state = this.findState(this.itemData.state);
            this.itemData.city = this.findCity(this.itemData.city);
            resolve();
          })
          .catch((err) => {
            console.error(err);
            reject(err);
          });
      });
    },

    findCity(id) {
      return this.allCities.find((city) => city.id == id);
    },
    findState(id) {
      return this.allStates.find((state) => state.id == id);
    },
    findCountry(id) {
      return this.allCountry.find((country) => country.id == id);
    },
  },

  async beforeMount() {
    await this.$http.get(process.env.VUE_APP_API_COUNTRY).then((res) => {
      this.allCountry = res.data;
    });
    await this.$http.get(process.env.VUE_APP_API_PROVINCE).then((res) => {
      this.allStates = res.data;
    });
    await this.$http.get(process.env.VUE_APP_API_CITY).then((res) => {
      this.allCities = res.data;
    });
    await this.getItemData();
  },
};
</script>
