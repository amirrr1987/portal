<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validate">
    <v-card class="pa-16">
      <CardTitle label="صدور فاکتور" color="#08b5dd" />
      <v-row>
        <v-col cols="12" md="4">
          <v-select
            label="انتخاب کاربر"
            :items="users"
            item-text="name"
            item-value="_id"
            v-model="invoiceIssue.user"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-select
            label="انتخاب دسته بندی"
            :items="categories"
            item-text="title"
            item-value="_id"
            v-model="category"
            @change="getCategoryItem(category)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="مبلغ"
            type="number"
            class="vira-input-ltr"
            v-model="item.amount"
            @keypress.enter="addToList"
          >
            <template v-slot:append>
              <span class="mr-3">ریال</span>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn color="#08b5dd" min-width="40" width="40" @click="addToList">
            <v-icon color="#FFF" x-large> mdi-plus </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="">
          <v-data-table
            :headers="tableHeader"
            :items="invoiceIssue.items"
            :items-per-page="5"
            class="elevation-1"
            hide-default-footer
            hide-default-header
          >
            <template v-slot:item.discount="{ item }">
              ( تخفیف {{ item.discount }} % )
            </template>
            <template v-slot:item.category="{ item }">
              {{ item.categoryTitle }}
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn class="red" x-small icon @click="deleteItem(item)">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </template>
            <template v-slot:item.amount="{ item }">
              {{ parseInt(item.amount).toLocaleString() }} <span class="mr-1">ریال</span>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          مبلغ کل : {{ totalAmount }} <span>ریال</span>
        </v-col>
        <v-col cols="12" md="4"> مقدار تخفیف : {{ totalDiscount }} ریال </v-col>
        <v-col cols="12" md="4"> مبلغ نهایی : {{ finalAmount }} ریال </v-col>
      </v-row>
      <div class="pt-16 red--text text-center" v-show="message">
        حداقل یک مورد نیاز است
      </div>

      <v-row class="mt-16" justify="end">
        <v-btn color="primary" width="140" height="43" rounded type="submit">
          ثبت و تائید
        </v-btn>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import CardTitle from "@/components/CardTitle";
export default {
  components: { CardTitle },
  data() {
    return {
      message: false,
      categories: [],
      users: [],
      item: {
        category: "",
        amount: null,
        discount: null,
        unit: "ریال",
      },
      discount: "",
      user: "",
      category: "",

      invoiceIssue: {
        accepter: this.$store.state.acceptor._id,
        user: "",
        totalAmount: null,
        totalDiscount: null,
        finalAmount: null,
        items: [
       
        ],
      },

      tableHeader: [
        {
          text: "عملیات",
          value: "action",
          sortable: false,
        },
        {
          text: "نام",
          value: "category",
          align: "center",
        },
        {
          text: "تخفیف",
          value: "discount",
          align: "center",
        },
        {
          text: "مبلغ",
          value: "amount",
          align: "center",
        },
      ],
      tableData: [],

      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },
  methods: {
    //////////////////////////////////
    // Start router to list
    routerToList() {
      setTimeout(() => {
        this.$router.push(`/acceptor/invoice-list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////
    //////////////////////////////////
    // Start check form validation
    validate() {
      if (this.invoiceIssue.items.length > 0) {
        this.submitForm();
      }
      if (this.invoiceIssue.items.length <= 0) {
        this.message = true;
      }
    },
    //  End  check form validation
    //////////////////////////////////

    //////////////////////////////////
    // Start
    submitForm() {
      this.invoiceIssue.finalAmount = parseInt(
        this.finalAmount.replaceAll(",", "")
      );
      this.invoiceIssue.totalAmount = parseInt(
        this.totalAmount.replaceAll(",", "")
      );
      this.invoiceIssue.totalDiscount = parseInt(
        this.totalDiscount.replaceAll(",", "")
      );
      this.$http
        .post(process.env.VUE_APP_API_FACTOR, this.invoiceIssue)
        .then(() => {
          this.routerToList();
        })
        .catch(() => {
          this.error = true;
        });
    },
    //  End
    //////////////////////////////////

    deleteItem(item) {
      const index = this.invoiceIssue.items.indexOf(item);
      if (index >= 0) this.invoiceIssue.items.splice(index, 1);
    },
    addToList() {
      if (this.$refs.thisForm.validate() && this.category && this.item.amount) {
        this.invoiceIssue.items.push(this.item);
        this.item = {};
        this.category = "";
        this.message = false;
      }
    },

    getCategoryItem(item) {
      const categoryItem = this.categories.filter(
        (single) => single._id == item
      );
      this.item.discount = categoryItem[0].discount;
      this.item.category = categoryItem[0]._id;
      this.item.categoryTitle = categoryItem[0].title;
    },
    getTableData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(process.env.VUE_APP_API_ACCEPTOR_DISCOUNT)
          .then((res) => {
            this.categories = res.data.data;
            // this.snackbarSuccess = true;
            resolve(res);
          })
          .catch((err) => {
            // this.snackbarError = true;
            reject(err);
          });
      });
    },
    getUsersData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(`${this.$privateKey}/users`)
          .then((res) => {
            this.users = res.data.ASREVIRA.users;
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  computed: {
    totalAmount() {
      let sum = 0;
      this.invoiceIssue.items.forEach((item) => (sum += +item.amount));
      return sum.toLocaleString();
    },
    totalDiscount() {
      let totalDiscount = 0;

      this.invoiceIssue.items.forEach((single) => {
        totalDiscount += (single.discount * single.amount) / 100;
      });
      return totalDiscount.toLocaleString();
    },
    finalAmount() {
      return (
        parseInt(this.totalAmount.replaceAll(",", "")) -
        parseInt(this.totalDiscount.replaceAll(",", ""))
      ).toLocaleString();
    },
    chooseCategory() {
      return 100;
    },

  },
  mounted() {
    this.getTableData();
    this.getUsersData();
  },
};
</script>

<style>
tbody tr:nth-of-type(odd) {
   background-color: rgba(0, 0, 0, .09);
 }
</style>