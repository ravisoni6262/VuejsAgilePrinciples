<template>
  <div id="about" class="About">
    <Navigator />
    <div>
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";

export default {
  name: "About",
  components: {
    Navigator
  },
  data: function() {
    return {
      msg: "This is About Page."
    };
  }
};
</script>
