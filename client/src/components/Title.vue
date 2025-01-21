<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
    class="text-h6"
  >
    <slot name="before" />
    <IconUser2
      v-if="iconUser2"
      class="ml-3"
      :width="iconSize"
      :height="iconSize"
    />
    <IconPapers
      v-if="iconPapers"
      class="ml-3"
      :width="iconSize"
      :height="iconSize"
    />
    <IconImages
      v-if="iconImages"
      class="ml-3"
      :width="iconSize"
      :height="iconSize"
    />
    <IconStore
      v-if="iconStore"
      class="ml-3"
      :width="iconSize"
      :height="iconSize"
    />
    <span>
      {{ label }}
    </span>
    <slot name="after" />
  </v-col>
</template>
<script lang="ts">
import IconImages from "@/icons/Main/IconImages";
import IconPapers from "@/icons/Main/IconPapers";
import IconUser2 from "@/icons/Main/IconUser2";
import IconStore from "@/icons/Main/IconStore";
export default {
  name: "TheTitle",
  components: { IconUser2, IconPapers, IconImages, IconStore },
  props: {
    label: { type: String, default: "عنوان" },
    cols: { type: String, default: "12" },
    iconImages: { type: Boolean, default: false },
    iconPapers: { type: Boolean, default: false },
    iconUser2: { type: Boolean, default: false },
    iconStore: { type: Boolean, default: false },
    iconSize: { type: String, default: "18" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
};
</script>
