<template>
   <div class="time-picker">
      <div class="time-picker__hour">
         <button
            class="time-picker__hour-divider_top"
            type="button"
            @click="incrementHour"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 13 7"
               fill="none"
            >
               <path
                  d="M12.2071 6.65685C12.5976 6.26633 12.5976 5.63317 12.2071 5.24264L7.25736 0.292893C6.86684 -0.0976313 6.23367 -0.097631 5.84315 0.292893L0.893398 5.24264C0.502873 5.63316 0.502873 6.26633 0.893398 6.65685C1.28392 7.04738 1.91709 7.04738 2.30761 6.65685L6.55025 2.41421L10.7929 6.65685C11.1834 7.04738 11.8166 7.04738 12.2071 6.65685Z"
                  fill="#454545"
               />
            </svg>
         </button>
         <input v-model="hour" @input="validateHour" />
         <button
            class="time-picker__hour-divider_bottom"
            type="button"
            @click="decrementHour"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 13 7"
               fill="none"
            >
               <path
                  d="M0.792893 0.343146C0.402369 0.73367 0.402369 1.36683 0.792893 1.75736L5.74264 6.70711C6.13316 7.09763 6.76633 7.09763 7.15685 6.70711L12.1066 1.75736C12.4971 1.36684 12.4971 0.73367 12.1066 0.343146C11.7161 -0.0473785 11.0829 -0.0473785 10.6924 0.343146L6.44975 4.58579L2.20711 0.343146C1.81658 -0.0473785 1.18342 -0.0473785 0.792893 0.343146Z"
                  fill="#454545"
               />
            </svg>
         </button>
      </div>

      <span class="time-picker__divider">:</span>
      <div class="time-picker__minute">
         <button
            class="time-picker__minute-divider_top"
            type="button"
            @click="incrementMinute"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 13 7"
               fill="none"
            >
               <path
                  d="M12.2071 6.65685C12.5976 6.26633 12.5976 5.63317 12.2071 5.24264L7.25736 0.292893C6.86684 -0.0976313 6.23367 -0.097631 5.84315 0.292893L0.893398 5.24264C0.502873 5.63316 0.502873 6.26633 0.893398 6.65685C1.28392 7.04738 1.91709 7.04738 2.30761 6.65685L6.55025 2.41421L10.7929 6.65685C11.1834 7.04738 11.8166 7.04738 12.2071 6.65685Z"
                  fill="#454545"
               />
            </svg>
         </button>
         <input v-model="minute" @input="validateMinute" />
         <button
            class="time-picker__minute-divider_bottom"
            type="button"
            @click="decrementMinute"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 13 7"
               fill="none"
            >
               <path
                  d="M0.792893 0.343146C0.402369 0.73367 0.402369 1.36683 0.792893 1.75736L5.74264 6.70711C6.13316 7.09763 6.76633 7.09763 7.15685 6.70711L12.1066 1.75736C12.4971 1.36684 12.4971 0.73367 12.1066 0.343146C11.7161 -0.0473785 11.0829 -0.0473785 10.6924 0.343146L6.44975 4.58579L2.20711 0.343146C1.81658 -0.0473785 1.18342 -0.0473785 0.792893 0.343146Z"
                  fill="#454545"
               />
            </svg>
         </button>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         hour: 12,
         minute: 0,
      };
   },
   methods: {
      incrementHour() {
         this.hour = (this.hour + 1) % 24;
      },
      decrementHour() {
         this.hour = (this.hour - 1 + 24) % 24;
      },
      incrementMinute() {
         this.minute = (this.minute + 15) % 60;
      },
      decrementMinute() {
         this.minute = (this.minute - 15 + 60) % 60;
      },
      validateHour() {
         // Добавьте необходимую логику валидации для часов
         this.hour = Math.max(0, Math.min(23, this.hour));
      },
      validateMinute() {
         // Добавьте необходимую логику валидации для минут
         this.minute = Math.max(0, Math.min(59, this.minute));
      },
   },
};
</script>

<style lang="scss" scoped></style>
