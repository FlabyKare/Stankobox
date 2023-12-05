<template>
   <section @mousedown.left="onMouseDown" class="benefits container">
      <VueHorizontal
         ref="horizontal"
         class="horizontal"
         snap="none"
         :button="false"
         @scroll="onScroll"
      >
         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/quality.svg"
               alt="Гарантия"
            />

            <p class="benefits__list-item-description">
               На все оборудование гарантия 12 месяцев с даты покупки
            </p>
         </li>

         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/transportation.svg"
               alt="Грузоперевозки"
            />

            <p class="benefits__list-item-description">
               Грузоперевозки в любую точку России и СНГ
            </p>
         </li>

         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/equipment.svg"
               alt="Все оборудование"
            />

            <p class="benefits__list-item-description">
               Все оборудование можно приобрести в лизинг
            </p>
         </li>

         <li class="benefits__list-item">
            <img
               class="benefits__list-item-icon"
               src="~/assets/img/icons/Benefits/professional-support.svg"
               alt="Профессиональная помощь"
            />

            <p class="benefits__list-item-description">
               Профессиональная помощь в подборке оборудования
            </p>
         </li>
      </VueHorizontal>
   </section>
</template>

<script>
import VueHorizontal from "vue-horizontal";
export default {
   data() {
      return {
         left: 0,
         originX: 0,
         originLeft: 0,
         shouldAddClass: true,
      };
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
