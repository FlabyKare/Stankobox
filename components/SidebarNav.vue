<template>
   <section class="menu">
      <aside
         class="menu__wrapper container"
         id="Sidebar Navigation"
         @keydown="handleKeyPress"
      >
         <ul class="menu__list menu__list_categories">
            <BaseMenu
               v-for="(menu, index) in navigation"
               :menu="menu"
               :key="index"
               :depth="0"
            />
         </ul>
      </aside>
   </section>
</template>

<script>
export default {
   data() {
      return {
         navigation: [
            {
               title: "Станки по металлу",
               link: "/",

               submenus: [
                  {
                     title: "Ленточнопильные станки",
                     link: "/",
                     submenus: [
                        {
                           title: "Ручные ленточнопильные станки",
                           link: "/",
                        },
                        {
                           title: "Полуавтоматические ленточнопильные станки",
                           link: "/",
                        },
                        {
                           title: "Автоматические ленточнопильные станки",
                           link: "/",
                        },
                        {
                           title: "Вертикальные ленточнопильные станки",
                           link: "/",
                        },
                     ],
                  },
                  {
                     title: "Токарные универсальные станки",
                     link: "/",
                  },
                  {
                     title: "Заточные станки",
                     link: "/",
                  },

                  {
                     title: "Шлифовальные станки",
                     link: "/",
                  },

                  {
                     title: "Резьбонарезные манипуляторы",
                     link: "/",
                  },
                  {
                     title: "Сверлильные станки",
                     link: "/",
                  },
                  {
                     title: "Обработка листового металла",
                     link: "/",
                  },

                  {
                     title: "Фрезерные станки",
                     link: "/",
                  },
                  {
                     title: "Гибочные станки для труб и профилей",
                     link: "/",
                  },
                  {
                     title: "Дисковые пилы",
                     link: "/",
                  },
               ],
            },
            {
               title: "Станки по дереву",
               link: "/",
               submenus: [
                  {
                     title: "Submenu 1",
                     link: "/",
                  },
                  {
                     title: "Submenu 2",
                     link: "/",
                  },
                  {
                     title: "Submenu 3",
                     submenus: [
                        {
                           title: "Subsubmenu 1",
                           link: "/",
                        },
                        {
                           title: "Subsubmenu 2",
                           link: "/",
                        },
                     ],
                  },
               ],
            },
            {
               title: "Станки с ЧПУ",
               link: "/",
               submenus: [
                  {
                     title: "Submenu 1",
                     link: "/",
                  },
                  {
                     title: "Submenu 2",
                     link: "/",
                  },
                  {
                     title: "Submenu 3",
                     submenus: [
                        {
                           title: "Subsubmenu 1",
                           link: "/",
                        },
                        {
                           title: "Subsubmenu 2",
                           link: "/",
                        },
                     ],
                  },
               ],
            },
            {
               title: "Ленточнопильные станки",
               link: "/",
               submenus: [
                  {
                     title: "Submenu 1",
                     link: "/",
                  },
                  {
                     title: "Submenu 2",
                     link: "/",
                  },
                  {
                     title: "Submenu 3",
                     submenus: [
                        {
                           title: "Subsubmenu 1",
                           link: "/",
                        },
                        {
                           title: "Subsubmenu 2",
                           link: "/",
                        },
                     ],
                  },
               ],
            },
            {
               title: "Вытяжки",
               link: "/",
               submenus: [
                  {
                     title: "Submenu 1",
                     link: "/",
                  },
                  {
                     title: "Submenu 2",
                     link: "/",
                  },
                  {
                     title: "Submenu 3",
                     submenus: [
                        {
                           title: "Subsubmenu 1",
                           link: "/",
                        },
                        {
                           title: "Subsubmenu 2",
                           link: "/",
                        },
                     ],
                  },
               ],
            },
            {
               title: "Электроэрозионные станки",
               link: "/",
               submenus: [
                  {
                     title: "Submenu 1",
                     link: "/",
                  },
                  {
                     title: "Submenu 2",
                     link: "/",
                  },
                  {
                     title: "Submenu 3",
                     submenus: [
                        {
                           title: "Subsubmenu 1",
                           link: "/",
                        },
                        {
                           title: "Subsubmenu 2",
                           link: "/",
                        },
                     ],
                  },
               ],
            },
         ],
      };
   },
   methods: {
      handleKeyPress(e) {
         // Query to get focusable elements within the sidebar nav
         const navEl = document.getElementById("Sidebar Navigation");
         const focusableElements = navEl.querySelectorAll(["a", "button"]);
         // Convert nodelist of elements into an array
         const focusableElementsArr = Array.from(focusableElements);
         // Grab current active element
         const activeEl = document.activeElement;
         // Find current active element within the array of focusable elements
         const activeElIndex = focusableElementsArr.findIndex(
            (f) => f.id === activeEl.id
         );
         const lastIdx = focusableElementsArr.length - 1;
         if (e.key === "ArrowUp") {
            activeElIndex <= 0
               ? focusableElementsArr[0].focus()
               : focusableElementsArr[activeElIndex - 1].focus();
         }
         if (e.key === "ArrowDown") {
            activeElIndex >= lastIdx
               ? focusableElementsArr[lastIdx].focus()
               : focusableElementsArr[activeElIndex + 1].focus();
         }
      },
   },
};
</script>
