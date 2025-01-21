<template>
  <v-card class="pa-16">
      <card-title label="ثبت حساب جدید" color="#F9AE17"/>
      <v-row>
          <v-col cols="12" md="4">
              <v-text-field label="نام حساب"/>
          </v-col>
          <v-col cols="12" md="8">
              <v-radio-group row>
                  <v-radio label="شماره کارت" value="0"/>
                  <v-radio label="شماره حساب" value="1"/>
                  <v-radio label="شماره شبا" value="2"/>
              </v-radio-group>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
              <v-text-field label="توضیحات"/>
          </v-col>
      </v-row>
      <v-row>
          <v-btn color="primary" rounded width="140" height="45">ثبت درخواست</v-btn>
      </v-row>
  </v-card>
</template>

<script>
import CardTitle from '../../components/CardTitle.vue'
export default {
  components: { CardTitle },

}
</script>

<style>

</style>