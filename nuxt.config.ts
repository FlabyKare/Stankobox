// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   //    modules: ["@nuxt/ui"],
   //    modules: ["nuxt-swiper"],
   //    swiper: {
   //       prefix: "Swiper",
   //       styleLang: "css",
   //       modules: ["navigation", "pagination"], // all modules are imported by default
   //    },

   //    plugins: ["@/plugins/fancybox.js"],

   //    plugins: [{ src: "~/plugins/fancybox.client.js", mode: "client" }],

   plugins: ["@/plugins/fancybox.client.js"],

   devtools: { enabled: true },
   css: ["assets/css/main.css"],
});
