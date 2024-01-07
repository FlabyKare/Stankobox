<template>
   <section class="catalog container">
      <ul class="catalog-breadcrumbs breadcrumbs">
         <li class="catalog-breadcrumbs__link breadcrumbs__link">
            <NuxtLink to="/">Главная</NuxtLink>
         </li>
         <span
            class="catalog-breadcrumbs__link-divider breadcrumbs__link-divider"
            >•</span
         >
         <li class="catalog-breadcrumbs__link breadcrumbs__link">
            <NuxtLink to="/catalog">Каталог</NuxtLink>
         </li>
      </ul>

      <h3 class="catalog__title page-title">Каталог</h3>
      <div class="catalog__categories equipments__categories">
         <NuxtLink
            v-for="(category, index) in categoriesInfo.categories"
            :key="index"
            :to="`/catalog/${category.id}`"
            class="catalog__categories-item equipments__categories-item"
         >
            <div
               class="catalog__categories-item-img-wrapper equipments__categories-item-img-wrapper"
            >
               <img
                  class="catalog__categories-item-img equipments__categories-item-img"
                  :src="`https://stankobox.runova.tech/api/categories/cover/${category.id}`"
                  alt=""
               />
            </div>
            <p
               class="catalog__categories-item-text equipments__categories-item-text"
            >
               {{ category.name }}
            </p>
         </NuxtLink>
      </div>
   </section>
</template>

<script setup>
import axios from "axios";

const { data: categoriesInfo } = await axios.get(
   "https://stankobox.runova.tech/api/categories/"
);
</script>
<style lang="scss" scoped>
// const categories = [
//    { slug: "metal", img: 1, name: "Станки по металлу" },
//    { slug: "wood", img: 2, name: "Станки по дереву" },
//    { slug: "cnc", img: 3, name: "Станки с ЧПУ" },
//    { slug: "bandsaw", img: 4, name: "Ленточнопильные станки" },
//    { slug: "extractors", img: 5, name: "Вытяжки" },
//    { slug: "edm", img: 6, name: "Электроэрозионные станки" },
// ];
</style>
