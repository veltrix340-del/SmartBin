<template>
  <div class="coming-soon-page hero-bg relative overflow-hidden">
    <!-- Grid Overlay -->
    <div class="absolute inset-0 grid-bg pointer-events-none" />

    <!-- Top simplified bar -->
    <header class="header-bar-simple relative z-10 w-full">
      <div class="container nav-content-simple">
        <NuxtLink to="/" class="logo-container">
          <img src="~/assets/images/Logo.jpg" alt="SmartBin Logo" class="brand-logo-img" />
          <span class="brand-name">SmartBin</span>
        </NuxtLink>
        <NuxtLink to="/" class="btn-back-home">
          <ArrowLeft class="h-4 w-4" />
          <span>Back to Home</span>
        </NuxtLink>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="main-content-coming container">
      <!-- Decorative background blur/glow -->
      <div class="glow-element glow-green pointer-events-none" />
      <div class="glow-element glow-blue pointer-events-none" />

      <!-- Floating Chips (hidden on small screens) -->
      <div class="float-chip chip-lora glass-card animate-float hidden-mobile">
        <span class="float-chip-icon">
          <Wifi class="h-4 w-4 text-[var(--brand-blue)]" />
        </span>
        <div class="float-chip-info">
          <div class="float-chip-label">LoRaWAN</div>
          <div class="float-chip-value">Active</div>
        </div>
      </div>

      <div class="float-chip chip-level glass-card animate-float hidden-mobile" style="animation-delay: -2s;">
        <span class="float-chip-icon">
          <Gauge class="h-4 w-4 text-[var(--brand-green)]" />
        </span>
        <div class="float-chip-info">
          <div class="float-chip-label">AI Sandbox</div>
          <div class="float-chip-value">98.4% Ready</div>
        </div>
      </div>

      <div class="float-chip chip-co2 glass-card animate-float hidden-mobile" style="animation-delay: -4s;">
        <span class="float-chip-icon">
          <Leaf class="h-4 w-4 text-[var(--brand-green)]" />
        </span>
        <div class="float-chip-info">
          <div class="float-chip-label">Eco Mode</div>
          <div class="float-chip-value">Enabled</div>
        </div>
      </div>

      <!-- Glassmorphic Card Container -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.95, y: 30 }"
        :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 600 } }"
        class="form-card-container glass-card shadow-elevated"
      >
        <div class="coming-soon-content">
          <div class="badge-row">
            <span class="demo-badge glass-tint">
              <span class="badge-pulse" />
              Launching Q3 2026
            </span>
          </div>
          <h2 class="form-title text-gradient">Interactive Demo Coming Soon</h2>
          <p class="form-subtitle">
            Our interactive IoT dashboard and real-time waste management simulation sandbox is currently under development. 
            We are building a comprehensive analytics platform for smart cities and enterprises.
          </p>

          <div class="action-row">
            <NuxtLink to="/" class="btn-large brand-gradient btn-success-home text-white">
              Return to Homepage <ArrowRight class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>

    <!-- Simple footer -->
    <footer class="footer-simple">
      <div class="container">
        © {{ new Date().getFullYear() }} Virginasia eMarketing Pvt Ltd. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import {
  ArrowRight,
  Wifi,
  Gauge,
  Leaf,
  ArrowLeft
} from '@lucide/vue'

useSeoMeta({
  title: 'Request Demo — SmartBin Coming Soon',
  description: 'Request early access to the SmartBin intelligent waste management platform and custom IoT-powered simulation sandbox.',
  ogTitle: 'Request SmartBin Demo Sandbox',
  ogDescription: 'Register for early access to SmartBin real-time waste analytics.',
})
</script>

<style scoped>
.coming-soon-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: var(--gradient-hero);
}

.header-bar-simple {
  position: relative;
  z-index: 10;
  width: 100%;
  border-bottom: 1px solid rgba(226, 232, 240, 0.4);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(16px);
}

.nav-content-simple {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-back-home {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted-foreground);
  transition: all 0.2s;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid var(--border);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-back-home:hover {
  color: var(--foreground);
  background-color: rgba(255, 255, 255, 0.8);
  border-color: color-mix(in oklab, var(--brand-green) 40%, var(--border));
}

.main-content-coming {
  position: relative;
  z-index: 10;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  min-height: calc(100vh - 8rem);
}

/* Blur & Glows */
.glow-element {
  position: absolute;
  width: 300px;
  height: 300px;
  filter: blur(100px);
  opacity: 0.12;
  pointer-events: none;
  border-radius: 50%;
  z-index: 1;
}

.glow-green {
  background-color: var(--brand-green);
  top: 25%;
  left: 20%;
}

.glow-blue {
  background-color: var(--brand-blue);
  bottom: 25%;
  right: 20%;
}

/* Card Container */
.form-card-container {
  padding: 2.5rem;
  border-radius: 2rem;
  position: relative;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  backdrop-filter: blur(24px);
  width: 100%;
  max-width: 540px;
  box-shadow: var(--shadow-elevated);
}

@media (max-width: 640px) {
  .form-card-container {
    padding: 2rem 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

/* Content State layout */
.coming-soon-content {
  display: flex;
  flex-direction: column;
}

.badge-row {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

/* Demo Badge */
.demo-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  background-color: var(--brand-green-soft);
  color: oklch(0.4 0.15 155);
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(114, 240, 165, 0.2);
}

.badge-pulse {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  background-color: var(--brand-green);
  animation: pulse-ring 2s infinite;
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--foreground);
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  line-height: 1.25;
}

.form-subtitle {
  font-size: 1rem;
  color: var(--muted-foreground);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.action-row {
  display: flex;
  justify-content: center;
  width: 100%;
}

.btn-success-home {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  gap: 0.5rem;
}

/* Floating Chips positions & responsive */
.float-chip {
  position: absolute;
  border-radius: 1rem;
  padding: 0.625rem 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  z-index: 5;
}

.float-chip-icon {
  display: grid;
  place-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(226, 232, 240, 0.6);
}

.float-chip-info {
  line-height: 1.25;
  text-align: left;
}

.float-chip-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted-foreground);
}

.float-chip-value {
  font-size: 0.875rem;
  font-weight: 600;
}

.chip-lora {
  top: 20%;
  left: calc(50% - 400px);
}

.chip-level {
  top: 45%;
  right: calc(50% - 400px);
}

.chip-co2 {
  bottom: 20%;
  left: calc(50% - 380px);
  right: auto;
  width: auto;
}

.hidden-mobile {
  display: block;
}

@media (max-width: 1024px) {
  .hidden-mobile {
    display: none !important;
  }
}

/* Success pulse ring */
.animate-pulse-ring-success {
  position: relative;
}

.footer-simple {
  position: relative;
  z-index: 10;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.75rem;
  color: var(--muted-foreground);
  border-top: 1px solid rgba(226, 232, 240, 0.4);
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
