<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Fotter />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Fotter from "@/components/Fotter.vue";

export default {
  components: {
    NavBar,
    Fotter,
  },
};
</script>
