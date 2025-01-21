<template>
  <div>
    <Total />
    <Sale class="mt-16"/>
    <WalletTransaction class="mt-16"/>
    <LastViolation class="mt-16" />
    <RecentActivity class="mt-16" />
    <History class="mt-16"/>
  </div>
</template>

<script>
import Total from "@/pages/Admin/Dashboard/src/Total";
import Sale from "@/pages/Admin/Dashboard/src/Sale";
import WalletTransaction from "@/pages/Admin/Dashboard/src/WalletTransaction";
import RecentActivity from "@/pages/Admin/Dashboard/src/RecentActivity";
import LastViolation from "@/pages/Admin/Dashboard/src/LastViolation"
import History from "@/pages/Admin/Dashboard/src/ActivityHistory"
export default {
  name: "Dashboard",
  components: {
    Total,
    Sale,
    WalletTransaction,
    RecentActivity,
    LastViolation,
    History,
  },
};
</script>

<style></style>
