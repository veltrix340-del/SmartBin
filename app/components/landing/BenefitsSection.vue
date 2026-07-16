<template>
  <section class="benefits-section">
    <div class="container">
      <LandingSectionHead eyebrow="Benefits">
        Why organizations choose <span class="text-gradient">SmartBin</span>
      </LandingSectionHead>
      <div class="cards-grid-4">
        <div
          v-for="(b, i) in items" :key="b.t"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: (i % 4) * 60, duration: 500 } }"
          class="benefit-card"
        >
          <component :is="b.icon" class="benefit-card-icon" />
          <h3 class="benefit-card-title">{{ b.t }}</h3>
          <p class="benefit-card-desc">{{ b.d }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { TrendingUp, ShieldCheck, Leaf, Recycle, Zap, CheckCircle2, Users, Sparkles } from '@lucide/vue'

const items = [
  { icon: TrendingUp, t: 'Reduce Operational Costs', d: 'Cut fuel, manpower and overtime with intelligent routing.' },
  { icon: ShieldCheck, t: 'Prevent Bin Overflow', d: 'Predictive alerts stop overflow before it happens.' },
  { icon: Leaf, t: 'Hit Sustainability Goals', d: 'Track ESG metrics with auditable, real data.' },
  { icon: Recycle, t: 'Higher Recycling Efficiency', d: 'Stream segregation insights boost diversion rates.' },
  { icon: Zap, t: 'Real-Time Decisions', d: 'Live dashboards give operators an unfair advantage.' },
  { icon: CheckCircle2, t: 'Compliance Ready', d: 'Built-in reporting for environmental regulations.' },
  { icon: Users, t: 'Better Resource Allocation', d: 'Deploy crews and trucks where they matter most.' },
  { icon: Sparkles, t: 'Future-Proof Platform', d: 'Open APIs and modular sensors grow with your operation.' },
]
</script>
