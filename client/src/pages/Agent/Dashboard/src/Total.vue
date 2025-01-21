<template>
  <v-row>
    <TotalItem
      title="تعداد نمایندگان"
      :total="allData.agent"
      iconBgColor="#f1c60a"
      md="4"
    >
      <IconMonth slot="iconName" width="30" height="40" fill="#FFF" />
    </TotalItem>

    <TotalItem
      title="تعداد پذیرندگان"
      :total="allData.acceptor"
      iconBgColor="#08b5dd"
      md="4"
    >
      <IconMonth slot="iconName" width="30" height="40" fill="#FFF" />
    </TotalItem>

    <TotalItem
      title="تعداد تراکنش ها"
      :total="allData.transaction"
      iconBgColor="#8e329e"
      md="4"
    >
      <IconMonth slot="iconName" width="30" height="40" fill="#FFF" />
    </TotalItem>

    <TotalItem
      title="فروش هفتگی"
      :total="allData.weekly"
      iconBgColor="#32889e"
      md="4"
    >
      <IconMonth slot="iconName" width="30" height="40" fill="#FFF" />
    </TotalItem>

    <TotalItem
      title="فروش ماهانه"
      :total="allData.weekly"
      iconBgColor="#00cf90"
      md="4"
    >
      <IconMonth slot="iconName" width="30" height="40" fill="#FFF" />
    </TotalItem>

    <TotalItem
      title="موجودی کیف پول (ریال)"
      :total="allData.weekly"
      iconBgColor="#689e32"
      md="4"
    >
      <IconMonth slot="iconName" width="30" height="40" fill="#FFF" />
    </TotalItem>
  </v-row>
</template>

<script>
import TotalItem from "@/components/TotalItem";
import IconMonth from "@/icons/Main/IconTransaction";
export default {
  name: "Total",
  components: {
    TotalItem,
    IconMonth,
  },
  data() {
    return {
      allData: {
        agent: 1_223_423,
        acceptor: 1_342_349,
        transaction: 1_234_234,
        weekly: 123_422,
      },
    };
  },
};
</script>

<style></style>
