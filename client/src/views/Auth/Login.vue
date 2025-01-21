<template>
  <v-app
    :class="{
      'vira-bg': $vuetify.display.smAndUp,
    }"
  >
    <v-main class="align-center">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" md="7" lg="4" xl="3">
            <v-form
              ref="thisForm"
              class="white rounded-lg-2 py-lg-8 px-lg-6"
              lazy-validation
              @submit.prevent="validate"
            >
              <v-row justify="center">
                <v-col cols="7" lg="8">
                  <v-img
                    alt="عصر ویرا"
                    title="عصر ویرا"
                    transition="scale-transition"
                    src="@/assets/logo.svg"
                    lazy-src="@/assets/logo.svg"
                  />
                </v-col>
              </v-row>
              <v-row>
                <English v-model="login.username" label="نام کاربری" />

                <Password v-model="login.password" />
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-checkbox
                    v-model="login.remember"
                    label="مرا بخاطر بسپار"
                    color="#0d8dbf"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <div class="d-flex justify-space-around">
                    <Btn color="#57cf8f" dark type="submit">
                      <template #label> ورود </template>
                      <template #after>
                        <IconKey width="18" height="18" />
                      </template>
                    </Btn>
                    <Btn color="#4fc7db" dark to="/register">
                      <template #label> ثبت نام </template>
                      <template #after>
                        <IconUser width="18" height="18" />
                      </template>
                    </Btn>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <Btn
                    text
                    color="#0d8dbf"
                    label="رمز عبور را فراموش کرده‌ام"
                    dark
                    to="/forget"
                    class="mx-auto"
                  />
                </v-col>
              </v-row>

              <v-snackbar
                v-model="snackbarSuccess"
                color="green"
                top
                left
                :timeout="1000"
                class="text-center"
              >
                ورود با موفقیت انجام شد
              </v-snackbar>
              <v-snackbar
                v-model="snackbarError"
                color="red"
                top
                left
                :timeout="1000"
                class="text-center"
              >
                ورود ناموفق
              </v-snackbar>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore"; // Import Pinia store
import English from "@/components/English.vue";
import Password from "@/components/Password.vue";
import Btn from "@/components/Btn.vue";
import IconKey from "@/icons/Main/IconKey.vue";
import IconUser from "@/icons/Main/IconUser.vue";

const router = useRouter();
const authStore = useAuthStore(); // استفاده از Pinia store

const thisForm = ref<HTMLFormElement | null>(null);
const snackbarSuccess = ref(false);
const snackbarError = ref(false);
const login = ref({
  username: "",
  password: "",
  remember: false,
});

const validate = () => {
  if (thisForm.value?.validate()) {
    loginFunc();
  }
};

const loginFunc = async () => {
  const { username, password, remember } = login.value;
  try {
    const res = await authStore.getToken({
      auth: username,
      password,
      remember,
    });
    snackbarSuccess.value = true;
    switch (res.ASREVIRA.user.role) {
      case "admin":
        await router.push("/admin/dashboard");
        break;
      case "accepter":
        await router.push("/acceptor/dashboard");
        break;
      case "agent":
        await router.push("/agent/dashboard");
        break;
    }
  } catch (err) {
    snackbarError.value = true;
    console.error(err);
  }
};
</script>

<style scoped>
.vira-bg {
  background: white; /* Your background style */
}
</style>
