<template>
  <v-form
    ref="thisForm"
    lazy-validation
    @submit.prevent="validate"
  >
    <v-row
      justify="center"
      class="mb-16"
    >
      <v-col
        cols="12"
        lg="8"
        xl="6"
      >
        <v-img
          src="@/assets/img/RegisterTab2.svg"
          lazy-src="@/assets/img/RegisterTab2.svg"
        />
      </v-col>
    </v-row>
    <v-row>
      <TheTitle label="مشخصات پذیرنده" />
    </v-row>
    <v-row>
      <Farsi
        v-model="acceptor.name"
        md="4"
        label="نام پذیرنده"
      />
      <Number
        v-model="acceptor.contractCode"
        md="4"
        label="کد قرارداد"
      />
      <Number
        v-model="acceptor.phone"
        md="4"
        label="تلفن ثابت"
      />
    </v-row>

    <v-row>
      <Category
        v-model="acceptor.category"
        md="3"
      />
      <Country
        v-model="acceptor.country"
        md="3"
      />
      <Province
        v-model="acceptor.state"
        md="3"
        :country-id="acceptor.country"
      />
      <City
        v-model="acceptor.city"
        md="3"
        :state-id="acceptor.state"
      />
    </v-row>
    <v-row>
      <Textarea
        v-model="acceptor.address"
        label="آدرس دقیق محل"
        md="6"
      />
      <Maps
        :default-lat="acceptor.lat"
        :default-lng="acceptor.lng"
        md="6"
      />
    </v-row>

    <v-row>
      <v-col cols="12">
        تخفیفات آتی
      </v-col>
    </v-row>
    <v-row>
      <RangSilder
        v-model="acceptor.futureDiscount"
        cols="12"
        md="9"
        slider-md="9"
        box-md="3"
      />
      <Number
        v-model="acceptor.futureDiscountExpire"
        label="انقضاء تخفیفات آتی"
        md="3"
      />
    </v-row>

    <v-row>
      <v-col cols="12">
        کارمزد نماینده
      </v-col>
    </v-row>
    <v-row>
      <RangSilder
        v-model="acceptor.agentWage"
        cols="12"
        slider-md="9"
        box-md="3"
      />
    </v-row>

    <v-row>
      <v-col cols="12">
        مقدار تخفیف کلی
      </v-col>
    </v-row>
    <v-row>
      <RangSilder
        v-model="acceptor.discount"
        cols="12"
        slider-md="9"
        box-md="3"
      />
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="3"
        class="d-flex align-center justify-space-around"
      >
        <v-text-field
          v-model="tempTag"
          outlined
          :rules="[rules.tags]"
          @keyup.enter.prevent="pushTag"
        />
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
        <v-btn
          color="primary"
          class="mt-2"
          rounded
          block
          medium
          @click.prevent="pushTag"
        >
          ثبت تگ
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        lg="5"
      >
        <div
          v-show="tagIsMax"
          class="error--text mt-2"
        >
          {{ tagMessage }}
        </div>
        <div
          v-show="tagIsRepeat"
          class="error--text mt-2"
        >
          {{ repeatMasseage }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <span
          v-for="(tag, index) in acceptor.tags"
          :key="index"
          class="rounded px-3 py-2 py-md-2 mb-2 ml-2 d-inline-block"
          style="border: 1px solid #c1c1c1"
        >
          <v-btn
            icon
            @click="removeTag(index)"
          >
            <IconRemoveCircle
              width="20"
              height="20"
            />
          </v-btn>
          {{ tag }}
          <v-btn
            icon
            disabled
          >
            <IconTag
              width="20"
              height="20"
            />
          </v-btn>
        </span>
      </v-col>
    </v-row>

    <v-row>
      <Textarea
        v-model="acceptor.description"
        label="توضیحات پذیرنده"
        md="6"
      />
      <Textarea
        v-model="acceptor.about"
        label="درباره ی پذیرنده"
        md="6"
      />
    </v-row>

    <v-row justify="space-around">
      <BtnBack
        label="بازگشت"
        dark
        class="mt-16"
        @click="btnBack"
      />
      <BtnNext
        label="ادامه"
        dark
        class="mt-16"
        type="submit"
      />
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { EventBus } from "@/mixins/EventBus";
import TheTitle from "@/components/Title.vue";
import Farsi from "@/components/FarsiText.vue";
import Number from "@/components/EnglishNumber.vue";
import Country from "@/components/Country.vue";
import Province from "@/components/Province.vue";
import City from "@/components/City.vue";
import Textarea from "@/components/Textarea.vue";
import RangSilder from "@/components/RangSilder.vue";
import Category from "@/components/Category.vue";
import BtnNext from "@/components/BtnNext.vue";
import BtnBack from "@/components/BtnBack.vue";
import Maps from "@/components/MapEdit.vue";
import IconTag from "@/icons/Main/IconTag.vue";
import IconRemoveCircle from "@/icons/Main/IconRemoveCircle.vue";

const thisForm = ref<HTMLFormElement | null>(null);
const tempTag = ref("");
const tagIsMax = ref(false);
const tagIsRepeat = ref(false);
const repeatMasseage = "تگ وارد شده تکراری میباشد";
const tagMessage = "حداکثر ۶ عدد تگ مجاز است.";
const acceptor = ref({
  name: "",
  description: "",
  about: "",
  futureDiscount: 0,
  futureDiscountExpire: "",
  agentWage: 0,
  discount: 0,
  category: 0,
  contractCode: "",
  country: 0,
  address: "",
  phone: "",
  state: 0,
  city: 0,
  tags: [] as string[],
  lat: "5667495.121918411",
  lng: "4267897.304159825",
});

const rules = {
  required: (value: string) => !!value || "این فیلد الزامی است",
  tags: () => acceptor.value.tags.length > 0 || "این فیلد الزامی است",
};

onMounted(() => {
  EventBus.on("selectLatLng", (data: { lat: string; lng: string }) => {
    acceptor.value.lat = data.lat;
    acceptor.value.lng = data.lng;
  });
});

const pushTag = () => {
  tagIsRepeat.value = false;
  tagIsMax.value = false;

  if (acceptor.value.tags.length > 5) {
    tagIsMax.value = true;
    return;
  }

  if (acceptor.value.tags.includes(tempTag.value)) {
    tagIsRepeat.value = true;
    return;
  }

  if (tempTag.value !== "" && !acceptor.value.tags.includes(tempTag.value)) {
    acceptor.value.tags.push(tempTag.value);
  }

  tempTag.value = "";
};

const removeTag = (index: number) => {
  acceptor.value.tags.splice(index, 1);
};

const validate = () => {
  if (thisForm.value?.validate()) {
    assign();
  }
};

const assign = () => {
  const parent = inject("parentComponent"); // اگر از provide/inject استفاده می‌کنید
  if (parent) {
    parent.create = {
      ...parent.create,
      ...acceptor.value,
    };
  }
  btnNext();
};

const btnNext = () => {
  const parent = inject("parentComponent"); // اگر از provide/inject استفاده می‌کنید
  if (parent) {
    parent.step = 3;
  }
  window.scrollTo(0, 0);
};

const btnBack = () => {
  const parent = inject("parentComponent"); // اگر از provide/inject استفاده می‌کنید
  if (parent) {
    parent.step = 1;
  }
  window.scrollTo(0, 0);
};
</script>

<style lang="scss" scoped>
#map {
  min-height: 140px;
  height: 140px;
  .ol-viewport {
    border-radius: 8px;
    box-shadow: 0 0 3px rgb(3, 28, 75);
  }
}
</style>
