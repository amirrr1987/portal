<template>
  <v-card>
    <div class="mb-10" style="background-color: #e9e9e9; position: relative">
      <CardTitle label="لیست حساب ها" color="#cf0e56" />

      <v-row>
        <v-col cols="9" sm="4" offset-sm="6" class="py-0">
          <v-text-field
            v-model="listSearch"
            label="جستجو"
            append-icon="mdi-magnify"
            @keyup="filterData"
          />
        </v-col>
        <v-col cols="3" sm="2" class="py-0">
          <v-select v-model="listCount" class="mx-5" :items="listCounts" />
        </v-col>
      </v-row>
    </div>
    <div class="px-10 pb-10">
      <v-row>
        <v-col v-for="(card, index) in validData" :key="index" cols="12" md="6">
          <v-card :color="card.color" class="bank-card">
            <v-responsive aspect-ratio="1.7">
              <div class="bank-card__name px-2 py-2" style="color: #686868">
                {{ card.name }}
              </div>
              <div
                class="bank-card__sheba text-center white--text d-flex align-center justify-center vira-en"
              >
                IR{{ card.sheba }}
              </div>
              <div>
                <v-dialog v-model="deleteDialog" persistent max-width="390">
                  <template #activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <IconDelete width="18" height="18" />
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="headline primary white--text">
                      حذف اطلاعات
                    </v-card-title>
                    <v-card-text class="py-5">
                      آیا از حذف حساب مطمئن هستید؟
                    </v-card-text>
                    <v-card-actions class="py-5">
                      <v-spacer />
                      <v-btn
                        color="primary"
                        rounded
                        min-width="120"
                        height="42"
                        @click="deleteItem(card)"
                      >
                        تائید
                      </v-btn>
                      <v-spacer />
                      <v-btn
                        color="red"
                        rounded
                        min-width="120"
                        height="42"
                        dark
                        @click="deleteDialog = false"
                      >
                        انصراف
                      </v-btn>
                      <v-spacer />
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="vira-data-table-footer">
      <Pagination v-model="listPage" :length="paginationCount" />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore"; // Import Pinia store
import axios from "axios";
import IconDelete from "@/icons/Main/IconDelete.vue";
import Pagination from "@/components/Pagination.vue";
import CardTitle from "@/components/CardTitle.vue";

const authStore = useAuthStore(); // استفاده از Pinia store

const deleteDialog = ref(false);
const listCounts = ref([4, 8]);
const listSearch = ref("");
const listPage = ref(1);
const listCount = ref(4);
const tableData = ref<any[]>([]);
const totalTableData = ref<any[]>([]);
const colors = ref([
  { id: 0, color: "#02aae8" },
  { id: 1, color: "#5613a2" },
  { id: 2, color: "#f25920" },
  { id: 3, color: "#f0c239" },
  { id: 4, color: "#7c4789" },
  { id: 5, color: "#00cf95" },
  { id: 6, color: "#364968" },
  { id: 7, color: "#ca6144" },
]);

const getTableData = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_APP_API_ACCOUNT);
    tableData.value = response.data.data;
    totalTableData.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteItem = async (item: any) => {
  try {
    await axios.delete(`${import.meta.env.VITE_APP_API_ACCOUNT}/${item._id}`);
    deleteDialog.value = false;
    tableData.value = tableData.value.filter(
      (singleItem) => singleItem._id !== item._id
    );
  } catch (error) {
    console.error(error);
  }
};

const filterData = () => {
  tableData.value = totalTableData.value.filter(
    (single) =>
      single.sheba.includes(listSearch.value) ||
      single.name.includes(listSearch.value)
  );
};

const validData = computed(() => {
  const result = tableData.value.filter((item, index) => {
    if (
      index >= listCount.value * (listPage.value - 1) &&
      index <= listCount.value * listPage.value - 1
    )
      return item;
  });
  result.forEach((single, index) => {
    single.color = colors.value.find((color) => color.id === index)?.color;
  });
  return result;
});

const paginationCount = computed(() => {
  const pageCount = tableData.value.length / listCount.value;
  return Math.ceil(pageCount);
});

onMounted(() => {
  getTableData();
});
</script>

<style lang="scss" scoped>
.bank-card {
  &__name {
    background-color: #e1e1e1;
  }
  .v-responsive__content {
    display: grid;
    grid-template-rows: max-content 1fr max-content;
  }
}
</style>
