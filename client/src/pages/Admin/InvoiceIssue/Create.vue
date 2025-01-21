<template>
  <v-card class="pa-16">
    <CardTitle label="صدور فاکتور" color="#08b5dd" />
    <v-row>
      <v-col cols="12" md="4">
        <v-select
          label="انتخاب کاربر"
          :items="users"
          item-text=""
          item-value=""
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-select
          label="انتخاب دسته بندی"
          :items="users"
          item-text=""
          item-value=""
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field label="مبلغ" type="number" class="vira-input-ltr">
          <template v-slot:append>
            <span class="mr-3">ریال</span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn color="#08b5dd" min-width="40" width="40">
          <v-icon color="#FFF" x-large> mdi-plus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          hide-default-footer
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        مبلغ کل : {{total}} ریال
      </v-col>
      <v-col cols="12" md="4">
        مقدار تخفیف : {{total}} ریال
      </v-col>
      <v-col cols="12" md="4">
        مبلغ نهایی : {{total}} ریال
      </v-col>
    </v-row>
    <v-row class="mt-16" justify="end">
      <v-btn color="primary" width="140" height="43" rounded>
        ثبت و تائید
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
import CardTitle from "@/components/CardTitle";
export default {
  components: { CardTitle },
  data() {
    return{
      headers:[{
        text: "sdf"
      }],
      desserts:[{
    
      }],
    }
  }
};
</script>

<style>
</style>