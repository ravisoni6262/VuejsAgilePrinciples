<template>
  <div class="home">
    <Navigator />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <AgilePrinciples />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import AgilePrinciples from "@/components/AgilePrinciples.vue";
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Home",
  components: {
    Navigator,
    AgilePrinciples
  }
};
</script>
