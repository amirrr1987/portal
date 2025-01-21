<template>
  <v-app
    :class="{
      'vira-bg': smAndUp,
    }"
  >
    <v-main class="">
      <v-container class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="9">
            <v-card class="bg-red pa-16 rounded-lg-2">
              <Owner v-show="step === 1" />
              <Acceptor v-show="step === 2" />
              <Images v-show="step === 3" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import Owner from "@/views/Auth/register/Owner.vue";
import Acceptor from "@/views/Auth/register/Acceptor.vue";
import Images from "@/views/Auth/register/Images.vue";

const step = ref(1);
const { smAndUp } = useDisplay(); // Access breakpoints using useDisplay
</script>

<style>
/* Add your styles here */
</style>
