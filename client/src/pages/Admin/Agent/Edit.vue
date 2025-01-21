<template>
  <v-form
    ref="thisForm"
    lazy-validation
    @submit.prevent="validate"
  >
    <v-card class="pa-16">
      <CardTitle
        label="ویرایش نماینده"
        color="warning"
      />
      <v-row>
        <Title label="مشخصات نماینده" />
      </v-row>
      <v-row>
        <Farsi
          v-model="itemData.name"
          md="4"
          label="نام و نام خانوادگی"
        />
        <Farsi
          v-model="itemData.fatherName"
          md="4"
          label="نام پدر"
        />
        <Number
          v-model="itemData.mobile"
          md="4"
          label="تلفن همراه"
        />
      </v-row>
      <v-row>
        <Number
          v-model="itemData.nationalCode"
          md="4"
          label="کد ملی"
        />
        <Number
          v-model="itemData.certificateNumber"
          md="4"
          label="شماره شناسنامه"
        />
        <Email
          v-model="itemData.email"
          md="4"
          label="پست الکترونیکی"
        />
      </v-row>
      <v-row>
        <Country
          v-model="itemData.country"
          md="3"
        />
        <Province
          v-model="itemData.state"
          md="3"
          :country-id="itemData.country"
        />
        <City
          v-model="itemData.city"
          md="3"
          :state-id="itemData.state"
        />
        <Number
          v-model="itemData.postalCode"
          md="3"
          label="کد پستی"
        />
      </v-row>
      <v-row>
        <Textarea
          v-model="itemData.address"
          label="آدرس محل سکونت"
          class-name="rounded-lg-1"
        />
      </v-row>
      <v-row>
        <English
          v-model="itemData.phone"
          md="4"
          label="تلفن ثابت"
        />
        <v-col
          cols="12"
          md="4"
        >
          <v-select
            v-model="itemData.status"
            item-text="name"
            item-value="value"
            label="وضعیت"
            :rules="[rules.required]"
            :items="allStatus"
            required
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-select
            v-model="itemData.type"
            label="نوع نماینده"
            item-text="name"
            item-value="id"
            :rules="[rules.required]"
            :items="alltypes"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="8"
        >
          <v-row>
            <English
              v-model="itemData.username"
              md="6"
              label="نام کاربری"
            />
            <Number
              v-model="itemData.referenceCode"
              md="6"
              label="کد کاربری معرف"
            />
          </v-row>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-row>
            <DatePicker v-model="itemData.birthdate" />
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-radio-group
          v-model="itemData.gender"
          row
          required
        >
          <v-radio
            label="مرد"
            value="0"
          />
          <v-radio
            label="زن"
            value="1"
          />
        </v-radio-group>
      </v-row>

      <v-row>
        <Title label="بارگذاری تصاویر مدارک" />
      </v-row>
      <v-row>
        <ImageUploader
          :img-src="itemData.nationalCardImage"
          img-name="nationalCardImage"
          md="4"
          required
        >
          <template #header>
            بارگذاری تصویر کارت ملی
          </template>
        </ImageUploader>
        <ImageUploader
          :img-src="itemData.birthCertificateImage"
          img-name="birthCertificateImage"
          md="4"
          required
        >
          <template #header>
            بارگذاری تصویر شناسنامه
          </template>
        </ImageUploader>
      </v-row>
      <v-row class="mt-16">
        <v-col
          cols="12"
          class="d-flex justify-center"
        >
          <Btn
            label="ویرایش اطلاعات"
            color="#57cf8f"
            dark
            class="mt-16"
            type="submit"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import Title from "@/components/Title";
import Farsi from "@/components/FarsiText";
import Number from "@/components/EnglishNumber";
import Email from "@/components/Email";
import Country from "@/components/Country";
import Province from "@/components/Province";
import City from "@/components/City";
import Textarea from "@/components/Textarea";
import English from "@/components/English";
import DatePicker from "@/components/DatePicker";
import ImageUploader from "@/components/ImgUploader";
import Btn from "@/components/Btn";
import CardTitle from "@/components/CardTitle";
import { EventBus } from "@/mixins/EventBus.js";
export default {
  name: "Edit",
  components: {
    Title,
    Farsi,
    Number,
    Email,
    Country,
    Province,
    City,
    Textarea,
    English,
    DatePicker,
    ImageUploader,
    Btn,
    CardTitle,
  },
  data() {
    return {
      allCountry: [],
      allStates: [],
      allCities: [],
      allStatus: [
        { id: 0, name: "غیر فعال", value: -1 },
        { id: 1, name: "در حال رسیدگی", value: 0 },
        { id: 2, name: "فعال", value: 1 },
      ],
      alltypes: [
        { id: "0", name: "تکی" },
        { id: "1", name: "استانی" },
      ],
      itemData: {},
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
  mounted() {
    EventBus.$on("selectImg", (data) => {
      this.itemData[data.name] = data.src;
    });
  },
  async beforeCreate() {
    await this.getItemData();
  },
  methods: {
    //////////////////////////////////
    // Start check form validation

    validate() {
      if (this.$refs.thisForm.validate()) {
        this.updateForm();
      }
    },

    //  End  check form validation
    //////////////////////////////////

    //////////////////////////////////
    // Start send data
    updateForm() {
      const formData = new FormData();
      const oFormData = this.itemData;
      for (const key in oFormData) {
        if (oFormData[key] != null) formData.append(key, oFormData[key]);
      }

      this.$http
        .put(
          `${this.$privateKey}/agent/${this.$route.params.id}`,
          this.itemData
        )
        .then((res) => {
          this.dialog = true;
          this.routerToList();
          return res;
        })
        .catch((err) => {
          this.error = true;
          return err;
        });
    },
    //  End  send data
    //////////////////////////////////
    //////////////////////////////////
    // Start router to list
    routerToList() {
      setTimeout(() => {
        this.$router.push(`/admin/agent/list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////

    //////////////////////////////////
    // Start Get Tabel Data Item

    getItemData() {
      this.$http
        .get(`${this.$privateKey}/agent/${this.$route.params.id}`)
        .then((res) => {
          this.itemData = res.data.ASREVIRA;
          this.itemData.country = parseInt(res.data.ASREVIRA.country);
          this.itemData.state = parseInt(res.data.ASREVIRA.state);
          this.itemData.city = parseInt(res.data.ASREVIRA.city);
          // this.itemData.city = this.findCity(this.itemData.city);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    //  End  Get Tabel Data Item
    //////////////////////////////////

    // findCity(id) {
    //   return this.allCities.find((city) => city.id == id);
    // },
  },
};
</script>
