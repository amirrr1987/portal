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
        <CardTitle label="لیست پذیرنده ها" color="#08b5dd" />
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

    <template v-slot:item.name="{ item }">
      <a
        @click.prevent="viewItem(item)"
        :class="isEng(item.name) ? `font-en` : 'font-fa'"
      >
        {{ item.name }}
      </a>
    </template>

    <template v-slot:item._id="{ item }">
      <span class="vira-en">{{ item._id }}</span>
    </template>

    <template v-slot:item.category="{ item }">
      <span class="vira-fa">{{ item.category.title }}</span>
    </template>
    <template v-slot:item.city="{ item }">
      <span class="vira-fa">{{ item.city.name }}</span>
    </template>

    <template v-slot:item.status="{ item }">
      <span v-show="item.status == -1" class="vira-fa red--text text--accent-2"
        >رسیدگی نشده</span
      >
      <span
        v-show="item.status == 0"
        class="vira-fa yellow--text text--darken-3"
        >رسیدگی شده</span
      >
      <span
        v-show="item.status == 1"
        class="vira-fa green--text text--lighten-1"
        >در حال رسیدگی</span
      >
    </template>

    <template v-slot:item.action="{ item }">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8" xl="6">
          <v-row>
            <ActionBtn iconKey lg="3" />
            <ActionBtn iconList lg="3" />
            <ActionBtn iconEdit @click="editItem(item)" lg="3" />
            <ActionBtn
              iconDelete
              :itemId="item._id"
              @delete="deleteItem"
              lg="3"
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
        <BtnTableHelp hasEdit hasDelete hasList hasView />
      </div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "@/components/CardTitle";
import BtnTableHelp from "@/components/BtnTableHelp";
import ActionBtn from "@/components/ActionBtn";
import Pagination from "@/components/Pagination";
import SnackbarSuccess from "@/components/SnackbarSuccess";
import SnackbarError from "@/components/SnackbarError";

const router = useRouter();
const listCounts = ref([5, 10, 20, 50, 100]);
const listSearch = ref<string | null>(null);
const listPage = ref(1);
const listCount = ref(5);
const isLoading = ref(false);
const snackbarSuccess = ref(false);
const snackbarError = ref(false);
const tableHeader = ref([
  { text: "نام پذیرنده", value: "name", align: "center" },
  { text: "کد پذیرنده", value: "_id", align: "center" },
  { text: "صنف", value: "category", align: "center" },
  { text: "شهر", value: "city", align: "center" },
  { text: "وضعیت", value: "status", align: "center" },
  { text: "عملیات", value: "action", align: "center", sortable: false },
]);
const tableData = ref<any[]>([]);
const allCategory = ref<any[]>([]);
const allCities = ref<any[]>([]);

const isEng = (str: string) => /^[a-zA-Z0-9]/gi.test(str);

const checkIsLoading = () => {
  isLoading.value = tableData.value.length === 0;
};

const filterCity = () => {
  tableData.value.forEach((item) => {
    item.city = allCities.value.find((city) => city.id === item.city);
  });
};

const filterCategory = () => {
  tableData.value.forEach((item) => {
    item.category = allCategory.value.find(
      (category) => category._id === item.category
    );
  });
};

const filterItem = (itemId: string) => {
  tableData.value = tableData.value.filter((single) => single._id !== itemId);
};

const deleteItem = async (itemId: string) => {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/accepter/${itemId}`, {
      method: "DELETE",
    });
    filterItem(itemId);
    checkIsLoading();
    snackbarSuccess.value = true;
  } catch (err) {
    snackbarError.value = true;
    console.error(err);
  }
};

const editItem = (item: any) => {
  router.push(`/admin/acceptor/${item._id}/edit`);
};

const viewItem = (item: any) => {
  router.push(`/admin/acceptor/${item._id}/view`);
};

const getTableData = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/accepter`);
    const data = await response.json();
    tableData.value = data.ASREVIRA.docs;
    filterCity();
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
  const citiesResponse = await fetch(import.meta.env.VITE_API_CITY);
  allCities.value = await citiesResponse.json();
  await getTableData();
});
</script>

<style>
.vira-data-table-footer {
  position: relative;
}
.vira-data-table-help {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #fff;
  background: #08b5dd;
  background: linear-gradient(to right, transparent, #08b5dd);
}
</style>
