<template>
  <div class="">
    <v-card class="pa-16 mb-16 position-r">
      <CardTitle label="فیلتر ها" color="#0d8dbf" />
      <v-row>
        <v-col cols="12" class="d-flex justify-space-around">
          <v-checkbox label="بازه زمانی" />
          <v-checkbox label="بازه مبلغ تراکنش" />
          <v-checkbox label="نام پذیرنده" />
          <v-checkbox label="پذیرنده های نماینده" />
          <v-checkbox label="صنف" />
          <BtnRemove class="mt-6" />
        </v-col>
        <v-col cols="12" class="d-flex justify-space-around">
          <v-checkbox label="بازه زمانی" />
          <v-checkbox label="بازه مبلغ تراکنش" />
          <v-checkbox label="نام پذیرنده" />
          <v-checkbox label="پذیرنده های نماینده" />
          <v-checkbox label="صنف" />
          <BtnRemove class="mt-6" />
        </v-col>
      </v-row>

      <v-btn
        color="#0d8dbf"
        class="icon-plus"
        dark
        tile
        min-width="40"
        height="40"
        absolute
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card>
    <v-card class="pa-6">
      <CardTitle label="نمودار فروش" color="#57cf8f" />
      <Chart/>
    </v-card>
  </div>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import BtnRemove from "@/components/BtnRemove";
import Chart from "@/components/Chart"
export default {
  name: "ChartData",
  components: {
    CardTitle,
    BtnRemove,
    Chart,
  },
};
</script>

<style>
.icon-plus {
    position: absolute !important;
    bottom: -20px !important;
    left: -25px;
}
</style>