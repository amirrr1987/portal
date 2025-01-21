<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <Title label="مشخصات پذیرنده" />
      </v-row>
      <v-row>
        <Farsi md="4" label="نام پذیرنده" v-model="itemData.name" />
        <Number md="4" label="کد قرارداد" v-model="itemData.contractCode" />
        <Number md="4" label="تلفن ثابت" v-model="itemData.phone" />
      </v-row>

      <v-row>
        <Category md="3" v-model="itemData.category" />
        <Country md="3" v-model="itemData.country" />
        <Province
          md="3"
          v-model="itemData.state"
          :countryId="itemData.country"
        />
        <City md="3" v-model="itemData.city" :stateId="itemData.state" />
      </v-row>

      <v-row>
        <Textarea label="آدرس محل سکونت" md="6" v-model="itemData.address" />
        <Maps :defaultLat="itemData.lat" :defaultLng="itemData.lng" md="6" />
      </v-row>
      <v-row>
        <RangSilder
          cols="12"
          sliderMd="9"
          boxMd="3"
          v-model="itemData.futureDiscount"
        />
      </v-row>

      <v-row>
        <RangSilder
          cols="12"
          sliderMd="9"
          boxMd="3"
          v-model="itemData.agentWage"
        />
      </v-row>

      <v-row>
        <RangSilder
          cols="12"
          sliderMd="9"
          boxMd="3"
          v-model="itemData.discount"
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
            outlined
            v-model="tempTag"
            @keypress.enter.prevent="pushTag"
            :rules="[rules.tags]"
          />
        </v-col>
        <v-col cols="12" md="2">
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
        <v-col cols="12" lg="5">
          <div class="error--text mt-2" v-show="tagIsMax">
            {{ tagMessage }}
          </div>
          <div class="error--text mt-2" v-show="tagIsRepeat">
            {{ repeatMasseage }}
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <span
            class="rounded px-3 py-2 py-md-2 mb-2 ml-2 d-inline-block"
          style="border: 1px solid #c1c1c1"
            v-for="(tag, index) in itemData.tags"
            :key="index"
          >
            <v-btn icon @click="removeTag(index)">
              <IconRemoveCircle width="20" height="20" />
            </v-btn>
            {{ tag }}
            <v-btn icon disabled>
              <IconTag width="20" height="20" />
            </v-btn>
          </span>
        </v-col>
      </v-row>

      <v-row>
        <Textarea
          label="توضیحات پذیرنده"
          md="6"
          v-model="itemData.description"
        />
        <Textarea label="درباره ی پذیرنده" md="6" v-model="itemData.about" />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Title from "@/components/Title";
import Farsi from "@/components/FarsiText";
import Number from "@/components/EnglishNumber";
import Country from "@/components/Country";
import Province from "@/components/Province";
import City from "@/components/City";
import Category from "@/components/Category";
import Textarea from "@/components/Textarea";
import Maps from "@/components/MapEdit";
import RangSilder from "@/components/RangSilder";
import IconTag from "@/icons/Main/IconTag";
import IconRemoveCircle from "@/icons/Main/IconRemoveCircle";
export default {
  name: "Item2",
  components: {
    Title,
    Farsi,
    Number,
    Country,
    Province,
    City,
    Category,
    Textarea,
    Maps,
    RangSilder,
    IconTag,
    IconRemoveCircle,
  },

  props: {
    itemData: { type: Object },
  },
  data() {
    return {
      tag: "",
      tempTag: "",
      tagIsMax: false,
      tagIsRepeat: false,
      repeatMasseage: "تگ وارد شده تکراری میباشد",
      tagMessage: "حداکثر ۶ عدد تگ مجاز است.",
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
        tags: () => this.acceptor.tags.length > 0 || "این فیلد الزامی است",
      },
    };
  },
};
</script>
