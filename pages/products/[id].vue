<template>
   <form action="#" class="popup" :class="{ active: popupActive }">
      <div class="popup__wrapper">
         <img
            class="popup__wrapper-close"
            src="/public/img/icons/close.png"
            @click="popupActivating"
            alt=""
         />

         <p class="popup__wrapper-pretitle">
            Остались вопросы или заинтересовались товаром?
         </p>
         <h4 class="popup__wrapper-title">
            Заполните форму и наш специалист свяжется с вами!
         </h4>

         <div class="popup__wrapper-inputs">
            <div class="popup__wrapper-inputs-item">
               <input
                  v-model="nameGoodPage"
                  type="text"
                  id="nameGoodPage"
                  required
                  :minlength="3"
                  :maxlength="20"
               />
               <label for="nameGoodPage">Имя<span>*</span></label>
            </div>
            <div class="popup__wrapper-inputs-item">
               <input
                  v-model="phoneGoodPage"
                  type="tel"
                  id="phoneGoodPage"
                  required
                  v-maska
                  data-maska="+# (###) ### ##-##"
               />
               <label for="phoneGoodPage">Номер телефона<span>*</span></label>
            </div>
         </div>

         <div class="popup__wrapper-radios">
            <div
               class="popup__wrapper-radios-item"
               @click="timePickerActive = false"
            >
               <svg
                  v-if="!timePickerActive"
                  class="popup__wrapper-radios-item-red-btn"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <circle
                     cx="10"
                     cy="10"
                     r="9.25"
                     stroke="#E31335"
                     stroke-width="1.5"
                  />
                  <circle cx="10" cy="10" r="4" fill="#E31335" />
               </svg>

               <svg
                  v-if="timePickerActive"
                  class="popup__wrapper-radios-item-gray-btn"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <circle
                     cx="10"
                     cy="10"
                     r="9.25"
                     stroke="#A8A8A8"
                     stroke-width="1.5"
                  />
               </svg>

               <p class="popup__wrapper-radios-item-text">В ближайшее время</p>
            </div>

            <div
               class="popup__wrapper-radios-item popup__wrapper-radios-item_activator"
               @click="timePickerActive = true"
            >
               <svg
                  v-if="timePickerActive"
                  class="popup__wrapper-radios-item-red-btn"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <circle
                     cx="10"
                     cy="10"
                     r="9.25"
                     stroke="#E31335"
                     stroke-width="1.5"
                  />
                  <circle cx="10" cy="10" r="4" fill="#E31335" />
               </svg>

               <svg
                  v-if="!timePickerActive"
                  class="popup__wrapper-radios-item-gray-btn"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <circle
                     cx="10"
                     cy="10"
                     r="9.25"
                     stroke="#A8A8A8"
                     stroke-width="1.5"
                  />
               </svg>

               <p class="popup__wrapper-radios-item-text">Точное время</p>
            </div>
         </div>

         <TimePicker v-if="timePickerActive" />

         <Button class="popup__wrapper-btn">Отправить</Button>
      </div>
   </form>
   <section class="good-page container">
      <ul class="good-page__breadcrumbs breadcrumbs">
         <img
            class="good-page__breadcrumbs-mobile-dots breadcrumbs-mobile-dots"
            src="/public/img/Good-page/Breadcrumbs-mobile-dots.png"
            alt=""
         />
         <svg
            class="good-page__breadcrumbs-arrow-divider breadcrumbs-arrow-divider"
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="8"
            viewBox="0 0 4 8"
            fill="none"
         >
            <path
               d="M0.5 7L3.5 4L0.5 1"
               stroke="#101010"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
         </svg>
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink to="/">Главная</NuxtLink>
         </li>
         <span class="good-page__link-divider breadcrumbs__link-divider"
            >•</span
         >
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink>Каталог</NuxtLink>
         </li>
         <span class="good-page__link-divider breadcrumbs__link-divider"
            >•</span
         >
         <li class="good-page__link breadcrumbs__link">
            <NuxtLink v-if="!productInfo">...</NuxtLink>
            <NuxtLink v-if="productInfo">{{ productInfo.title }}</NuxtLink>
         </li>
      </ul>

      <h3 class="good-page__title page-title" v-if="!productInfo">...</h3>
      <h3 class="good-page__title page-title" v-if="productInfo">
         {{ productInfo.title }}
      </h3>

      <section class="good-page__intro">
         <div class="good-page__intro-icons">
            <h6 class="good-page__intro-articul" @click="copyToClipboard">
               <svg
                  class="good-page__intro-articul-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <path
                     d="M4.1665 12.5003H3.33317C2.89114 12.5003 2.46722 12.3247 2.15466 12.0122C1.8421 11.6996 1.6665 11.2757 1.6665 10.8337V3.33366C1.6665 2.89163 1.8421 2.46771 2.15466 2.15515C2.46722 1.84259 2.89114 1.66699 3.33317 1.66699H10.8332C11.2752 1.66699 11.6991 1.84259 12.0117 2.15515C12.3242 2.46771 12.4998 2.89163 12.4998 3.33366V4.16699M9.1665 7.50033H16.6665C17.587 7.50033 18.3332 8.24652 18.3332 9.16699V16.667C18.3332 17.5875 17.587 18.3337 16.6665 18.3337H9.1665C8.24603 18.3337 7.49984 17.5875 7.49984 16.667V9.16699C7.49984 8.24652 8.24603 7.50033 9.1665 7.50033Z"
                     stroke="#828282"
                     stroke-width="1.5"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>

               Код товара: {{ id }}

               <p
                  class="good-page__intro-articul-copied-msg"
                  :class="{ active: articulCopiedMsg }"
               >
                  Скопировано
               </p>
            </h6>

            <svg
               class="good-page__intro-icons-print"
               @click="printPage"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
            >
               <path
                  d="M17.571 18H20.4C20.5591 18 20.7117 17.9368 20.8243 17.8243C20.9368 17.7117 21 17.5591 21 17.4V11C21 9.93913 20.5786 8.92172 19.8284 8.17157C19.0783 7.42143 18.0609 7 17 7H7C5.93913 7 4.92172 7.42143 4.17157 8.17157C3.42143 8.92172 3 9.93913 3 11V17.4C3 17.5591 3.06321 17.7117 3.17574 17.8243C3.28826 17.9368 3.44087 18 3.6 18H6.429M8 7V3.6C8 3.44087 8.06321 3.28826 8.17574 3.17574C8.28826 3.06321 8.44087 3 8.6 3H15.4C15.5591 3 15.7117 3.06321 15.8243 3.17574C15.9368 3.28826 16 3.44087 16 3.6V7"
                  stroke="#828282"
                  stroke-width="1.5"
               />
               <path
                  d="M6.09785 20.315L6.42785 18L6.92585 14.515C6.94631 14.372 7.01764 14.2413 7.12675 14.1467C7.23586 14.0521 7.37544 14 7.51985 14H16.4798C16.6243 14 16.7638 14.0521 16.8729 14.1467C16.9821 14.2413 17.0534 14.372 17.0738 14.515L17.5698 18L17.9008 20.315C17.913 20.4001 17.9068 20.4868 17.8825 20.5693C17.8582 20.6518 17.8165 20.7281 17.7602 20.7931C17.7039 20.858 17.6342 20.9101 17.556 20.9458C17.4778 20.9815 17.3928 21 17.3068 21H6.69185C6.60587 21 6.52089 20.9815 6.44267 20.9458C6.36445 20.9101 6.29482 20.858 6.23849 20.7931C6.18216 20.7281 6.14045 20.6518 6.11619 20.5693C6.09192 20.4868 6.08567 20.4001 6.09785 20.315Z"
                  stroke="#828282"
                  stroke-width="1.5"
               />
               <path
                  d="M17 10.01L17.01 9.99902"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>

            <svg
               class="good-page__intro-icons-print good-page__intro-icons-print-mobile"
               @click="downloadAsPDF"
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 20 20"
               fill="none"
            >
               <path
                  d="M3.33325 9.99999V16.6667C3.33325 17.1087 3.50885 17.5326 3.82141 17.8452C4.13397 18.1577 4.55789 18.3333 4.99992 18.3333H14.9999C15.4419 18.3333 15.8659 18.1577 16.1784 17.8452C16.491 17.5326 16.6666 17.1087 16.6666 16.6667V9.99999M13.3333 4.99999L9.99992 1.66666M9.99992 1.66666L6.66658 4.99999M9.99992 1.66666V12.5"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>
         </div>

         <div class="good-page__intro-preview">
            <GoodPageSlider />

            <!-- Мобильный слайдер -->

            <div class="good-page__intro-preview-description">
               <h5 class="good-page__intro-preview-description-title">
                  Описание:
               </h5>
               <p
                  class="good-page__intro-preview-description-text"
                  v-if="!productInfo"
               >
                  ...
               </p>
               <p
                  class="good-page__intro-preview-description-text"
                  v-if="productInfo"
               >
                  {{ productInfo.description }}
               </p>
               <NuxtLink
                  class="good-page__intro-preview-description-link good-page__intro-preview-description-link_detail"
                  @click="handleLinkDetailClick(), setActiveTab('description')"
                  >Подробное описание</NuxtLink
               >

               <h5
                  class="good-page__intro-preview-description-title good-page__intro-preview-description-title_parametrs"
               >
                  Основные характеристики:
               </h5>

               <div
                  class="good-page__intro-preview-description-parametrs"
                  v-if="productInfo"
               >
                  <p v-for="item in productInfo.attributes.slice(0, 5)">
                     <span>{{ item.property.title }}</span
                     ><span>{{ item.value }}</span>
                  </p>
               </div>

               <NuxtLink
                  class="good-page__intro-preview-description-link good-page__intro-preview-description-link_parametrs"
                  @click="
                     handleLinkParametrsClick(), setActiveTab('characteristics')
                  "
                  >Все характеристики</NuxtLink
               >
            </div>

            <div class="good-page__intro-preview-complectation">
               <div
                  class="good-page__intro-preview-complectation-equipments good-page__intro-preview-complectation-price"
                  style="margin-bottom: 32px"
               >
                  <div
                     class="good-page__intro-preview-complectation-equipments-item"
                  >
                     <h4
                        class="good-page__intro-preview-complectation-equipments-item-title"
                     >
                        Комплектация
                     </h4>

                     <!-- Базовая -->
                     <div
                        class="good-page__intro-preview-complectation-equipments-item-wrapper"
                        :class="{ active: baseEquipment === true }"
                     >
                        <svg
                           @click="baseEquipmentActivating"
                           class="good-page__intro-preview-complectation-equipments-item-wrapper-active-svg"
                           width="20"
                           height="20"
                           viewBox="0 0 20 20"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <rect width="20" height="20" rx="14" fill="none" />
                           <path
                              d="M14.9706 6.45202C14.9018 6.38259 14.8198 6.32748 14.7296 6.28988C14.6393 6.25227 14.5425 6.23291 14.4447 6.23291C14.3469 6.23291 14.2501 6.25227 14.1598 6.28988C14.0696 6.32748 13.9876 6.38259 13.9188 6.45202L8.40025 11.9779L6.08173 9.65202C6.01024 9.58295 5.92584 9.52865 5.83335 9.4922C5.74086 9.45575 5.64211 9.43788 5.54271 9.4396C5.44332 9.44132 5.34524 9.4626 5.25407 9.50222C5.1629 9.54185 5.08043 9.59904 5.01136 9.67054C4.9423 9.74204 4.88799 9.82644 4.85154 9.91892C4.8151 10.0114 4.79722 10.1102 4.79894 10.2096C4.80066 10.309 4.82194 10.407 4.86157 10.4982C4.90119 10.5894 4.95838 10.6718 5.02988 10.7409L7.87433 13.5854C7.94319 13.6548 8.02511 13.7099 8.11538 13.7475C8.20565 13.7851 8.30247 13.8045 8.40025 13.8045C8.49804 13.8045 8.59486 13.7851 8.68512 13.7475C8.77539 13.7099 8.85732 13.6548 8.92618 13.5854L14.9706 7.54091C15.0458 7.47154 15.1058 7.38736 15.1469 7.29365C15.1879 7.19995 15.2091 7.09876 15.2091 6.99646C15.2091 6.89417 15.1879 6.79298 15.1469 6.69927C15.1058 6.60557 15.0458 6.52138 14.9706 6.45202Z"
                              fill="white"
                           />
                        </svg>

                        <p
                           class="good-page__intro-preview-complectation-equipments-item-wrapper-title"
                           @click="baseEquipmentActivating"
                        >
                           Базовая

                           <svg
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-title-desciption-activating"
                              :class="{ active: descriptionActive }"
                              @click="descriptionActivating"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M6 9L12 15L18 9"
                                 stroke="#101010"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                        </p>

                        <ul
                           class="good-page__intro-preview-complectation-equipments-item-wrapper-description good-page__intro-preview-complectation-equipments-item-wrapper-description-base"
                           :class="{ active: descriptionActive }"
                        >
                           <li
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-description-item"
                           >
                              Стойка ЧПУ: GSK928DTL
                           </li>

                           <li
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-description-item"
                           >
                              Цельнолитая усиленная рёбрами жёсткости,
                              устойчивая к механическим вибрациям чугунная
                              станина
                           </li>

                           <li
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-description-item"
                           >
                              Ручной токарный 3-х кулачковый патрон 160 мм
                           </li>
                        </ul>
                     </div>

                     <!-- Расширенная -->
                     <div
                        class="good-page__intro-preview-complectation-equipments-item-wrapper good-page__intro-preview-complectation-equipments-item-wrapper-advanced"
                        :class="{ active: baseEquipment === false }"
                     >
                        <svg
                           @click="advancedEquipmentActivating"
                           class="good-page__intro-preview-complectation-equipments-item-wrapper-active-svg"
                           width="20"
                           height="20"
                           viewBox="0 0 20 20"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <rect width="20" height="20" rx="14" fill="none" />
                           <path
                              d="M14.9706 6.45202C14.9018 6.38259 14.8198 6.32748 14.7296 6.28988C14.6393 6.25227 14.5425 6.23291 14.4447 6.23291C14.3469 6.23291 14.2501 6.25227 14.1598 6.28988C14.0696 6.32748 13.9876 6.38259 13.9188 6.45202L8.40025 11.9779L6.08173 9.65202C6.01024 9.58295 5.92584 9.52865 5.83335 9.4922C5.74086 9.45575 5.64211 9.43788 5.54271 9.4396C5.44332 9.44132 5.34524 9.4626 5.25407 9.50222C5.1629 9.54185 5.08043 9.59904 5.01136 9.67054C4.9423 9.74204 4.88799 9.82644 4.85154 9.91892C4.8151 10.0114 4.79722 10.1102 4.79894 10.2096C4.80066 10.309 4.82194 10.407 4.86157 10.4982C4.90119 10.5894 4.95838 10.6718 5.02988 10.7409L7.87433 13.5854C7.94319 13.6548 8.02511 13.7099 8.11538 13.7475C8.20565 13.7851 8.30247 13.8045 8.40025 13.8045C8.49804 13.8045 8.59486 13.7851 8.68512 13.7475C8.77539 13.7099 8.85732 13.6548 8.92618 13.5854L14.9706 7.54091C15.0458 7.47154 15.1058 7.38736 15.1469 7.29365C15.1879 7.19995 15.2091 7.09876 15.2091 6.99646C15.2091 6.89417 15.1879 6.79298 15.1469 6.69927C15.1058 6.60557 15.0458 6.52138 14.9706 6.45202Z"
                              fill="white"
                           />
                        </svg>

                        <p
                           class="good-page__intro-preview-complectation-equipments-item-wrapper-title"
                           @click="advancedEquipmentActivating"
                        >
                           Расширенная

                           <svg
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-title-desciption-activating"
                              :class="{ active: advancedDescriptionActive }"
                              @click="advancedDescriptionActivating"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M6 9L12 15L18 9"
                                 stroke="#101010"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                        </p>

                        <ul
                           class="good-page__intro-preview-complectation-equipments-item-wrapper-description"
                           :class="{ active: advancedDescriptionActive }"
                        >
                           <!-- БАЗОВЫЕ -->
                           <h6
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-description-item-title"
                              style="margin-top: 8px; margin-bottom: 12px"
                           >
                              Стойка ЧПУ:
                           </h6>

                           <li
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-description-item good-page__intro-preview-complectation-equipments-item-wrapper-description-item-advanced"
                              v-for="(item, index) in options"
                           >
                              <svg
                                 class="good-page__intro-preview-complectation-equipments-item-wrapper-active-svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 20 20"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <rect
                                    width="20"
                                    height="20"
                                    rx="14"
                                    fill="none"
                                 />
                                 <path
                                    d="M14.9706 6.45202C14.9018 6.38259 14.8198 6.32748 14.7296 6.28988C14.6393 6.25227 14.5425 6.23291 14.4447 6.23291C14.3469 6.23291 14.2501 6.25227 14.1598 6.28988C14.0696 6.32748 13.9876 6.38259 13.9188 6.45202L8.40025 11.9779L6.08173 9.65202C6.01024 9.58295 5.92584 9.52865 5.83335 9.4922C5.74086 9.45575 5.64211 9.43788 5.54271 9.4396C5.44332 9.44132 5.34524 9.4626 5.25407 9.50222C5.1629 9.54185 5.08043 9.59904 5.01136 9.67054C4.9423 9.74204 4.88799 9.82644 4.85154 9.91892C4.8151 10.0114 4.79722 10.1102 4.79894 10.2096C4.80066 10.309 4.82194 10.407 4.86157 10.4982C4.90119 10.5894 4.95838 10.6718 5.02988 10.7409L7.87433 13.5854C7.94319 13.6548 8.02511 13.7099 8.11538 13.7475C8.20565 13.7851 8.30247 13.8045 8.40025 13.8045C8.49804 13.8045 8.59486 13.7851 8.68512 13.7475C8.77539 13.7099 8.85732 13.6548 8.92618 13.5854L14.9706 7.54091C15.0458 7.47154 15.1058 7.38736 15.1469 7.29365C15.1879 7.19995 15.2091 7.09876 15.2091 6.99646C15.2091 6.89417 15.1879 6.79298 15.1469 6.69927C15.1058 6.60557 15.0458 6.52138 14.9706 6.45202Z"
                                    fill="white"
                                 />
                              </svg>
                              <span
                                 class="good-page__intro-preview-complectation-equipments-item-wrapper-description-item-value"
                                 >{{ item.value }}</span
                              >
                           </li>
                           <!--==============================-->

                           <!-- ДОПОЛНИТЕЛЬНО -->
                           <h6
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-description-item-title"
                              style="margin-top: 16px; margin-bottom: 12px"
                           >
                              Дополнительно:
                           </h6>

                           <li
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-description-item good-page__intro-preview-complectation-equipments-item-wrapper-description-item-advanced"
                              v-for="(item, index) in optionsAdvanced"
                           >
                              <svg
                                 class="good-page__intro-preview-complectation-equipments-item-wrapper-active-svg good-page__intro-preview-complectation-equipments-item-wrapper-active-svg-square"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 20 20"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <rect
                                    width="20"
                                    height="20"
                                    rx="0"
                                    fill="none"
                                 />
                                 <path
                                    d="M14.9706 6.45202C14.9018 6.38259 14.8198 6.32748 14.7296 6.28988C14.6393 6.25227 14.5425 6.23291 14.4447 6.23291C14.3469 6.23291 14.2501 6.25227 14.1598 6.28988C14.0696 6.32748 13.9876 6.38259 13.9188 6.45202L8.40025 11.9779L6.08173 9.65202C6.01024 9.58295 5.92584 9.52865 5.83335 9.4922C5.74086 9.45575 5.64211 9.43788 5.54271 9.4396C5.44332 9.44132 5.34524 9.4626 5.25407 9.50222C5.1629 9.54185 5.08043 9.59904 5.01136 9.67054C4.9423 9.74204 4.88799 9.82644 4.85154 9.91892C4.8151 10.0114 4.79722 10.1102 4.79894 10.2096C4.80066 10.309 4.82194 10.407 4.86157 10.4982C4.90119 10.5894 4.95838 10.6718 5.02988 10.7409L7.87433 13.5854C7.94319 13.6548 8.02511 13.7099 8.11538 13.7475C8.20565 13.7851 8.30247 13.8045 8.40025 13.8045C8.49804 13.8045 8.59486 13.7851 8.68512 13.7475C8.77539 13.7099 8.85732 13.6548 8.92618 13.5854L14.9706 7.54091C15.0458 7.47154 15.1058 7.38736 15.1469 7.29365C15.1879 7.19995 15.2091 7.09876 15.2091 6.99646C15.2091 6.89417 15.1879 6.79298 15.1469 6.69927C15.1058 6.60557 15.0458 6.52138 14.9706 6.45202Z"
                                    fill="white"
                                 />
                              </svg>
                              <span
                                 class="good-page__intro-preview-complectation-equipments-item-wrapper-description-item-value"
                                 >{{ item.value }}</span
                              >
                           </li>
                           <!--==============================-->

                           <NuxtLink
                              class="good-page__intro-preview-complectation-equipments-item-wrapper-description-constructor-link"
                           >
                              <Button
                                 class="good-page__intro-preview-complectation-equipments-item-wrapper-description-constructor-button"
                                 >Открыть конструктор</Button
                              >
                           </NuxtLink>
                        </ul>
                     </div>
                  </div>
               </div>

               <div
                  class="good-page__intro-preview-complectation-price good-page__intro-preview-complectation-price-column"
               >
                  <!-- <span
                     class="good-page__intro-preview-complectation-price-sale"
                     v-if="!badge"
                  >
                     ...%
                  </span> -->

                  <span
                     class="good-page__intro-preview-complectation-price-sale"
                     v-if="badge"
                  >
                     {{ badge }}
                  </span>

                  <p
                     class="good-page__intro-preview-complectation-price-value"
                     v-if="!productInfo"
                  >
                     ...<span></span>
                  </p>
                  <p
                     class="good-page__intro-preview-complectation-price-value"
                     v-if="productInfo"
                  >
                     {{ productInfo.price }} ₽
                     <span v-if="productInfo">
                        {{ productInfo.price_before }} ₽</span
                     >
                  </p>
                  <!-- НЕТ В НАЛИЧИИ -->
                  <div
                     class="good-page__intro-preview-complectation-price-stock"
                     :class="{ active: preorder }"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                     >
                        <circle
                           class="preorder-circle-border"
                           cx="8"
                           cy="8"
                           r="7.25"
                           stroke="#04B769"
                           stroke-width="1.5"
                        />
                        <circle
                           class="preorder-circle"
                           cx="8"
                           cy="8"
                           r="3"
                           fill="#04B769"
                        />
                     </svg>

                     <p
                        class="good-page__intro-preview-complectation-price-stock-text"
                     >
                        В наличии
                     </p>
                  </div>

                  <Button
                     type="button"
                     @click="popupActivating"
                     class="good-page__intro-preview-complectation-price-btn"
                     >Получить предложение</Button
                  >

                  <Button
                     type="button"
                     @click="popupActivating"
                     class="good-page__intro-preview-complectation-price-btn good-page__intro-preview-complectation-price-btn-mobile"
                     >Подробнее</Button
                  >
               </div>
            </div>
         </div>
      </section>

      <section class="good-page__tabs container">
         <ul class="good-page__tabs-list">
            <li
               :class="{
                  'good-page__tabs-list-item': true,
                  active: activeTab === 'description',
               }"
               @click="setActiveTab('description')"
            >
               Описание
            </li>
            <li
               :class="{
                  'good-page__tabs-list-item': true,
                  active: activeTab === 'characteristics',
               }"
               @click="setActiveTab('characteristics')"
            >
               Характеристики
            </li>

            <li
               :class="{
                  'good-page__tabs-list-item': true,
                  active: activeTab === 'delivery',
               }"
               @click="setActiveTab('delivery')"
            >
               Доставка
            </li>
            <li
               :class="{
                  'good-page__tabs-list-item': true,
                  active: activeTab === 'payment',
               }"
               @click="setActiveTab('payment')"
            >
               Оплата и лизинг
            </li>

            <li
               :class="{
                  'good-page__tabs-list-item': true,
                  active: activeTab === 'warranty',
               }"
               @click="setActiveTab('warranty')"
            >
               Гарантии
            </li>
         </ul>
         <!-- ОПИСАНИЕ -->
         <div
            class="good-page__tabs-description good-page__tabs-content"
            :class="{ active: activeTab === 'description' }"
         >
            <h6 class="good-page__tabs-description-title">О товаре</h6>

            <p class="good-page__tabs-description-text" v-if="!productInfo">
               Недорогой ленточнопильный станок Cormak c оптимальным диапазоном
               резки предназначен для профессиональных работ. Отличается
               производительностью и простотой в использовании. Несмотря на
               небольшие размеры и вес станок стабилен, не вибрирует при резки
               даже больших материалов. Рама станка поворачивается в обе
               стороны, что является большим плюсом при резке металла под углом.
               Подача при резке гравитационная с помощью двухкамерного
               гидроцилиндра. Управление опусканием рычага обеспечивается
               клапаном, регулирующим поток масла между камерами цилиндра.
               Станок оборудован концевым выключателем и выключателем в
               соответствии со степенью защиты IP54. Машина автоматически
               останавливается после окончания резки. Дополнительным
               преимуществом станка является возможность пиления в вертикальном
               положении, что можно использовать не только для пиления металла,
               но и для столярных работ.
            </p>

            <p class="good-page__tabs-description-text" v-if="productInfo">
               {{ productInfo.description }}
            </p>
         </div>

         <!-- ХАРАКТЕРИСТИКИ -->
         <div
            class="good-page__tabs-characteristics good-page__tabs-content"
            :class="{ active: activeTab === 'characteristics' }"
         >
            <h6 class="good-page__tabs-description-title">
               Общие характиристики
            </h6>
            <ul class="good-page__tabs-characteristics-list" v-if="productInfo">
               <li
                  class="good-page__tabs-characteristics-list-item"
                  v-for="item in productInfo.attributes"
               >
                  {{ item.property.title }}
                  <span> {{ item.value }}</span>
               </li>
            </ul>
            <!-- <ul class="good-page__tabs-characteristics-list">
               <li class="good-page__tabs-characteristics-list-item">
                  Модель:
                  <span> CORMAK G5013W (BS-128HDR)</span>
               </li>
               <li class="good-page__tabs-characteristics-list-item">
                  Тип:
                  <span>Ручной</span>
               </li>

               <li class="good-page__tabs-characteristics-list-item">
                  Производитель:
                  <span>Cormak</span>
               </li>
               <li class="good-page__tabs-characteristics-list-item">
                  Страна производителя:
                  <span>Польша</span>
               </li>

               <li class="good-page__tabs-characteristics-list-item">
                  Мощность двигателя, кВт:
                  <span>1,1</span>
               </li>
               <li class="good-page__tabs-characteristics-list-item">
                  Тип привода:
                  <span>Редуктор</span>
               </li>

               <li class="good-page__tabs-characteristics-list-item">
                  Регулировка подачи:
                  <span>Гидроцилиндр</span>
               </li>
               <li class="good-page__tabs-characteristics-list-item">
                  Поворот:
                  <span>Пильная рама</span>
               </li>

               <li class="good-page__tabs-characteristics-list-item">
                  Зажим заготовки:
                  <span>Механический</span>
               </li>
               <li class="good-page__tabs-characteristics-list-item">
                  Скорость ленточного полотна, м/мин:
                  <span>36 / 72</span>
               </li>

               <li class="good-page__tabs-characteristics-list-item">
                  Производительность, резов/смену:
                  <span>до 150</span>
               </li>
               <li class="good-page__tabs-characteristics-list-item">
                  Регулируемые тиски:
                  <span>-45° - 60°</span>
               </li>

               <li class="good-page__tabs-characteristics-list-item">
                  Поворотная рама, °:
                  <span>до 60</span>
               </li>
            </ul> -->

            <h6
               class="good-page__tabs-description-title good-page__tabs-description-title-second"
            >
               Габаритные размеры
            </h6>

            <ul class="good-page__tabs-characteristics-list">
               <li class="good-page__tabs-characteristics-list-item">
                  Длина, мм:
                  <span> 1 450</span>
               </li>
               <li class="good-page__tabs-characteristics-list-item">
                  Высота, мм::
                  <span>1 020</span>
               </li>

               <li class="good-page__tabs-characteristics-list-item">
                  Ширина, мм:
                  <span>720</span>
               </li>
               <li class="good-page__tabs-characteristics-list-item">
                  Вес нетто, кг:
                  <span>220</span>
               </li>

               <li class="good-page__tabs-characteristics-list-item">
                  Вес брутто, кг:
                  <span>275</span>
               </li>
            </ul>
         </div>

         <!-- ДОСТАВКА -->
         <div
            class="good-page__tabs-delivery good-page__tabs-content"
            :class="{ active: activeTab === 'delivery' }"
         >
            <div class="good-page__tabs-delivery-description">
               <h6 class="good-page__tabs-description-title">
                  Доставка транспортной компанией по России и СНГ
               </h6>

               <p class="good-page__tabs-description-text">
                  Компания «Станкобокс» осуществляет доставку оборудования
                  сборными грузами привлеченным транспортом, либо
                  индивидуальным, выделенным под заказ клиента, транспортом.
                  Специалисты компании помогут вам произвести грузоперевозки в
                  любую точку России или за границу – в Беларусь, Казахстан,
                  Киргизию, Армению.
               </p>
               <p class="good-page__tabs-description-text">
                  Если вы не планируете осуществлять самовывоз оборудования, мы
                  сделаем доставку груза до адреса удобной для Вас транспортной
                  компании.
               </p>
               <p class="good-page__tabs-description-text">
                  Доставка оборудования в пределах города Санкт-Петербурга
                  осуществляется в течение следующего рабочего дня после оплаты,
                  в заранее согласованное с заказчиком время.<br />
                  Для доставки особых грузов и перевозок по нестандартным
                  маршрутам мы разрабатываем индивидуальные логистические схемы.
               </p>
               <p class="good-page__tabs-description-text">
                  Мы сотрудничаем с такими транспортными компаниями как Деловые
                  линии, Байкал Сервис, Энергия, ПЭК, ЖелДорЭкспедиция, а так же
                  с другими транспортными компаниями по требованию заказчика.
               </p>
               <p class="good-page__tabs-description-text">
                  В случае необходимости разгрузку груза производят
                  водители-экспедиторы, специально выделенные грузчики,
                  приезжающие по адресу получателя груза в том числе с
                  применением подъёмно-транспортной техники. Согласование работ
                  происходит по телефону с получателем груза.
               </p>
            </div>

            <div class="good-page__tabs-delivery-benefits">
               <div class="good-page__tabs-delivery-benefits-card">
                  <h4 class="good-page__tabs-delivery-benefits-card-title">
                     Оборудование
                  </h4>

                  <p class="good-page__tabs-delivery-benefits-card-item">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                     Доставка от 1 дня
                  </p>
                  <p class="good-page__tabs-delivery-benefits-card-item">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M11 21C4 21 4 18 4 18V12M18 22H21M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3ZM19.5 19.429H21.833V16H17.167V19.429H19.5Z"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                     от 20 000 ₽
                  </p>
               </div>

               <div class="good-page__tabs-delivery-benefits-card">
                  <h4 class="good-page__tabs-delivery-benefits-card-title">
                     Доставка в СПб
                  </h4>

                  <p class="good-page__tabs-delivery-benefits-card-item">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                     Доставка от 1 дня
                  </p>
                  <p class="good-page__tabs-delivery-benefits-card-item">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M11 21C4 21 4 18 4 18V12M18 22H21M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3ZM19.5 19.429H21.833V16H17.167V19.429H19.5Z"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                     от 290 ₽
                  </p>
               </div>

               <div class="good-page__tabs-delivery-benefits-card">
                  <h4 class="good-page__tabs-delivery-benefits-card-title">
                     Доставка в СПб
                  </h4>

                  <p class="good-page__tabs-delivery-benefits-card-item">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                     На след. день после оплаты
                  </p>
                  <p class="good-page__tabs-delivery-benefits-card-item">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M11 21C4 21 4 18 4 18V12M18 22H21M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3ZM19.5 19.429H21.833V16H17.167V19.429H19.5Z"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                     бесплатно
                  </p>
               </div>
            </div>
         </div>

         <div
            class="good-page__tabs-delivery-map good-page__tabs-delivery good-page__tabs-content"
            :class="{ active: activeTab === 'delivery' }"
         >
            <div class="good-page__tabs-delivery-map-description">
               <h6
                  class="good-page__tabs-delivery-map-description-title good-page__tabs-description-title"
               >
                  Самовывоз оборудования в Санкт-Петербурге
               </h6>

               <p
                  class="good-page__tabs-delivery-map-description-subtitle"
                  style="margin-top: 32px"
               >
                  Адрес склада:
                  <span style="margin-left: 12px"
                     >191119, Санкт-Петербург, ул. Черняховского, дом 10,лит. Д,
                     пом.3-Н</span
                  >
               </p>
               <p class="good-page__tabs-delivery-map-description-subtitle">
                  График работы:
               </p>
               <p
                  class="good-page__tabs-delivery-map-description-times"
                  style="margin-top: 12px"
               >
                  С понедельника по пятницу: <span>09:00 – 18:00</span>
               </p>
               <p
                  class="good-page__tabs-delivery-map-description-times"
                  style="margin-top: 8px"
               >
                  Суббота – воскресенье: <span>Выходной</span>
               </p>
               <p class="good-page__tabs-delivery-map-description-subtitle">
                  Телефон:
               </p>

               <p class="good-page__tabs-delivery-map-description-phone">
                  8 (812) 575-50-23
               </p>
            </div>

            <div class="good-page__tabs-delivery-map-preview">
               <img src="/img/Good-page/map.png" alt="Расположение на карте" />

               <NuxtLink>Показать на карте</NuxtLink>
            </div>
         </div>

         <!-- ОПЛАТА/ЛИЗИНГ -->
         <div
            class="good-page__tabs-payment good-page__tabs-content"
            :class="{ active: activeTab === 'payment' }"
         >
            <h6 class="good-page__tabs-description-title">Оплата</h6>

            <p class="good-page__tabs-description-text">
               Оплатить свой заказ Вы можете банковским переводом денег между
               расчетными счетами организаций на основании выставленного счета
               или по договору. <br />
               Сроки, условия и детали оплаты оговариваются при оформлении
               заказа с менеджерами отдела продаж.
            </p>

            <div class="good-page__tabs-payment-wrapper">
               <div
                  class="good-page__tabs-payment-wrapper-description good-page__tabs-delivery-description"
               >
                  <h6 class="good-page__tabs-description-title">Лизинг</h6>

                  <p class="good-page__tabs-description-text">
                     Наше оборудование можно приобрести в лизинг. Мы работаем с
                     различными лизинговыми компаниями и зарекомендовали себя
                     как надежного поставщика и партнера.
                  </p>
                  <p class="good-page__tabs-description-text">
                     Мы сотрудничаем с такими лизинговыми компаниями:
                  </p>
                  <p class="good-page__tabs-description-text">
                     "Интерлизинг" <br />
                     "Балтийский лизинг" <br />
                     "Роделен" <br />
                     "Уралпромлизинг", <br />
                     "Национальная Лизинговая Компания», <br />
                     "УралБизнесЛизинг" и др.
                  </p>
                  <p class="good-page__tabs-description-text">
                     Также Вы можете обратиться в свою лизинговую компанию. Для
                     того чтобы оформить сделку, необходимо у нас запросить
                     коммерческое предложение, прислав запрос с реквизитами.
                  </p>
               </div>

               <div
                  class="good-page__tabs-payment-wrapper-benefits good-page__tabs-delivery-benefits"
               >
                  <div class="good-page__tabs-delivery-benefits-card">
                     <h4 class="good-page__tabs-delivery-benefits-card-title">
                        Срок лизинга
                     </h4>

                     <p class="good-page__tabs-delivery-benefits-card-item">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                        >
                           <path
                              d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#E31335"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                        от 1 года до 3х лет
                     </p>
                  </div>

                  <div class="good-page__tabs-delivery-benefits-card">
                     <h4 class="good-page__tabs-delivery-benefits-card-title">
                        Размер первого взноса
                     </h4>

                     <p class="good-page__tabs-delivery-benefits-card-item">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                        >
                           <path
                              d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
                              stroke="#E31335"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                           <path
                              d="M11 21C4 21 4 18 4 18V12M18 22H21M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3ZM19.5 19.429H21.833V16H17.167V19.429H19.5Z"
                              stroke="#E31335"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                        от 5% стоимости оборудования
                     </p>
                  </div>

                  <div class="good-page__tabs-delivery-benefits-card">
                     <h4 class="good-page__tabs-delivery-benefits-card-title">
                        Выкупной платеж
                     </h4>

                     <p class="good-page__tabs-delivery-benefits-card-item">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                        >
                           <path
                              d="M19 5L5 19M9 6.5C9 7.88071 7.88071 9 6.5 9C5.11929 9 4 7.88071 4 6.5C4 5.11929 5.11929 4 6.5 4C7.88071 4 9 5.11929 9 6.5ZM20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z"
                              stroke="#E31335"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                        от 3% до 20%
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <!-- ГАРАНТИИ -->
         <div
            class="good-page__tabs-warranty good-page__tabs-delivery good-page__tabs-content"
            :class="{ active: activeTab === 'warranty' }"
         >
            <div
               class="good-page__tabs-warranty-wrapper-description good-page__tabs-delivery-description"
            >
               <h6 class="good-page__tabs-description-title">
                  Гарантийное обслуживание
               </h6>

               <p class="good-page__tabs-description-text">
                  На все оборудование компания "Станкобокс" дает гарантию 12
                  месяцев с даты покупки.
               </p>
               <p class="good-page__tabs-description-text">
                  По гарантийному и после гарантийному обслуживанию обращайтесь
                  по телефону:
               </p>
               <p class="good-page__tabs-description-text">
                  +7 921-795-75-70 <br />
                  +7 909-545-88-81 <br />
                  +7 912-568-55-12 <br />
               </p>
               <p class="good-page__tabs-description-text">
                  Также вы можете отправить заполненный бланк рекламации нэ
                  лектронную почту: service@stankobox.ru
               </p>
            </div>

            <div
               class="good-page__tabs-warranty-wrapper-benefits good-page__tabs-delivery-benefits"
            >
               <div class="good-page__tabs-delivery-benefits-card">
                  <h4 class="good-page__tabs-delivery-benefits-card-title">
                     Рекламация
                  </h4>

                  <p
                     class="good-page__tabs-delivery-benefits-card-item"
                     @click="downloadAsPDF"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                     >
                        <path
                           d="M8 16H14M11 5V12M11 12L14.5 8.5M11 12L7.5 8.5M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z"
                           stroke="#E31335"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                     Скачать бланк рекламации
                  </p>
               </div>
            </div>
         </div>
      </section>

      <section class="good-page__mobile-accordions" v-if="productInfo">
         <ul class="good-page__mobile-accordions-list">
            <!-- ОПИСАНИЕ -->
            <li
               class="good-page__mobile-accordion-list-item"
               @click="toggleAccordion(0)"
            >
               <div class="good-page__mobile-accordion-list-item-title">
                  <h3 class="good-page__mobile-accordion-list-item-title-text">
                     Описание
                  </h3>
                  <svgArrowBottom />
               </div>

               <div class="good-page__mobile-accordion-list-item-content">
                  <p
                     class="good-page__mobile-accordion-list-item-content-description"
                  >
                     {{ productInfo.description }}
                  </p>
               </div>
            </li>

            <!-- ХАРАКТЕРИСТИКИ -->
            <li
               class="good-page__mobile-accordion-list-item"
               @click="toggleAccordion(1)"
            >
               <div class="good-page__mobile-accordion-list-item-title">
                  <h3 class="good-page__mobile-accordion-list-item-title-text">
                     Характеристики
                  </h3>

                  <svgArrowBottom />
               </div>

               <div class="good-page__mobile-accordion-list-item-content">
                  <h6 class="good-page__tabs-description-title">
                     Общие характиристики
                  </h6>

                  <ul
                     class="good-page__tabs-characteristics-list"
                     v-if="productInfo"
                  >
                     <li
                        class="good-page__tabs-characteristics-list-item"
                        v-for="item in productInfo.attributes"
                     >
                        {{ item.property.title }}
                        <span> {{ item.value }}</span>
                     </li>
                  </ul>

                  <h6
                     class="good-page__tabs-description-title good-page__tabs-description-title-second"
                  >
                     Габаритные размеры
                  </h6>

                  <ul class="good-page__tabs-characteristics-list">
                     <li class="good-page__tabs-characteristics-list-item">
                        Длина, мм:
                        <span> 1 450</span>
                     </li>
                     <li class="good-page__tabs-characteristics-list-item">
                        Высота, мм::
                        <span>1 020</span>
                     </li>

                     <li class="good-page__tabs-characteristics-list-item">
                        Ширина, мм:
                        <span>720</span>
                     </li>
                     <li class="good-page__tabs-characteristics-list-item">
                        Вес нетто, кг:
                        <span>220</span>
                     </li>

                     <li class="good-page__tabs-characteristics-list-item">
                        Вес брутто, кг:
                        <span>275</span>
                     </li>
                  </ul>
               </div>
            </li>

            <!-- ДОСТАВКА -->
            <li
               class="good-page__mobile-accordion-list-item"
               @click="toggleAccordion(2)"
            >
               <div class="good-page__mobile-accordion-list-item-title">
                  <h3 class="good-page__mobile-accordion-list-item-title-text">
                     Доставка
                  </h3>

                  <svgArrowBottom />
               </div>

               <div class="good-page__mobile-accordion-list-item-content">
                  <div class="good-page__tabs-delivery-description">
                     <h6 class="good-page__tabs-description-title">
                        Доставка транспортной компанией по России и СНГ
                     </h6>

                     <p class="good-page__tabs-description-text">
                        Компания «Станкобокс» осуществляет доставку оборудования
                        сборными грузами привлеченным транспортом, либо
                        индивидуальным, выделенным под заказ клиента,
                        транспортом. Специалисты компании помогут вам произвести
                        грузоперевозки в любую точку России или за границу – в
                        Беларусь, Казахстан, Киргизию, Армению.
                     </p>
                     <p class="good-page__tabs-description-text">
                        Если вы не планируете осуществлять самовывоз
                        оборудования, мы сделаем доставку груза до адреса
                        удобной для Вас транспортной компании.
                     </p>
                     <p class="good-page__tabs-description-text">
                        Доставка оборудования в пределах города Санкт-Петербурга
                        осуществляется в течение следующего рабочего дня после
                        оплаты, в заранее согласованное с заказчиком время.<br />
                        Для доставки особых грузов и перевозок по нестандартным
                        маршрутам мы разрабатываем индивидуальные логистические
                        схемы.
                     </p>
                     <p class="good-page__tabs-description-text">
                        Мы сотрудничаем с такими транспортными компаниями как
                        Деловые линии, Байкал Сервис, Энергия, ПЭК,
                        ЖелДорЭкспедиция, а так же с другими транспортными
                        компаниями по требованию заказчика.
                     </p>
                     <p class="good-page__tabs-description-text">
                        В случае необходимости разгрузку груза производят
                        водители-экспедиторы, специально выделенные грузчики,
                        приезжающие по адресу получателя груза в том числе с
                        применением подъёмно-транспортной техники. Согласование
                        работ происходит по телефону с получателем груза.
                     </p>
                  </div>

                  <div class="good-page__tabs-delivery-benefits">
                     <div class="good-page__tabs-delivery-benefits-card">
                        <h4
                           class="good-page__tabs-delivery-benefits-card-title"
                        >
                           Оборудование
                        </h4>

                        <p class="good-page__tabs-delivery-benefits-card-item">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                           Доставка от 1 дня
                        </p>
                        <p class="good-page__tabs-delivery-benefits-card-item">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                              <path
                                 d="M11 21C4 21 4 18 4 18V12M18 22H21M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3ZM19.5 19.429H21.833V16H17.167V19.429H19.5Z"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                           от 20 000 ₽
                        </p>
                     </div>

                     <div class="good-page__tabs-delivery-benefits-card">
                        <h4
                           class="good-page__tabs-delivery-benefits-card-title"
                        >
                           Доставка в СПб
                        </h4>

                        <p class="good-page__tabs-delivery-benefits-card-item">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                           Доставка от 1 дня
                        </p>
                        <p class="good-page__tabs-delivery-benefits-card-item">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                              <path
                                 d="M11 21C4 21 4 18 4 18V12M18 22H21M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3ZM19.5 19.429H21.833V16H17.167V19.429H19.5Z"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                           от 290 ₽
                        </p>
                     </div>

                     <div class="good-page__tabs-delivery-benefits-card">
                        <h4
                           class="good-page__tabs-delivery-benefits-card-title"
                        >
                           Доставка в СПб
                        </h4>

                        <p class="good-page__tabs-delivery-benefits-card-item">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                           На след. день после оплаты
                        </p>
                        <p class="good-page__tabs-delivery-benefits-card-item">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                              <path
                                 d="M11 21C4 21 4 18 4 18V12M18 22H21M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3ZM19.5 19.429H21.833V16H17.167V19.429H19.5Z"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                           бесплатно
                        </p>
                     </div>
                  </div>

                  <div
                     class="good-page__tabs-delivery-map good-page__tabs-delivery good-page__tabs-content"
                  >
                     <div class="good-page__tabs-delivery-map-description">
                        <h6
                           class="good-page__tabs-delivery-map-description-title good-page__tabs-description-title"
                        >
                           Самовывоз оборудования в Санкт-Петербурге
                        </h6>

                        <p
                           class="good-page__tabs-delivery-map-description-subtitle"
                        >
                           Адрес склада:
                           <span
                              >191119, Санкт-Петербург, ул. Черняховского, дом
                              10,лит. Д, пом.3-Н</span
                           >
                        </p>
                        <p
                           class="good-page__tabs-delivery-map-description-subtitle"
                        >
                           График работы:
                        </p>
                        <p
                           class="good-page__tabs-delivery-map-description-times"
                        >
                           С понедельника по пятницу: <span>09:00 – 18:00</span>
                        </p>
                        <p
                           class="good-page__tabs-delivery-map-description-times"
                        >
                           Суббота – воскресенье: <span>Выходной</span>
                        </p>
                        <p
                           class="good-page__tabs-delivery-map-description-subtitle"
                           style="margin-top: 12px"
                        >
                           Телефон:
                        </p>

                        <p
                           class="good-page__tabs-delivery-map-description-phone"
                           style="margin-top: 0px"
                        >
                           8 (812) 575-50-23
                        </p>
                     </div>

                     <div class="good-page__tabs-delivery-map-preview">
                        <img
                           src="/img/Good-page/map.png"
                           alt="Расположение на карте"
                        />

                        <NuxtLink>Показать на карте</NuxtLink>
                     </div>
                  </div>
               </div>
            </li>

            <!-- ОПЛАТА И ЛИЗИНГ  -->
            <li
               class="good-page__mobile-accordion-list-item"
               @click="toggleAccordion(3)"
            >
               <div class="good-page__mobile-accordion-list-item-title">
                  <h3 class="good-page__mobile-accordion-list-item-title-text">
                     Оплата и лизинг
                  </h3>

                  <svgArrowBottom />
               </div>

               <div class="good-page__mobile-accordion-list-item-content">
                  <h6 class="good-page__tabs-description-title">Оплата</h6>

                  <p class="good-page__tabs-description-text">
                     Оплатить свой заказ Вы можете банковским переводом денег
                     между расчетными счетами организаций на основании
                     выставленного счета или по договору. <br />
                     Сроки, условия и детали оплаты оговариваются при оформлении
                     заказа с менеджерами отдела продаж.
                  </p>

                  <div class="good-page__tabs-payment-wrapper">
                     <div
                        class="good-page__tabs-payment-wrapper-description good-page__tabs-delivery-description"
                     >
                        <h6 class="good-page__tabs-description-title">
                           Лизинг
                        </h6>

                        <p class="good-page__tabs-description-text">
                           Наше оборудование можно приобрести в лизинг. Мы
                           работаем с различными лизинговыми компаниями и
                           зарекомендовали себя как надежного поставщика и
                           партнера.
                        </p>
                        <p class="good-page__tabs-description-text">
                           Мы сотрудничаем с такими лизинговыми компаниями:
                        </p>
                        <p class="good-page__tabs-description-text">
                           "Интерлизинг" <br />
                           "Балтийский лизинг" <br />
                           "Роделен" <br />
                           "Уралпромлизинг", <br />
                           "Национальная Лизинговая Компания», <br />
                           "УралБизнесЛизинг" и др.
                        </p>
                        <p class="good-page__tabs-description-text">
                           Также Вы можете обратиться в свою лизинговую
                           компанию. Для того чтобы оформить сделку, необходимо
                           у нас запросить коммерческое предложение, прислав
                           запрос с реквизитами.
                        </p>
                     </div>

                     <div
                        class="good-page__tabs-payment-wrapper-benefits good-page__tabs-delivery-benefits"
                     >
                        <div class="good-page__tabs-delivery-benefits-card">
                           <h4
                              class="good-page__tabs-delivery-benefits-card-title"
                           >
                              Срок лизинга
                           </h4>

                           <p
                              class="good-page__tabs-delivery-benefits-card-item"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                              >
                                 <path
                                    d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                    stroke="#E31335"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                 />
                              </svg>
                              от 1 года до 3х лет
                           </p>
                        </div>

                        <div class="good-page__tabs-delivery-benefits-card">
                           <h4
                              class="good-page__tabs-delivery-benefits-card-title"
                           >
                              Размер первого взноса
                           </h4>

                           <p
                              class="good-page__tabs-delivery-benefits-card-item"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                              >
                                 <path
                                    d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
                                    stroke="#E31335"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                 />
                                 <path
                                    d="M11 21C4 21 4 18 4 18V12M18 22H21M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3ZM19.5 19.429H21.833V16H17.167V19.429H19.5Z"
                                    stroke="#E31335"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                 />
                              </svg>
                              от 5% стоимости оборудования
                           </p>
                        </div>

                        <div class="good-page__tabs-delivery-benefits-card">
                           <h4
                              class="good-page__tabs-delivery-benefits-card-title"
                           >
                              Выкупной платеж
                           </h4>

                           <p
                              class="good-page__tabs-delivery-benefits-card-item"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                              >
                                 <path
                                    d="M19 5L5 19M9 6.5C9 7.88071 7.88071 9 6.5 9C5.11929 9 4 7.88071 4 6.5C4 5.11929 5.11929 4 6.5 4C7.88071 4 9 5.11929 9 6.5ZM20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z"
                                    stroke="#E31335"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                 />
                              </svg>
                              от 3% до 20%
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </li>

            <!-- ГАРАНТИИ  -->
            <li
               class="good-page__mobile-accordion-list-item"
               @click="toggleAccordion(4)"
            >
               <div class="good-page__mobile-accordion-list-item-title">
                  <h3 class="good-page__mobile-accordion-list-item-title-text">
                     Гарантии
                  </h3>

                  <svgArrowBottom />
               </div>

               <div class="good-page__mobile-accordion-list-item-content">
                  <div
                     class="good-page__tabs-warranty-wrapper-description good-page__tabs-delivery-description"
                  >
                     <h6 class="good-page__tabs-description-title">
                        Гарантийное обслуживание
                     </h6>

                     <p class="good-page__tabs-description-text">
                        На все оборудование компания "Станкобокс" дает гарантию
                        12 месяцев с даты покупки.
                     </p>
                     <p class="good-page__tabs-description-text">
                        По гарантийному и после гарантийному обслуживанию
                        обращайтесь по телефону:
                     </p>
                     <p class="good-page__tabs-description-text">
                        +7 921-795-75-70 <br />
                        +7 909-545-88-81 <br />
                        +7 912-568-55-12 <br />
                     </p>
                     <p class="good-page__tabs-description-text">
                        Также вы можете отправить заполненный бланк рекламации
                        нэ лектронную почту: service@stankobox.ru
                     </p>
                  </div>

                  <div
                     class="good-page__tabs-warranty-wrapper-benefits good-page__tabs-delivery-benefits"
                  >
                     <div class="good-page__tabs-delivery-benefits-card">
                        <h4
                           class="good-page__tabs-delivery-benefits-card-title"
                        >
                           Рекламация
                        </h4>

                        <p
                           class="good-page__tabs-delivery-benefits-card-item"
                           @click="downloadAsPDF"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                           >
                              <path
                                 d="M8 16H14M11 5V12M11 12L14.5 8.5M11 12L7.5 8.5M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z"
                                 stroke="#E31335"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                           Скачать бланк рекламации
                        </p>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </section>

      <!-- Блок рекомендации -->
      <section
         @mousedown.left="onMouseDown"
         v-if="cards.length"
         class="offers container"
      >
         <h2 class="equipments__title little-defolt-title">
            Вам может понадобиться
         </h2>

         <VueHorizontal
            ref="horizontal"
            class="horizontal offers__list_desktop"
            snap="none"
            :button="false"
            @scroll="onScroll"
         >
            <div v-for="card in cards" :key="card.id" class="offers__list-item">
               <!-- Слайдер с изображениями товара -->
               <div class="offers__list-item-slider">
                  <swiper
                     :pagination="{
                        dynamicBullets: true,
                     }"
                     :modules="modules"
                     class="mySwiper"
                  >
                     <swiper-slide
                        v-for="(image, index) in card.images"
                        :key="index"
                     >
                        <img
                           :src="`/img/Good-page/Recomendations/${
                              index + 1
                           }.png`"
                           alt="Product Image"
                        />
                     </swiper-slide>
                  </swiper>
               </div>

               <!-- Название товара -->
               <NuxtLink
                  to="https://google.com"
                  class="offers__list-item-title little-defolt-title"
                  ondragstart="return false;"
                  >{{ card.name }}</NuxtLink
               >

               <!-- Актуальная цена -->
               <span
                  class="offers__list-item-current-price"
                  style="margin-top: 8px"
                  >{{ card.currentPrice }}</span
               >
            </div>
         </VueHorizontal>
      </section>
   </section>
</template>
<script>
import { ref, onMounted } from "vue";

import VueHorizontal from "vue-horizontal";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";

export default {
   data() {
      return {
         left: 0,
         originX: 0,
         originLeft: 0,
         activeAccordionIndex: null,
         preorder: null,
         baseEquipment: false,
         descriptionActive: false,

         advancedDescriptionActive: false,

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
         badge: null,

         options: [
            { value: "FANUC (на англ. языке)" },
            { value: "Siemens 808D (на рус. языке)" },
            { value: "Siemens 808D (на англ. языке)" },
         ],

         optionsAdvanced: [
            { value: "Гидравлический патрон 160 мм" },
            { value: "Устройство для автоматической подачи прутка" },
         ],
      };
   },
   async created() {
      try {
         const response = await axios.get(
            `https://stankobox.runova.tech/api/products/product/${this.id}`
         );

         const response2 = await axios.get(
            `https://stankobox.runova.tech/api/badges/product/${this.id}`
         );

         this.productInfo = response.data;
         this.preorder = this.productInfo.preorder;
         //  console.log("Product Preorder:", this.preorder);

         this.badge = response2.data.badges;
         const firstBadge = this.badge[0];

         if (firstBadge && firstBadge.value) {
            const badgeValue = firstBadge.value;
            this.badge = badgeValue;
            // console.log("Badge Value:", badgeValue);

            // console.log("Badges:", this.badge);
         } else {
            // Если массив бейджей пуст, присваиваем this.badge значение false
            this.badge = false;
            console.log("No badges found");
         }
      } catch (error) {
         console.error("Error fetching product info:", error);
      }
   },

   beforeUnmount() {
      this.onMouseUp();
   },

   methods: {
      //Выбор пункта внутри расширенной комплектации

      // Выбор комплектации
      advancedDescriptionActivating() {
         this.advancedDescriptionActive = !this.advancedDescriptionActive;
      },
      descriptionActivating() {
         this.descriptionActive = !this.descriptionActive;
      },
      baseEquipmentActivating() {
         this.baseEquipment = true;
      },
      advancedEquipmentActivating() {
         this.baseEquipment = false;
      },

      downloadAsPDF() {
         window.print(); // Это вызовет диалоговое окно печати браузера с опцией сохранения в PDF
      },
      toggleAccordion(index) {
         // Remove 'active' class from all elements
         const accordionItems = document.querySelectorAll(
            ".good-page__mobile-accordion-list-item"
         );
         accordionItems.forEach((item, i) => {
            if (i === index) {
               // Toggle 'active' class on the clicked element
               item.classList.toggle("active");
               if (item.classList.contains("active")) {
                  this.activeAccordionIndex = index;
               } else {
                  this.activeAccordionIndex = null;
               }
            } else {
               // Remove 'active' class from other elements
               item.classList.remove("active");
            }
         });
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
      const popupActive = ref(false);

      const timePickerActive = ref(false);
      let body;

      onMounted(() => {
         body = document.body;
      });

      onBeforeUnmount(() => {
         // Вызывайте ваш метод перед удалением компонента
         onMouseUp();
      });

      function popupActivating() {
         popupActive.value = !popupActive.value;
         body?.classList.toggle("bodyHiddenPopup");
      }
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

         popupActive,
         timePickerActive,
         popupActivating,
      };

      //===================================
   },

   components: {
      VueHorizontal,
      Swiper,
      SwiperSlide,
   },

   mounted() {
      // Функция для добавления класса active к блоку с классом good-page__intro-preview-complectation-equipments-item-wrapper-description-item-advanced, если он найден

      // Функция для добавления класса active к блоку с классом good-page__intro-preview-complectation-equipments-item-wrapper-description-item-advanced, если он найден

      const itemsAdvanced = document.querySelectorAll(
         ".good-page__intro-preview-complectation-equipments-item-wrapper-description-item-advanced"
      );

      itemsAdvanced.forEach((item) => {
         item.addEventListener("click", () => {
            item.classList.toggle("active");
         });
      });

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
};
</script>
<style lang="scss"></style>
