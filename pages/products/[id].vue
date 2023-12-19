<template>
   <section class="good-page container">
      <!-- <ul class="good-page breadcrumbs">
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink to="/">Главная</NuxtLink>
         </li>
         <span class="good-page__link-divider breadcrumbs__link-divider"
            >•</span
         >
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink to="/catalog">Каталог</NuxtLink>
         </li>

         <span class="good-page__link-divider breadcrumbs__link-divider"
            >•</span
         >
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink>{{ id }}</NuxtLink>
         </li>
      </ul> -->

      <ul class="good-page breadcrumbs">
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink to="/">Главная</NuxtLink>
         </li>
         <span class="good-page__link-divider breadcrumbs__link-divider"
            >•</span
         >
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink to="/catalog">Каталог</NuxtLink>
         </li>
         <span class="good-page__link-divider breadcrumbs__link-divider"
            >•</span
         >

         <template v-if="categories && id">
            <li
               v-for="(category, index) in categories"
               :key="index"
               class="good-page__link breadcrumbs__link"
            >
               <NuxtLink :to="`/catalog/${category.slug}`">{{
                  category.name
               }}</NuxtLink>
               <span
                  v-if="index < categories.length - 1"
                  class="good-page__link-divider breadcrumbs__link-divider"
                  >•</span
               >
            </li>
            <span class="good-page__link-divider breadcrumbs__link-divider"
               >•</span
            >
            <li class="good-page__link breadcrumbs__link">
               <NuxtLink>{{ id }}</NuxtLink>
            </li>
         </template>
      </ul>
      <h3 class="good-page__title page-title">{{ id }}</h3>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
   </section>
</template>

<script setup>
import { inject } from "vue";

const categories = inject("categories", []);
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
