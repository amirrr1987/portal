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
      <span class="text-truncate ">
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

<script>
import CardTitle from "@/components/CardTitle";
import jalali from "moment-jalaali";
import BtnTableHelp from "@/components/BtnTableHelp";
import ActionBtn from "@/components/ActionBtn";
import Pagination from "@/components/Pagination";
import SnackbarSuccess from "@/components/SnackbarSuccess";
import SnackbarError from "@/components/SnackbarError";

export default {
  name: "List",
  components: {
    CardTitle,
    BtnTableHelp,
    ActionBtn,
    Pagination,
    SnackbarSuccess,
    SnackbarError,
  },
  data() {
    return {
      listCounts: [5, 10, 20, 50, 100],
      listSearch: null,
      listPage: 1,
      listCount: 5,
      isLoading: false,
      snackbarSuccess: false,
      snackbarError: false,
      tempTableData: [],
      tableHeader: [
        {
          value: "priority",
        },
        {
          text: "کد تیکت",
          value: "_id",
          align: "center",
        },
        {
          text: "فرستنده",
          value: "createdAt",
          align: "center",
        },
        {
          text: "گیرنده",
          value: "createdAt",
          align: "center",
        },
        {
          text: "عنوان",
          value: "title",
          align: "center",
        },
        {
          text: "تاریخ",
          value: "createdAt",
          align: "center",
        },

        {
          text: "عملیات",
          value: "action",
          align: "center",
          sortable: false,
        },
      ],
      tableData: [],
      priorities: [
        { id: 0, key: "all", name: "همه" },
        { id: 1, key: "low", name: "کم" },
        { id: 2, key: "medium", name: "عادی" },
        { id: 3, key: "high", name: "زیاد" },
        { id: 4, key: "critical", name: "بحرانی" },
      ],
      selectedColor: "",
      colors: {
        low: "green",
        medium: "grey",
        high: "warning",
        critical: "red",
      },
    };
  },

  methods: {
    checkIsLoading() {
      this.tableData.length == 0
        ? (this.isLoading = true)
        : (this.isLoading = false);
    },
    filterCity() {
      this.tableData.forEach((item) => {
        item.city = this.allCities.find((city) => city.id == item.city);
      });
    },
    filterItem(item) {
      this.tableData = this.tableData.filter(
        (single) => single._id != item._id
      );
    },
    jalali(str) {
      return jalali(str).format("jYYYY/jM/jD");
    },
    filterColor() {
      if (this.selectedColor == "all") {
        this.tableData = this.tableDataCopy;
      } else if (this.selectedColor != "all") {
        this.tempTableData = this.tableDataCopy.filter(
          (single) => single.priority == this.selectedColor
        );
        this.tableData = this.tempTableData;
      }
    },
    deleteItem(item) {
      this.$http
        .delete(`${process.env.VUE_APP_API_TICKET}/${item}`)
        .then((res) => {
          item.deleteDialog = false;
          this.filterItem(item);
          this.checkIsLoading();
          this.snackbarSuccess = true;
          return res;
        })
        .catch((err) => {
          this.snackbarError = true;
          return err;
        });
    },
    editItem(item) {
      this.$router.push(`/admin/agent/${item._id}/edit`);
    },
    viewItem(item) {
      this.$router.push(`/admin/agent/${item._id}/view`);
    },
    getTableData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(process.env.VUE_APP_API_TICKET)
          .then((res) => {
            this.tableData = res.data.data;
            this.tableDataCopy = this.tableData;
            this.checkIsLoading();
            this.snackbarSuccess = true;
            resolve(res);
          })
          .catch((err) => {
            this.snackbarError = true;
            reject(err);
          });
      });
    },
  },
  computed: {
    paginationCount() {
      let pageCount = this.tableData.length / this.listCount;
      let pageCountRound = Math.ceil(pageCount);
      return pageCountRound;
    },

    listCountsComputed() {
      let listCountFiltered = [];
      listCountFiltered = this.listCounts.filter(
        (item) => item <= this.tableData.length
      );

      if (this.tableData.length % 5 > 0 && 50 >= this.tableData.length) {
        listCountFiltered.push(this.listCounts[listCountFiltered.length]);
      }
      return listCountFiltered;
    },
  },

  async mounted() {
    await this.getTableData();
  },
};
</script>
<style>
/* tbody td {
  font-size: 12px !important;
  font-family: Arial; */
/* } */
</style>