<template>
  <div class="">
    <Slider class="mb-16"/>
     <RelatedAcceptors class="mb-16"/>
    <LastAcceptors class="mb-16" />
    <HighestScore class="mb-16" />
    <Favorites class="mb-16" />
  </div>
</template>

<script>
import RelatedAcceptors from "./src/RelatedAcceptors";
import LastAcceptors from "./src/LastAcceptors";
import HighestScore from "./src/HighestScore";
import Favorites from "./src/Favorites";
import Slider from "./src/Silder";
export default {
  name: "Home",
  components: {
    RelatedAcceptors,
    LastAcceptors,
    HighestScore,
    Favorites,
    Slider
  },
};
</script>

<style>
</style>