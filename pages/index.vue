<template>
   <!-- <Contacts /> -->
   <!-- <Navigation /> -->
   <!-- <hr /> -->
   <!-- <Search /> -->
   <!-- <mainVue /> -->
   <Filters />

   <Intro />

   <Benefits />

   <BasicEquipment />

   <PromotionalOffers />

   <Partners />

   <About />
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

<style lang="scss"></style>
