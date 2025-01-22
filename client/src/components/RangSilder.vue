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
import { ref, computed, onMounted } from "vue";

interface Props {
  value?: number | undefined;
  sliderCols?: string | undefined;
  sliderSm?: string | undefined;
  sliderMd?: string | undefined;
  sliderLg?: string | undefined;
  sliderXl?: string | undefined;
  boxCols?: string | undefined;
  boxSm?: string | undefined;
  boxMd?: string | undefined;
  boxLg?: string | undefined;
  boxXl?: string | undefined;
  cols?: string | undefined;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  sliderCols: "12",
  sliderSm: undefined,
  sliderMd: undefined,
  sliderLg: undefined,
  sliderXl: undefined,
  boxCols: "12",
  boxSm: undefined,
  boxMd: undefined,
  boxLg: undefined,
  boxXl: undefined,
  cols: "12",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
});

const emit = defineEmits(["input"]);

const totalAmount = ref<number>(100);

const calcTotal = computed((): number => {
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
