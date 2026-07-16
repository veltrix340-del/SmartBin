<template>
  <section id="solution" class="solution-section relative">
    <div class="container">
      <LandingSectionHead eyebrow="The Solution">
        Meet <span class="text-gradient">SmartBin</span>
      </LandingSectionHead>
      <p class="text-center section-sub" style="margin-top: -2.5rem; margin-bottom: 3.5rem;">
        An end-to-end intelligent waste platform — sensors, network, cloud, AI and a beautiful operator experience.
      </p>
      <div class="cards-grid-4">
        <div
          v-for="(f, i) in feats" :key="f.t"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: (i % 4) * 50, duration: 500 } }"
          class="solution-card glass-card"
        >
          <div class="solution-card-icon brand-gradient shadow-glow-green">
            <component :is="f.icon" class="h-6 w-6" />
          </div>
          <h3 class="solution-card-title">{{ f.t }}</h3>
          <p class="solution-card-desc">{{ f.d }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Radio, Gauge, Cpu, BarChart3, Globe, ShieldAlert, Sparkles, Scale } from '@lucide/vue'

const feats = [
  { icon: Sparkles, t: 'AI Waste Classification', d: 'AI-based image recognition for automatic waste classification (plastic, paper, metal, organic, glass).' },
  { icon: Cpu, t: 'Edge AI Processing', d: 'Edge AI processing for faster and accurate classification directly on local hardware.' },
  { icon: Gauge, t: 'Ultrasonic Fill Monitoring', d: 'Ultrasonic sensors track fill levels in real-time, preventing overflow events.' },
  { icon: Scale, t: 'Weight Measurement', d: 'Integrated weight sensors for accurate waste weight and density measurement.' },
  { icon: Radio, t: 'Cloud-Connected Dashboard', d: 'Always-on Wi-Fi connectivity feeds telemetry to a cloud dashboard for real-time tracking.' },
  { icon: Globe, t: 'Municipal & Institutional Data', d: 'Integrated data/information hub for municipalities, panchayats, and large corporate campuses.' },
  { icon: BarChart3, t: 'Predictive Scheduling', d: 'Predictive waste collection scheduling, planning routes dynamically based on AI analytics.' },
  { icon: ShieldAlert, t: 'Smart Ecosystem', d: 'Combines intelligent hardware with an AI-based analytics platform to create a comprehensive waste ecosystem.' },
]
</script>
