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

   min-width: fit-content;

   text-align: center;

   border-radius: 4px;
   border: 1.5px solid #e31335;

   color: #fff;
   background: #e31335;

   min-height: 48px;
   height: fit-content;

   &:hover {
      background: transparent;
      opacity: 1;
      color: #e31335;
   }
}
</style>
