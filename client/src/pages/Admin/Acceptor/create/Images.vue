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
          src="@/assets/img/RegisterTab3.svg"
          lazy-src="@/assets/img/RegisterTab3.svg"
        />
      </v-col>
    </v-row>
    <v-row>
      <Title label="ارسال تصاویر پذیرنده" />
    </v-row>
    <v-row>
      <ImageUploader
        :img-src="imageSrc.logo"
        img-name="logo"
        md="4"
      >
        <template #header>
          بارگذاری لوگو
        </template>
      </ImageUploader>
    </v-row>
    <v-row>
      <span class="mt-16 grey--text text--darken-1">بارگذاری تصاویر پذیرنده</span>
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
      <span class="mt-10 mb-4 grey--text text--darken-1">ارسال مدارک</span>
    </v-row>
    <v-row>
      <ImageUploader
        :img-src="imageSrc.nationalCodeCard"
        img-name="nationalCodeCard"
        md="4"
      >
        <template #header>
          بارگذاری تصویر کارت ملی
        </template>
      </ImageUploader>
      <ImageUploader
        :img-src="imageSrc.birthCertificate"
        img-name="birthCertificate"
        md="4"
      >
        <template #header>
          بارگذاری تصویر شناسنامه
        </template>
      </ImageUploader>
      <ImageUploader
        :img-src="imageSrc.businessLicense"
        img-name="businessLicense"
        md="4"
      >
        <template #header>
          بارگذاری پروانه کسب مربوطه
        </template>
      </ImageUploader>
      <ImageUploader
        :img-src="imageSrc.ownershipDocument"
        img-name="ownershipDocument"
        md="4"
      >
        <template #header>
          بارگذاری اجاره نامه یا سند مالکیت
        </template>
      </ImageUploader>
      <ImageUploader
        :img-src="imageSrc.bills"
        img-name="bills"
        md="4"
      >
        <template #header>
          بارگذاری قبض (برق، آب و...)
        </template>
      </ImageUploader>
    </v-row>
    <v-row>
      <span class="mt-10 mb-4 grey--text text--darken-1">بارگذاری تصاویر قرارداد</span>
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
    <v-row justify="space-around">
      <BtnBack
        label="بازگشت"
        dark
        class="mt-16"
        @click="btnBack"
      />

      <v-dialog
        v-model="submitDialog"
        persistent
        max-width="400"
      >
        <template #activator="{ off }">
          <Btn
            type="submit"
            label="تائید نهایی"
            color="#57cf8f"
            dark
            class="mt-16"
            v-on="off"
          >
            <template #after>
              <Checked
                width="25"
                height="25"
              />
            </template>
          </Btn>
        </template>
        <v-card class="pt-6">
          <v-img
            class="mx-auto"
            width="130"
            src="@/assets/img/like.svg"
            lazy-src="@/assets/img/like.svg"
          />
          <v-card-text class="text-center py-10">
            ثبت نام شما با موفقیت انجام شد و پس از تایید اپراتور به شما پیامک
            ارسال می گردد.
            <br>
            با تشکر
          </v-card-text>
          <v-card-actions class="d-flex justify-center pb-10">
            <Btn
              label="تائید"
              color="primary"
              dark
              @click="routerToList"
            />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script>
import { EventBus } from "@/mixins/EventBus.js";
import Title from "@/components/Title";
import BtnBack from "@/components/BtnBack";
import ImageUploader from "@/components/ImgUploader";
import Btn from "@/components/Btn";
import Checked from "@/icons/Main/IconCheckedCircle";
export default {
  name: "Images",
  components: {
    Title,
    ImageUploader,
    BtnBack,
    Btn,
    Checked,
  },
  data() {
    return {
      submitDialog: false,
      clicked: false,
      imageSrc: {
        logo: "",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: "",
        pic5: "",
        nationalCodeCard: "",
        birthCertificate: "",
        businessLicense: "",
        ownershipDocument: "",
        bills: "",
        contract1: "",
        contract2: "",
        contract3: "",
        contract4: "",
        contract5: "",
        contract6: "",
        contract7: "",
      },
    };
  },
  mounted() {
    EventBus.$on("selectImg", (data) => {
      this.imageSrc[data.name] = data.src;
    });
  },
  methods: {
    //////////////////////////////////
    // Start router to list
    routerToList() {
      this.submitDialog = false;

      setTimeout(() => {
        this.$router.push(`/admin/acceptor/list`);
      }, 1200);
    },
    //  End  router to list
    //////////////////////////////////
    //////////////////////////////////
    // Start check form validation

    validate() {
      this.clicked = true;
      if (this.$refs.thisForm.validate()) {
        this.assign();
      }
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

      this.$http
        .post(`${this.$privateKey}/accepter`, this.$parent.$parent.create)
        .then(() => {
          this.submitDialog = true;
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
