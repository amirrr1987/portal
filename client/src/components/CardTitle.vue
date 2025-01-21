<template>
  <v-card
    :color="props.color"
    dark
    width="200"
    height="50"
    class="d-flex align-center justify-center position-absolute"
    tile
    :style="cardStyle"
  >
    {{ props.label }}
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  color?: string;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: null,
  label: "عنوان",
});

const cardStyle = {
  top: "-20px",
  right: "-20px",
  cursor: "default",
};
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>
<style lang="scss">
.card-title {
  top: -25px;
  right: -25px;
  cursor: default;
}
</style>
