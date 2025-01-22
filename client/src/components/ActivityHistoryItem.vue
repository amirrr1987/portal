<template>
  <div class="history-item">
    <div class="history-item__title">لحظاتی پیش</div>
    <span class="history-item__divider" />
    <div class="history-item__content pr-3">
      <div>تاریخ ثبت : {{ time }} {{ date }}</div>
      <div>آی پی آدرس: {{ ip }}</div>
      <div>دستگاه کاربر: {{ device }}</div>
      <div>مرورگر کاربر: {{ browser }}</div>
      <div>سیستم عامل کاربر: {{ os }}</div>
      <div>توضیحات: {{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  time?: string | undefined;
  date?: string | undefined;
  ip?: string | undefined;
  device?: string | undefined;
  browser?: string | undefined;
  os?: string | undefined;
  description?: string | undefined;
}

withDefaults(defineProps<Props>(), {
  time: undefined,
  date: undefined,
  ip: undefined,
  device: undefined,
  browser: undefined,
  os: undefined,
  description: undefined,
});
</script>

<style lang="scss">
.history-item {
  display: grid;
  grid-template-columns: 1fr 2px 3fr;
  align-items: center;

  &__divider {
    height: 100%;
    background-color: #0f8fc1;
  }

  &__content {
    color: #686868;
  }
}
</style>
