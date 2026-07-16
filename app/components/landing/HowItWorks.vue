<template>
  <section id="how" class="how-section">
    <div class="container">
      <LandingSectionHead eyebrow="Process Flow">
        AI-Powered <span class="text-gradient">Sorting, in five steps</span>
      </LandingSectionHead>
      <div class="how-timeline-container">
        <div class="how-timeline-line" />
        <div class="how-grid-5">
          <div
            v-for="(s, i) in steps" :key="s.t"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: i * 100, duration: 500 } }"
            class="how-step"
          >
            <div class="how-step-badge-wrapper">
              <div class="how-step-bg-glow brand-gradient" />
              <div class="how-step-card glass-card shadow-elevated">
                <component :is="s.icon" class="h-8 w-8 text-[var(--brand-green)]" />
              </div>
              <span class="how-step-num brand-gradient shadow-glow-green">
                {{ i + 1 }}
              </span>
            </div>
            <h3 class="how-step-title">{{ s.t }}</h3>
            <p class="how-step-desc">{{ s.d }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { UserPlus, Camera, Cpu, Settings, Shuffle } from '@lucide/vue'

const steps = [
  { icon: UserPlus, t: 'Users Throw Waste', d: 'User deposits discarded waste into the single top crown opening.' },
  { icon: Camera, t: 'Camera Captures Image', d: 'High-speed camera instantly captures high-resolution imagery of the waste.' },
  { icon: Cpu, t: 'AI Classifies Waste', d: 'Onboard deep learning model processes the image to predict waste type (plastic, paper, metal, etc.).' },
  { icon: Settings, t: 'Servo Motor Opens Bin', d: 'A high-torque servo motor opens the corresponding shutter in real-time.' },
  { icon: Shuffle, t: 'Directed Disposal', d: 'Waste is successfully and cleanly directed into the designated internal bin partition.' },
]
</script>
