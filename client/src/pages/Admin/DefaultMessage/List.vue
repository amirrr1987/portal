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
        <CardTitle label="لیست پیام های پیش فرض" color="#4fc7db" />
        <v-row>
          <v-col cols="9" sm="4" offset-sm="6">
            <v-text-field
              v-model="listSearch"
              label="جستجو"
              append-icon="mdi-magnify"
            />
          </v-col>
          <v-col cols="3" sm="2">
            <v-select class="mx-5" :items="listCounts" v-model="listCount" />
          </v-col>
        </v-row>
      </div>
    </template>

    <template v-slot:item.body="{ item }">
      <span class="text-truncate w-16 d-inline-block" v-html="item.body"></span>
    </template>

    <template v-slot:item.action="{ item }">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8" xl="6">
          <v-row>
            <ActionBtn iconEdit lg="6" @click="editItem(item)" />
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
        <BtnTableHelp />
      </div>
    </template>
  </v-data-table>
</template>

<script>
import ActionBtn from "@/components/ActionBtn";
import CardTitle from "@/components/CardTitle";
import BtnTableHelp from "@/components/BtnTableHelp";
import Pagination from "@/components/Pagination";
export default {
  name: "List",
  components: {
    ActionBtn,
    CardTitle,
    BtnTableHelp,
    Pagination,
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
          text: "عنوان",
          value: "title",
          align: "center",
        },
        {
          text: "متن",
          value: "body",
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
    deleteItem(item) {
      this.$http
        .delete(`${process.env.VUE_APP_API_DEFAULT_MESSAGE}/${item}`)
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
      this.$router.push(`/admin/default-message/${item._id}/edit`);
    },
    viewItem(item) {
      this.$router.push(`/admin/default-message/${item._id}/view`);
    },

    checkIsLoading() {
      this.tableData.length == 0
        ? (this.isLoading = true)
        : (this.isLoading = false);
    },
    htmlToText() {
      var htmlFile = document.createElement("div.amir");
      htmlFile.innerHTML = this.tableData[1].body;
      return htmlFile.textContent || htmlFile.innerText || "";
    },
    filterCity() {
      this.tableData.forEach((item) => {
        item.city = this.allCities.find((city) => city.id == item.city);
      });
    },
    getTableData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(process.env.VUE_APP_API_DEFAULT_MESSAGE)
          .then((res) => {
            this.tableData = res.data.data;
            this.htmlToText();
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
