<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
    class="text-h6"
  >
    <slot name="before" />
    <IconUser2
      v-if="props.iconUser2"
      class="ml-3"
      :width="props.iconSize"
      :height="props.iconSize"
    />
    <IconPapers
      v-if="props.iconPapers"
      class="ml-3"
      :width="props.iconSize"
      :height="props.iconSize"
    />
    <IconImages
      v-if="props.iconImages"
      class="ml-3"
      :width="props.iconSize"
      :height="props.iconSize"
    />
    <IconStore
      v-if="props.iconStore"
      class="ml-3"
      :width="props.iconSize"
      :height="props.iconSize"
    />
    <span>
      {{ props.label }}
    </span>
    <slot name="after" />
  </v-col>
</template>

<script setup lang="ts">
import IconImages from "@/icons/Main/IconImages.vue";
import IconPapers from "@/icons/Main/IconPapers.vue";
import IconUser2 from "@/icons/Main/IconUser2.vue";
import IconStore from "@/icons/Main/IconStore.vue";

interface Props {
  label?: string | undefined;
  cols?: string | undefined;
  iconImages?: boolean;
  iconPapers?: boolean;
  iconUser2?: boolean;
  iconStore?: boolean;
  iconSize?: string | undefined;
  sm?: string | undefined;
  md?: string | undefined;
  lg?: string | undefined;
  xl?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  label: "عنوان",
  cols: "12",
  iconImages: false,
  iconPapers: false,
  iconUser2: false,
  iconStore: false,
  iconSize: "18",
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
});
</script>
