<template>
   <Contacts />
   <Navigation />
   <hr />
   <Search />

   <main>
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
   },
};
</script>

<style lang="scss">
// @import "~/assets/css/main.scss";

@media (max-width: 575.98px) {
   hr {
      display: none;
   }
}
</style>
