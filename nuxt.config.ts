// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["assets/css/style.scss", "assets/css/tailwind.css"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: [100, 300, 400],
        },
      },
    ],
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: "hireAlex",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Front-end development in JavaScript frameworks: VueJS and Nuxt, and back-end development in WordPress PHP and Google Cloud Functions combined with Googles Firestore NoSQL database.",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
