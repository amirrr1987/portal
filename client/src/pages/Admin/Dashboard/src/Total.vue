<template>
  <v-row>
    <TotalItem
      title="تعداد نمایندگان"
      :total="allData.agent"
      icon-bg-color="#f1c60a"
      md="4"
    >
      <template #iconName>
        <IconMonth
          width="30"
          height="40"
          fill="#FFF"
        />
      </template>
    </TotalItem>

    <TotalItem
      title="تعداد پذیرندگان"
      :total="allData.acceptor"
      icon-bg-color="#08b5dd"
      md="4"
    >
      <template #iconName>
        <IconMonth
          width="30"
          height="40"
          fill="#FFF"
        />
      </template>
    </TotalItem>

    <TotalItem
      title="تعداد تراکنش ها"
      :total="allData.transaction"
      icon-bg-color="#8e329e"
      md="4"
    >
      <template #iconName>
        <IconMonth
          width="30"
          height="40"
          fill="#FFF"
        />
      </template>
    </TotalItem>

    <TotalItem
      title="فروش هفتگی"
      :total="allData.weekly"
      icon-bg-color="#32889e"
      md="4"
    >
      <template #iconName>
        <IconMonth
          width="30"
          height="40"
          fill="#FFF"
        />
      </template>
    </TotalItem>

    <TotalItem
      title="فروش ماهانه"
      :total="allData.weekly"
      icon-bg-color="#00cf90"
      md="4"
    >
      <template #iconName>
        <IconMonth
          width="30"
          height="40"
          fill="#FFF"
        />
      </template>
    </TotalItem>

    <TotalItem
      title="موجودی کیف پول (ریال)"
      :total="allData.weekly"
      icon-bg-color="#689e32"
      md="4"
    >
      <template #iconName>
        <IconMonth
          width="30"
          height="40"
          fill="#FFF"
        />
      </template>
    </TotalItem>
  </v-row>
</template>

<script setup lang="ts">
import TotalItem from "@/components/TotalItem.vue";
import IconMonth from "@/icons/Main/IconTransaction.vue";
import { ref } from "vue";
const allData = ref({
  agent: 1_223_423,
  acceptor: 1_342_349,
  transaction: 1_234_234,
  weekly: 123_422,
});
</script>
