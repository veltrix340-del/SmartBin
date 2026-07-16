<template>
  <section id="industries" class="industries-section">
    <div class="container">
      <LandingSectionHead eyebrow="Industries">
        Built for every <span class="text-gradient">environment</span>
      </LandingSectionHead>
      <div class="industries-grid-4">
        <div
          v-for="(item, idx) in industries" :key="item.t"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible="{ opacity: 1, scale: 1, transition: { delay: idx * 40, duration: 400 } }"
          class="industry-card glass-card"
        >
          <div class="industry-card-icon-container brand-gradient shadow-glow-green">
            <component :is="item.icon" class="h-7 w-7" />
          </div>
          <h3 class="industry-card-title">{{ item.t }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Building2, Factory, Hospital, GraduationCap, Users, PlaneTakeoff, ShoppingBag } from '@lucide/vue'

const industries = [
  { icon: Building2, t: 'Smart Cities' },
  { icon: Factory, t: 'Manufacturing' },
  { icon: Hospital, t: 'Hospitals' },
  { icon: GraduationCap, t: 'Education' },
  { icon: Users, t: 'Residential' },
  { icon: PlaneTakeoff, t: 'Airports' },
  { icon: ShoppingBag, t: 'Shopping Malls' },
  { icon: Building2, t: 'Corporate Campuses' },
]
</script>
