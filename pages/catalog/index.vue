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
         <NuxtLink class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Menu/1.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">Станки по металлу</p>
         </NuxtLink>

         <NuxtLink class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Menu/2.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">Станки по дереву</p>
         </NuxtLink>

         <NuxtLink class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Menu/3.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">Станки с ЧПУ</p>
         </NuxtLink>

         <NuxtLink class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Menu/4.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">
               Ленточнопильные станки
            </p>
         </NuxtLink>

         <NuxtLink class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Menu/5.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">Вытяжки</p>
         </NuxtLink>

         <NuxtLink class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Menu/6.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">
               Электроэрозионные станки
            </p>
         </NuxtLink>
      </div>
   </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
