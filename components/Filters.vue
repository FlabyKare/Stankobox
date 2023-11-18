<template>
   <section class="filters container">
      <ul class="filters__list" @wheel.prevent="scrollX" ref="scrollContainer">
         <li class="filters__list-item">Станки по металлу</li>

         <li class="filters__list-item">Станки по дереву</li>

         <li class="filters__list-item">Станки с ЧПУ</li>

         <li class="filters__list-item">Ленточнопильные станки</li>

         <li class="filters__list-item">Вытяжки</li>

         <li class="filters__list-item">Электроэрозионные станки</li>
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

<style lang="scss" scoped></style>
