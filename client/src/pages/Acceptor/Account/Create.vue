<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validate">
    <v-card class="pa-16">
      <CardTitle label="ثبت حساب جدید" color="#f9ae17" />
      <v-row>
        <Texts v-model="account.name" md="3" label="نام حساب" />
        <Wallets v-model="account.walletId" md="4" label="نام کیف پول" />
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="8" class="d-flex justify-space-center">
          <TheMask
            v-model="account.sheba"
            class="vira-ltr masked-input"
            mask="## #### #### #### #### #### ##"
            placeholder="__ ____ ____ ____ ____ ____ __"
          />
          <span class="vira-ir">IR</span>
        </v-col>
      </v-row>
      <v-row justify="end" class="mt-16">
        <Btn color="primary" label="ثبت حساب" type="submit" />
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore"; // Import Pinia store
import { TheMask } from "vue-the-mask";
import CardTitle from "@/components/CardTitle.vue";
import Texts from "@/components/Texts.vue";
import Btn from "@/components/Btn.vue";
import Wallets from "@/components/Wallets.vue";

const router = useRouter();
const authStore = useAuthStore(); // استفاده از Pinia store

const thisForm = ref<HTMLFormElement | null>(null);
const account = ref({
  name: "",
  sheba: "",
  walletId: "",
  userId: authStore.currentUser._id, // استفاده از Pinia store
});

const validate = () => {
  if (thisForm.value?.validate()) {
    submitForm();
  }
};

const submitForm = async () => {
  try {
    await axios.post(import.meta.env.VITE_APP_API_ACCOUNT, account.value);
    snackbar.value = true;
    routerToList();
  } catch (error) {
    error.value = true;
  }
};

const routerToList = () => {
  setTimeout(() => {
    router.push("/acceptor/account/list");
  }, 600);
};
</script>

<style scoped>
.vira-ir {
  font-family: Arial, serif;
  font-size: 1.7rem;
  color: #686868;
}

.masked-input {
  display: block;
  height: 45px;
  outline: none;
  width: 100%;
  font-family: Arial, serif;
  font-size: 1.7rem;
  color: #686868;
}
</style>
