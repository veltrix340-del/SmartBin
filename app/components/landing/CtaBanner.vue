<template>
  <section id="cta" class="cta-section">
    <div class="container">
      <div class="cta-banner-card brand-gradient relative overflow-hidden text-center shadow-elevated">
        <div class="cta-grid-bg grid-bg" />
        <div class="cta-content">
          <h2 class="cta-title">
            Ready to upgrade your waste management?
          </h2>
          <p class="cta-desc">
            Join the cities and enterprises building cleaner, smarter operations with SmartBin.
          </p>
          <div class="cta-actions">
            <NuxtLink to="/coming-soon" class="btn-white">
              Book a Demo <ArrowRight class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink to="/coming-soon" class="btn-translucent">
              Contact Sales
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from '@lucide/vue'
</script>
