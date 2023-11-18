<template>
   <section class="benefits container">
      <ul class="benefits__list" @wheel.prevent="scrollX" ref="scrollContainer">
         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/quality.png"
               alt="Гарантия"
            />

            <p class="benefits__list-item-description">
               На все оборудование гарантия 12 месяцев с даты покупки
            </p>
         </li>

         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/transportation.png"
               alt="Грузоперевозки"
            />

            <p class="benefits__list-item-description">
               Грузоперевозки в любую точку России и СНГ
            </p>
         </li>

         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/equipment.png"
               alt="Все оборудование"
            />

            <p class="benefits__list-item-description">
               Все оборудование можно приобрести в лизинг
            </p>
         </li>

         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/professional-support.png"
               alt="Профессиональная помощь"
            />

            <p class="benefits__list-item-description">
               Профессиональная помощь в подборке оборудования
            </p>
         </li>
      </ul>
   </section>
</template>

<script setup>
import { ref } from "vue";

const scrollContainer = ref(null);

const scrollX = (e) => {
   e.preventDefault();
   const delta = e.deltaY || -e.wheelDelta || e.detail;
   const speed = 1;
   scrollContainer.value.scrollLeft += delta * speed;
};
</script>

<style lang="scss" scoped>
@media (max-width: 1299.98px) {
   .benefits__list {
      overflow-x: auto;

      scroll-behavior: smooth;
    //   white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      width: 100%;
      scrollbar-width: thin; /* для Firefox */
      -ms-overflow-style: none; /* для Internet Explorer и Edge */

      &::-webkit-scrollbar {
         display: none; /* для WebKit (Chrome, Safari) */
      }
   }
}
</style>
