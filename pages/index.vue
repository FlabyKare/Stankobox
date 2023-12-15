<template>
   <Contacts />
   <Navigation />
   <hr />
   <Search />

   <main class="main-content">
      <Menu />

      <MobileMenu />

      <!-- <Filters /> -->
      <TestScrollingFilters />

      <Intro />

      <!-- <Benefits /> -->
      <TestScrollingBenefits />

      <!-- <BasicEquipment /> -->
      <TestScrollingBasicEquipment />

      <PromotionalOffers />

      <!-- <Partners /> -->
      <TestScrollingPartners />

      <About />
   </main>
</template>

<script>
export default {
   mounted() {
      // Функция для добавления класса к блоку, если он найден
      const addClassIfPresent = (containerClass, targetClass) => {
         const container = document.querySelector(`.${containerClass}`);
         if (container) {
            const element = container.querySelector(".v-hl-container");
            if (element) {
               element.classList.add(targetClass);
            }
         }
      };

      // Применить функцию для каждого случая
      addClassIfPresent("filters", "filters__list");
      addClassIfPresent("benefits", "benefits__list");
      addClassIfPresent("equipments", "equipments__categories");
      addClassIfPresent("offers", "offers__list");
      addClassIfPresent("partners", "partners__list");

      const body = document.getElementsByTagName("body")[0];
      const mainContent = document.querySelector(".main-content");
      const btnCatalog = document.querySelector(".serach__item-catalog");
      const search = document.querySelector(".search");
      const hiddenBlocks = document.querySelectorAll(".menu-hidden");

      btnCatalog.addEventListener("click", () => {
         btnCatalog.classList.toggle("serach__item-catalog_active");
         mainContent.classList.toggle("main-content_active");
         search.classList.toggle("search_active");
         body.classList.toggle("body_hidden");

         hiddenBlocks.classList.toggle("menu-activated");
      });
   },
};
</script>

<style lang="scss">
// @import "~/assets/css/main.scss";
@media (max-width: 899.98px) {
   .menu {
      display: none !important;
   }
}
@media (max-width: 575.98px) {
   hr {
      display: none;
   }
}
</style>
