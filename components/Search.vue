<template>
   <section class="search container">
      <a class="search__item search__item-logo">
         <img class="search__item-logo-img" src="~/assets/img/logo.png" />
      </a>

      <div class="serach__item serach__item-flex">
         <button class="serach__item-catalog" @click="isActive = !isActive">
            <ul
               class="serach__item-catalog-burger"
               :class="{ 'serach__item-catalog-burger_active': isActive }"
            >
               <li></li>
               <li></li>
               <li></li>
            </ul>

            <p class="serach__item-catalog-text">Каталог</p>
         </button>

         <div class="serach__item-input-wrapper">
            <input
               class="serach__item-input"
               id="search-input"
               type="text"
               placeholder="Поиск товара"
            />
            <label for="search-input" class="serach__item-input-lable">
               <svg
                  class="serach__item-input_icon"
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                     stroke="#A8A8A8"
                     stroke-width="1.5"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </label>
         </div>
      </div>

      <Button class="search__button">Подобрать станок</Button>
   </section>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);
</script>

<style lang="scss" scoped>
.serach__item-flex {
   height: 48px;

   .serach__item-catalog,
   .serach__item-input-wrapper,
   .serach__item-input {
      height: 100%;
   }

   @media (max-width: 575.98px) {
      height: 40px;

      .serach__item-input-lable {
         svg {
            width: 18px !important;
            height: 18px !important;
         }
      }
   }
}
.search__button {
   font-size: 14px;

   max-width: 184px;
   height: 48px;
}
</style>
