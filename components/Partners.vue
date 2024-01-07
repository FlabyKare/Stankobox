<template>
   <section @mousedown.left="onMouseDown" id="brands" class="partners container">
      <h2 class="partners__title little-defolt-title">Наши партнеры</h2>

      <VueHorizontal
         ref="horizontal"
         class="horizontal"
         snap="none"
         :button="false"
         @scroll="onScroll"
      >
         <li class="partners__list-item">
            <img
               class="partners__list-item-img partners__list-item-img_1"
               src="~/assets/img/Partners/1.png"
               alt=""
            />
         </li>

         <li class="partners__list-item">
            <img
               class="partners__list-item-img partners__list-item-img_2"
               src="~/assets/img/Partners/2.png"
               alt=""
            />
         </li>

         <li class="partners__list-item">
            <img
               class="partners__list-item-img partners__list-item-img_3"
               src="~/assets/img/Partners/3.png"
               alt=""
            />
         </li>

         <li class="partners__list-item">
            <img
               class="partners__list-item-img partners__list-item-img_4"
               src="~/assets/img/Partners/4.png"
               alt=""
            />
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
