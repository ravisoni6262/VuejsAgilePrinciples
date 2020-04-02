<template>
  <carousel-3d
    :autoplay="true"
    :autoplay-timeout="5000"
    :controls-visible="true"
  >
    <slide
      v-for="(slide, i) in principlesArray.data"
      :index="i"
      :key="slide.pid"
    >
      <figure>
        <img
          :index="i"
          class="slider-image img-responsive"
          src="../assets/3644-grabber.jpg"
        />
        <figcaption :key="slide.pid">
          <h4 class="pb-0">Principle #{{ slide.pid }}</h4>
          <span class="mb-0"
            ><b>{{ slide.principle }}</b></span
          >
        </figcaption>
      </figure>
    </slide>
  </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import { mapState } from "vuex";

export default {
  name: "Slider",
  components: {
    Carousel3d,
    Slide
  },
  computed: mapState(["principlesArray"])
};
</script>

<style scoped>
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  bottom: 0;
  padding: 10px;
  font-size: 14px;
  min-width: 100%;
  box-sizing: border-box;
  text-align: left;
}

.slider-image {
  width: 362px;
  height: 272px;
  /* opacity: 0.8; */
}

.prev[data-v-43e93932] {
  color: white !important;
}

.next[data-v-43e93932] {
  color: white !important;
}
</style>
