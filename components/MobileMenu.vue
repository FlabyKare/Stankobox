<template>
   <aside
      class="menu-mobile"
      :class="{
         'menu-mobile__container-title_active': menuMobileContainerTitleActive,
      }"
   >
      <div class="menu-mobile__container menu-mobile__container_pages">
         <div class="menu-mobile__container-title" @click="toggleMenuTitle()">
            <div class="menu-mobile__container-title-items">
               <!-- <svg
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
               </svg> -->

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

      <div class="menu-mobile__container menu-mobile__container_goods">
         <div class="menu-mobile__container-title" @click="toggleMenuTitle()">
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
            </div>
         </div>

         <div class="menu-mobile__container-goods">
            <ul class="menu-mobile__container-goods-list menu-mobile__list">
               <li
                  v-for="(item, index) in menuMobileGoodsCategories"
                  :key="index"
                  class="menu-mobile__container-goods-list-item menu-mobile__list-item"
                  :class="{
                     'menu-mobile__container-goods-list-item_active':
                        item.active,
                  }"
                  @click="toggleActive(item)"
               >
                  <div class="menu-mobile__container-goods-list-item-title">
                     <div
                        class="menu-mobile__container-goods-list-item-title-name"
                     >
                        <img
                           class="menu-mobile__container-goods-list-item-title-name-img"
                           src="~/assets/img/Menu/1.png"
                           alt=""
                        />
                        <h4>{{ item.name }}</h4>
                     </div>

                     <svg
                        class="menu-mobile__container-goods-list-item-title-name-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                     >
                        <path
                           d="M5 7.5L10 12.5L15 7.5"
                           stroke="#101010"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                  </div>

                  <!-- <NuxtLink to="google.com">{{ item.text }}</NuxtLink> -->

                  <div class="menu-mobile__container-goods-links">
                     <NuxtLink
                        class="menu-mobile__container-goods-links-text"
                        v-for="(link, linkIndex) in item.link"
                        :key="linkIndex"
                     >
                        {{ link }}
                     </NuxtLink>
                  </div>
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

         menuMobileGoodsCategories: [
            {
               name: "Станки по металлу",
               link: [
                  "Все станки",
                  "Ленточнопильные станки",
                  "Токарные универсальные станки",
                  "Заточные станки",
                  "Шлифовальные станки",
                  "Фрезерные станки ",
               ],
            },
            {
               name: "Станки по дереву",
               link: [
                  "Все станки",
                  "Ленточнопильные станки",
                  "Токарные универсальные станки",
                  "Заточные станки",
                  "Шлифовальные станки",
                  "Фрезерные станки ",
               ],
            },
            {
               name: "Станки с ЧПУ",
               link: [
                  "Все станки",
                  "Ленточнопильные станки",
                  "Токарные универсальные станки",
                  "Заточные станки",
                  "Шлифовальные станки",
                  "Фрезерные станки ",
               ],
            },
            {
               name: "Ленточнопильные станки",
               link: [
                  "Все станки",
                  "Ленточнопильные станки",
                  "Токарные универсальные станки",
                  "Заточные станки",
                  "Шлифовальные станки",
                  "Фрезерные станки ",
               ],
            },
            {
               name: "Вытяжки",
               link: [
                  "Все станки",
                  "Ленточнопильные станки",
                  "Токарные универсальные станки",
                  "Заточные станки",
                  "Шлифовальные станки",
                  "Фрезерные станки ",
               ],
            },
            {
               name: "Электроэрозионные станки",
               link: [
                  "Все станки",
                  "Ленточнопильные станки",
                  "Токарные универсальные станки",
                  "Заточные станки",
                  "Шлифовальные станки",
                  "Фрезерные станки ",
               ],
            },
         ],
      };
   },
   methods: {
      toggleMenuTitle() {
         this.menuMobileContainerTitleActive =
            !this.menuMobileContainerTitleActive;
      },

      toggleActive(item) {
         item.active = !item.active;
      },
   },
};
</script>

<style lang="scss" scoped></style>
