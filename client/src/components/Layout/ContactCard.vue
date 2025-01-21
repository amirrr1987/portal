<template>
  <p class="contact-card">
    <span>{{ props.title }} :</span>
    <span>{{ props.value }}</span>
  </p>
</template>

<script setup lang="ts">
interface  Props {
  title: string
  value: string
}
const props = withDefaults(defineProps<Props>(),{
  title: '',
  value: '',
})

</script>

<style lang="scss">
.contact-card{
  display: grid;
  grid-template-columns: max-content 1fr;
}
</style>
