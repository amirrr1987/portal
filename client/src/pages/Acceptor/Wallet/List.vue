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
        <CardTitle label="لیست کیف پول ها" color="#8c0000" />
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

    <template v-slot:item.uid="{ item }">
      <span ref="itemRef" class="font-en">
        {{ item.uid }}
      </span>
    </template>

    <template v-slot:item.title="{ item }">
      <span ref="itemRef" :class="isEng(item.title) ? `font-en` : 'font-fa'">
        {{ item.title }}
      </span>
    </template>

    <template v-slot:item.createdAt="{ item }">
      <span class="text-truncate">
        {{ jalali(item.createdAt) }}
      </span>
    </template>

    <template v-slot:item.status="{ item }">
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

    <template v-slot:item.action="{ item }">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8" xl="6">
          <v-row>
            <ActionBtn iconEye lg="4" />
            <ActionBtn v-if="item.submission == 1" iconCheck lg="4" />
            <ActionBtn v-if="item.submission == 0" iconRemove lg="4" />
            <ActionBtn v-if="item.submission == -1" iconRemove lg="4" />
            <ActionBtn iconEdit @click="editItem(item)" lg="4" />
            <!-- <ActionBtn iconDelete @click="deleteItem(item)" lg="4" /> -->
            <ActionBtn
              iconDelete
              :itemId="item._id"
              @delete="deleteItem"
              lg="4"
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
        <BtnTableHelp hasDelete hasView />
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
      langClass: "primary--text",
      tableHeader: [
        {
          text: "کد کیف پول",
          value: "uid",
          align: "center",
        },
        {
          text: "نام کیف پول",
          value: "title",
          align: "center",
        },
        {
          text: "موجودی",
          value: "amount",
          align: "center",
        },
        {
          text: "وضعیت",
          value: "status",
          align: "center",
        },
        {
          text: "تاریخ ثبت",
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
    };
  },

  methods: {
    isEng(str) {
      const en = /^[a-zA-Z0-9]/gi;
      return en.test(str);
    },

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
        .delete(`${process.env.VUE_APP_API_WALLET}/${item}`)
        .then((res) => {
          this.filterItem(item);
          return res;
        })
        .catch((err) => {
          this.snackbarError = true;
          return err;
        });
    },

    editItem(item) {
      this.$router.push(`/acceptor/wallet/${item._id}/edit`);
    },
    viewItem(item) {
      this.$router.push(`/acceptor/wallet/${item._id}/view`);
    },
    getTableData() {
      this.$http
        .get(process.env.VUE_APP_API_WALLET)
        .then((res) => {
          this.tableData = res.data.data;
        })
        .catch((err) => {
          console.log(
            "%cList.vue line:203 err",
            "color: #007acc;",
            err,
            typeof err
          );
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

  mounted() {
    this.getTableData();
  },
};
</script>
<style>
.font-fa {
  font-family: "primary" !important;
}
.font-en {
  font-family: Arial, Helvetica, sans-serif !important;
}
</style>