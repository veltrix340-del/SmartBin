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

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'model-viewer'
    }
  },

  vite: {
    assetsInclude: ['**/*.glb', '**/*.gltf']
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/",

    head: {
      htmlAttrs: {
        lang: "en"
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "SmartBin — Intelligent Waste Management Platform",

      meta: [
        {
          name: "description",
          content:
            "Monitor, track, and optimize waste collection in real time using IoT-powered SmartBin technology."
        },
        {
          name: "keywords",
          content: "SmartBin, IoT waste management, intelligent waste monitor, Virginasia eMarketing, smart city bin, AI waste sorting, solid waste monitoring, smart recycling bin, real-time waste tracking, smart recycling platform"
        },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      ],



      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico"
        },
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