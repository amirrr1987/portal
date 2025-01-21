<template>
  <div>
    <Total />
    <Sale class="mt-16" />
    <WalletTransaction class="mt-16" />
    <LastSettlement class="mt-16" />
    <LastViolation class="mt-16" />
    <History class="mt-16" />
  </div>
</template>

<script setup lang="ts">
import Total from "@/pages/Acceptor/Dashboard/src/Total";
import Sale from "@/pages/Acceptor/Dashboard/src/Sale";
import WalletTransaction from "@/pages/Acceptor/Dashboard/src/WalletTransaction";
import LastSettlement from "@/pages/Acceptor/Dashboard/src/LastSettlement";
import LastViolation from "@/pages/Acceptor/Dashboard/src/LastViolation";
import History from "@/pages/Acceptor/Dashboard/src/ActivityHistory";
</script>
