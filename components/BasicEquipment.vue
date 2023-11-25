<template>
   <section class="equipments container">
      <h2 class="equipments__title defolt-title">Основное оборудование</h2>

      <ul
         class="equipments__categories"
         @wheel.prevent="scrollX"
         ref="scrollContainer"
      >
         <!-- <li class="equipments__categories-item">
            <img class="equipments__categories-item-img" src="~/assets/img/Equipments/" alt="" />

            <p class="equipments__categories-item-text"></p>
         </li> -->
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

const scrollX = (e) => {
   e.preventDefault();
   const delta = e.deltaY || -e.wheelDelta || e.detail;
   const speed = 4;
   scrollContainer.value.scrollLeft += delta * speed;
};
</script>

<style lang="scss" scoped></style>
