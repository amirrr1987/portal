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
    <template #top>
      <div style="background-color: #e9e9e9; position: relative">
        <CardTitle label="لیست تخلفات" color="#ef3f3f" />
        <v-row>
          <v-col cols="9" sm="4" offset-sm="6">
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

    <template #item.createdAt="{ item }">
      {{ jalali(item.createdAt) }}
    </template>

    <template #item.status="{ item }">
      <span v-show="item.status == -1" class="red--text text--accent-2"
        >رسیدگی نشده</span
      >
      <span v-show="item.status == 1" class="green--text text--darken-3"
        >رسیدگی شده</span
      >
      <span v-show="item.status == 0" class="warning--text text--darken-1"
        >در حال رسیدگی</span
      >
    </template>

    <template #item.action="{ item }">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8" xl="6">
          <v-row>
            <ActionBtn iconEye lg="3" @click="viewItem(item)" />
            <ActionBtn v-if="item.submission == 1" iconCheck lg="3" />
            <ActionBtn v-if="item.submission == 0" iconRemove lg="3" />
            <ActionBtn v-if="item.submission == -1" iconRemove lg="3" />
            <ActionBtn iconEdit @click="editItem(item)" lg="3" />
            <ActionBtn iconDelete @click="deleteItem(item)" lg="3" />
          </v-row>
        </v-col>
      </v-row>
    </template>

    <template #footer>
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
import { useHttp } from "@/composables/useHttp"; // Replace with your HTTP composable or library
import { useRouter } from "vue-router";
import jalali from "moment-jalaali";
import CardTitle from "@/components/CardTitle.vue";
import BtnTableHelp from "@/components/BtnTableHelp.vue";
import ActionBtn from "@/components/ActionBtn.vue";
import Pagination from "@/components/Pagination.vue";
import SnackbarSuccess from "@/components/SnackbarSuccess.vue";
import SnackbarError from "@/components/SnackbarError.vue";

const router = useRouter();
const { get, delete: deleteRequest } = useHttp();

const listCounts = ref([5, 10, 20, 50, 100]);
const listSearch = ref<string | null>(null);
const listPage = ref(1);
const listCount = ref(5);
const isLoading = ref(false);
const snackbarSuccess = ref(false);
const snackbarError = ref(false);
const tableHeader = ref([
  {
    text: "نام پذیرنده",
    value: "accepter.name",
    align: "center",
  },
  {
    text: "موضوع",
    value: "title",
    align: "center",
  },
  {
    text: "وضعیت",
    value: "status",
    align: "center",
  },
  {
    text: "زمان ثبت تخلف",
    value: "createdAt",
    align: "center",
  },
  {
    text: "عملیات",
    value: "action",
    align: "center",
    sortable: false,
  },
]);
const tableData = ref<any[]>([]);

const paginationCount = computed(() => {
  const pageCount = tableData.value.length / listCount.value;
  return Math.ceil(pageCount);
});

const listCountsComputed = computed(() => {
  const filtered = listCounts.value.filter(
    (item) => item <= tableData.value.length
  );
  if (tableData.value.length % 5 > 0 && 50 >= tableData.value.length) {
    filtered.push(listCounts.value[filtered.length]);
  }
  return filtered;
});

const checkIsLoading = () => {
  isLoading.value = tableData.value.length === 0;
};

const jalaliDate = (date: string) => {
  return jalali(date).format("jYYYY/jM/jD");
};

const deleteItem = async (item: any) => {
  try {
    await deleteRequest(
      `${import.meta.env.VITE_APP_PRIVATE_KEY}/violation/${item._id}`
    );
    tableData.value = tableData.value.filter((i) => i._id !== item._id);
    snackbarSuccess.value = true;
  } catch (error) {
    snackbarError.value = true;
  }
};

const editItem = (item: any) => {
  router.push(`/agent/violation/${item._id}/edit`);
};

const viewItem = (item: any) => {
  router.push(`/agent/violation/${item._id}/view`);
};

const getTableData = async () => {
  try {
    const response = await get(import.meta.env.VITE_APP_API_VIOLATION);
    tableData.value = response.data.data;
    checkIsLoading();
  } catch (error) {
    snackbarError.value = true;
  }
};

onMounted(async () => {
  await getTableData();
});
</script>

<style>
.vira-data-table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
</style>
