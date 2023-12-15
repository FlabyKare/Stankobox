<template>
   <aside class="menu-mobile">
      <div class="menu-mobile__container">
         <div
            class="menu-mobile__container-title"
            @click="activateMenuTitle()"
            :class="{
               'menu-mobile__container-title_active':
                  menuMobileContainerTitleActive,
            }"
         >
            <div class="menu-mobile__container-title-items">
               <svg
                  class="menu-mobile__container-title-items-arrow-left"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <path
                     d="M12.5 15L7.5 10L12.5 5"
                     stroke="white"
                     stroke-width="1.5"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>

               <h4 class="menu-mobile__container-title-items-name">
                  Каталог товаров
               </h4>

               <svg
                  class="menu-mobile__container-title-items-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <path
                     d="M7.5 15L12.5 10L7.5 5"
                     stroke="white"
                     stroke-width="1.5"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </div>
         </div>

         <div class="menu-mobile__container-pages">
            <ul class="menu-mobile__list">
               <li
                  v-for="(item, index) in menuMobileLinks"
                  :key="index"
                  class="menu-mobile__list-item"
               >
                  <NuxtLink to="google.com">{{ item.text }}</NuxtLink>
               </li>
            </ul>

            <hr />

            <ul class="menu-mobile__list">
               <li
                  v-for="(item, index) in menuMobileAboutLinks"
                  :key="index"
                  class="menu-mobile__list-item"
               >
                  <NuxtLink>{{ item.text }}</NuxtLink>
               </li>
            </ul>
         </div>
      </div>
   </aside>
</template>

<script>
import { ref } from "vue";

export default {
   data() {
      return {
         menuMobileContainerTitleActive: ref(false),
         menuMobileLinks: [
            { text: "Оплата/Лизинг" },
            { text: "Доставка" },
            { text: "Контакты" },
            { text: "Сервисное обслуживание" },
            { text: "Юридическим лицам" },
         ],
         menuMobileAboutLinks: [
            { text: "О компании" },
            { text: "Бренды" },
            { text: "Сертификаты" },
         ],
      };
   },
   methods: {
      activateMenuTitle() {
         this.menuMobileContainerTitleActive = true;
      },
      deactivateMenuTitle() {
         this.menuMobileContainerTitleActive = false;
      },
   },
};
</script>

<style lang="scss" scoped></style>
