<template>
   <section class="good-page container">
      <ul class="good-page breadcrumbs">
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink to="/">Главная</NuxtLink>
         </li>
         <span class="good-page__link-divider breadcrumbs__link-divider"
            >•</span
         >
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink>Каталог</NuxtLink>
         </li>

         <span class="good-page__link-divider breadcrumbs__link-divider"
            >•</span
         >
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink>{{ id }}</NuxtLink>
         </li>
      </ul>

      <h3 class="good-page__title page-title">{{ id }}</h3>

      <section class="good-page__intro">
         <h6 class="good-page__intro-articul">Код товара: {{ id }}</h6>

         <div class="good-page__intro-preview"></div>
      </section>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
   </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default {
   setup() {
      const { id } = useRoute().params;

      return {
         modules: [Pagination],
         spaceBetween: 50,
         id,
      };
   },
   components: {
      Swiper,
      SwiperSlide,
   },
};
</script>

<style lang="scss"></style>
