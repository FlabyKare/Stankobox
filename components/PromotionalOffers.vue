<template>
   <section
      @mousedown.left="onMouseDown"
      v-if="cards.length"
      class="offers container"
   >
      <h2 class="equipments__title little-defolt-title">
         Акционные предложения
      </h2>

      <VueHorizontal
         ref="horizontal"
         class="horizontal offers__list_desktop"
         snap="none"
         :button="false"
         @scroll="onScroll"
      >
         <div v-for="card in cards" :key="card.id" class="offers__list-item">
            <span class="offers__list-item-discount"
               >-{{ card.discount }}%</span
            >

            <!-- Слайдер с изображениями товара -->
            <div class="offers__list-item-slider">
               <!-- <img
                   v-for="image in card.images"
                   :src="image"
                   :key="image"
                   alt="Product Image"
                /> -->

               <swiper
                  :pagination="{
                     dynamicBullets: true,
                  }"
                  :modules="modules"
                  class="mySwiper"
               >
                  <swiper-slide v-for="image in card.images">
                     <img
                        src="~/assets/img/Offers/test2.png"
                        :key="image"
                        alt="Product Image"
                     />
                  </swiper-slide>
               </swiper>
            </div>

            <!-- Название товара -->
            <NuxtLink
               to="https://google.com"
               class="offers__list-item-title little-defolt-title"
               ondragstart="return false;"
               >{{ card.name }}</NuxtLink
            >

            <!-- Старая цена (перечеркнутая) -->
            <span class="offers__list-item-old-price">{{ card.oldPrice }}</span>

            <!-- Актуальная цена -->
            <span class="offers__list-item-current-price">{{
               card.currentPrice
            }}</span>
         </div>
      </VueHorizontal>

      <div class="offers__list_mobile">
         <ul class="offers__list">
            <li
               v-for="(card, index) in visibleCards"
               :key="card.id"
               class="offers__list-item"
            >
               <span class="offers__list-item-discount"
                  >-{{ card.discount }}%</span
               >
               <div class="offers__list-item-slider">
                  <swiper
                     :pagination="{ dynamicBullets: true }"
                     :modules="modules"
                     class="mySwiper"
                  >
                     <swiper-slide v-for="image in card.images" :key="image">
                        <img
                           src="~/assets/img/Offers/test2.png"
                           :alt="`Product Image ${index}`"
                        />
                     </swiper-slide>
                  </swiper>
               </div>
               <NuxtLink
                  :to="`https://google.com/${card.id}`"
                  class="offers__list-item-title little-defolt-title"
               >
                  {{ card.name }}
               </NuxtLink>
               <span class="offers__list-item-old-price">{{
                  card.oldPrice
               }}</span>
               <span class="offers__list-item-current-price">{{
                  card.currentPrice
               }}</span>
            </li>
         </ul>
         <Button
            class="offers__list-show-btn"
            :class="{ 'offers__list-show-btn_active': showAll }"
            @click="toggleShowAll"
         >
            {{ showAll ? "Скрыть" : "Показать все" }}
         </Button>
      </div>
   </section>
   <div v-else>
      <p>No cards available</p>
   </div>
</template>
<script>
import VueHorizontal from "vue-horizontal";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default {
   data() {
      return {
         left: 0,
         originX: 0,
         originLeft: 0,
         shouldAddClass: true,
         showAll: false,
         cards: [
            {
               id: 1,
               discount: "13",
               name: "Ленточнопильный станок CORMAK G5013W",
               images: ["test", "test2", "test3", "test3", "test3", "test3"],
               oldPrice: "1 223 681 ₽",
               currentPrice: "1 092 573 ₽ ",
            },

            {
               id: 1,
               discount: "13",
               name: "Ленточнопильный станок CORMAK G5013W",
               images: ["test", "test2", "test3", "test3", "test3", "test3"],
               oldPrice: "1 223 681 ₽",
               currentPrice: "1 092 573 ₽ ",
            },
            {
               id: 1,
               discount: "13",
               name: "Ленточнопильный станок CORMAK G5013W",
               images: ["test", "test2", "test3", "test3", "test3", "test3"],
               oldPrice: "1 223 681 ₽",
               currentPrice: "1 092 573 ₽ ",
            },
            {
               id: 1,
               discount: "13",
               name: "Ленточнопильный станок CORMAK G5013W",
               images: ["test", "test2", "test3", "test3", "test3", "test3"],
               oldPrice: "1 223 681 ₽",
               currentPrice: "1 092 573 ₽ ",
            },
            {
               id: 1,
               discount: "13",
               name: "Ленточнопильный станок CORMAK G5013W",
               images: ["test", "test2", "test3", "test3", "test3", "test3"],
               oldPrice: "1 223 681 ₽",
               currentPrice: "1 092 573 ₽ ",
            },
            {
               id: 1,
               discount: "13",
               name: "Ленточнопильный станок CORMAK G5013W",
               images: ["test", "test2", "test3", "test3", "test3", "test3"],
               oldPrice: "1 223 681 ₽",
               currentPrice: "1 092 573 ₽ ",
            },
            {
               id: 1,
               discount: "13",
               name: "Ленточнопильный станок CORMAK G5013W",
               images: ["test", "test2", "test3", "test3", "test3", "test3"],
               oldPrice: "1 223 681 ₽",
               currentPrice: "1 092 573 ₽ ",
            },
            // Add other cards with unique IDs
         ],
      };
   },

   computed: {
      visibleCards() {
         return this.showAll ? this.cards : this.cards.slice(0, 4);
      },
   },
   beforeUnmount() {
      this.onMouseUp();
   },
   methods: {
      toggleShowAll() {
         this.showAll = !this.showAll;
      },

      onScroll({ left }) {
         this.left = left;
      },
      onMouseDown(e) {
         this.originX = e.pageX;
         this.originLeft = this.left;

         window.addEventListener("mouseup", this.onMouseUp);
         window.addEventListener("mousemove", this.onMouseMove);
      },
      onMouseUp() {
         window.removeEventListener("mouseup", this.onMouseUp);
         window.removeEventListener("mousemove", this.onMouseMove);
      },
      onMouseMove(e) {
         this.$refs.horizontal.scrollToLeft(
            this.originLeft - (e.pageX - this.originX),
            "auto"
         );
      },
   },
   setup() {
      return {
         modules: [Pagination],
         spaceBetween: 50,
      };
   },
   components: {
      VueHorizontal,
      Swiper,
      SwiperSlide,
   },
};
</script>

<style lang="scss" scoped>
.swiper {
   width: 100%;
   height: 112%;

   * {
      user-select: none !important;
      pointer-events: all !important;
   }
}

.swiper-slide {
   text-align: center;
   font-size: 18px;
   background: #fff;

   // Center slide text vertically
   display: flex;
   justify-content: center;
   align-items: center;

   padding-top: 20px;
}

.swiper-slide img {
   display: block;
   width: 100%;
   height: 100%;
   object-fit: cover;
}
</style>
