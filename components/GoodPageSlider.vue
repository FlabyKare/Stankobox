<template>
   <div class="good-page__intro-preview-slider">
      <NuxtLink class="good-page__intro-preview-slider-youtube">
         <svg
            class="good-page__intro-preview-slider-youtube-icon"
            width="35"
            height="26"
            viewBox="0 0 35 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <rect width="35" height="26" fill="#E5E5E5" />
            <g clip-path="url(#clip0_422_11171)">
               <rect
                  width="1440"
                  height="2339"
                  transform="translate(-539 -481)"
                  fill="white"
               />
               <path
                  d="M0.833496 14.1787V11.8203C0.833496 6.99533 0.833496 4.58199 2.34183 3.03033C3.85183 1.47699 6.2285 1.41033 10.9802 1.27533C13.2302 1.21199 15.5302 1.16699 17.5002 1.16699C19.4685 1.16699 21.7685 1.21199 24.0202 1.27533C28.7718 1.41033 31.1485 1.47699 32.6568 3.03033C34.1668 4.58199 34.1668 6.99699 34.1668 11.8203V14.1787C34.1668 19.0053 34.1668 21.417 32.6585 22.9703C31.1485 24.522 28.7735 24.5903 24.0202 24.7237C21.7702 24.7887 19.4702 24.8337 17.5002 24.8337C15.5318 24.8337 13.2318 24.7887 10.9802 24.7237C6.2285 24.5903 3.85183 24.5237 2.34183 22.9703C0.833496 21.417 0.833496 19.0037 0.833496 14.1803V14.1787Z"
                  fill="#E31335"
                  stroke="#E31335"
                  stroke-width="1.5"
               />
               <path
                  d="M20.8333 13.0003L15 16.3337V9.66699L20.8333 13.0003Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </g>
            <defs>
               <clipPath id="clip0_422_11171">
                  <rect
                     width="1440"
                     height="2339"
                     fill="white"
                     transform="translate(-539 -481)"
                  />
               </clipPath>
            </defs>
         </svg>
         <p class="good-page__intro-preview-slider-youtube-text">
            видео – обзор
         </p>
      </NuxtLink>

      <div class="good-page__intro-preview-slider-miniatures">
         <img
            class="good-page__intro-preview-slider-miniatures-item"
            v-for="(item, index) in miniatures"
            :key="item.product_id"
            :src="`http://stankobox.runova.tech:8000/api/products/image/${id}/${item.name}`"
            @click="selectMiniature(index)"
            :class="{ active: item.active }"
            alt=""
         />

         <div class="good-page__intro-preview-slider-miniatures-arrow">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="14"
               height="8"
               viewBox="0 0 14 8"
               fill="none"
            >
               <path
                  d="M1 1L7 7L13 1"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>
         </div>
      </div>

      <!-- Use v-if to conditionally render the image based on the activeIndex -->
      <img
         class="good-page__intro-preview-slider-main"
         v-if="activeIndex !== null && miniatures.length > 0"
         :src="`http://stankobox.runova.tech:8000/api/products/image/${id}/${miniatures[activeIndex].name}`"
         ref="previewImage"
         alt=""
         @click="openFancybox"
      />
   </div>
</template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";

const id = ref(null);
const miniatures = ref([]);
const activeIndex = ref(null);

const selectMiniature = (index) => {
   miniatures.value.forEach((item) => (item.active = false));
   miniatures.value[index].active = true;
   activeIndex.value = index;
};

const openFancybox = () => {
   if (activeIndex.value !== null && miniatures.value.length > 0) {
      const galleryItems = miniatures.value.map((item) => ({
         src: `http://stankobox.runova.tech:8000/api/products/image/${id.value}/${item.name}`,
         type: "image",
      }));

      $fancybox.open(galleryItems, {
         loop: true,
         // другие параметры Fancybox по вашему выбору
      });
   }
};

onMounted(async () => {
   id.value = $route.params.id;

   try {
      const response = await axios.get(
         `http://stankobox.runova.tech:8000/api/products/images/${id.value}`
      );
      miniatures.value = response.data;

      // Set active class for the first element after loading images
      if (miniatures.value.length > 0) {
         miniatures.value[0].active = true;
         activeIndex.value = 0;
      }
   } catch (error) {
      console.error("Error fetching miniatures:", error);
   }
});

watch(activeIndex, (newIndex) => {
   if (newIndex !== null && miniatures.value.length > 0) {
      $nextTick(() => {
         $refs.previewImage.src = `http://stankobox.runova.tech:8000/api/products/image/${id.value}/${miniatures.value[newIndex].name}`;
      });
   }
});
</script>
