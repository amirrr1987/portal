<template>
  <v-app
    :class="{
      'vira-bg': $vuetify.breakpoint.smAndUp,
    }"
  >
    <v-main class="">
      <v-container class="py-16">
        <v-row justify="center">
          <v-col
            cols="12"
            md="9"
          >
            <v-card class="bg-red pa-16 rounded-lg-2">
              <Owner v-show="step == 1" />
              <Acceptor v-show="step == 2" />
              <Images v-show="step == 3" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Owner from "@/views/Auth/register/Owner";
import Acceptor from "@/views/Auth/register/Acceptor";
import Images from "@/views/Auth/register/Images";

const step = ref(1)


</script>
