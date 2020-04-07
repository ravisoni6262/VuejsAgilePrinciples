<template>
  <div class="slider" v-if="isLoading">
    <h3>Loading...</h3>
    <div class="loader1">
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="slider" v-else>
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
  </div>
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
  computed: mapState(["principlesArray", "isLoading"])
};
</script>

<style scoped>
.slider {
  text-align: center;
}

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

.loader1 {
  display: inline-block;
  font-size: 0px;
  padding: 0px;
}
.loader1 span {
  vertical-align: middle;
  border-radius: 100%;

  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 3px 2px;
  -webkit-animation: loader1 0.8s linear infinite alternate;
  animation: loader1 0.8s linear infinite alternate;
}
.loader1 span:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgba(245, 103, 115, 0.6);
}
.loader1 span:nth-child(2) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: rgba(245, 103, 115, 0.8);
}
.loader1 span:nth-child(3) {
  -webkit-animation-delay: -0.26666s;
  animation-delay: -0.26666s;
  background: rgba(245, 103, 115, 1);
}
.loader1 span:nth-child(4) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: rgba(245, 103, 115, 0.8);
}
.loader1 span:nth-child(5) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgba(245, 103, 115, 0.4);
}

@keyframes loader1 {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@-webkit-keyframes loader1 {
  from {
    -webkit-transform: scale(0, 0);
  }
  to {
    -webkit-transform: scale(1, 1);
  }
}
</style>
