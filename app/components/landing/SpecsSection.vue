<template>
  <section id="specs" class="specs-section relative">
    <div class="container">
      <LandingSectionHead eyebrow="Technical Specs">
        Interactive <span class="text-gradient">Explorer</span>
      </LandingSectionHead>
      <p class="text-center section-sub" style="margin-top: -2.5rem; margin-bottom: 4.5rem;">
        Explore the advanced hardware design, mechanical engineering, and edge AI powering the SmartBin.
      </p>

      <div class="explorer-container">
        <!-- Left Column: Large Media Showcase -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="explorer-showcase"
        >
          <!-- Media Wrapper -->
          <div class="explorer-media-wrapper">
            <!-- Render SVG wireframe if the blueprint model is selected with wireframe style, else render image -->
            <div v-if="activeItem.blueprintSvg" class="explorer-blueprint-frame">
              <!-- Y Axis Indicator (Height) -->
              <div class="explorer-line-y">
                <span class="explorer-label-y">Height: 130 cm</span>
              </div>

              <!-- SVG wireframe representation of the SmartBin -->
              <svg class="explorer-blueprint-svg" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="40" width="70" height="150" rx="10" />
                <rect x="30" y="55" width="40" height="25" rx="3" style="stroke-dasharray: 2,2;" />
                <circle cx="50" cy="67.5" r="4" />
                <rect x="25" y="95" width="50" height="25" rx="5" />
                <path d="M 25 40 Q 50 15 75 40 Z" />
                <circle cx="50" cy="30" r="3" style="fill: var(--brand-green);" />
                <line x1="50" y1="120" x2="50" y2="190" style="stroke-dasharray: 3,3;" />
                <line x1="15" y1="155" x2="85" y2="155" style="stroke-dasharray: 3,3;" />
              </svg>

              <!-- X Axis Indicator (Diameter) -->
              <div class="explorer-line-x">
                <span class="explorer-label-x">Diameter: ø60 cm</span>
              </div>
            </div>

            <!-- Standard Image render -->
            <img 
              v-else 
              :key="activeItem.id"
              :src="activeItem.img" 
              :alt="activeItem.title" 
              class="explorer-media-img"
            />
          </div>

          <!-- Technical Detail Panel -->
          <div class="explorer-detail-pane">
            <h4 class="explorer-detail-title">{{ activeItem.title }}</h4>
            <p class="explorer-detail-desc">{{ activeItem.desc }}</p>
            <div class="explorer-pills-row">
              <span 
                v-for="(pill, i) in activeItem.pills" 
                :key="pill" 
                class="explorer-pill"
                :class="{ 'alt-color': i % 2 !== 0 }"
              >
                {{ pill }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Explorer Index Sidebar -->
        <div class="explorer-sidebar">
          <div 
            v-for="group in groups" 
            :key="group.title" 
            class="explorer-group"
          >
            <div class="explorer-group-title">{{ group.title }}</div>
            <div class="explorer-item-list">
              <button 
                v-for="item in group.items" 
                :key="item.id"
                class="explorer-item"
                :class="{ 'is-active': activeId === item.id }"
                @click="activeId = item.id"
              >
                <div class="explorer-item-content">
                  <span class="explorer-item-label">{{ item.category }}</span>
                  <span class="explorer-item-val">{{ item.shortVal }}</span>
                </div>
                <ArrowRight class="h-5 w-5 explorer-item-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowRight } from '@lucide/vue'

// Import assets so Vite compiles and bundles them correctly with proper hashes/Base URLs
import binImg from '~/assets/images/bin.jpeg'
import hardwareImg from '~/assets/images/hardware.jpeg'
import mechanismImg from '~/assets/images/mechanism.jpeg'
import specsImg from '~/assets/images/specs.jpeg'

const activeId = ref('chassis')

const specs = [
  // Build specs
  {
    id: 'chassis',
    category: 'Structure',
    shortVal: 'Design & Dimensions',
    title: 'Premium Industrial Design',
    img: binImg,
    desc: 'The SmartBin features a sleek, robust stainless steel enclosure designed for premium office spaces, public buildings, and smart campuses. It stands 130 cm tall with a ø60 cm footprint, blending elegantly into modern architectural environments.',
    pills: ['130 cm Height', 'ø60 cm Footprint', 'Stainless Steel Build', 'Premium Aesthetics']
  },
  {
    id: 'blueprint',
    category: 'Engineering',
    shortVal: 'Technical Blueprint',
    title: 'Precision Dimension Schematic',
    blueprintSvg: true,
    desc: 'A precise CAD blueprint highlighting the internal layout, sensor housing, and physical dimensions. Engineered to maximize internal collection volume while preserving a compact floor footprint.',
    pills: ['ø60 cm Footprint', '130 cm Height', '4 Chutes', 'Sealed Chassis']
  },
  {
    id: 'volume',
    category: 'Capacity',
    shortVal: 'Quad-Chute 320L Volume',
    title: 'Quad 80L Waste Segregation',
    img: binImg,
    desc: 'Houses 4 independent, odor-insulated 80-liter collection bins (320 liters total volume). Ideal for multi-chute sorting of plastic, organic waste, paper, and non-recyclables.',
    pills: ['4 x 80 Liters', '320L Total Capacity', 'Odor-Sealed Chutes', 'Clean Separation']
  },
  // Electronics
  {
    id: 'jetson',
    category: 'Computing',
    shortVal: 'Nvidia Jetson Orin Nano',
    title: 'Edge AI Supercomputer',
    img: hardwareImg,
    desc: 'Powered by the Nvidia Jetson Orin Nano system-on-module. Delivers 40 TOPS of AI compute, executing complex deep neural networks on the edge in milliseconds for offline waste classification and total user privacy.',
    pills: ['Nvidia Jetson', '40 TOPS AI Compute', 'Edge Deep Learning', 'Absolute Privacy']
  },
  {
    id: 'camera',
    category: 'Vision',
    shortVal: '8MP High-Precision Camera',
    title: 'AI High-Res Optics',
    img: hardwareImg,
    desc: 'Features a high-resolution 8-megapixel wide-angle camera sensor mounted in the bin crown. Paired with integrated LED ring-illumination to capture clear frames of discarded objects under any lighting.',
    pills: ['8MP Sensor', 'Wide-Angle Optics', 'LED Ring Flash', 'Instant Trigger']
  },
  // Mechanical / AI
  {
    id: 'router',
    category: 'Mechanics',
    shortVal: 'Motorized Flap Router',
    title: 'Fast & Precise Sorting Mechanism',
    img: mechanismImg,
    desc: 'Equipped with a high-durability, motorized trapdoor mechanism that routes trash into its correct internal compartment in under 1.2 seconds. Features anti-jam safety optical sensors.',
    pills: ['< 1.2s Shifting Time', 'High-Torque Steppers', 'Anti-Jam Safeguards', 'Tested to 1M+ Cycles']
  },
  {
    id: 'sorting',
    category: 'Software AI',
    shortVal: '95%+ Classification Model',
    title: '90+ Categories Detected',
    img: specsImg,
    desc: 'The embedded computer vision model distinguishes paper, aluminum cans, PET bottles, food waste, and specialty categories with 95%+ sorting accuracy, sending analytics reports directly to the cloud dashboard.',
    pills: ['95%+ Accuracy', '90+ Waste Categories', 'Cloud Analytics Reports', 'Continuous Learning']
  }
]

const groups = [
  {
    title: 'Physical Build & Design',
    items: [specs[0], specs[1], specs[2]]
  },
  {
    title: 'Electronics & Vision',
    items: [specs[3], specs[4]]
  },
  {
    title: 'Mechanics & Intelligence',
    items: [specs[5], specs[6]]
  }
]

const activeItem = computed(() => {
  return specs.find(s => s.id === activeId.value) || specs[0]
})
</script>
