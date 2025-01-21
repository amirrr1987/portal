<template>
  <v-form>
    <v-card class="pa-16 grey--text text--darken-2">
      <CardTitle label="ویرایش اطلاعات" color="#08b5dd" />
      <v-row>
        <v-col cols="12">
          <v-tabs
            v-model="tab"
            background-color="#e9e9e9"
            color="#0d8dbf"
            active-class="#a3d9e2"
            grow
            height="65"
            class="mb-8"
          >
            <v-tab href="#tab-1" active-class="tab-active-bg"
              >مشخصات مالک</v-tab
            >
            <v-tab href="#tab-2" active-class="tab-active-bg"
              >مشخصات پذیرنده</v-tab
            >
            <v-tab href="#tab-3" active-class="tab-active-bg"
              >مدارک ارسال شده</v-tab
            >
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-1">
              <Item1 :itemData="edit" />
            </v-tab-item>
            <v-tab-item value="tab-2">
              <Item2 :itemData="edit" />
            </v-tab-item>
            <v-tab-item value="tab-3">
              <Item3 :imageSrc="edit" />
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
      <v-row justify="flex-end">
        <v-col cols="12" class="d-flex justify-end">
          <Btn color="primary" label="تایید" dark />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import Item1 from "@/pages/Admin/Acceptor/Edit/Item1";
import Item2 from "@/pages/Admin/Acceptor/Edit/Item2";
import Item3 from "@/pages/Admin/Acceptor/Edit/Item3";
import Btn from "@/components/Btn";
export default {
  name: "Edit",
  components: {
    CardTitle,
    Item1,
    Item2,
    Item3,
    Btn,
  },
  data() {
    return {
      tab: null,
      edit: {
        city: 0,
        country: 0,
        province: 0,
        name: "asdasdadsd",
        fatherName: "",
        mobile: "",
        nationalCode: "",
        status: -1,
        type: "",
        email: "",
        address: "",
        phone: "",
        birthCertificateNumber: "",
        username: "",
        referenceCode: "",
        password: "",
        passwordRepeat: "",
        birthdate: "",
        gender: null,
        tags: [],
      },
    };
  },

  methods: {
    async getItemData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(`${this.$privateKey}/accepter/${this.$route.params.id}`)
          .then((res) => {
            this.edit = res.data.ASREVIRA;
            this.edit.user.country = parseInt(res.data.ASREVIRA.user.country);
            this.edit.user.state = parseInt(res.data.ASREVIRA.user.state);
            this.edit.user.city = parseInt(res.data.ASREVIRA.user.city);
            this.edit.country = parseInt(res.data.ASREVIRA.country);
            this.edit.state = parseInt(res.data.ASREVIRA.state);
            this.edit.city = parseInt(res.data.ASREVIRA.city);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  async beforeMount() {
    await this.getItemData();
  },
};
</script>

<style>
.v-tab {
  letter-spacing: normal !important;
}
.tab-active-bg {
  background-color: #a3d9e2;
}
</style>
