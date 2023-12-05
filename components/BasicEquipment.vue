<template>
   <section class="equipments container">
      <h2 class="equipments__title defolt-title">Основное оборудование</h2>
      <ul
         class="equipments__categories"
         @mousedown.prevent="onMouseDown"
         @mousemove.prevent="onMouseMove"
         @mouseup.prevent="onMouseUp"
         @mouseleave.prevent="onMouseUp"
         ref="scrollContainer"
      >
         <li class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Equipments/1.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">Станки по металлу</p>
         </li>

         <li class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Equipments/2.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">
               Станки по металлу с ЧПУ
            </p>
         </li>

         <li class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Equipments/3.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">
               Ленточнопильные станки
            </p>
         </li>

         <li class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Equipments/4.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">
               Электроэрозионные станки
            </p>
         </li>

         <li class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Equipments/4.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">
               Электроэрозионные станки
            </p>
         </li>

         <li class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Equipments/4.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">
               Электроэрозионные станки
            </p>
         </li>

         <li class="equipments__categories-item">
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  src="~/assets/img/Equipments/4.png"
                  alt=""
               />
            </div>

            <p class="equipments__categories-item-text">
               Электроэрозионные станки
            </p>
         </li>
      </ul>
   </section>
</template>

<script setup>
import { ref } from "vue";

const scrollContainer = ref(null);
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

const onMouseMove = (e) => {
   if (isDragging) {
      const x = e.clientX;
      const walk = (x - startX) * 2;
      scrollContainer.value.scrollLeft = scrollLeft - walk;
   }
};

const onMouseDown = (e) => {
   isDragging = true;
   startX = e.clientX;
   scrollLeft = scrollContainer.value.scrollLeft;
   scrollContainer.value.addEventListener("mouseup", onMouseUp);
   scrollContainer.value.addEventListener("mousemove", onMouseMove);
};

const onMouseUp = () => {
   isDragging = false;
   scrollContainer.value.removeEventListener("mouseup", onMouseUp);
   scrollContainer.value.removeEventListener("mousemove", onMouseMove);
};
</script>

<style lang="scss" scoped></style>
