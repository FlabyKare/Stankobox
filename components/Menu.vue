<template>
   <aside class="menu">
      <div class="menu__wrapper container">
         <ul class="menu__list menu__list_categories">
            <li
               v-for="(item, index) in menuItems"
               :key="index"
               class="menu__list-item"
               @mouseover="activateProductMenu"
            >
               <NuxtLink>{{ item.text }}</NuxtLink>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <path
                     d="M7.5 15L12.5 10L7.5 5"
                     stroke="#828282"
                     stroke-width="1.5"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </li>
         </ul>

         <ul
            class="menu__list menu__list_products"
            :class="{ menu__list_active: isProductMenuActive }"
         >
            <li
               v-for="(item, index) in menuActiveItems"
               :key="index"
               class="menu__list-item"
            >
               <NuxtLink>{{ item.text }}</NuxtLink>
            </li>
         </ul>
      </div>
   </aside>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuItems = [
   { text: "Станки по металлу" },
   { text: "Станки по дереву" },
   { text: "Станки с ЧПУ" },
   { text: "Ленточнопильные станки" },
   { text: "Вытяжки для стружки" },
   { text: "Электроэрозионные станки" },
];

const menuActiveItems = [
   { text: "Ручные станки" },
   { text: "Полуавтоматические станки" },
   { text: "Автоматические станки" },
   { text: "Вертикальные станки" },
   { text: "Посмотреть все станки" },
];

const isProductMenuActive = ref(false);

function activateProductMenu() {
   isProductMenuActive.value = true;
}

function deactivateProductMenu() {
   isProductMenuActive.value = false;
}

// Add event listener on document click to deactivate menu
function handleDocumentClick(event) {
   const target = event.target;
   const isInsideMenu = target.closest(
      ".menu__list_categories, .menu__list_products"
   );

   if (!isInsideMenu) {
      deactivateProductMenu();
   }
}

// Mount and unmount event listeners
onMounted(() => {
   document.addEventListener("click", handleDocumentClick);
});

onUnmounted(() => {
   document.removeEventListener("click", handleDocumentClick);
});
</script>

<style lang="scss" scoped></style>
