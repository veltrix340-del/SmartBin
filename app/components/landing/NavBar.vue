<template>
  <header :class="['header-bar', { 'header-hidden': isHidden }]">
    <div class="container nav-content">
      <NuxtLink to="/" class="logo-container">
        <img src="~/assets/images/Logo.jpg" alt="Virginasia Logo" class="brand-logo-img" />
        <span class="brand-name">SmartBin</span>
      </NuxtLink>
      <nav class="nav-links">
        <a href="#solution">Solution</a>
        <a href="#specs">Specs</a>
        <a href="#how">How it works</a>
        <a href="#organization">About</a>
      </nav>
      <div class="nav-actions">
        <!-- <a href="#cta" class="btn-text">Sign in</a> -->
        <NuxtLink to="/coming-soon" class="btn-gradient brand-gradient shadow-glow-green">
          Request Demo
          <ArrowRight class="h-4 w-4" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from '@lucide/vue'

const isHidden = ref(false)
let lastScroll = 0

const handleScroll = () => {
  const current = window.scrollY

  // Always show navbar at the top
  if (current <= 10) {
    isHidden.value = false
    lastScroll = current
    return
  }

  // Hide when scrolling down
  if (current > lastScroll) {
    isHidden.value = true
  }

  // Show when scrolling up
  if (current < lastScroll) {
    isHidden.value = false
  }

  lastScroll = current
}

onMounted(() => {
  lastScroll = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header-bar {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s, backdrop-filter 0.3s;
}

.header-hidden {
  transform: translateY(-100%);
}

.nav-content {
  height: 4.75rem;
  /* Increased height from 4rem */
  transition: height 0.3s ease;
}
</style>
