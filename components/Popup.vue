<template>
   <form action="#" class="popup" :class="{ active: popupActive }">
      <div class="popup__wrapper">
         <img
            class="popup__wrapper-close"
            src="/public/img/icons/close.png"
            @click="popupHidden"
            alt=""
         />

         <p class="popup__wrapper-pretitle">
            Остались вопросы или заинтересовались товаром?
         </p>
         <h4 class="popup__wrapper-title">
            Заполните форму и наш специалист свяжется с вами!
         </h4>

         <div class="popup__wrapper-inputs">
            <div class="popup__wrapper-inputs-item">
               <input v-model="name" type="text" id="name" required />
               <label for="name">Имя<span>*</span></label>
            </div>
            <div class="popup__wrapper-inputs-item">
               <input
                  v-model="phone"
                  type="tel"
                  id="phone"
                  required
                  @input="mask"
               />
               <label for="phone">Номер телефона<span>*</span></label>
            </div>
         </div>
      </div>
   </form>
</template>

<script setup>
import { ref } from "vue";

const popupActive = ref(true);
const name = ref("");
const phone = ref("");

function popupHidden() {
   popupActive.value = false;
}

function mask() {
   const matrix = "+7 (___) ___ ____";
   const keyCode = event.keyCode || 0;
   let i = 0;
   const val = phone.value.replace(/\D/g, "");
   let new_value = matrix.replace(/[_\d]/g, (a) => {
      return i < val.length ? val.charAt(i++) || a : a;
   });

   i = new_value.indexOf("_");
   if (i !== -1) {
      i < 5 && (i = 3);
      new_value = new_value.slice(0, i);
   }

   const reg = new RegExp(
      "^" +
         matrix
            .substr(0, phone.value.length)
            .replace(/_+/g, (a) => {
               return "\\d{1," + a.length + "}";
            })
            .replace(/[+()]/g, "\\$&") +
         "$"
   );

   if (
      !reg.test(phone.value) ||
      phone.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
   ) {
      phone.value = new_value;
   }

   if (event.type === "blur" && phone.value.length < 17) {
      phone.value = "";
   }
}
</script>

<style lang="scss" scoped></style>
