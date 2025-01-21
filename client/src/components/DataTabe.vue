<template>
  <div class="table mb-16">
    <div
      class="table__row"
      :style="`grid-template-columns: repeat(${tableData[0].length}, 1fr);`"
    >
      <div v-for="(item, index) in tableData" :key="index" class="table__col">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface TableItem {
  name: string;
  n3ame: string;
}

const tableData = ref<TableItem[]>([
  {
    name: "324",
    n3ame: "324",
  },
]);
</script>

<style lang="scss">
.table {
  &__row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
