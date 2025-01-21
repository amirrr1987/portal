<template>
  <v-card class="px-md-6 py-10">
    <CardTitle label="خلاصه اطلاعات ورود و خروج" color="#08b5dd" />
    <v-row>
      <v-col v-for="item in itemCount" :key="item" cols="12" md="6">
        <Item
          :time="time"
          :date="date"
          :ip="ip"
          :os="os"
          :browser="browser"
          :device="device"
          :description="description"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Item from "@/components/ActivityHistoryItem.vue";
import CardTitle from "@/components/CardTitle.vue";

const itemCount = ref(4);
const time = ref("سیبسیب");
const date = ref("");
const ip = ref("");
const os = ref("");
const browser = ref("");
const device = ref("");
const description = ref("");
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
