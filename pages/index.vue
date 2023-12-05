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

      <!-- <Partners /> -->
      <TestScrollingPartners />

      <About />
   </main>
</template>

<script>
export default {
   mounted() {
      // Найти все элементы с классом "v-hl-container"
      const elements = document.querySelectorAll(".v-hl-container");

      // Добавить классы к каждому элементу
      elements.forEach((element, index) => {
         switch (index) {
            case 0:
               element.classList.add("filters__list");
               break;
            case 1:
               element.classList.add("benefits__list");
               break;
            case 2:
               element.classList.add("equipments__categories");
               break;
            case 3:
               element.classList.add("partners__list");
               break;
            // Добавить другие случаи, если необходимо
         }
      });
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
