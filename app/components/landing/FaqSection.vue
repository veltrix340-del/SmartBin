<template>
  <section id="faq" class="faq-section">
    <div class="container faq-container">
      <LandingSectionHead eyebrow="FAQ">
        Questions, answered.
      </LandingSectionHead>
      <div class="faq-accordion-container">
        <div v-for="(item, i) in items" :key="item.q" class="faq-card glass-card">
          <button
            @click="open = open === i ? -1 : i"
            class="faq-trigger-btn"
          >
            <span>{{ item.q }}</span>
            <ChevronDown class="faq-chevron" :class="open === i ? 'is-open' : 'is-closed'" />
          </button>
          <div class="faq-content-wrapper" :class="open === i ? 'is-open' : 'is-closed'">
            <div class="faq-content-inner">
              <p class="faq-answer">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDown } from '@lucide/vue'

const open = ref(0)

const items = [
  { q: 'How long does deployment take?', a: 'A typical 50-bin pilot ships within 2 weeks. Multi-site enterprise rollouts run 4–8 weeks including operator training.' },
  { q: 'Which connectivity options do you support?', a: 'LoRaWAN, NB-IoT, 4G LTE-M and Wi-Fi. We pick the right fit for each site during the network survey.' },
  { q: 'Is the data secure?', a: 'Yes — TLS-encrypted telemetry, SOC 2-aligned cloud, role-based access and full audit logging out of the box.' },
  { q: 'Can we integrate with our existing ERP?', a: 'Absolutely. SmartBin ships open REST and webhook APIs, plus pre-built connectors for SAP, Oracle and Microsoft Dynamics.' },
  { q: "What's the ROI timeline?", a: 'Most customers see payback within 9–14 months from fuel, labor and overflow-incident savings alone.' },
]
</script>
