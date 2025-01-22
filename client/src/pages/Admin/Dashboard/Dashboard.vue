<template>
  <div>
    <Total />
    <Sale class="mt-16" />
    <WalletTransaction class="mt-16" />
    <LastViolation class="mt-16" />
    <RecentActivity class="mt-16" />
    <History class="mt-16" />
  </div>
</template>

<script setup lang="ts">
import Total from "@/pages/Admin/Dashboard/src/Total.vue";
import Sale from "@/pages/Admin/Dashboard/src/Sale.vue";
import WalletTransaction from "@/pages/Admin/Dashboard/src/WalletTransaction.vue";
import RecentActivity from "@/pages/Admin/Dashboard/src/RecentActivity.vue";
import LastViolation from "@/pages/Admin/Dashboard/src/LastViolation.vue";
import History from "@/pages/Admin/Dashboard/src/ActivityHistory.vue";
</script>

<style></style>
