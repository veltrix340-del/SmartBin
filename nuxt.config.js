export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  ssr: false,

  nitro: {
    preset: "github_pages"
  },

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: ['@vueuse/motion/nuxt'],

  css: ['~/assets/css/main.css'],

  imports: {
    autoImport: true,
  },

  app: {
    baseURL: "/SmartBin/",

    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "SmartBin — Intelligent Waste Management Platform",

      meta: [
        {
          name: "description",
          content:
            "Monitor, track, and optimize waste collection in real time using IoT-powered SmartBin technology."
        }
      ],

      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        }
      ]
    }
  }
})