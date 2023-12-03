<template>
   <Contacts />
   <Navigation />
   <hr />
   <Search />

   <main>
      <Filters />
      <Intro />
      <Benefits />

      <BasicEquipment />
      <Partners />
      <About />
   </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
// @import "~/assets/css/main.scss";

@media (max-width: 575.98px) {
   hr {
      display: none;
   }
}
</style>
