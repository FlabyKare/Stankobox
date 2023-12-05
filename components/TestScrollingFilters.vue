<template>
   <section @mousedown.left="onMouseDown" class="filters container">
      <VueHorizontal
         ref="horizontal"
         class="horizontal"
         snap="none"
         :button="false"
         @scroll="onScroll"
      >
         <li class="filters__list-item">
            <p>Станки по металлу</p>
         </li>
         <li class="filters__list-item">
            <p>Станки по дереву</p>
         </li>
         <li class="filters__list-item">
            <p>Станки с ЧПУ</p>
         </li>
         <li class="filters__list-item">
            <p>Ленточнопильные станки</p>
         </li>
         <li class="filters__list-item">
            <p>Вытяжки</p>
         </li>
         <li class="filters__list-item">
            <p>Электроэрозионные станки</p>
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
