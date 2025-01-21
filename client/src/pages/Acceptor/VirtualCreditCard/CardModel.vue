<template>
  <v-card class="pa-16">
      <CardTitle label="کارت اعتباری مجازی" color="#dc5a5a" />
      <v-row>
          <v-col cols="12" md="6">
              <div class="mb-3 grey--text text--darken-1">طرح شماره یک</div>
              <v-card color="#c57474" height="200" width="" />
          </v-col>
          <v-col cols="12" md="6">
              <div class="mb-3 grey--text text--darken-1">طرح شماره دو</div>
              <v-card color="#7d7ac2" height="200" width="" />
          </v-col>
          <v-col cols="12" md="6">
              <div class="mb-3 grey--text text--darken-1">طرح شماره سه</div>
              <v-card color="#ba68ce" height="200" width="" />
          </v-col>
          <v-col cols="12" md="6">
              <div class="mb-3 grey--text text--darken-1">طرح شماره چهار</div>
              <v-card color="#b8528f" height="200" width="" />
          </v-col>
      </v-row>
      <v-row justify="end" class="mt-16">
          <BtnNext label="بازگشت" color="warning" link to="/acceptor/virtual-credit-card/create"/>
      </v-row>
  </v-card>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import BtnNext from "@/components/BtnNext";
export default {
name: "CardModel",
components:{ CardTitle, BtnNext}
}
</script>

<style>

</style>