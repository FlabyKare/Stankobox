<template>
   <section class="benefits container">
      <ul class="benefits__list" @wheel.prevent="scrollX" ref="scrollContainer">
         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/quality.svg"
               alt="Гарантия"
            />

            <p class="benefits__list-item-description">
               На все оборудование гарантия 12 месяцев с даты покупки
            </p>
         </li>

         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/transportation.svg"
               alt="Грузоперевозки"
            />

            <p class="benefits__list-item-description">
               Грузоперевозки в любую точку России и СНГ
            </p>
         </li>

         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/equipment.svg"
               alt="Все оборудование"
            />

            <p class="benefits__list-item-description">
               Все оборудование можно приобрести в лизинг
            </p>
         </li>

         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/professional-support.svg"
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

</style>
