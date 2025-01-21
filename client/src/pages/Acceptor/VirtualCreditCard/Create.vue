<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validateForm">
    <v-card class="pa-16">
      <CardTitle label="کارت اعتباری مجازی" color="#dc5a5a" />
      <v-row>
        <v-col cols="12">
          <v-radio-group row label="نوع ایجاد : " v-model="item.type">
            <v-radio label="عصر ویرا" :value="1" />
            <v-radio label="اختصاصی" :value="2" />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <Number
          md="4"
          label="تعداد ( از ۱ تا ۱۰۰ کارت )"
          maxCount="10"
          v-model="item.count"
        />
        <Number md="4" label="مبلغ کارت" append="ریال" v-model="item.price" />
      </v-row>
      <v-row>
        <Texts label="توضیحات" v-model="item.description" :validations="['required']" />
        
      </v-row>
      <div v-if="item.type == 2">
        <v-checkbox
          label="درخواست ارسال فیزیکی کارت"
          v-model="item.physicalCard"
        />
        <v-row justify="space-around">
          <Number md="3" label="کد پستی" v-model="item.postalCode" />
          <v-col cols="12" md="3">
            <v-select
              label="انتخاب طرح کارت"
              :items="chooseCardModel"
              item-text="name"
              item-value="id"
              v-model="item.cardDesign"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-btn
              color="#26caef"
              dark
              min-width="140"
              height="45"
              link
              to="/acceptor/virtual-credit-card/card-model"
            >
              مشاهده طرح های کارت
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <Textarea v-model="item.address" />
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-radio-group row label="نوع پست : " v-model="item.shippingType">
              <v-radio label="پست عادی" :value="1" />
              <v-radio label="پست پیشتاز" :value="2" />
              <v-radio label="الو پیک" :value="3" />
            </v-radio-group>
          </v-col>
        </v-row>
      </div>
      <v-row justify="end">
        <Btn label="ثبت و تائید" color="primary" type="submit"/>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import Number from "@/components/Number";
import Texts from "@/components/Texts";
import Btn from "@/components/Btn";
import Textarea from "@/components/Textarea";
export default {
  name: "Create",
  components: { CardTitle, Number, Texts, Btn, Textarea },
  data() {
    return {
      CardType: "asrevira",
      chooseCardModel: [
        { id: "606adf4a6fcaa5444a43b954", name: "صورتی" },
        { id: 2, name: "قرمز" },
      ],

      item: {
        type: 1,
        count: null,
        price: null,
        description: null,
        physicalCard: false,
        postalCode: null,
        cardDesign: null,
        address: null,
        shippingType: null,
        accepter: this.$store.state.acceptor._id,
      },
    };
  },
  methods: {
    //////////////////////////////////
    // Start check form validation
    validateForm() {
      if (this.$refs.thisForm.validate()) {
        this.submitForm();
      }
    },
    //  End  check form validation
    //////////////////////////////////

    //////////////////////////////////
    // Start
    submitForm() {
      this.$http
        .post(process.env.VUE_APP_API_VIRTUAL_CREDIT_CARD, this.item)
        .then((res) => {
          // this.routerToList();
          console.log(this.item);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //  End
    //////////////////////////////////


  },
};
</script>

<style>
</style>