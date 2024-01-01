<template>
   <splide>
      <splide-slide>Slide 1</splide-slide>
      <splide-slide>Slide 2</splide-slide>
      <splide-slide>Slide 3</splide-slide>
   </splide>
</template>
<script>
// Default theme
import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/vue-splide/css/skyblue";
import "@splidejs/vue-splide/css/sea-green";

// or only core styles
import "@splidejs/vue-splide/css/core";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
   components: {
      Splide,
      SplideSlide,
   },
   data() {
      return {
         //  options: {
         //     rewind: true,
         //     perPage: 4,
         //     padding: "0.5em",
         //     perMove: 1,
         //     gap: "20px",
         //     pagination: false,
         //  },
      };
   },
};
</script>
