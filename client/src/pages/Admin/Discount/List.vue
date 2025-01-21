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
              class="mx-5"
              :items="listCountsComputed"
              v-model="listCount"
            />
          </v-col>
        </v-row>
      </div>
    </template>

 
    <template v-slot:item.publicType="{ item }">
      <span v-show="item.publicType == 1">عمومی</span>
      <span v-show="item.publicType == 2">خصوصی</span>
    </template>

    <template v-slot:item.discountType="{ item }">
      <span v-show="item.discountType == 1">مقداری</span>
      <span v-show="item.discountType == 2">درصدی</span>
    </template>
    <template v-slot:item.amount="{ item }">
      <span v-show="item.discountType == 1"> {{item.amount}} ریال</span>
      <span v-show="item.discountType == 2">{{item.amount}} ٪</span>
    </template>

    <template v-slot:item.expireTime="{ expireTime }">
      <span class="text-truncate">
        {{ jalali(expireTime) }}
      </span>
    </template>

    <template v-slot:item.action="{ item }">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8" xl="6">
          <v-row>
            <ActionBtn iconEdit @click="editItem(item)" lg="6" />
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
import BtnTableHelp from "@/components/BtnTableHelp";
import ActionBtn from "@/components/ActionBtn";
import Pagination from "@/components/Pagination";
import SnackbarSuccess from "@/components/SnackbarSuccess";
import SnackbarError from "@/components/SnackbarError";
import jalali from "moment-jalaali";
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
      tableHeader: [
        {
          text: "اشتراک",
          value: "publicType",
          align: "center",
        },
        {
          text: "نوع",
          value: "discountType",
          align: "center",
        },
        {
          text: "مقدار/درصد",
          value: "amount",
          align: "center",
        },
        {
          text: "کد",
          value: "uid",
          align: "center",
        },
        {
          text: "تاریخ انقضا",
          value: "expireTime",
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
    };
  },

  methods: {
    jalali(str) {
      return jalali(str).format("jYYYY/jM/jD");
    },
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
      this.tableData = this.tableData.filter((single) => single._id != item);
    },

    deleteItem(item) {
      this.$http
        .delete(`${process.env.VUE_APP_API_DISCOUNT}/${item}`)
        .then((res) => {
          this.filterItem(item);
          this.checkIsLoading();
          // this.snackbarSuccess = true;
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
          .get(process.env.VUE_APP_API_DISCOUNT)
          .then((res) => {
            this.tableData = res.data;
            console.log(this.tableData);
            resolve(res);
          })
          .catch((err) => {
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

  beforeMount() {
    this.getTableData();
  },
};
</script>
