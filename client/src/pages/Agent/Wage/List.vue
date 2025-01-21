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
        <CardTitle label="کارمزد های دریافتی" color="#689e32" />
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

    <template #item.name="{ item }">
      <a class="vira-fa" @click.prevent="viewItem(item)">{{ item.name }}</a>
    </template>

    <template #item.username="{ item }">
      <span class="vira-en">{{ item.username }}</span>
    </template>

    <template #item.city="{ item }">
      <span class="vira-fa">{{ item.city.name }}</span>
    </template>

    <template #item.status="{ item }">
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

    <template #item.action="{ item }">
      <v-row justify="center">
        <v-col cols="12">
          <v-row>
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

    <template #footer>
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
import { useHttp } from "@/composables/useHttp"; // Replace with your HTTP composable or library
import { useRouter } from "vue-router";
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
    text: "پذیرنده",
    value: "name",
    align: "center",
  },
  {
    text: "کد پذیرنده",
    value: "username",
    align: "center",
  },
  {
    text: "مبلغ تراکنش (ریال)",
    value: "city",
    align: "center",
  },
  {
    text: "کارمزد شما (ریال)",
    value: "accepters.length",
    align: "center",
  },
  {
    text: "تاریخ و ساعت",
    value: "accepters.length",
    align: "center",
  },
  {
    text: "وضعیت",
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
const tableData = ref<any[]>([]);
const allCities = ref<any[]>([]);

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
  if (tableData.value.length === 0) {
    setTimeout(() => {
      isLoading.value = false;
    }, 3000);
  }
};

const filterCity = () => {
  tableData.value.forEach((item) => {
    item.city = allCities.value.find((city) => city.id === item.city);
  });
};

const filterItem = (itemId: string) => {
  tableData.value = tableData.value.filter((item) => item._id !== itemId);
};

const deleteItem = async (itemId: string) => {
  try {
    await deleteRequest(
      `${import.meta.env.VITE_APP_PRIVATE_KEY}/agent/${itemId}`
    );
    filterItem(itemId);
    snackbarSuccess.value = true;
  } catch (error) {
    snackbarError.value = true;
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
    const response = await get(`${import.meta.env.VITE_APP_PRIVATE_KEY}/agent`);
    tableData.value = response.data.ASREVIRA.docs;
    checkIsLoading();
    filterCity();
  } catch (error) {
    snackbarError.value = true;
  }
};

onMounted(async () => {
  try {
    const response = await get(`${import.meta.env.VITE_APP_API_CITY}`);
    allCities.value = response.data;
    await getTableData();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
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
