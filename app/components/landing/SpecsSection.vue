<template>
  <section id="specs" class="specs-section relative">
    <div class="container">
      <LandingSectionHead eyebrow="Technical Specs">
        Product <span class="text-gradient">Specifications</span>
      </LandingSectionHead>
      <p class="text-center section-sub" style="margin-top: -2.5rem; margin-bottom: 4.5rem;">
        Explore the advanced hardware design, mechanical engineering, and edge AI powering the SmartBin.
      </p>

      <div class="specs-list">
        <div v-for="(item, i) in specs" :key="item.id" v-motion :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="spec-row"
          :class="{ 'row-reverse': i % 2 !== 0 }">
          <!-- Image Column -->
          <div class="spec-image-col">
            <div class="spec-image-glow-bg"></div>
            <img :src="item.img" :alt="item.title" class="spec-showcase-img" />
          </div>

          <!-- Content Column -->
          <div class="spec-content-col">
            <span class="spec-category">{{ item.category }}</span>
            <h3 class="spec-title">{{ item.title }}</h3>
            <p class="spec-desc">{{ item.desc }}</p>
            <div class="spec-pills">
              <span v-for="(pill, index) in item.pills" :key="pill" class="spec-pill-tag"
                :class="{ 'alt-tag': index % 2 !== 0 }">
                {{ pill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import all existing high-quality product images (excluding table spec screenshot)
import chassisImg from '~/assets/images/front.png'
import blueprintImg from '~/assets/images/blueprint.jpeg'
import computingImg from '~/assets/images/hardware.jpeg'
import visionImg from '~/assets/images/back.png'
import displayImg from '~/assets/images/display.png'

const specs = [
  {
    id: 'chassis',
    category: 'Structure & Build',
    title: 'Premium Industrial Design',
    img: chassisImg,
    desc: 'The SmartBin features a sleek, robust stainless steel enclosure designed for premium office spaces, public buildings, and smart campuses. Standing 130 cm tall with a ø60 cm footprint, it integrates a 10.1-inch user feedback screen.',
    pills: ['Stainless Steel', '4x80L Capacity', '10.1" Full HD Screen', 'ø60 cm Footprint']
  },
  {
    id: 'blueprint',
    category: 'Engineering',
    title: 'Precision Dimension Schematic',
    img: blueprintImg,
    desc: 'A precise schematic highlighting the internal layout, sensor housing, and physical dimensions. Engineered to maximize internal collection volume while preserving a compact floor footprint.',
    pills: ['ø60 cm Footprint', '130 cm Height', '4 Chutes', 'Sealed Chassis']
  },
  {
    id: 'computing',
    category: 'Edge Computing',
    title: 'Nvidia Jetson AI Hardware',
    img: computingImg,
    desc: 'Powered by the Nvidia Jetson Orin Nano system-on-module. Delivers 40 TOPS of AI compute, executing complex deep neural networks on the edge in milliseconds for offline waste classification and total user privacy.',
    pills: ['Nvidia Jetson', '40 TOPS Compute', 'Local Inference', 'Data Privacy']
  },
  {
    id: 'vision',
    category: 'Computer Vision',
    title: '8MP High-Resolution Optics',
    img: visionImg,
    desc: 'Features a high-resolution 8-megapixel wide-angle camera sensor mounted in the bin crown. Paired with integrated LED ring-illumination to capture clear frames of discarded objects under any lighting.',
    pills: ['8MP Sensor', 'Wide-Angle Optics', 'LED Ring Flash', 'Instant Trigger']
  },
  {
    id: 'display',
    category: 'Interactive UI',
    title: '10.1" Touchscreen Interface',
    img: displayImg,
    desc: 'Equipped with a high-brightness 10.1-inch user feedback screen. It guides users with clear visual cues, interactive recycling gamification, and real-time statistics on sorting accuracy.',
    pills: ['10.1" Touchscreen', 'Capacitive Multi-Touch', 'Full HD Resolution', 'Real-Time Stats']
  }
]
</script>

<style scoped>
.specs-section {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: var(--surface-2);
  /* Restore light theme background */
  position: relative;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .specs-section {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
}

.specs-list {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  /* space between rows */
  margin-top: 4rem;
}

@media (min-width: 1024px) {
  .specs-list {
    gap: 8rem;
  }
}

.spec-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .spec-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5rem;
  }
}

/* Alternating rows on desktop */
@media (min-width: 1024px) {
  .spec-row.row-reverse .spec-image-col {
    order: 2;
  }

  .spec-row.row-reverse .spec-content-col {
    order: 1;
  }
}

/* Image Showcase Column */
.spec-image-col {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  border-radius: 2rem;
  background: linear-gradient(145deg, #0f1524 0%, #030712 100%);
  /* premium gradient backdrop */
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 12px 24px -10px rgba(0, 0, 0, 0.3),
    0 24px 48px -12px rgba(0, 0, 0, 0.5);
  /* deep shadow stack */
  overflow: hidden;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

@media (min-width: 640px) {
  .spec-image-col {
    height: 420px;
  }
}

/* Ambient glow behind each image */
.spec-image-glow-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.18) 0%, transparent 75%);
  pointer-events: none;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.spec-showcase-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.65));
  /* realistic object shadow */
}

.spec-row:hover .spec-image-col {
  border-color: rgba(16, 185, 129, 0.35);
  /* highlight container border on hover */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 20px 40px rgba(16, 185, 129, 0.12),
    /* premium green ambient glow */
    0 30px 60px -15px rgba(0, 0, 0, 0.6);
}

.spec-row:hover .spec-image-glow-bg {
  transform: scale(1.1);
  opacity: 1.3;
}

.spec-row:hover .spec-showcase-img {
  transform: scale(1.05) translateY(-5px);
  /* scale and gentle lift */
}

/* Content Column */
.spec-content-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.spec-category {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--brand-green);
  margin-bottom: 0.75rem;
}

.spec-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--foreground);
  /* Light theme foreground (dark color) */
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

@media (min-width: 640px) {
  .spec-title {
    font-size: 2.25rem;
  }
}

.spec-desc {
  font-size: 1rem;
  color: var(--muted-foreground);
  /* Light theme muted foreground (gray color) */
  line-height: 1.7;
  margin-bottom: 2rem;
}

.spec-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.spec-pill-tag {
  padding: 0.5rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 9999px;
  background-color: var(--brand-green-soft);
  color: var(--brand-green);
  border: 1px solid color-mix(in oklab, var(--brand-green) 12%, transparent);
}

.spec-pill-tag.alt-tag {
  background-color: var(--brand-blue-soft);
  color: var(--brand-blue);
  border: 1px solid color-mix(in oklab, var(--brand-blue) 12%, transparent);
}
</style>
