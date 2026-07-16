<template>
  <section class="sustainability-section">
    <div class="container sustainability-grid">
      <div v-motion :initial="{ opacity: 0, x: -30 }" :visible="{ opacity: 1, x: 0, transition: { duration: 700 } }">
        <span class="sustainability-badge">
          Sustainability
        </span>
        <h2 class="sustainability-title">
          Building <span class="text-gradient">cleaner, smarter</span> communities
        </h2>
        <p class="sustainability-desc">
          SmartBin doesn't just optimize logistics — it measures and reports the environmental impact
          of every collection. ESG-ready, auditable, and built for a low-carbon future.
        </p>
        <ul class="sustainability-list">
          <li v-for="t in checkItems" :key="t" class="sustainability-list-item">
            <span class="sustainability-list-icon-wrapper">
              <CheckCircle2 class="sustainability-list-icon" />
            </span>
            {{ t }}
          </li>
        </ul>
      </div>
      <div
        v-motion :initial="{ opacity: 0, x: 30 }" :visible="{ opacity: 1, x: 0, transition: { duration: 700 } }"
        class="sustainability-stats-grid"
      >
        <div v-for="s in stats" :key="s.l" class="sustainability-stat-card glass-card shadow-elevated">
          <span class="sustainability-stat-icon-wrapper" :style="s.color === 'green' ? 'background-color: var(--brand-green-soft); color: oklch(0.4 0.17 155)' : 'background-color: var(--brand-blue-soft); color: oklch(0.4 0.17 230)'">
            <component :is="s.icon" class="sustainability-stat-icon" />
          </span>
          <div class="sustainability-stat-val text-gradient">{{ s.v }}</div>
          <div class="sustainability-stat-lbl">{{ s.l }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle2, Leaf, Recycle, Truck, ShieldCheck } from '@lucide/vue'

const checkItems = [
  'Real-time carbon footprint tracking',
  'Recycling diversion analytics',
  'ESG-compliant audit reports',
  'Green impact visualizations for stakeholders',
]

const stats = [
  { v: '1.2M', l: 'kg CO₂ saved', icon: Leaf, color: 'green' },
  { v: '68%', l: 'Recycling rate', icon: Recycle, color: 'blue' },
  { v: '42%', l: 'Fewer truck-km', icon: Truck, color: 'green' },
  { v: 'A+', l: 'ESG score', icon: ShieldCheck, color: 'blue' },
]
</script>
