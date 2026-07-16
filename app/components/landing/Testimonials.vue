<template>
  <section class="testimonials-section">
    <div class="container">
      <LandingSectionHead eyebrow="Testimonials">
        Operators love the <span class="text-gradient">SmartBin difference</span>
      </LandingSectionHead>
      <div class="testimonials-grid">
        <div
          v-for="(x, i) in testimonials" :key="x.n"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: i * 100, duration: 500 } }"
          class="testimonial-card glass-card"
        >
          <div class="testimonial-quote-mark">"</div>
          <p class="testimonial-quote">{{ x.q }}</p>
          <div class="testimonial-author-row">
            <div class="testimonial-avatar brand-gradient">
              {{ initials(x.n) }}
            </div>
            <div class="testimonial-author-info">
              <div class="testimonial-author-name">{{ x.n }}</div>
              <div class="testimonial-author-role">{{ x.r }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  { n: 'Anjali Rao', r: 'Smart City Director, Pune Municipal', q: 'SmartBin reduced our missed-collection complaints by 73% in the first quarter. The dashboard is what our control room had been missing for years.' },
  { n: 'Michael Chen', r: 'Facilities Lead, Northgate Mall', q: 'We deployed across 4 properties in 6 weeks. Routing alone paid for the platform in under a year.' },
  { n: 'Dr. Priya Menon', r: 'Sustainability Officer, Apollo Hospitals', q: 'Segregation tracking transformed our biomedical waste compliance. Audit reports now generate themselves.' },
]

const initials = (name) => name.split(' ').map(w => w[0]).join('')
</script>
