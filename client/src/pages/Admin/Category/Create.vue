<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validate">
    <v-card class="pa-16">
      <v-row>
        <v-col cols="12">
          <CardTitle label="تعریف صنف" color="#689e32" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-radio-group v-model="categoryType" row label="نوع صنف">
            <v-radio label="سرگروه" :value="1"></v-radio>
            <v-radio label="زیر مجموعه" :value="2"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row v-if="categoryType == 1">
        <v-col cols="12" lg="3">
          <v-text-field
            label="انتخاب اسم"
            v-model="category.title"
            :rules="[rules.required]"
            required
          />
        </v-col>
      </v-row>
      <v-row v-if="categoryType == 2">
        <v-col cols="12" md="3">
          <v-select
            label="سرگروه"
            :items="parents"
            v-model="category.parent"
            item-text="title"
            item-value="_id"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            label="نام زیر مجموعه"
            v-model="category.title"
            :rules="[rules.required]"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-snackbar
            content-class="d-flex justify-space-around"
            width="100"
            v-model="snackbar"
            top
            app
            left
            color="green"
            timeout="500"
            small
          >
            ثبت شد
            <v-icon>mdi-check</v-icon>
          </v-snackbar>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col cols="12">
          <Btn
            label="ثبت صنف"
            color="primary"
            type="submit"
            class="float-left"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import Btn from "@/components/Btn";
import CardTitle from "@/components/CardTitle";
export default {
  name: "Create",
  components: {
    Btn,
    CardTitle,
  },
  data() {
    return {
      snackbar: false,
      city: 0,
      country: 0,
      state: 0,
      parents: [
        { id: 1, name: "موبایل" },
        { id: 2, name: "آجیل" },
      ],
      categoryType: 1,
      category: {
        parent: null,
        title: "",
      },
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
        this.$router.push(`/admin/category/list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////
    //////////////////////////////////
    // Start check form validation
    validate() {
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
        .post(process.env.VUE_APP_API_CATEGORY, this.category)
        .then(() => {
          this.snackbar = true;
          this.routerToList();
        })
        .catch(() => {
          this.error = true;
        });
    },
    //  End
    //////////////////////////////////
  },
  async beforeMount() {
    await this.$http.get(process.env.VUE_APP_API_CATEGORY).then((res) => {
      this.parents = res.data.data.filter((item) => item.parent == null);
    });
  },
};
</script>
