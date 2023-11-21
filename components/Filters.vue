<template>
   <section class="filters container">
      <!-- <ul class="filters__list" @wheel.prevent="scrollX" ref="scrollContainer">
         <li class="filters__list-item">Станки по металлу</li>

         <li class="filters__list-item">Станки по дереву</li>

         <li class="filters__list-item">Станки с ЧПУ</li>

         <li class="filters__list-item">Ленточнопильные станки</li>

         <li class="filters__list-item">Вытяжки</li>

         <li class="filters__list-item">Электроэрозионные станки</li>
      </ul> -->

      <ul class="filters__list" @wheel.prevent="scrollX" ref="scrollContainer">
         <li class="filters__list-item">
            <p>Станки по металлу</p>
         </li>
         <li class="filters__list-item">
            <p>Станки по дереву</p>
         </li>
         <li class="filters__list-item">
            <p>Станки с ЧПУ</p>
         </li>
         <li class="filters__list-item">
            <p>Ленточнопильные станки</p>
         </li>
         <li class="filters__list-item">
            <p>Вытяжки</p>
         </li>
         <li class="filters__list-item">
            <p>Электроэрозионные станки</p>
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
@media (min-width: 1220px) {
   .filters__list-item {
      position: relative;

      p {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
      }
   }
}
</style>
