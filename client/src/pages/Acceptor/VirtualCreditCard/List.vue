<template>
  <v-card class="pa-16">
    <CardTitle label="کارت اعتباری مجازی لیست" color="#4a86ff" />
    <v-row>
      <v-col cols="12" md="6" v-for="(item, index) in tableData" :key="index">
        <v-card class="vira-virtual-card" color="#4a86ff" dark tile>
          <div class="pa-3 d-flex justify-space-between">
            <span>نوع ایجاد : </span>
            <span v-show="item.type == 1">عصر ویرا</span>
            <span v-show="item.type == 2">اختصاصی</span>
          </div>
          <div class="pa-3 d-flex justify-space-between">
            <span>تعداد : </span>
            <span>{{ item.count }}</span>
          </div>
          <div class="pa-3 d-flex justify-space-between">
            <span>مبلغ : </span>
            <span>{{ item.price.toLocaleString() }} ریال</span>
          </div>
          <div class="pa-3 d-flex justify-space-between">
            <span>تاریخ ثبت : </span>
            <span>{{ jalali(item.createdAt) }}</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import jalali from "moment-jalaali";
export default {
  name: "List",
  components: { CardTitle },
  data() {
    return {
      cards: 4,
      tableData: [],
    };
  },
  methods: {
    jalali(str) {
      return jalali(str).format("jYYYY/jM/jD");
    },
    //////////////////////////////////
    // Start get data
    getTableData() {
      console.log("we are here");
      this.$http
        .get(`${process.env.VUE_APP_API_VIRTUAL_CREDIT_CARD}`)
        .then((res) => {
          this.tableData = res.data.data;
          console.log(this.tableData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //  End  get data
    //////////////////////////////////
  },
  created() {
    this.getTableData();
  },
};
</script>

<style>
</style>