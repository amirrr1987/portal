<template>
  <v-card class="px-md-6 py-10">
    <v-row>
      <v-col cols="12" md="6" v-for="item in itemCount" :key="item">
        <Item
          :time="time"
          :date="date"
          :ip="ip"
          :os="os"
          :broswer="broswer"
          :device="device"
          :description="description"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Item from "@/components/ActivityHistoryItem";
export default {
  name: "ActivityHistory",
  components: {
    Item,
  },
  data() {
    return {
      itemCount: 4,
      time: "سیبسیب",
      date: "",
      ip: "",
      os: "",
      broswer: "",
      device: "",
      description: "",
    };
  },
};
</script>
