<template>
  <div class="agile-principles">
    <div class="container py-3">
      <div class="title h1 text-center p-4">
        Manifesto for Agile Software Development
      </div>
      <!-- Card Start -->
      <div class="card">
        <div class="row ">
          <div class="col-md-6 px-3">
            <div class="card-block px-6">
              <h4 class="card-title p-3">
                Principles behind the Agile Manifesto
              </h4>
              <p class="card-text pt-3">
                We are uncovering better ways of developing software by doing it
                and helping others do it. Through this work we have come to
                value:
              </p>
              <p class="card-text">
                Individuals and interactions over processes and tools Working
                software over comprehensive documentation Customer collaboration
                over contract negotiation Responding to change over following a
                plan
              </p>
              <p>
                That is, while there is value in the items on the right, we
                value the items on the left more.
              </p>
            </div>
          </div>
          <!-- Carousel start -->
          <div class="col-md-6 w-100">
            <div id="CarouselTest" class="carousel slide" data-ride="carousel" v-for="(value, index) in this.principleArray" v-bind:key="index">
              <ol class="carousel-indicators">
                <li
                  data-target="#CarouselTest"
                  :class="{ active: index === 0 }"
                  v-bind:data-slide-to="index"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div
                  class="carousel-item active"
                  :value="value"
                >
                  <img
                    class="img-fluid"
                    src="../assets/blog.testlio.comimage00-5-f65a0a60ed4e7150552589e4cafaa1142d8b704a.jpg"
                    alt="carousel-background"
                  />
                  <div class="img-title">
                    <span class="display-4">Principle #{{ value.pid }}</span>
                    <div class="img-text pt-4">{{ value.principle }}</div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#CarouselTest"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#CarouselTest"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <!-- End of carousel -->
          </div>
        </div>
        <!-- End of card -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Principles } from "../types";

@Component
export default class AgilePrinciples extends Vue {
  principleArray: Principles | null = null;

  created() {
    this.$store.dispatch("loadPrinciples");
  }

  mounted() {
    this.principleArray = this.$store.state.principlesArray.data;
    console.log("this.principles", this.principleArray);
  }
}
</script>

<style scoped>
.agile-principles {
  font-family: Poppins;
}
.card-block {
  font-size: 1em;
  position: relative;
  margin: 0;
  padding: 1em;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  box-shadow: none;
}
.card {
  font-size: 1em;
  overflow: hidden;
  padding: 5;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  margin-top: 20px;
}

.card-text {
  text-align: left;
}

.carousel-indicators li {
  border-radius: 12px;
  width: 12px;
  height: 12px;
  background-color: #404040;
}
.carousel-indicators li {
  border-radius: 12px;
  width: 12px;
  height: 12px;
  background-color: #404040;
}
.carousel-indicators .active {
  background-color: white;
  max-width: 12px;
  margin: 0 3px;
  height: 12px;
}
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: -webkit-transform 0.6s ease-in-out;
  -webkit-transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.btn {
  margin-top: auto;
}

.img-title {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 10%;
  letter-spacing: 3px;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.6); /* Black background with 0.5 opacity */
  color: #f1f1f1; /* Grey text */
  width: 100%; /* Full width */
  height: 100%;
  padding: 5px; /* Some padding */
}
</style>
