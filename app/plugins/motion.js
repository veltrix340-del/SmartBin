import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    try {
      if (!nuxtApp.vueApp.directive('motion')) {
        nuxtApp.vueApp.directive('motion', {
          getSSRProps() {
            return {}
          }
        })
      }
    } catch (e) {
      // Safely ignore if any registry error happens
    }
  }
})
