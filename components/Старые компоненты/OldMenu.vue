<template>
   <aside class="menu">
      <div class="menu__wrapper container">
         <ul class="menu__list menu__list_categories">
            <li
               v-for="(item, index) in menuItems"
               :key="index"
               class="menu__list-item"
               @mouseover="activateProductMenu(index)"
               :class="{ active: isProductMenuActive && activeIndex === index }"
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
               v-for="(item, index) in _menuActiveItems"
               :key="index"
               class="menu__list-item menu__list_products-item"
               @mouseover="activateProductItem(index)"
               :class="{ active: productsActiveIndex === index }"
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

const menuActiveItemsTwo = [
   { text: "Токарные станки" },
   { text: "Шлифовальные станки по дереву" },
   { text: "Вертикальные ленточные пилы" },
   { text: "Форматно-раскроечные станки" },
   { text: "Фрезерные станки" },
   { text: "Фуговально-рейсмусовые станки" },
   { text: "Рейсмусовые станки" },
   { text: "Многофункциональные станки" },
   { text: "Кромкооблицовочные станки и аксесуары" },
   { text: "Пилы настольные" },
   { text: "Торцовочные пилы" },
];

const menuActiveItemsThree = [
   { text: "Токарные станки с ЧПУ REALREZ" },
   { text: "Токарные станки с ЧПУ с наклонной станиной" },
   { text: "Фрезерные обрабатывающие центры CORMAK" },
   { text: "Фрезерные обрабатывающие центры RealRez" },
];

const menuActiveItemsFour = [
   { text: "Ручные ленточнопильные станки" },
   { text: "Полуавтоматические ленточнопильные станки" },
   { text: "Автоматические ленточнопильные станки" },
   { text: "Вертикальные ленточнопильные станки" },
   { text: "Ленточные пилы Flamme" },
   { text: "Ленточные пилы Realrez" },
   { text: "Рольганги" },
   { text: "Ленточные пилы,полотна к станкам" },
];
const menuActiveItemsFive = [
   { text: "Вытяжки для деревянной стружки" },
   { text: "Вытяжки для металлической стружки" },
   { text: "Аксессуары к вытяжкам" },
];

const menuActiveItemsSix = [
   { text: "Электроэрозионные вырезные станки" },
   { text: "Электроэрозионные сверлильные станки" },
   { text: "Электроэрозионные координатно-прошивные станки" },
   { text: "Расходные материалы" },
];





const isProductMenuActive = ref(false);
const activeIndex = ref(null);

const productsActiveIndex = ref(null);
const _menuActiveItems = ref(menuActiveItems);

const activateProductMenu = (index) => {
   isProductMenuActive.value = true;
   activeIndex.value = index;

   switch (index) {
      case 1:
         _menuActiveItems.value = menuActiveItemsTwo;
         break;
      case 2:
         _menuActiveItems.value = menuActiveItemsThree;
         break;
      case 3:
         _menuActiveItems.value = menuActiveItemsFour;
         break;
      case 4:
         _menuActiveItems.value = menuActiveItemsFive;
         break;
      case 5:
         _menuActiveItems.value = menuActiveItemsSix;
         break;
      default:
         _menuActiveItems.value = menuActiveItems;
         break;
   }
};

const activateProductItem = (index) => {
   productsActiveIndex.value = index;
};

const deactivateProductMenu = () => {
   isProductMenuActive.value = false;
   activeIndex.value = null;
   productsActiveIndex.value = null;
};

const handleDocumentClick = (event) => {
   const target = event.target;
   const isInsideMenu = target.closest(
      ".menu__list_categories, .menu__list_products"
   );

   if (!isInsideMenu) {
      deactivateProductMenu();
   }
};

onMounted(() => {
   document.addEventListener("click", handleDocumentClick);
});

onUnmounted(() => {
   document.removeEventListener("click", handleDocumentClick);
});
</script>
