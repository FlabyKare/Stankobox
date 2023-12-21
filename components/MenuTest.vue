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
               <svgArrow v-if="item.hasArrow" />
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
               @mouseover="
                  () => {
                     activateProductItem(index);
                     activateMenu3(index);
                  }
               "
               :class="{ active: productsActiveIndex === index }"
            >
               <NuxtLink>{{ item.text }}</NuxtLink>
               <svgArrow v-if="item.hasArrow" />
            </li>
         </ul>

         <ul
            class="menu__list menu__list_metals"
            :class="{ active: menuListProductsMetal }"
            ref="menuListProductsMetal"
         >
            <li
               v-for="(item, index) in menuActiveItems3"
               :key="index"
               class="menu__list-item menu__list_products-item"
               @mouseover="activateProductItem(index)"
               :class="{ active: productsActiveIndex === index }"
            >
               <NuxtLink>{{ item.text }}</NuxtLink>
               <svgArrow v-if="item.hasArrow" />
            </li>
         </ul>
      </div>
   </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuItems = [
   { text: "Станки по металлу", hasArrow: true },
   { text: "Станки по дереву", hasArrow: true },
   { text: "Станки с ЧПУ", hasArrow: true },
   { text: "Ленточнопильные станки", hasArrow: true },
   { text: "Вытяжки для стружки", hasArrow: true },
   { text: "Электроэрозионные станки", hasArrow: true },
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

// Вложенные листы
const menuListMetalProducts1Items = [
   { text: "Ленточнопильные станки", hasArrow: true },
   { text: "Токарные универсальные станки", hasArrow: false },
   { text: "Заточные станки", hasArrow: false },
   { text: "Шлифовальные станки", hasArrow: true },
   { text: "Резьбонарезные манипуляторы", hasArrow: false },
   { text: "Сверлильные станки", hasArrow: true },
   { text: "Обработка листового металла", hasArrow: true },
   { text: "Фрезерные станки", hasArrow: true },
   { text: "Гибочные станки для труб и профилей", hasArrow: true },
   { text: "Дисковые пилы", hasArrow: false },
];

const menuListMetalProducts1ItemsOne = [
   { text: "Ручные ленточнопильные станки", hasArrow: false },
   { text: "Полуавтоматические ленточнопильные станки", hasArrow: false },
   { text: "Автоматические ленточнопильные станки", hasArrow: false },
   { text: "Вертикальные ленточнопильные станки", hasArrow: false },
];

const menuListMetalProducts1ItemsFour = [
   { text: "Ленточные шлифовальные станки ", hasArrow: false },
   { text: "Плоскошлифовальные станки", hasArrow: false },
];

const menuListMetalProducts1ItemsSix = [
   { text: "Вертикально-сверлильные станки", hasArrow: false },
   { text: "Радиально-сверлильные станки", hasArrow: false },
   { text: "Сверлильно-фрезерные станки", hasArrow: false },
];

const menuListMetalProducts1ItemsSeven = [
   { text: "Ручные ленточнопильные станки", hasArrow: false },
   { text: "Полуавтоматические ленточнопильные станки", hasArrow: false },
   { text: "Автоматические ленточнопильные станки", hasArrow: false },
   { text: "Вертикальные ленточнопильные станки", hasArrow: false },
];

const menuListMetalProducts1ItemsEight = [
   { text: "Ручные ленточнопильные станки", hasArrow: false },
   { text: "Полуавтоматические ленточнопильные станки", hasArrow: false },
   { text: "Автоматические ленточнопильные станки", hasArrow: false },
   { text: "Вертикальные ленточнопильные станки", hasArrow: false },
];

const menuListMetalProducts1ItemsNine = [
   { text: "Ручные ленточнопильные станки", hasArrow: false },
   { text: "Полуавтоматические ленточнопильные станки", hasArrow: false },
   { text: "Автоматические ленточнопильные станки", hasArrow: false },
   { text: "Вертикальные ленточнопильные станки", hasArrow: false },
];

const menuActiveItems3 = ref([]);

const isProductMenuActive = ref(false);
const activeIndex = ref(null);
const productsActiveIndex = ref(null);
const _menuActiveItems = ref([]);

const menuListMetalProducts1Ref = ref(false);

const activateProductMenu = (index) => {
   isProductMenuActive.value = true;
   activeIndex.value = index;

   switch (index) {
      case 0:
         _menuActiveItems.value = menuListMetalProducts1Items;
         menuListMetalProducts1Ref.value = true;
         break;
      case 1:
         _menuActiveItems.value = menuActiveItemsTwo;
         menuListMetalProducts1Ref.value = null;
         break;
      case 2:
         _menuActiveItems.value = menuActiveItemsThree;
         menuListMetalProducts1Ref.value = null;
         break;
      case 3:
         _menuActiveItems.value = menuActiveItemsFour;
         menuListMetalProducts1Ref.value = null;
         break;
      case 4:
         _menuActiveItems.value = menuActiveItemsFive;
         menuListMetalProducts1Ref.value = null;
         break;
      case 5:
         _menuActiveItems.value = menuActiveItemsSix;
         menuListMetalProducts1Ref.value = null;
         break;
      default:
         _menuActiveItems.value = menuItems[index].submenu || [];
         menuListMetalProducts1Ref.value = null;

         break;
   }
};

const menuListProductsMetal = ref(false);

const activateMenu3 = (index) => {
   switch (index) {
      case 0:
         menuActiveItems3.value = menuListMetalProducts1ItemsOne;
         menuListProductsMetal.value = true;
         activeIndex.value = index;
         break;

      case 3:
         menuActiveItems3.value = menuListMetalProducts1ItemsFour;
         menuListProductsMetal.value = true;
         activeIndex.value = index;
         break;
      case 5:
         menuActiveItems3.value = menuListMetalProducts1ItemsSix;
         menuListProductsMetal.value = true;
         activeIndex.value = index;
         break;
      case 6:
         menuActiveItems3.value = menuListMetalProducts1ItemsSeven;
         menuListProductsMetal.value = true;
         activeIndex.value = index;
         break;
      case 7:
         menuActiveItems3.value = menuListMetalProducts1ItemsEight;
         menuListProductsMetal.value = true;
         activeIndex.value = index;
         break;
      case 8:
         menuActiveItems3.value = menuListMetalProducts1ItemsNine;
         menuListProductsMetal.value = false;
         activeIndex.value = index;
         break;

      default:
         break;
   }
};

// Деактивировать менюшки
const deactivateProductMenu = () => {
   isProductMenuActive.value = false;
   activeIndex.value = null;
   productsActiveIndex.value = null;
   menuListProductsMetal.value = false;
   // Сбросьте другие ref при необходимости
};
const activateProductItem = (index) => {
   productsActiveIndex.value = index;
};
const handleDocumentClick = (event) => {
   const target = event.target;
   const isInsideMenu = target.closest(
      ".menu__list_categories, .menu__list_products, .menu__list_metals"
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
