<template>
  <v-form ref="thisForm" lazy-validation @submit.prevent="validateForm">
    <v-card class="pa-16">
      <card-title label="درخواست کیف پول" color="#ff1493" />

      <v-row justify="space-between" align="center">
        <Texts v-model="wallet.title" label="عنوان کیف پول" md="4" />
      </v-row>
      <v-row justify="end">
        <Btn color="primary" label="تائید" type="submit" />
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import Btn from "@/components/Btn";
import Texts from "@/components/Texts";
export default {
  name: "WalletCreate",
  components: { CardTitle, Btn, Texts },
  data() {
    return {
      wallet: {
        name: "",
      },
    };
  },
  methods: {
    //////////////////////////////////
    // Start
    getItemData() {
      this.$http
        .get(`${process.env.VUE_APP_API_WALLET}/${this.$route.params.id}`)
        .then((res) => {
          this.wallet = res.data.data;
        })

        .catch((err) => {
          console.error(err);
        });
    },
    //  End
    //////////////////////////////////

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
        .post(process.env.VUE_APP_API_WALLET, this.wallet)
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
    //////////////////////////////////
    // Start router to list
    routerToList() {
      setTimeout(() => {
        this.$router.push(`/acceptor/wallet/list`);
      }, 600);
    },
    //  End  router to list
    //////////////////////////////////
  },
  mounted() {
    this.getItemData();
  },
};
</script>

<style>
</style>