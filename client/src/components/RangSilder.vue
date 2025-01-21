<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-row align="center">
      <v-col
        :cols="sliderCols"
        :sm="sliderSm"
        :md="sliderMd"
        :lg="sliderLg"
        :xl="sliderXl"
      >
        <v-slider
          max="100"
          min="0"
        
          v-model="totalAmount"
          track-color="secondary"
          color="gary"
          class="mt-2"
          :value="calcTotal"
          @change="changeAmount"
        />
      </v-col>
      <v-col :cols="boxCols" :sm="boxSm" :md="boxMd" :lg="boxLg" :xl="boxXl">
        <v-card
          outlined
          class="d-flex rounded-lg-1"
          height="70"
          
          style="
            align-items: center;
            justify-content: center;
            border-width: 1px;
            border-color: #78787878
          "
        >
          {{ calcTotal }}%
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "RangSlider",
  props: {
    value: { type: Number, default: null },
    sliderCols: { type: String, default: "12" },
    sliderSm: { type: String, default: null },
    sliderMd: { type: String, default: null },
    sliderLg: { type: String, default: null },
    sliderXl: { type: String, default: null },
    boxCols: { type: String, default: "12" },
    boxSm: { type: String, default: null },
    boxMd: { type: String, default: null },
    boxLg: { type: String, default: null },
    boxXl: { type: String, default: null },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      totalAmount: 100,
    };
  },
  mounted() {
    if (this.value != null) this.totalAmount = 100 - this.value;
  },
  methods: {
    clacTotalDiscountSlider() {
      this.calcTotal = 100 - this.totalAmount;
    },
    changeAmount(e) {
      this.$emit("input", 100 - e);
    },
  },
  computed: {
    //////////////////////////////////
    // Start calc total discount
    calcTotal: function () {
      return 100 - this.totalAmount;
    },
    //  End  calc total discount
    //////////////////////////////////
  },
};
</script>
<style lang="scss">
/*
####################################
            start v-silder custom style 
*/
.v-slider {
  &__track-container {
    height: 7px !important;
  }

  &__track-background {
    border-radius: 5px;
  }

  &__track-fill {
    border-radius: 5px;
    background: transparent !important;
    border: 1px solid #000;
  }

  &__thumb {
    background: rgb(13 141 191) !important;
  }
}

/*
             End  v-silder custom style 
####################################
*/
</style>
