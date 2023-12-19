<template>
   <section class="catalog container">
      <!-- <UBreadcrumb
         divider="•"
         :links="[{ label: 'Главная', to: '/' }, { label: 'Каталог' }]"
      /> -->

      <ul class="catalog-breadcrumbs breadcrumbs">
         <li class="catalog-breadcrumbs__link breadcrumbs__link">
            <NuxtLink to="/">Главная</NuxtLink>
         </li>
         <span
            class="catalog-breadcrumbs__link-divider breadcrumbs__link-divider"
            >•</span
         >
         <li class="catalog-breadcrumbs__link breadcrumbs__link">
            <NuxtLink>Каталог</NuxtLink>
         </li>
      </ul>

      <h3 class="catalog__title page-title">Каталог</h3>
      <div class="catalog__categories equipments__categories">
         <NuxtLink
            v-for="(category, index) in categories"
            :key="index"
            :to="`/products/${category.slug}`"
            class="equipments__categories-item"
         >
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  :src="`/img/Menu/${category.img}.png`"
                  alt=""
               />
            </div>
            <p class="equipments__categories-item-text">{{ category.name }}</p>
         </NuxtLink>
      </div>
   </section>
</template>

<script setup>
import { useRoute } from "vue-router";

const { params } = useRoute();
const categories = [
   { slug: "metal", img: 1, name: "Станки по металлу" },
   { slug: "wood", img: 2, name: "Станки по дереву" },
   { slug: "cnc", img: 3, name: "Станки с ЧПУ" },
   { slug: "bandsaw", img: 4, name: "Ленточнопильные станки" },
   { slug: "extractors", img: 5, name: "Вытяжки" },
   { slug: "edm", img: 6, name: "Электроэрозионные станки" },
];
const id = params.slug;
</script>

<style lang="scss" scoped></style>
