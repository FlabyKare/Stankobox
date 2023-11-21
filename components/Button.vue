<template>
   <button type="button" class="customBtn">
      <slot />
   </button>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/css/common/fonts";

button {
   text-align: center;
   font-family: $TTNormsMedium;
   font-size: 12px;
   font-style: normal;
   font-weight: 500;
   line-height: 16px; /* 133.333% */
   letter-spacing: 0.048px;

   padding: 12px 24px;

   
   text-align: center;
   
   border-radius: 4px;
   border: 1.5px solid $red;
   
   color: #fff;
   //    background: $red;
   background: transparent;
   
   min-width: fit-content;
   //    min-height: 40px;
   //    height: fit-content;
   color: $red;

   &:hover {
      color: $red;
      border: 1.5px solid $red;

      * {
         color: $red;
      }
   }
}
</style>
