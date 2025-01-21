<template>
  <v-card class="pa-16 grey--text text--darken-2">
      <CardTitle label="جزئیات تخفیف" color="#d55789"/>
    <v-row>
      <v-col cols="12" md="4">
          نام پذیرنده
        :
        {{tableData.accepter.name}}
      </v-col>
      <v-col cols="12" md="4">
          نام دسته بندی
        :
        {{tableData.title}}
      </v-col>
      <v-col cols="12" md="4">
          تاریخ ثبت
        :
        {{jalali(tableData.createdAt)}}
      
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
          درصد تخفیف
        :
        {{tableData.discount}}
        درصد
      </v-col>
      <v-col cols="12" md="4">
          وضعیت
        :
        <span v-show="tableData.accepter.status == -1">رد شده</span>
        <span v-show="tableData.accepter.status == 0">در انتظار تائید</span>
        <span v-show="tableData.accepter.status == 1">تائید شده</span>
        
      </v-col>
      
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="(item , index) in this.tableData.products" :key="index">
          {{item.name}}
        :
        {{item.price}}
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import CardTitle from "@/components/CardTitle";
import jalali from "moment-jalaali";
export default {
  name: "DiscountView",
  components:{
      CardTitle,
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    jalali(str) {
      return jalali(str).format("HH:mm jYYYY/jM/jD");
    },
    getTableData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(`${process.env.VUE_APP_API_ACCEPTOR_DISCOUNT}/${this.$route.params.id}`)
          .then((res) => {
            this.tableData = res.data.data;
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  beforeMount() {
    this.getTableData();
  },
};
</script>