<template>
  <v-row>
    <TotalItem
      title="تعداد دسته بندی تخفیفات"
      :total="allData.agent"
      icon-bg-color="#4fc7db"
      md="4"
    >
      <template #iconName>
        <IconLayer width="30" height="40" fill="#FFF" />
      </template>
    </TotalItem>
    <TotalItem
      title="تعداد تراکنش ها"
      :total="allData.transaction"
      icon-bg-color="#8e329e"
      md="4"
    >
      <template #iconName>
        <IconMonth width="30" height="40" fill="#FFF" />
      </template>
    </TotalItem>

    <TotalItem
      title="موجودی کیف پول (ریال)"
      :total="allData.weekly"
      icon-bg-color="#689e32"
      md="4"
    >
      <template #iconName>
        <IconBag width="30" height="40" fill="#FFF" />
      </template>
    </TotalItem>

    <TotalItem
      title="فروش روزانه"
      :total="allData.acceptor"
      icon-bg-color="#eb5fa5"
      md="4"
    >
      <template #iconName>
        <IconDaily width="30" height="40" fill="#FFF" />
      </template>
    </TotalItem>

    <TotalItem
      title="فروش هفتگی"
      :total="allData.weekly"
      icon-bg-color="#32889e"
      md="4"
    >
      <template #iconName>
        <IconWeekly width="30" height="40" fill="#FFF" />
      </template>
    </TotalItem>

    <TotalItem
      title="فروش ماهانه"
      :total="allData.weekly"
      icon-bg-color="#00cf90"
      md="4"
    >
      <template #iconName>
        <IconMonth width="30" height="40" fill="#FFF" />
      </template>
    </TotalItem>

    <TotalItem
      title="مشتریان امروز"
      :total="allData.weekly"
      icon-bg-color="#8d5feb"
      md="4"
    >
      <template #iconName>
        <IconDaily width="30" height="40" fill="#FFF" />
      </template>
    </TotalItem>
    <TotalItem
      title="مشتریان این هفته"
      :total="allData.weekly"
      icon-bg-color="#eb7e55"
      md="4"
    >
      <template #iconName>
        <IconWeekly width="30" height="40" fill="#FFF" />
      </template>
    </TotalItem>
    <TotalItem
      title="مشتریان این ماه"
      :total="allData.weekly"
      icon-bg-color="#fb2457"
      md="4"
    >
      <template #iconName>
        <IconMonth width="30" height="40" fill="#FFF" />
      </template>
    </TotalItem>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TotalItem from "@/components/TotalItem.vue";
import IconMonth from "@/icons/Main/IconMonth.vue";
import IconWeekly from "@/icons/Main/IconWeekly.vue";
import IconDaily from "@/icons/Main/IconDaily.vue";
import IconBag from "@/icons/Main/IconBag.vue";
import IconLayer from "@/icons/Main/IconLayer.vue";

const allData = ref({
  agent: 1_223_423,
  acceptor: 1_342_349,
  transaction: 1_234_234,
  weekly: 123_422,
});
</script>
