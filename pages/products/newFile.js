import { Pagination } from "swiper/modules";
import axios from "axios";

export default (await import("vue")).defineComponent({
   data() {
      return {
         left: 0,
         originX: 0,
         originLeft: 0,
         shouldAddClass: true,
         showAll: false,
         cards: [
            {
               id: 1,
               discount: "13",
               name: "Вытяжка для стружки REALREZ FM 230/ 220 V",
               images: ["test", "test2", "test3", "test3", "test3"],
               currentPrice: "18 500 ₽",
            },

            {
               id: 1,
               discount: "13",
               name: "Пластиковый мешок на вытяжку для стружки REALREZ FM230",
               images: ["test", "test2", "test3", "test3", "test3"],
               currentPrice: "18 500 ₽",
            },

            {
               id: 1,
               discount: "13",
               name: "Пластиковый мешок на вытяжку для стружки REALREZ FM230",
               images: ["test", "test2", "test3", "test3", "test3"],
               currentPrice: "18 500 ₽",
            },
            {
               id: 1,
               discount: "13",
               name: "Пластиковый мешок на вытяжку для стружки REALREZ FM230",
               images: ["test", "test2", "test3", "test3", "test3"],
               currentPrice: "18 500 ₽",
            },
            {
               id: 1,
               discount: "13",
               name: "Пластиковый мешок на вытяжку для стружки REALREZ FM230",
               images: ["test", "test2", "test3", "test3", "test3"],
               currentPrice: "18 500 ₽",
            },
            {
               id: 1,
               discount: "13",
               name: "Пластиковый мешок на вытяжку для стружки REALREZ FM230",
               images: ["test", "test2", "test3", "test3", "test3"],
               currentPrice: "18 500 ₽",
            },
            {
               id: 1,
               discount: "13",
               name: "Пластиковый мешок на вытяжку для стружки REALREZ FM230",
               images: ["test", "test2", "test3", "test3", "test3"],
               currentPrice: "18 500 ₽",
            },
            {
               id: 1,
               discount: "13",
               name: "Пластиковый мешок на вытяжку для стружки REALREZ FM230",
               images: ["test", "test2", "test3", "test3", "test3"],
               currentPrice: "18 500 ₽",
            },
            {
               id: 1,
               discount: "13",
               name: "Пластиковый мешок на вытяжку для стружки REALREZ FM230",
               images: ["test", "test2", "test3", "test3", "test3"],
               currentPrice: "18 500 ₽",
            },
         ],

         productInfo: null, // Add productInfo to data
      };
   },
   async created() {
      try {
         const response = await axios.get(
            `http://176.123.168.13:8000/api/products/product/${this.id}`
         );
         this.productInfo = response.data;
      } catch (error) {
         console.error("Error fetching product info:", error);
      }
   },
   computed: {
      visibleCards() {
         return this.showAll ? this.cards : this.cards.slice(0, 4);
      },
   },
   beforeUnmount() {
      this.onMouseUp();
   },

   methods: {
      toggleShowAll() {
         this.showAll = !this.showAll;
      },

      onScroll({ left }) {
         this.left = left;
      },
      onMouseDown(e) {
         this.originX = e.pageX;
         this.originLeft = this.left;

         window.addEventListener("mouseup", this.onMouseUp);
         window.addEventListener("mousemove", this.onMouseMove);
      },
      onMouseUp() {
         window.removeEventListener("mouseup", this.onMouseUp);
         window.removeEventListener("mousemove", this.onMouseMove);
      },
      onMouseMove(e) {
         this.$refs.horizontal.scrollToLeft(
            this.originLeft - (e.pageX - this.originX),
            "auto"
         );
      },
   },
   setup() {
      const activeTab = ref("description");
      const setActiveTab = (tab) => {
         activeTab.value = tab;
      };

      const scrollToTab = (index) => {
         const tabsList = document.querySelector(".good-page__tabs-list");
         const tabItems = tabsList.querySelectorAll(
            ".good-page__tabs-list-item"
         );
         const targetTab = tabItems[index];

         // Scroll to the target tab
         targetTab.scrollIntoView({ behavior: "smooth" });
      };

      const handleLinkDetailClick = () => {
         // Scroll to the first tab (index 0)
         scrollToTab(0);
      };

      const handleLinkParametrsClick = () => {
         // Scroll to the second tab (index 1)
         scrollToTab(1);
      };
      // Функция копирования и печати
      const { id } = useRoute().params;

      const articulCopiedMsg = ref(false);

      const copyToClipboard = () => {
         const textToCopy = id;

         // Create a textarea element to hold the text temporarily
         const textarea = document.createElement("textarea");
         textarea.value = textToCopy;
         document.body.appendChild(textarea);

         // Select and copy the text
         textarea.select();
         document.execCommand("copy");

         // Remove the textarea from the DOM
         document.body.removeChild(textarea);

         // Show the "Copied" message
         articulCopiedMsg.value = true;

         // Optionally, you can set a timeout to hide the message after a certain duration
         setTimeout(() => {
            articulCopiedMsg.value = false;
         }, 2000); // Hide the message after 2000 milliseconds (2 seconds)
      };

      const printPage = () => {
         window.print();
      };

      return {
         id,
         articulCopiedMsg,
         activeTab,
         setActiveTab,
         copyToClipboard,
         printPage,

         handleLinkDetailClick,
         handleLinkParametrsClick,

         modules: [Pagination],
         spaceBetween: 50,
      };

      //===================================
   },

   components: {
      VueHorizontal,
      Swiper,
      SwiperSlide,
   },

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
      addClassIfPresent("offers", "offers__list");
   },
});
