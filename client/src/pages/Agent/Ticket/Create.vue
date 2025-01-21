<template>
  <v-form
    ref="thisForm"
    lazy-validation
    @submit.prevent="validateForm"
  >
    <v-card class="pa-16">
      <CardTitle
        label="ثبت تیکت جدید"
        color="#f1c60a"
      />
      <v-row align="center">
        <v-col
          cols=""
          md="3"
        >
          <v-select
            v-model="itemData.section"
            label="انتخاب واحد گیرنده"
            :items="units"
            item-text="name"
            item-value="key"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <UsersAutocomplete
          v-model="itemData.user"
          label="نام کاربری یا کد کاربری گیرنده"
          md="6"
        />

        <v-col
          cols=""
          md="3"
        >
          <v-select
            v-model="itemData.priority"
            label="الویت"
            :items="priorities"
            item-text="name"
            item-value="key"
            :rules="[rules.required]"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <Texts
          v-model="itemData.title"
          label="عنوان"
          md="8"
          :validations="['required']"
        />
      </v-row>
      <v-row>
        <Title label="توضیحات" />
      </v-row>
      <v-row>
        <v-col cols="12">
          <Editor
            ref="editorThis"
            v-model="itemData.body"
            :class="editorCOlor"
            :rules="[rules.required]"
            required
            tag-name="div"
            api-key="no-api-key"
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

      <v-row>
        <v-col>
          <Title label="آپلود فایل" />
        </v-col>

        <v-col cols="12">
          <!-- <v-file-input
            truncate-length="15"
            show-size
            outlined
            class="vira-en file-upload"
            v-model="itemData.file"
          /> -->
        </v-col>
        <UploaderFile />
      </v-row>

      <v-row class="mt-16">
        <v-col
          cols="12"
          class="d-flex justify-end"
        >
          <Btn
            color="#57cf8f"
            label="ارسال"
            dark
            class="self-end"
            type="submit"
          >
            <template #after>
              <IconSend
                width="23"
                height="23"
              />
            </template>
          </Btn>
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
import IconSend from "@/icons/Main/IconSend";
import Title from "@/components/Title";
import UsersAutocomplete from "@/components/UsersAutocomplete";
import UploaderFile from "@/components/UploaderFile";

import { EventBus } from "@/mixins/EventBus.js";
export default {
  name: "Edit",
  components: {
    CardTitle,
    Texts,
    Editor,
    Btn,
    IconSend,
    Title,
    UsersAutocomplete,
    UploaderFile,
  },
  data() {
    return {
      priorities: [
        { id: 0, key: "low", name: "کم" },
        { id: 1, key: "medium", name: "عادی" },
        { id: 2, key: "high", name: "زیاد" },
        { id: 3, key: "critical", name: "بحرانی" },
      ],
      units: [
        { id: 0, key: "admin", name: "مدیریت" },
        { id: 1, key: "acceptor", name: "پذیرنده" },
        { id: 2, key: "agent", name: "نماینده" },
        { id: 3, key: "user", name: "کاربر" },
      ],
      itemData: {
        user: null,
        priority: null,
        title: "",
        section: "",
        body: "",
        file: null,
      },
      users: [],
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
        // body: (value) => !!value ||
      },
      clicked: false,
    };
  },
    mounted() {
    EventBus.$on("selectFile", (data) => {
      this.itemData.file= data.src;
    });
  },
  methods: {
    //////////////////////////////////
    // Start
       editorCOlor(){
        //  this.
       },
    //  End
    //////////////////////////////////
    //////////////////////////////////
    // Start check form validation
    validateForm() {
      if(this.itemData.body == "") {
        // this.editorCOlor();
        this.$refs.editorThis.
        alert(this.itemData.body);
        }
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
        .post(process.env.VUE_APP_API_TICKET, this.itemData)
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
        this.$router.push(`/admin/ticket/list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////
  },

};
</script>
<style lang="scss">
</style>
