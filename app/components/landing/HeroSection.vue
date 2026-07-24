<template>
  <section class="hero-section hero-bg relative overflow-hidden">
    <div class="absolute inset-0 grid-bg pointer-events-none" />
    <div class="container hero-grid">

      <!-- Left column -->
      <div
        class="hero-text-col"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <span class="hero-badge glass-card">
          <span class="hero-badge-pulse" />
          Industry 4.0 · IoT · AI Analytics
        </span>
        <h1 class="hero-title">
          Transform Waste Management with
          <span class="text-gradient">Smart Intelligence</span>
        </h1>
        <p class="hero-desc">
          Monitor, track, and optimize waste collection in real time using IoT-powered
          SmartBin technology — built for smart cities, industries, and enterprises.
        </p>
        <div class="hero-cta">
          <NuxtLink to="/coming-soon" class="btn-large brand-gradient shadow-glow-green">
            Request Demo <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
        <div class="hero-stats-row">
          <div
            v-for="(s, i) in stats" :key="s.l"
            v-motion
            :initial="{ opacity: 0, y: 12 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 + i * 80, duration: 500 } }"
            class="hero-stat-card glass-card"
          >
            <div class="hero-stat-val text-gradient">{{ s.v }}</div>
            <div class="hero-stat-lbl">{{ s.l }}</div>
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div
        class="hero-visual-col relative"
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
      >
        <div class="hero-visual-wrapper">
          <!-- Glow rings -->
          <div class="hero-visual-ring-1" />
          <div class="hero-visual-ring-2" />
          <div class="hero-visual-ring-3" />

          <!-- Hero 3D Model -->
          <div class="hero-visual-img-container animate-float">
            <model-viewer
              :src="modelUrl"
              alt="SmartBin 3D Model"
              auto-rotate
              camera-controls
              ar
              shadow-intensity="1"
              environment-image="neutral"
              exposure="1"
              interaction-prompt="none"
              class="hero-3d-model"
            ></model-viewer>
          </div>

          <!-- Floating data chips -->
          <div class="float-chip chip-lora glass-card">
            <span class="float-chip-icon">
              <Wifi class="h-4 w-4 text-[var(--brand-blue)]" />
            </span>
            <div class="float-chip-info">
              <div class="float-chip-label">LoRaWAN</div>
              <div class="float-chip-value">Online</div>
            </div>
          </div>

          <div class="float-chip chip-level glass-card">
            <span class="float-chip-icon">
              <Gauge class="h-4 w-4 text-[var(--brand-green)]" />
            </span>
            <div class="float-chip-info">
              <div class="float-chip-label">Fill Level</div>
              <div class="float-chip-value">68%</div>
            </div>
          </div>

          <div class="float-chip chip-signal glass-card">
            <span class="float-chip-icon">
              <Signal class="h-4 w-4 text-[var(--brand-blue)]" />
            </span>
            <div class="float-chip-info">
              <div class="float-chip-label">Signal</div>
              <div class="float-chip-value">-72 dBm</div>
            </div>
          </div>

          <div class="float-chip chip-co2 glass-card">
            <span class="float-chip-icon">
              <Leaf class="h-4 w-4 text-[var(--brand-green)]" />
            </span>
            <div class="float-chip-info">
              <div class="float-chip-label">CO₂ Saved</div>
              <div class="float-chip-value">124 kg</div>
            </div>
          </div>

          <!-- Pulse ring -->
          <span class="hero-visual-pulse animate-pulse-ring" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Wifi, Gauge, Signal, Leaf } from '@lucide/vue'
import { onMounted } from 'vue'

const config = useRuntimeConfig()
const modelUrl = `${config.app.baseURL}models/3d-model.glb`

onMounted(async () => {
  await import('@google/model-viewer')
})

const stats = [
  { v: '95%', l: 'Collection Efficiency' },
  { v: '40%', l: 'Cost Reduction' },
  { v: '24/7', l: 'Real-Time Monitoring' },
  { v: 'AI', l: 'Powered Analytics' },
]
</script>

<style scoped>
.hero-3d-model {
  width: 90%;
  height: 90%;
  outline: none;
  --poster-color: transparent;
}
</style>
