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
      <TheTitle label="ارسال تصاویر پذیرنده" />
    </v-row>
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
    <v-row justify="space-around">
      <BtnBack
        label="بازگشت"
        dark
        class="mt-16"
        @click="btnBack"
      />

      <Dia
        btn-class="mt-16"
        color="#57cf8f"
      />
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { EventBus } from "@/mixins/EventBus";
import TheTitle from "@/components/Title.vue";
import BtnBack from "@/components/BtnBack.vue";
import ImageUploader from "@/components/ImgUploader.vue";
import Dia from "@/components/Dia.vue";

const router = useRouter();
const thisForm = ref<HTMLFormElement | null>(null);
const imageSrc = ref({
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
});

onMounted(() => {
  EventBus.on("selectImg", (data: { name: string; src: string }) => {
    imageSrc.value[data.name as keyof typeof imageSrc.value] = data.src;
  });
});

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
      ...imageSrc.value,
    };
  }
  submitForm();
};

const btnBack = () => {
  const parent = inject("parentComponent"); // اگر از provide/inject استفاده می‌کنید
  if (parent) {
    parent.step = 2;
  }
  window.scrollTo(0, 0);
};

const submitForm = async () => {
  const formData = new FormData();
  const parent = inject("parentComponent"); // اگر از provide/inject استفاده می‌کنید
  if (parent) {
    const oFormData = parent.create;
    for (const key in oFormData) {
      if (oFormData[key] != null) formData.append(key, oFormData[key]);
    }

    try {
      await axios.post(`${privateKey.value}/accepter`, oFormData);
      dialog.value = true;
      routerToList();
    } catch (error) {
      error.value = true;
    }
  }
};

const routerToList = () => {
  setTimeout(() => {
    router.push("/admin/acceptor/list");
  }, 600);
};
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
