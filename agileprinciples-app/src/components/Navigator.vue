<template>
  <div class="navigator">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/images11.jpeg"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt="app-logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="home-link nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="about-link nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/slider">Slider</router-link>
          </li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navigator extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  display: block !important;
}
h1,
h2,
h3,
h4,
h5 {
  color: #333;
}

h6 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
}

img {
  max-width: 100%;
}

.blockquote {
  font-size: 1.6rem;
  color: #333;
  border: none;
  padding: 0;
}

.blockquote-footer {
  margin: 1rem 0 0;
}
</style>
