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
        <CardTitle label="رصد فعالیت ها" color="#0ecfbb" />
        <v-row align="center">
          <v-col cols="3" sm="2" offset-sm="4" class="d-flex justify-end">
            <v-dialog v-model="dialog" persistent max-width="490">
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                  فیلتر ها
                  <v-icon>mdi-filter</v-icon>
                </v-btn>
              </template>
              <v-card class="py-4">
                <v-card-text>
                  <Farsi label="فیلتر بر اساس نام کاربر" />
                  <Farsi label="فیلتر بر اساس عملیات انجام شده" />
                  <div class="px-3">
                            <v-row align="center">
                    <v-col cols="12" md="4"> فیلتر بر اساس تاریخ </v-col>
                    <v-col cols="12" md="8">
                      <v-row align="center">
                        <v-col cols="12" md="2">از</v-col>
                        <v-col cols="12" md="5">
                          <DatePicker v-model="dateee" />
                        </v-col>
                        <v-col cols="12" md="5">
                          {{ dateee }}
                        </v-col>
                      </v-row>
                      <v-row align="center">
                        <v-col cols="12" md="2">تا</v-col>
                        <v-col cols="12" md="5">
                          <DatePicker v-model="dateee" />
                        </v-col>
                        <v-col cols="12" md="5">
                          {{ dateee }}
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  </div>
                </v-card-text>
                <v-card-actions class="py-7">
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    width="120"
                    height="40"
                    rounded
                    dark
                    @click="dialog = false"
                  >
                    تائید
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="red"
                    width="120"
                    height="40"
                    rounded
                    dark
                    @click="dialog = false"
                  >
                    انصراف
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
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

    <template v-slot:item.name="{ item }">
      <a @click.prevent="viewItem(item)">{{ item.name }}</a>
    </template>

    <template v-slot:item.username="{ item }">
      <span class="vira-en">{{ item.username }}</span>
    </template>

    <template v-slot:item.city="{ item }">
      <span class="vira-en">{{ item.city.name }}</span>
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
            <ActionBtn iconEye @click="deleteItem(item)" />
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
import Farsi from "@/components/FarsiText";
import DatePicker from "@/components/DatePicker2";
export default {
  name: "List",
  components: {
    CardTitle,
    BtnTableHelp,
    ActionBtn,
    Pagination,
    SnackbarSuccess,
    SnackbarError,
    Farsi,
    DatePicker,
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
          text: "نام کاربر",
          value: "name",
          align: "center",
        },
        {
          text: "کد کاربر",
          value: "username",
          align: "center",
        },
        {
          text: "فعالیت انجام شده",
          value: "city",
          align: "center",
        },
        {
          text: "تاریخ ثبت",
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
      dialog: false,
      dateee: "",
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
    deleteItem(item) {
      this.$http
        .delete(`${this.$privateKey}/agent/${item._id}`)
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
          .get(`${this.$privateKey}/agent`)
          .then((res) => {
            this.tableData = res.data.ASREVIRA.docs;
            this.checkIsLoading();
            this.filterCity();
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

  async created() {
    await this.$http.get(`${process.env.VUE_APP_API_CITY}`).then((res) => {
      this.allCities = res.data;
    });

    await this.getTableData();
  },
};
</script>
