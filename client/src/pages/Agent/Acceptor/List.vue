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

<script>
import CardTitle from "@/components/CardTitle";
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
      tableHeader: [
        {
          text: "نام پذیرنده",
          value: "name",
          align: "center",
        },
        {
          text: "کد پذیرنده",
          value: "_id",
          align: "center",
        },
        {
          text: "صنف",
          value: "category",
          align: "center",
        },
        {
          text: "شهر",
          value: "city",
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
      ],
      tableData: [],
      allCategory: [],
    };
  },

  methods: {
    isEng(str) {
      const en = /^[a-zA-Z0-9]/gi;
      return en.test(str);
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
    filterCategory() {
      this.tableData.forEach((item) => {
        item.category = this.allCategory.find(
          (category) => category._id == item.category
        );
      });
    },
    filterItem(item) {
      this.tableData = this.tableData.filter(
        (single) => single._id != item
      );
    },
    deleteItem(item) {
      this.$http
        .delete(`${this.$privateKey}/accepter/${item}`)
        .then((res) => {
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
      this.$router.push(`/agent/acceptor/${item._id}/edit`);
    },
    viewItem(item) {
      this.$router.push(`/agent/acceptor/${item._id}/view`);
    },
    getTableData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(`${this.$privateKey}/accepter`)
          .then((res) => {
            this.tableData = res.data.ASREVIRA.docs;
            // this.checkIsLoading();
            this.filterCity();
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

  async created() {
    await this.$http.get(process.env.VUE_APP_API_CITY).then((res) => {
      this.allCities = res.data;
    });
    await this.getTableData();
  },
};
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