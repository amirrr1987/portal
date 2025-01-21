<template>
  <v-form>
    <v-card class="pa-16">
      <CardTitle label="ساخت بن کارت" color="secondary" />
      <v-row align="center">
        <v-col cols="12" md="8">
          <v-radio-group v-model="benCardType" row label="نوع انتخاب پذیرنده :">
            <v-radio label="انتخاب سیستمی" :value="0" />
            <v-radio label="انتخاب دستی" :value="1" />
          </v-radio-group>
        </v-col>
        <Texts
          v-if="benCardType === 1"
          append-icon="mdi-magnify"
          label="انتخاب پذیرنده"
          md="4"
        />
      </v-row>
      <v-row justify="space-between" align="center" class="mb-6">
        <Number label="مبلغ بن کارت" md="4" append-icon="mdi-currency-rial" />
        <DatePicker v-model="date" md="4" label="انتخاب تاریخ انقضا" />
      </v-row>
      <v-row justify="space-between" class="mb-16">
        <Texts append-icon="mdi-magnify" label="انتخاب کاربر" md="4" />
        <v-col cols="12" md="6">
          <span
            class="rounded px-3 py-2 py-md-2 mb-2 ml-2 d-inline-block"
            style="border: 1px solid #c1c1c1"
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
        <Dialog
          btn-color="warning"
          btn-label="شسیبی"
          dialog-title="asdasd"
          dialog-text="asdasdasd"
        />
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <Btn color="primary" label="ثبت و تائید" />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardTitle from "@/components/CardTitle.vue";
import Texts from "@/components/Texts.vue";
import Number from "@/components/Number.vue";
import DatePicker from "@/components/DatePicker.vue";
import Btn from "@/components/Btn.vue";
import Dialog from "@/components/test.vue";
import IconRemoveCircle from "@/icons/Main/IconRemoveCircle.vue";
import IconTag from "@/icons/Main/IconTag.vue";

const benCardType = ref(0);
const date = ref("");
const tag = ref("");
const index = ref(0);

const removeTag = (index: number) => {
  console.log(index);
  // منطق حذف تگ
};
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
