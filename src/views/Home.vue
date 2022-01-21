<template>
  <div>
    <Intruduction />
    <About />
    <Resume />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Intruduction from "@/components/Introduction.vue";
import About from "@/components/About.vue";
import Resume from "@/components/Resume.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Intruduction,
    About,
    Resume,
    Contact,
  },
};
</script>
