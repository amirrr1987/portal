<template>
  <v-card class="pa-16">
    <CardTitle :label="`کد تخلف : ${codeNumber}`" color="red" />
    <v-row>
      <v-col cols="12" md="4"> ثبت کننده : {{ creator }} </v-col>
      <v-col cols="12" md="4"> پذیرنده : {{ accepter }} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> وضعیت : {{ status }} </v-col>
      <v-col cols="12" md="4"> وضعیت تائید : {{ approvalStatus }} </v-col>
      <v-col cols="12" md="4"> زمان ثبت تخلف : {{ violationDate }} </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4"> موضوع : {{ subject }} </v-col>
      <v-col cols="12">
        <v-card class="pa-6" elevation="6" color="#F1F1F1">
          <v-card-title>توضیحات</v-card-title>
          <v-card-text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> پاسخ </v-col>
      <v-col cols="12">
        <div class="vira-border rounded-lg-1 pa-3">
          <v-card color="#decced" class="mb-3">
            <div class="d-flex justify-space-between align-center pl-5">
              <v-card-title>ساسمونگ</v-card-title>
              <span>23/42/343</span>
            </div>
            <v-card-text>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </v-card-text>
            <v-card-text class="d-flex justify-end">
              <v-btn icon>
                <IconInfo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconUndo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconDelete width="18" height="18" fill="#3a3a3a" />
              </v-btn>
            </v-card-text>
          </v-card>

          <v-card color="#c1d8e8">
            <div class="d-flex justify-space-between align-center pl-5">
              <v-card-title>ساسمونگ</v-card-title>
              <span>23/42/343</span>
            </div>
            <v-card-text>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </v-card-text>
            <v-card-text class="d-flex justify-end">
              <v-btn icon>
                <IconInfo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconUndo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconDelete width="18" height="18" fill="#3a3a3a" />
              </v-btn>
            </v-card-text>
            <v-divider class="mx-5" />
            <div class="d-flex justify-space-between align-center pl-5">
              <v-card-title>
                <IconComment width="38" height="38" class="ml-3" />
                ساسمونگ
              </v-card-title>
              <span>23/42/343</span>
            </div>
            <v-card-text>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </v-card-text>
            <v-card-text class="d-flex justify-end">
              <v-btn icon>
                <IconInfo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconUndo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconDelete width="18" height="18" fill="#3a3a3a" />
              </v-btn>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardTitle from "@/components/CardTitle.vue";
import IconDelete from "@/icons/Main/IconDelete.vue";
import IconUndo from "@/icons/Main/IconUndo.vue";
import IconInfo from "@/icons/Main/IconInfo.vue";
import IconComment from "@/icons/Main/IconComment.vue";

const codeNumber = ref("12345"); // Example value
const creator = ref("ساسمونگ"); // Example value
const accepter = ref("پذیرنده نمونه"); // Example value
const status = ref("رسیدگی نشده"); // Example value
const approvalStatus = ref("تائید نشده"); // Example value
const violationDate = ref("1402/07/15"); // Example value
const subject = ref("موضوع نمونه"); // Example value
</script>

<style>
.vira-border {
  border: 2px solid #212121;
}
</style>
