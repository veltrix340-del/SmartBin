// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  ssr: false,

  app: {
    baseURL: "/SmartBin/"
  },

  nitro: {
    preset: "github_pages"
  },

  // Nuxt 4 future compatibility
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  // Nuxt modules
  modules: ['@vueuse/motion/nuxt'],

  // Global CSS
  css: ['~/assets/css/main.css'],

  // Auto-import Vue 3 composables
  imports: {
    autoImport: true,
  },

  // Global <head> — Google Fonts + SEO defaults
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'SmartBin — Intelligent Waste Management Platform',
      meta: [
        { name: 'description', content: 'Monitor, track, and optimize waste collection in real time using IoT-powered SmartBin technology. Built for smart cities, industries, and enterprises.' },
        { name: 'author', content: 'Virginasia eMarketing Pvt Ltd' },
        { property: 'og:title', content: 'SmartBin — Intelligent Waste Management Platform' },
        { property: 'og:description', content: 'IoT, AI, and real-time analytics for next-gen waste management.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap',
        },
      ],
    },
  },
})
