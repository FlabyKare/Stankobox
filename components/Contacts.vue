<template>
   <section class="contacts">
      <aside class="contacts__wrapper container">
         <a href="mailto:info@stankobox.ru" class="contacts__wrapper-link">
            <img
               class="contacts__wrapper-link-icon"
               src="~/assets/img/icons/mail-icon.png"
               alt="Mail icon"
            />
            <p class="contacts__wrapper-link-text">info@stankobox.ru</p>
         </a>

         <div class="contacts__wrapper-links">
            <a href="tel:+78125755023" class="contacts__wrapper-link">
               <img
                  class="contacts__wrapper-link-icon"
                  src="~/assets/img/icons/phone-icon.png"
                  alt="Phone icon"
               />

               <p class="contacts__wrapper-link-text">
                  Санкт-Петербург +7 (812) 575-50-23
               </p>
            </a>

            <p class="contacts__wrapper-link contacts__wrapper-link_spacing">
               |
            </p>

            <a href="tel:78003029418" class="contacts__wrapper-link">
               <p class="contacts__wrapper-link-text">
                  Россия 7 (800) 302-94-18
               </p>

               <img
                  class="contacts__wrapper-link-icon"
                  src="~/assets/img/icons/info-icon.png"
                  alt="Info icon"
               />
            </a>
         </div>

         <Button class="contacts__wrapper-button contacts__wrapper-link"
            >Обратная связь</Button
         >
      </aside>
   </section>

   <section class="mobile-contacts container">
      <NuxtLink class="mobile-contacts__link" to="#">
         <svg
            width="25"
            height="25"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
               stroke="#828282"
               stroke-width="1.5"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
               stroke="#828282"
               stroke-width="1.5"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
         </svg>
      </NuxtLink>
      <NuxtLink class="mobile-contacts__link-logo">
         <img
            class="mobile-contacts__link-logo-img"
            src="~/assets/img/logo.png"
            alt=""
         />
      </NuxtLink>
      <NuxtLink class="mobile-contacts__link" to="#">
         <svg
            width="25"
            height="25"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M21 15.92V18.92C21.0011 19.1985 20.9441 19.4741 20.8325 19.7293C20.7209 19.9845 20.5573 20.2136 20.3521 20.4018C20.1469 20.5901 19.9046 20.7335 19.6408 20.8227C19.3769 20.9119 19.0974 20.945 18.82 20.92C15.7428 20.5856 12.787 19.5341 10.19 17.85C7.77383 16.3146 5.72534 14.2661 4.19 11.85C2.49998 9.24118 1.44824 6.27097 1.12 3.17997C1.09501 2.90344 1.12788 2.62474 1.2165 2.3616C1.30513 2.09846 1.44757 1.85666 1.63477 1.6516C1.82196 1.44653 2.04981 1.28268 2.30379 1.1705C2.55778 1.05831 2.83234 1.00024 3.11 0.999975H6.11C6.59531 0.995198 7.06579 1.16705 7.43376 1.48351C7.80173 1.79996 8.04208 2.23942 8.11 2.71997C8.23662 3.68004 8.47145 4.6227 8.81 5.52997C8.94455 5.8879 8.97366 6.27689 8.89391 6.65086C8.81415 7.02482 8.62886 7.36809 8.36 7.63998L7.09 8.90997C8.51356 11.4135 10.5865 13.4864 13.09 14.91L14.36 13.64C14.6319 13.3711 14.9752 13.1858 15.3491 13.1061C15.7231 13.0263 16.1121 13.0554 16.47 13.19C17.3773 13.5285 18.3199 13.7634 19.28 13.89C19.7658 13.9585 20.2094 14.2032 20.5265 14.5775C20.8437 14.9518 21.0122 15.4296 21 15.92Z"
               stroke="#828282"
               stroke-width="1.5"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
         </svg>
      </NuxtLink>
   </section>
</template>

<style lang="scss" scoped>
.contacts__wrapper-button {
   border: 1.5px solid #fff;
   background: transparent;

   &:hover {
      background: #fff;
      opacity: 1;
      color: #333;
   }
}

.mobile-contacts {
   * {
      transition: 0.25s ease-in-out;
   }
   @media (min-width: 900px) {
      display: none;
   }
}
</style>
