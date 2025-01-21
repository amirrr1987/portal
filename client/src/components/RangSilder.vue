<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <v-row align="center">
      <v-col
        :cols="props.sliderCols"
        :sm="props.sliderSm"
        :md="props.sliderMd"
        :lg="props.sliderLg"
        :xl="props.sliderXl"
      >
        <v-slider
          max="100"
          min="0"
          v-model="totalAmount"
          track-color="secondary"
          color="gray"
          class="mt-2"
          :model-value="calcTotal"
          @update:model-value="changeAmount"
        />
      </v-col>
      <v-col
        :cols="props.boxCols"
        :sm="props.boxSm"
        :md="props.boxMd"
        :lg="props.boxLg"
        :xl="props.boxXl"
      >
        <v-card
          outlined
          class="d-flex rounded-lg-1"
          height="70"
          style="
            align-items: center;
            justify-content: center;
            border-width: 1px;
            border-color: #78787878;
          "
        >
          {{ calcTotal }}%
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";

interface Props {
  value?: number | null;
  sliderCols?: string;
  sliderSm?: string;
  sliderMd?: string;
  sliderLg?: string;
  sliderXl?: string;
  boxCols?: string;
  boxSm?: string;
  boxMd?: string;
  boxLg?: string;
  boxXl?: string;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: null,
  sliderCols: "12",
  sliderSm: null,
  sliderMd: null,
  sliderLg: null,
  sliderXl: null,
  boxCols: "12",
  boxSm: null,
  boxMd: null,
  boxLg: null,
  boxXl: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(["input"]);

const totalAmount = ref(100);

const calcTotal = computed(() => {
  return 100 - totalAmount.value;
});

const changeAmount = (e: number) => {
  emit("input", 100 - e);
};

onMounted(() => {
  if (props.value !== null) {
    totalAmount.value = 100 - props.value;
  }
});
</script>

<style lang="scss">
/*
####################################
            Start v-slider custom style 
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
             End v-slider custom style 
####################################
*/
</style>
