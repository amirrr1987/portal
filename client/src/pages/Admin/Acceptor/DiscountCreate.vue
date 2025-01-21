<template>
  <v-form
    ref="thisForm"
    lazy-validation
    @submit.prevent="validateForm"
  >
    <v-card class="pa-lg-16">
      <CardTitle
        label="ثبت تخفیفات پذیرنده"
        color="#08b5dd"
      />
      <v-row>
        <AcceptorAutocomplete
          v-model="itemData.accepter"
          label="انتخاب پذیرنده"
          md="4"
        />
        <Texts
          v-model="itemData.title"
          label="نام گروه تخفیف"
          md="4"
        />
        <Number
          v-model="itemData.discount"
          label="درصد تخفیف گروه"
          append-icon="mdi-percent"
          append="%"
          md="4"
          class="vira-icon-right"
          :rules="[rules.persent]"
          min-count="0"
          max-count="100"
        />
      </v-row>
      <v-row class="mt-10 mb-16">
        <v-btn
          color="#08b5dd"
          class="white--text py-6"
          tile
          @click="addCard"
        >
          <span>اضافه کردن محصولات یا خدمات</span>
          <v-icon
            color="#08b5dd"
            class="white mr-3"
            large
          >
            mdi-plus
          </v-icon>
        </v-btn>
      </v-row>

      <v-row
        v-for="(product, index) in itemData.products"
        :key="index"
      >
        <v-col cols="12">
          <v-card
            color="#F1F1F1"
            class="pa-6 rounded-lg-2 mb-16"
          >
            <v-btn
              icon
              class="red"
              x-small
            >
              <v-icon
                color="white"
                @click="removeCard(index)"
              >
                mdi-close
              </v-icon>
            </v-btn>
            <v-row>
              <v-col
                cols="12"
                md="8"
              >
                <v-row>
                  <Texts
                    v-model="product.name"
                    label="نام"
                    md="6"
                  />
                  <Number
                    v-model="product.price"
                    label="قیمت"
                    md="6"
                  />
                  <Texts
                    v-model="product.description"
                    label="توضیحات"
                  />
                </v-row>
              </v-col>
              <ImageUploader
                :img-src="product.image"
                :img-name="`${index}`"
                md="4"
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="end">
        <Btn
          label="ثبت و تائید"
          color="#4fc7db"
          dark
          type="submit"
        />
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import Texts from "@/components/Texts";
import CardTitle from "@/components/CardTitle";
import Btn from "@/components/Btn";
import ImageUploader from "@/components/ImgUploader";
import Number from "@/components/Number";
import AcceptorAutocomplete from "@/components/AcceptorAutocomplete";
import { EventBus } from "@/mixins/EventBus.js";

export default {
  name: "Create",
  components: {
    Texts,
    CardTitle,
    Btn,
    ImageUploader,
    Number,
    AcceptorAutocomplete,
  },
  data() {
    return {
      itemData: {
        accepter: "",
        title: "",
        discount: 0,
        products: [],
      },
      rules: {
        persent: (value) => 100 > value > 0 || "این فیلد الزامی است",
      },
    };
  },
  mounted() {
    EventBus.$on("selectImg", (data) => {
      this.itemData.products[data.name].image = data.src;
    });
  },
  methods: {
    addCard() {
      this.itemData.products.push({
        name: "",
        price: null,
        description: "",
        image: "",
      });
    },
    removeCard(index) {
      this.itemData.products.splice(index, 1);
    },

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
    // Start send data
    submitForm() {
      const formData = new FormData();
      const oFormData = this.itemData;
      for (const key in oFormData) {
        if (oFormData[key] != null) formData.append(key, oFormData[key]);
      }
      this.$http
        .post(process.env.VUE_APP_API_ACCEPTOR_DISCOUNT, this.itemData)
        .then(() => {
          this.dialog = true;
          this.routerToList();
        })
        .catch(() => {
          this.error = true;
        });
    },
    //  End  send data
    //////////////////////////////////

    //////////////////////////////////
    // Start router to list
    routerToList() {
      setTimeout(() => {
        this.$router.push(`/admin/acceptor/discount-list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////
  },
};
</script>
