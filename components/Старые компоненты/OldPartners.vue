<template>
   <section class="partners container">
      <h2 class="partners__title little-defolt-title">Наши партнеры</h2>

      <ul class="partners__list" @wheel.prevent="scrollX" ref="scrollContainer">
         <!-- <li class="partners__list-item">
            <img src="~/assets/img/Partners/.png" alt="">
        </li> -->

         <li class="partners__list-item">
            <img
               class="partners__list-item-img partners__list-item-img_1"
               src="~/assets/img/Partners/1.png"
               alt=""
            />
         </li>

         <li class="partners__list-item">
            <img
               class="partners__list-item-img partners__list-item-img_2"
               src="~/assets/img/Partners/2.png"
               alt=""
            />
         </li>

         <li class="partners__list-item">
            <img
               class="partners__list-item-img partners__list-item-img_3"
               src="~/assets/img/Partners/3.png"
               alt=""
            />
         </li>

         <li class="partners__list-item">
            <img
               class="partners__list-item-img partners__list-item-img_4"
               src="~/assets/img/Partners/4.png"
               alt=""
            />
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
   const speed = 4;
   scrollContainer.value.scrollLeft += delta * speed;
};
</script>

<style lang="scss" scoped></style>
