<template>
   <nav class="navigation container">
      <!-- <NuxtLink class="navigation__link">О компании</NuxtLink> -->
      <NuxtLink class="navigation__link" to="/catalog/">О компании</NuxtLink>

      <NuxtLink class="navigation__link">Оплата/Лизинг</NuxtLink>
      <NuxtLink class="navigation__link">Доставка</NuxtLink>
      <NuxtLink class="navigation__link">Контакты</NuxtLink>
      <NuxtLink class="navigation__link">Бренды</NuxtLink>
      <NuxtLink class="navigation__link">Сертификаты</NuxtLink>
      <NuxtLink class="navigation__link">Сервисное обслуживание</NuxtLink>
      <NuxtLink class="navigation__link">Юридическим лицам</NuxtLink>
   </nav>

   <!-- <nav class="navigation container">
      <NuxtLink class="navigation__link" @click="scrollToSection('about')"
         >О компании</NuxtLink
      >
      <NuxtLink class="navigation__link" @click="scrollToSection('footer')"
         >Оплата/Лизинг</NuxtLink
      >
      <NuxtLink class="navigation__link" @click="scrollToSection('footer')"
         >Доставка</NuxtLink
      >
      <NuxtLink class="navigation__link" @click="scrollToSection('footer')"
         >Контакты</NuxtLink
      >
      <NuxtLink class="navigation__link" @click="scrollToSection('brands')"
         >Бренды</NuxtLink
      >
      <NuxtLink class="navigation__link" @click="scrollToSection('footer')"
         >Сертификаты</NuxtLink
      >
      <NuxtLink class="navigation__link" @click="scrollToSection('footer')"
         >Сервисное обслуживание</NuxtLink
      >
      <NuxtLink class="navigation__link" @click="scrollToSection('footer')"
         >Юридическим лицам</NuxtLink
      >
   </nav> -->
</template>

<script setup></script>

<!-- <script setup>
const scrollToSection = (sectionId) => {
   const section = document.getElementById(sectionId);
   if (section) {
      section.scrollIntoView({ behavior: "smooth" });
   }
};
</script> -->

<style lang="scss" scoped></style>
