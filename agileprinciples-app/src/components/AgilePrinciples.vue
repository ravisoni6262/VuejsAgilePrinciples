<template>
  <div class="agile-principles">
    <div class="container py-4">
      <div class="title text-left p-3">
        <h1>Manifesto for Agile Software Development</h1>
      </div>
      <!-- Card Start -->
      <div class="card pt-5">
        <div class="row">
          <div class="col-md-6 px-3">
            <div class="card-block px-6">
              <h4 class="card-title text-left pb-3">
                Principles behind the Agile Manifesto
              </h4>
              <p class="card-text pt-3">
                <b>
                  We are uncovering better ways of developing software by doing
                  it and helping others do it. Through this work we have come to
                  value:
                </b>
              </p>
              <p class="card-text">
                Individuals and interactions over processes and tools Working
                software over comprehensive documentation Customer collaboration
                over contract negotiation Responding to change over following a
                plan
              </p>
              <p class="card-text">
                That is, while there is value in the items on the right, we
                value the items on the left more.
              </p>
            </div>
          </div>
          <!-- Carousel start -->
          <div class="col-md-6 w-100">
            <Slider />
          </div>
          <!-- Carousel End -->
        </div>
        <!-- End of card -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Principles } from "../types";
import Slider from "@/views/Slider.vue";

@Component({
  components: {
    Slider
  }
})
export default class AgilePrinciples extends Vue {
  principleArray: Principles | null = null;

  created() {
    this.$store.dispatch("loadPrinciples");
  }

  mounted() {
    this.$store.dispatch("loadPrinciples");
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
  border: none !important;
  /* border-top: 1px solid rgba(34, 36, 38, 0.1); */
  box-shadow: none;
}

.card {
  font-size: 1em;
  overflow: hidden;
  padding: 5;
  border: none !important;
  /* border-radius: 0.28571429rem; */
  /* box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5; */
  margin-top: 20px;
}

.card-text {
  text-align: left;
}
</style>
