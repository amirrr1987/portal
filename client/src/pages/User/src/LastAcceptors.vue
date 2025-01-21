<template>
  <section class="company">
    <div class="company__container">
      <div class="company__row">
        <carousel :loop="true" :nav="false" :dots="false" :autoplay="true" :margin="15" :responsive="{0:{items:3} , 600:{items:5} , 900:{items:2.5}}">
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
          <div><img class="company__img" src="https://picsum.photos/id/237/450/360" /></div>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  name: "Company",
  components: { carousel },
};
</script>


<style lang="scss">
.company {
    background-color: #518cf1;
    direction: ltr;
}
</style>