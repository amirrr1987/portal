
        
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
        <CardTitle label="لیست  اصناف" color="#32889e" />
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

    <template v-slot:item.parent="{ item }">
      <span v-if="item.parent != null">{{ item.parent.title }}</span>
    </template>

    <template v-slot:item._id="{ item }">
      <span class="vira-en">{{ item._id }}</span>
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
        <BtnTableHelp hasEdit hasDelete />
      </div>
    </template>
  </v-data-table>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import ActionBtn from "@/components/ActionBtn";
import BtnTableHelp from "@/components/BtnTableHelp";
import Pagination from "@/components/Pagination";
import SnackbarSuccess from "@/components/SnackbarSuccess";
import SnackbarError from "@/components/SnackbarError";

export default {
  name: "List",
  components: {

    CardTitle,
    BtnTableHelp,
    Pagination,
    SnackbarSuccess,
    SnackbarError,
    ActionBtn,
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
          text: "اسم",
          value: "title",
          align: "center",
        },
        {
          text: "سر گروه",
          value: "parent",
          align: "center",
        },
        {
          text: "کد صنف",
          value: "_id",
          align: "center",
        },
        {
          text: "تعداد پذیرنده های صنف",
          value: "accepters.length",
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
    checkIsLoading() {
      if (this.tableData.length == 0) {
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      }
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
        .delete(`${process.env.VUE_APP_API_CATEGORY}/${item}`)
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
      this.$router.push(`/admin/category/${item._id}/edit`);
    },
    viewItem(item) {
      this.$router.push(`/admin/category/${item._id}/view`);
    },
    getTableData() {
      this.$http
        .get(process.env.VUE_APP_API_CATEGORY)
        .then((res) => {
          this.tableData = res.data.data;
        })
        .catch((err) => {
          this.snackbarError = true;
          console.error(err);
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
