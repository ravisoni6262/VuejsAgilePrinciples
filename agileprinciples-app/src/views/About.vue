<template>
  <div class="about">
    <Navigator />
    <div class="container">
      <h2>I am About page.</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navigator from "@/components/Navigator.vue";
export default {
  name: "About",
  components: {
    Navigator,
  }
};
</script>
