<template>
   <section @mousedown.left="onMouseDown" class="equipments container">
      <h2 class="equipments__title defolt-title">Основное оборудование</h2>

      <!-- <VueHorizontal
         ref="horizontal"
         class="horizontal"
         snap="none"
         :button="false"
         @scroll="onScroll"
      >
         <div
            v-for="(item, index) in equipmentCategories"
            :key="index"
            class="equipments__categories-item"
         >
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  :src="`/img/Equipments/${item.image}.png`"
                  alt=""
               />
            </div>
            <p class="equipments__categories-item-text">{{ item.text }}</p>
         </div>
      </VueHorizontal> -->

      <VueHorizontal
         v-if="miniatures"
         ref="horizontal"
         class="horizontal"
         snap="none"
         :button="false"
         @scroll="onScroll"
      >
         <div
            v-for="(category, index) in miniatures.categories"
            :key="index"
            class="equipments__categories-item"
         >
            <div class="equipments__categories-item-img-wrapper">
               <img
                  class="equipments__categories-item-img"
                  :src="`https://stankobox.runova.tech/api/categories/cover/${category.id}`"
                  alt=""
               />
            </div>
            <NuxtLink
               :to="`/catalog/${category.id}`"
               class="equipments__categories-item-text"
               >{{ category.name }}</NuxtLink
            >
         </div>
      </VueHorizontal>
   </section>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import axios from "axios";

export default {
   data() {
      return {
         left: 0,
         originX: 0,
         originLeft: 0,
         shouldAddClass: true,

         equipmentCategories: [
            { image: 1, text: "Станки по металлу" },
            { image: 2, text: "Станки по металлу с ЧПУ" },
            { image: 3, text: "Ленточнопильные станки" },
            { image: 4, text: "Электроэрозионные станки" },
            { image: 1, text: "Электроэрозионные станки" },
            { image: 2, text: "Электроэрозионные станки" },
            { image: 3, text: "Электроэрозионные станки" },

            // Добавьте необходимое количество объектов для каждой категории
         ],

         miniatures: [],
         activeIndex: null,
      };
   },

   async created() {
      try {
         const response = await axios.get(
            `https://stankobox.runova.tech/api/categories/`
         );
         this.miniatures = response.data;

         if (this.miniatures.length > 0) {
            this.miniatures[0].active = true;
            this.activeIndex = 0;
         }
      } catch (error) {
         console.error("Error fetching miniatures:", error);
      }
   },
   beforeUnmount() {
      this.onMouseUp();
   },

   methods: {
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
         const offset = e.pageX - this.originX;
         const left = this.originLeft - offset;
         this.$refs.horizontal.scrollToLeft(left, "auto");
      },
   },
   components: {
      VueHorizontal,
   },
};
</script>
<style lang="scss" scoped></style>
<!-- <style lang="scss" scoped>
@import "../assets/css/common/_fonts";

.container {
   margin-top: 80px;

   .horizontal {
      .v-hl-container {
         margin-top: 20px;
         padding-bottom: 24px;
         padding-top: 12px;

         display: flex;
         gap: 32px;
         flex-wrap: nowrap;

         .equipments__categories-item {
            &:hover {
               .equipments__categories-item-img-wrapper {
                  box-shadow: 0px 0px 11px 6px rgba(14, 31, 53, 0.16);
               }
            }
         }

         .equipments__categories-item-img-wrapper {
            padding: 20px;
            width: 292px;
            height: 180px;
            border-radius: 8px;
            box-shadow: 0px 0px 8px 0px rgba(14, 31, 53, 0.16);
            transition: 0.25s ease-in-out;
         }

         .equipments__categories-item-img {
            width: 100%;
            height: 100%;
            max-width: 140px;
            max-height: 140px;
            display: block;
            margin: auto;
         }

         .equipments__categories-item-text {
            color: #101010;
            font-family: $TTNormsMedium;
            font-size: 18px;
            font-style: normal;
            line-height: 28px;
            letter-spacing: 0.072px;
            margin-top: 12px;
            text-align: center;
         }

         @media (max-width: 575.98px) {
            gap: 16px;
            margin-top: 12px;
            padding-bottom: 16px;

            .equipments__categories-item-img-wrapper {
               width: 232px;
               height: 160px;
            }

            .equipments__categories-item-img {
               max-width: 120px;
               max-height: 120px;
            }

            .equipments__categories-item-text {
               font-size: 16px;
               line-height: 20px;
               letter-spacing: 0.064px;
               margin-top: 8px;
               text-align: left;
            }
         }
      }
   }
}
</style> -->
