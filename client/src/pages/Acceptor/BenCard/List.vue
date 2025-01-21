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
        <CardTitle label="لیست بن کارت ها" color="#2300De" />
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
              v-model="listCount"
              class="mx-5"
              :items="listCountsComputed"
            />
          </v-col>
        </v-row>
      </div>
    </template>

    <template #item.name="{ item }">
      <a @click.prevent="viewItem(item)">{{ item.name }}</a>
    </template>

    <template #item.username="{ item }">
      <span class="vira-en">{{ item.username }}</span>
    </template>

    <template #item.city="{ item }">
      <span class="vira-en">{{ item.city.name }}</span>
    </template>

    <template #item.status="{ item }">
      <span v-show="item.status == -1" class="red--text text--accent-2"
        >رسیدگی نشده</span
      >
      <span v-show="item.status == 0" class="yellow--text text--darken-3"
        >رسیدگی شده</span
      >
      <span v-show="item.status == 1" class="green--text text--lighten-1"
        >در حال رسیدگی</span
      >
    </template>

    <template #item.action="{ item }">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8" xl="6">
          <v-row>
            <ActionBtn icon-eye lg="6" />
            <ActionBtn icon-delete lg="6" @click="deleteItem(item)" />
          </v-row>
        </v-col>
      </v-row>
    </template>

    <template #footer>
      <div class="vira-data-table-footer">
        <Pagination v-model="listPage" :length="paginationCount" />
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
import { useAuthStore } from "@/stores/authStore"; // Import Pinia store
import axios from "axios";
import CardTitle from "@/components/CardTitle.vue";
import BtnTableHelp from "@/components/BtnTableHelp.vue";
import ActionBtn from "@/components/ActionBtn.vue";
import Pagination from "@/components/Pagination.vue";
import SnackbarSuccess from "@/components/SnackbarSuccess.vue";
import SnackbarError from "@/components/SnackbarError.vue";

const router = useRouter();
const authStore = useAuthStore(); // استفاده از Pinia store

const listCounts = ref([5, 10, 20, 50, 100]);
const listSearch = ref("");
const listPage = ref(1);
const listCount = ref(5);
const isLoading = ref(false);
const snackbarSuccess = ref(false);
const snackbarError = ref(false);
const tableData = ref<any[]>([]);
const allCities = ref<any[]>([]);

const tableHeader = ref([
  {
    text: "ایجاد کننده",
    value: "name",
    align: "center",
  },
  {
    text: "پذیرنده",
    value: "username",
    align: "center",
  },
  {
    text: "کاربر",
    value: "city",
    align: "center",
  },
  {
    text: "شناسه بن کارت",
    value: "accepters.length",
    align: "center",
  },
  {
    text: "تاریخ ثبت",
    value: "status",
    align: "center",
  },
  {
    text: "عملیات",
    value: "action",
    align: "center",
    sortable: false,
  },
]);

const checkIsLoading = () => {
  isLoading.value = tableData.value.length === 0;
};

const filterCity = () => {
  tableData.value.forEach((item) => {
    item.city = allCities.value.find((city) => city.id === item.city);
  });
};

const filterItem = (item: any) => {
  tableData.value = tableData.value.filter((single) => single._id !== item._id);
};

const deleteItem = async (item: any) => {
  try {
    await axios.delete(`${authStore.privateKey}/agent/${item._id}`);
    filterItem(item);
    checkIsLoading();
    snackbarSuccess.value = true;
  } catch (error) {
    snackbarError.value = true;
    console.error(error);
  }
};

const editItem = (item: any) => {
  router.push(`/admin/agent/${item._id}/edit`);
};

const viewItem = (item: any) => {
  router.push(`/admin/agent/${item._id}/view`);
};

const getTableData = async () => {
  try {
    const response = await axios.get(`${authStore.privateKey}/agent`);
    tableData.value = response.data.ASREVIRA.docs;
    checkIsLoading();
    filterCity();
    snackbarSuccess.value = true;
  } catch (error) {
    snackbarError.value = true;
    console.error(error);
  }
};

const paginationCount = computed(() => {
  const pageCount = tableData.value.length / listCount.value;
  return Math.ceil(pageCount);
});

const listCountsComputed = computed(() => {
  const listCountFiltered = listCounts.value.filter(
    (item) => item <= tableData.value.length
  );

  if (tableData.value.length % 5 > 0 && 50 >= tableData.value.length) {
    listCountFiltered.push(listCounts.value[listCountFiltered.length]);
  }
  return listCountFiltered;
});

onMounted(async () => {
  const citiesResponse = await axios.get(import.meta.env.VITE_APP_API_CITY);
  allCities.value = citiesResponse.data;
  await getTableData();
});
</script>

<style scoped>
.data-table {
  background-color: #fff;
}
.vira-data-table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
</style>
