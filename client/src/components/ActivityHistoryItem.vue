<template>
  <!-- <v-row align="center"> -->
  <!-- <v-col cols="12" md="3"> لحظاتی پیش </v-col>
    <v-col cols="12" md="9">
      <v-row style="color: #686868">
        <v-col cols="12">

        </v-col>
      </v-row>
    </v-col> -->


  <div class="history-item">
    <div class="history-item__title">
      لحظاتی پیش
    </div>
    <span class="history-item__divider" />
    <div class="history-item__content pr-3">
      <div>تاریخ ثبت : {{ time }} {{ date }}</div>
      <div>آی پی آدرس: {{ ip }}</div>
      <div>دستگاه کاربر: {{ device }}</div>
      <div>مرورگر کاربر: {{ broswer }}</div>
      <div>سیستم عامل کاربر: {{ os }}</div>
      <div>توضیحات: {{ description }}</div>
    </div>
  </div>
  <!-- </v-row> -->
</template>

<script lang="ts">
export default {
  name: "ActivityHistoryItem",
  props: {
    time: { type: String, default: null },
    date: { type: String, default: null },
    ip: { type: String, default: null },
    device: { type: String, default: null },
    broswer: { type: String, default: null },
    os: { type: String, default: null },
    description: { type: String, default: null },
  },
};
</script>

<style lang="scss">
.history-item {
    display: grid;
    grid-template-columns: 1fr 2px 3fr;
    align-items: center;
    &__divider{
      height: 100%;
      background-color: #0f8fc1;
    }
    &__content{

    color: #686868;
    }
}
</style>
