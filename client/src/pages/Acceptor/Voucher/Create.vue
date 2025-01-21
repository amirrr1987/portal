<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validateForm">
    <v-card class="pa-16">
      <CardTitle label="ساخت بن کارت" color="secondary" />
      <v-row align="center">
        <v-col cols="12" md="8">
          <v-radio-group v-model="voucherType" row label="نوع انتخاب پذیرنده :">
            <v-radio label="انتخاب سیستمی" :value="0"></v-radio>
            <v-radio label="انتخاب دستی" :value="1"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="4">
          <div v-if="voucherType == 1">
            <Acceptors v-model="item.accepter" />
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <Number
          class="vira-input-ltr"
          label="مبلغ بن کارت"
          md="4"
          append="ریال"
          v-model="item.amount"
        />
        <DatePicker
          md="4"
          label="انتخاب تاریخ انقضا"
          v-model="item.expireTime"
        />
      </v-row>
      <v-row>
        <!-- <Users @submit="addUser" v-model="user" md="4" /> -->

        <v-col cols="12" md="4">
          <v-autocomplete
            :disabled="isUpdating"
            :items="users"
            :loading="isUpdating"
            label="انتخاب کاربر"
            item-text="name"
            item-value="_id"
            return-object
            v-model="chooseUser"
            @change="addTousers(chooseUser)"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="8" class="fill-height">
          <div
            style="
              display: inline-block;
              border: 1px solid #989898;
              position: relative;
            "
            class="py-3 px-6 ml-3 mb-5 rounded"
            v-for="(user, index) in item.users"
            :key="index"
          >
            <v-icon
              style="position: absolute; top: 3px; right: 3px"
              small
              @click="removeUser(user)"
              >mdi-close</v-icon
            >
            {{ user.name }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <Btn color="primary" label="ثبت و تائید" type="submit" />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import DatePicker from "@/components/DatePicker";
import Number from "@/components/Number";
// import Users from "@/components/UsersAutocomplete";
import Acceptors from "@/components/AcceptorAutocomplete";
import Btn from "@/components/Btn";
export default {
  name: "Create",
  components: {
    CardTitle,
    DatePicker,
    Number,
    // Users,
    Acceptors,
    Btn,
  },
  data() {
    return {
      autoUpdate: true,
      isUpdating: false,
      users: [],
      chooseUser: {},
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
      voucherType: 0,
      user: null,
      item: {
        accepter: "",
        users: [],
        expireTime: "",
        amount: null,
      },
    };
  },
  methods: {

    addTousers(userObject) {
      this.item.users.push(userObject);
      this.users = this.users.filter((item) => item._id != userObject._id);
    },
    removeUser(user) {
      this.users.push(user);
      this.item.users.splice(
        this.item.users.findIndex((item) => item._id == user._id),
        1
      );
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
    //////////////////////////////////
    // Start check form validation
    validateForm() {
      //   if (this.$refs.thisForm.validate()) {
      this.submitForm();
      //   }
    },
    //  End  check form validation
    //////////////////////////////////

    //////////////////////////////////
    // Start
    submitForm() {
      let userIds = [];
      this.item.users.forEach((item) => {
        userIds.push(item._id);
      });
      this.item.users = userIds;
      this.$http
        .post(process.env.VUE_APP_API_VOUCHER, this.item)
        .then((res) => {
          this.routerToList();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //  End
    //////////////////////////////////

    //////////////////////////////////
    // Start router to list
    routerToList() {
      setTimeout(() => {
        this.$router.push(`/admin/voucher/list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////
  },
  beforeMount() {
    this.getUsersData();
  },
};
</script>

<style>
</style>