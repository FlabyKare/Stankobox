<template>
   <aside class="menu">
      <div class="menu__wrapper container">
         <ul class="menu__list menu__list_categories">
            <li
               v-for="(item, index) in menuItems"
               :key="index"
               class="menu__list-item"
               @mouseover="
                  activateProductItem1(index);
                  activateProductMenu(index);
               "
               :class="{ active: activeIndex === index }"
            >
               <NuxtLink>{{ item.text }}</NuxtLink>
               <svgArrow v-if="item.hasArrow" />
            </li>
         </ul>

         <ul
            v-if="isProductMenuActive"
            class="menu__list menu__list_products"
            :class="{ menu__list_active: menuListProductsMetal }"
         >
            <li
               v-for="(item, index) in _menuActiveItems"
               :key="index"
               class="menu__list-item menu__list_products-item"
               @mouseover="
                  activateProductItem2(index);
                  activateMenu3(index);
               "
               :class="{ active: activeIndex2 === index }"
            >
               <NuxtLink>{{ item.text }}</NuxtLink>
               <svgArrow v-if="item.hasArrow" />
            </li>
         </ul>

         <ul
            class="menu__list menu__list_metals"
            :class="{
               active:
                  metalProductsActiveIndex &&
                  isProductMetalsActivated &&
                  twentyColumnIsActivated,
            }"
         >
            <li
               v-for="(item, index) in menuActiveItems3"
               :key="index"
               class="menu__list-item menu__list_products-item"
               @mouseover="activateProductItem3(index)"
               :class="{ active: activeIndex3 === index }"
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
   { text: "Вальцовочные станки", hasArrow: false },
   { text: "Листогибочные станки", hasArrow: false },
   { text: "Отбортовочный станок", hasArrow: false },
];

const menuListMetalProducts1ItemsEight = [
   { text: "Фрезерные станки", hasArrow: false },
   { text: "Токарно-фрезерные станки", hasArrow: false },
];

const menuListMetalProducts1ItemsNine = [
   { text: "Трёхроликовые гибочные станки", hasArrow: false },
   { text: "Станки для бездорновой гибки", hasArrow: false },
   { text: "Ручные гибочные станки", hasArrow: false },
];
// Функции для смены цвета ссылок при наведении

const activeIndex = ref(null);
const activeIndex2 = ref(null);
const activeIndex3 = ref(null);

const activateProductItem1 = (index) => {
   activeIndex.value = index;
};
const activateProductItem2 = (index) => {
   activeIndex2.value = index;

   //    while (metalProductsActiveIndex) {
   //       activateMenu3(index);
   //    }
};
const activateProductItem3 = (index) => {
   activeIndex3.value = index;
};

// ====================================================
const menuActiveItems3 = ref([]);
const _menuActiveItems = ref([]);

var metalProductsActiveIndex = ref(false);

const isProductMenuActive = ref(false);

const isProductMetalsActivated = ref(null);
const twentyColumnIsActivated = ref(null);

const activateProductMenu = (index) => {
   isProductMenuActive.value = true;

   switch (index) {
      case 0:
         _menuActiveItems.value = menuListMetalProducts1Items;
         menuListProductsMetal.value = true;

         metalProductsActiveIndex.value = true;
         isProductMetalsActivated.value = true;
         break;
      case 1:
         _menuActiveItems.value = menuActiveItemsTwo;
         menuListProductsMetal.value = true;

         metalProductsActiveIndex.value = false;
         isProductMetalsActivated.value = false;
         twentyColumnIsActivated.value = false;

         break;
      case 2:
         _menuActiveItems.value = menuActiveItemsThree;
         menuListProductsMetal.value = true;

         metalProductsActiveIndex.value = false;
         isProductMetalsActivated.value = false;
         twentyColumnIsActivated.value = false;

         break;
      case 3:
         _menuActiveItems.value = menuActiveItemsFour;
         menuListProductsMetal.value = true;

         metalProductsActiveIndex.value = false;
         isProductMetalsActivated.value = false;
         twentyColumnIsActivated.value = false;

         break;
      case 4:
         _menuActiveItems.value = menuActiveItemsFive;
         menuListProductsMetal.value = true;

         metalProductsActiveIndex.value = false;
         isProductMetalsActivated.value = false;
         twentyColumnIsActivated.value = false;

         break;
      case 5:
         _menuActiveItems.value = menuActiveItemsSix;
         menuListProductsMetal.value = true;

         metalProductsActiveIndex.value = false;
         isProductMetalsActivated.value = false;
         twentyColumnIsActivated.value = false;

         break;
      default:
         _menuActiveItems.value = menuItems[index].submenu || [];
         isProductMetalsActivated.value = false;
         twentyColumnIsActivated.value = false;

         break;
   }
};

const menuListProductsMetal = ref(false);

const activateMenu3 = (index) => {
   if (isProductMetalsActivated.value) {
      // Код для случая, когда isProductMetalsActivated равно true

      switch (index) {
         case 0:
            metalProductsActiveIndex.value = true;
            twentyColumnIsActivated.value = true;

            menuActiveItems3.value = menuListMetalProducts1ItemsOne;
            break;
         case 1:
            metalProductsActiveIndex.value = false;
            twentyColumnIsActivated.value = false;

            //  metalProductsActiveIndex.value = false;
            break;
         case 2:
            metalProductsActiveIndex.value = false;
            twentyColumnIsActivated.value = false;

            break;
         case 3:
            metalProductsActiveIndex.value = true;
            twentyColumnIsActivated.value = true;

            menuActiveItems3.value = menuListMetalProducts1ItemsFour;
            break;
         case 4:
            metalProductsActiveIndex.value = false;
            break;
         case 5:
            metalProductsActiveIndex.value = true;
            twentyColumnIsActivated.value = true;

            menuActiveItems3.value = menuListMetalProducts1ItemsSix;
            break;
         case 6:
            metalProductsActiveIndex.value = true;
            twentyColumnIsActivated.value = true;

            menuActiveItems3.value = menuListMetalProducts1ItemsSeven;
            break;
         case 7:
            metalProductsActiveIndex.value = true;
            twentyColumnIsActivated.value = true;

            menuActiveItems3.value = menuListMetalProducts1ItemsEight;
            break;
         case 8:
            metalProductsActiveIndex.value = true;
            twentyColumnIsActivated.value = true;

            menuActiveItems3.value = menuListMetalProducts1ItemsNine;
            break;
         case 9:
            metalProductsActiveIndex.value = false;
            twentyColumnIsActivated.value = false;

         //   default:
         //      break;
      }
   } else {
      // Код для случая, когда isProductMetalsActivated равно false
      switch (index) {
         case 0:
            metalProductsActiveIndex.value = false;

            break;
         case 1:
            metalProductsActiveIndex.value = false;

            break;
         case 2:
            metalProductsActiveIndex.value = false;

            break;
         case 3:
            metalProductsActiveIndex.value = false;

            break;
         case 4:
            metalProductsActiveIndex.value = false;

            break;
         case 5:
            metalProductsActiveIndex.value = false;

            break;
         case 6:
            metalProductsActiveIndex.value = false;

            break;
         case 7:
            metalProductsActiveIndex.value = false;

            break;
         case 8:
            metalProductsActiveIndex.value = false;

            break;
         case 9:
            metalProductsActiveIndex.value = false;

            break;
         default:
            metalProductsActiveIndex.value = false;

            break;
      }
   }
};

// Деактивировать менюшки
const deactivateProductMenu = () => {
   isProductMenuActive.value = false;
   activeIndex.value = null;
   metalProductsActiveIndex.value = null;
   menuListProductsMetal.value = false;
   // Сбросьте другие ref при необходимости
};

onMounted(() => {
   document.addEventListener("click", handleDocumentClick);
});

onUnmounted(() => {
   document.removeEventListener("click", handleDocumentClick);
});

const handleDocumentClick = (event) => {
   const target = event.target;
   const isInsideMenu = target.closest(
      ".menu__list_categories, .menu__list_products, .menu__list_metals"
   );

   if (!isInsideMenu) {
      deactivateProductMenu();
   }
};
</script>
