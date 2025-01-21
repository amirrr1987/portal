<template>
  <v-carousel v-model="model" class="rounded-lg">
    <v-carousel-item v-for="(item, index) in sliderImages" :key="index">
        <v-img :src="item.src"/>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "Silder",
  data() {
    return {
      model: 0,
      sliderImages: [
          { id: 1, src: "https://picsum.photos/id/237/1600/550" },
          { id: 2, src: "https://picsum.photos/id/236/1600/550" },
          { id: 3, src: "https://picsum.photos/id/233/1600/550" },
          { id: 4, src: "https://picsum.photos/id/232/1600/550" },
      ],
    };
  },
};
</script>