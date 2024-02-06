export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  tailwindcss: {
    config: {
      plugins: [require("@tailwindcss/forms")],
    },
  },
});
