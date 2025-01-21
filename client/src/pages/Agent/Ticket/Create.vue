<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validateForm">
    <v-card class="pa-16">
      <CardTitle label="ثبت تیکت جدید" color="#f1c60a" />
      <v-row align="center">
        <v-col cols="" md="3">
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

        <v-col cols="" md="3">
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
            :class="editorColor"
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
                'insertdatetime media table paste code help wordcount',
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
          <UploaderFile />
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12" class="d-flex justify-end">
          <Btn
            color="#57cf8f"
            label="ارسال"
            dark
            class="self-end"
            type="submit"
          >
            <template #after>
              <IconSend width="23" height="23" />
            </template>
          </Btn>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "@/components/CardTitle.vue";
import Texts from "@/components/Texts.vue";
import Editor from "@tinymce/tinymce-vue";
import Btn from "@/components/Btn.vue";
import IconSend from "@/icons/Main/IconSend.vue";
import Title from "@/components/Title.vue";
import UsersAutocomplete from "@/components/UsersAutocomplete.vue";
import UploaderFile from "@/components/UploaderFile.vue";
import { EventBus } from "@/mixins/EventBus.js";

const router = useRouter();
const thisForm = ref<any>(null);
const editorThis = ref<any>(null);

const priorities = ref([
  { id: 0, key: "low", name: "کم" },
  { id: 1, key: "medium", name: "عادی" },
  { id: 2, key: "high", name: "زیاد" },
  { id: 3, key: "critical", name: "بحرانی" },
]);

const units = ref([
  { id: 0, key: "admin", name: "مدیریت" },
  { id: 1, key: "acceptor", name: "پذیرنده" },
  { id: 2, key: "agent", name: "نماینده" },
  { id: 3, key: "user", name: "کاربر" },
]);

const itemData = ref({
  user: null,
  priority: null,
  title: "",
  section: "",
  body: "",
  file: null,
});

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};

const editorColor = ref("");

const validateForm = () => {
  if (itemData.value.body === "") {
    editorColor.value = "error-border";
    alert("لطفا توضیحات را وارد کنید.");
    return;
  }

  if (thisForm.value.validate()) {
    submitForm();
  }
};

const submitForm = async () => {
  try {
    await fetch(import.meta.env.VITE_API_TICKET, {
      method: "POST",
      body: JSON.stringify(itemData.value),
    });
    routerToList();
  } catch (error) {
    console.error(error);
  }
};

const routerToList = () => {
  setTimeout(() => {
    router.push("/admin/ticket/list");
  }, 600);
};

onMounted(() => {
  EventBus.on("selectFile", (data) => {
    itemData.value.file = data.src;
  });
});
</script>

<style lang="scss">
.error-border {
  border: 1px solid red;
}
</style>
