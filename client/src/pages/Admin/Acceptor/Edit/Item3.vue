<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <ImageUploader
          :img-src="imageSrc.logo"
          img-name="logo"
          md="4"
          required
        >
          <template #header>
            بارگذاری لوگو
          </template>
        </ImageUploader>
      </v-row>
      <v-row>
        <ImageUploader
          :img-src="imageSrc.pic1"
          img-name="pic1"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.pic2"
          img-name="pic2"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.pic3"
          img-name="pic3"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.pic4"
          img-name="pic4"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.pic5"
          img-name="pic5"
          md="4"
        />
      </v-row>
      <v-row>
        <ImageUploader
          :img-src="imageSrc.nationalCodeCard"
          img-name="nationalCodeCard"
          md="4"
          required
        >
          <template #header>
            بارگذاری تصویر کارت ملی
          </template>
        </ImageUploader>
        <ImageUploader
          :img-src="imageSrc.birthCertificate"
          img-name="birthCertificate"
          md="4"
          required
        >
          <template #header>
            بارگذاری تصویر شناسنامه
          </template>
        </ImageUploader>
        <ImageUploader
          :img-src="imageSrc.businessLicense"
          img-name="businessLicense"
          md="4"
          required
        >
          <template #header>
            بارگذاری پروانه کسب مربوطه
          </template>
        </ImageUploader>
        <ImageUploader
          :img-src="imageSrc.ownershipDocument"
          img-name="ownershipDocument"
          md="4"
          required
        >
          <template #header>
            بارگذاری اجاره نامه یا سند مالکیت
          </template>
        </ImageUploader>
        <ImageUploader
          :img-src="imageSrc.bills"
          img-name="bills"
          md="4"
          required
        >
          <template #header>
            بارگذاری قبض (برق، آب و...)
          </template>
        </ImageUploader>
      </v-row>

      <v-row>
        <ImageUploader
          :img-src="imageSrc.contract1"
          img-name="contract1"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract2"
          img-name="contract2"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract3"
          img-name="contract3"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract4"
          img-name="contract4"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract5"
          img-name="contract5"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract6"
          img-name="contract6"
          md="4"
        />
        <ImageUploader
          :img-src="imageSrc.contract7"
          img-name="contract7"
          md="4"
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { EventBus } from "@/mixins/EventBus.js";

import ImageUploader from "@/components/ImgUploader";
export default {
  name: "Item3",
  components: {
    ImageUploader,
  },

  props: {
    imageSrc: { type: Object },
  },
  data() {
    return {};
  },
  mounted() {
    EventBus.$on("selectImg", (data) => {
      this.imageSrc[data.name] = data.src;
    });
  },
  methods: {
    //////////////////////////////////
    // Start check form validation

    validate() {
      // if (this.$refs.thisForm.validate()) {
      this.assign();
      // }
    },

    //  End  check form validation
    //////////////////////////////////

    //////////////////////////////////
    // Start send data to Parent data
    assign() {
      this.$parent.$parent.create = {
        ...this.$parent.$parent.create,
        ...this.imageSrc,
      };

      this.submitForm();
    },
    //  End send data to Parent data
    //////////////////////////////////
    ////////////////8e24a85b845a40d42c9cdee7d51352679e3ca949//////////////////
    // Start brn next form
    btnBack() {
      this.$parent.$parent.step = 3;
      window.scrollTo(0, 0);
    },
    //  End  brn next form
    //////////////////////////////////

    //////////////////////////////////
    // Start send data
    submitForm() {
      const formData = new FormData();
      const oFormData = this.$parent.$parent.create;

      for (const key in oFormData) {
        if (oFormData[key] != null) formData.append(key, oFormData[key]);
      }
      // console.log(
      //   `I'm here :  ${this.$privateKey}/accepter , ${this.$parent.$parent.create}`
      // );
      this.$http
        .post(`${this.$privateKey}/accepter`, this.$parent.$parent.create)
        .then(() => {
          this.dialog = true;
        })
        .catch(() => {
          this.error = true;
        });
    },
    //  End  send data
    //////////////////////////////////
  },
};
</script>

<style>
</style>
