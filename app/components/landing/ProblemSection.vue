<template>
  <section class="problem-section">
    <div class="container">
      <LandingSectionHead eyebrow="The Challenge">
        Traditional Waste Management is <span class="text-gradient">Broken</span>
      </LandingSectionHead>
      
      <div class="problem-split-grid">
        <!-- Left: Urgency & Proposal Context -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="problem-urgency-card glass-card relative overflow-hidden"
        >
          <div class="urgency-glow brand-gradient" />
          <div class="urgency-content">
            <div class="urgency-eyebrow">The Urgency</div>
            <h3 class="urgency-title">Why Now?</h3>
            <p class="urgency-paragraph">
              Nowadays, waste is a severe social problem. There is a clear need for a technology-driven, scalable solution that integrates automation, monitoring, and data analytics into existing waste management systems.
            </p>
            <div class="urgency-highlight-box">
              <span class="highlight-quote">"To overcome this situation, the promoter is submitting this innovative proposal."</span>
            </div>
          </div>
        </div>

        <!-- Right: Specific Pain Points -->
        <div class="problem-stack-list">
          <div
            v-for="(p, i) in pains" :key="p.t"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: i * 80, duration: 500 } }"
            class="problem-stack-card glass-card"
          >
            <div class="problem-stack-card-icon">
              <component :is="p.icon" class="h-5 w-5" />
            </div>
            <div class="problem-stack-card-info">
              <h4 class="problem-stack-card-title">{{ p.t }}</h4>
              <p class="problem-stack-card-desc">{{ p.d }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AlertTriangle, Route, TrendingUp, Activity, Recycle } from '@lucide/vue'

const pains = [
  { icon: Recycle, t: 'Recyclable Contamination', d: 'Poor segregation at the source leads to cross-contamination of recyclable waste.' },
  { icon: AlertTriangle, t: 'Overflowing Bins', d: 'Overflowing trash bins in public areas cause odor, litter, and hygiene issues.' },
  { icon: Route, t: 'Inefficient Routes', d: 'Trucks follow fixed paths, visiting empty bins and wasting fuel, time, and labor.' },
  { icon: Activity, t: 'No Real-Time Visibility', d: 'Lack of live telemetry prevents predictive planning and operational optimization.' },
  { icon: TrendingUp, t: 'Landfill & Environmental Burden', d: 'Escalating landfill volume and carbon footprints due to unsegregated disposal.' },
]
</script>
