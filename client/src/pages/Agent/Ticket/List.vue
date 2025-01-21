<template>
  <v-data-table
    class="elevation-1 data-table grey--text text--darken-2"
    hide-default-footer
    :headers="tableHeader"
    :items="tableData"
    :search="listSearch"
    :items-per-page="listCount"
    :page="listPage"
    :loading="isLoading"
    loading-text="در حال بار گذاری ..."
  >
    <template v-slot:top>
      <div style="background-color: #e9e9e9; position: relative">
        <CardTitle label="لیست تیکت ها" color="#32889e" />
        <v-row>
          <v-col cols="3" sm="2" offset-sm="4">
            <v-select
              label="همه تیکت ها"
              :items="priorities"
              v-model="selectedColor"
              @change="filterColor"
              item-text="name"
              item-value="key"
            />
          </v-col>
          <v-col cols="9" sm="4">
            <v-text-field
              v-model="listSearch"
              label="جستجو"
              append-icon="mdi-magnify"
            />
          </v-col>
          <v-col cols="3" sm="2">
            <v-select
              class="mx-5"
              :items="listCountsComputed"
              v-model="listCount"
            />
          </v-col>
        </v-row>
      </div>
    </template>
    <template v-slot:item.priority="{ item }">
      <span class="proiorty-card" :class="colors[item.priority]" />
    </template>
    <template v-slot:item.title="{ item }">
      <span class="text-truncate">
        {{ item.title }}
      </span>
    </template>
    <template v-slot:item.createdAt="{ item }">
      <span class="text-truncate">
        {{ jalali(item.createdAt) }}
      </span>
    </template>
    <template v-slot:item.action="{ item }">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8" xl="6">
          <v-row>
            <ActionBtn iconEye lg="6" />
            <ActionBtn
              iconDelete
              :itemId="item._id"
              @delete="deleteItem"
              lg="6"
            />
          </v-row>
        </v-col>
      </v-row>
    </template>

    <template v-slot:footer>
      <div class="vira-data-table-footer">
        <Pagination :length="paginationCount" v-model="listPage" />
        <SnackbarSuccess v-model="snackbarSuccess" />
        <SnackbarError v-model="snackbarError" />
        <BtnTableHelp />
      </div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import jalali from "moment-jalaali";
import CardTitle from "@/components/CardTitle.vue";
import BtnTableHelp from "@/components/BtnTableHelp.vue";
import ActionBtn from "@/components/ActionBtn.vue";
import Pagination from "@/components/Pagination.vue";
import SnackbarSuccess from "@/components/SnackbarSuccess.vue";
import SnackbarError from "@/components/SnackbarError.vue";

const router = useRouter();
const listCounts = ref([5, 10, 20, 50, 100]);
const listSearch = ref<string | null>(null);
const listPage = ref(1);
const listCount = ref(5);
const isLoading = ref(false);
const snackbarSuccess = ref(false);
const snackbarError = ref(false);
const tableHeader = ref([
  { value: "priority" },
  { text: "کد تیکت", value: "_id", align: "center" },
  { text: "فرستنده", value: "createdAt", align: "center" },
  { text: "گیرنده", value: "createdAt", align: "center" },
  { text: "عنوان", value: "title", align: "center" },
  { text: "تاریخ", value: "createdAt", align: "center" },
  { text: "عملیات", value: "action", align: "center", sortable: false },
]);
const tableData = ref<any[]>([]);
const tableDataCopy = ref<any[]>([]);
const priorities = ref([
  { id: 0, key: "all", name: "همه" },
  { id: 1, key: "low", name: "کم" },
  { id: 2, key: "medium", name: "عادی" },
  { id: 3, key: "high", name: "زیاد" },
  { id: 4, key: "critical", name: "بحرانی" },
]);
const selectedColor = ref("all");
const colors = ref({
  low: "green",
  medium: "grey",
  high: "warning",
  critical: "red",
});

const checkIsLoading = () => {
  isLoading.value = tableData.value.length === 0;
};

const filterColor = () => {
  if (selectedColor.value === "all") {
    tableData.value = tableDataCopy.value;
  } else {
    tableData.value = tableDataCopy.value.filter(
      (item) => item.priority === selectedColor.value
    );
  }
};

const jalali = (date: string) => jalali(date).format("jYYYY/jM/jD");

const deleteItem = async (itemId: string) => {
  try {
    await fetch(`${import.meta.env.VITE_API_TICKET}/${itemId}`, {
      method: "DELETE",
    });
    tableData.value = tableData.value.filter((item) => item._id !== itemId);
    checkIsLoading();
    snackbarSuccess.value = true;
  } catch (err) {
    snackbarError.value = true;
    console.error(err);
  }
};

const getTableData = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_TICKET);
    const data = await response.json();
    tableData.value = data.data;
    tableDataCopy.value = data.data;
    checkIsLoading();
    snackbarSuccess.value = true;
  } catch (err) {
    snackbarError.value = true;
    console.error(err);
  }
};

const paginationCount = computed(() =>
  Math.ceil(tableData.value.length / listCount.value)
);

const listCountsComputed = computed(() => {
  const filtered = listCounts.value.filter(
    (item) => item <= tableData.value.length
  );
  if (tableData.value.length % 5 > 0 && 50 >= tableData.value.length) {
    filtered.push(listCounts.value[filtered.length]);
  }
  return filtered;
});

onMounted(async () => {
  await getTableData();
});
</script>

<style>
.proiorty-card {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.green {
  background-color: green;
}

.grey {
  background-color: grey;
}

.warning {
  background-color: orange;
}

.red {
  background-color: red;
}
</style>
