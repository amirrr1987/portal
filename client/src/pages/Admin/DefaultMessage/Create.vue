<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validateForm">
    <v-card class="pa-16">
      <CardTitle label="ثبت پیام های پیش فرض" color="#4fc7db" />
      <v-row>
        <!-- <v-col cols="" md="4">
          <v-select label="انتخاب بخش" :items="" v-model="" />
        </v-col> -->
        <Texts label="عنوان" v-model="itemData.title" md="8" />
      </v-row>
      <v-row>
        <v-col cols="12">
          <Editor
            api-key="no-api-key"
            v-model="itemData.body"
            :init="{
              height: 500,
              menubar: false,
              rtl: true,
              directionality: 'rtl',

              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount ',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat |  rtl',
            }"
          />
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="12" class="d-flex justify-end">
          <Btn color="#4fc7db" label="ثبت" dark  type="submit" />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import Texts from "@/components/Texts";
import Editor from "@tinymce/tinymce-vue";
import Btn from "@/components/Btn.vue";

export default {
  name: "Edit",
  components: {
    CardTitle,
    Texts,
    Editor,
    Btn,
  },
  data() {
    return {
      itemData: {
        title: "",
        body: "",
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
        .post(process.env.VUE_APP_API_DEFAULT_MESSAGE, this.itemData)
        .then(() => {
          this.routerToList();
        })
        .catch(() => {
          this.error = true;
        });
    },
    //  End
    //////////////////////////////////

    //////////////////////////////////
    // Start router to list
    routerToList() {
      setTimeout(() => {
        this.$router.push(`/admin/default-message/list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////
  },
};
</script>
