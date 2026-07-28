<template>
  <section id="demo-video" class="video-section relative overflow-hidden">
    <!-- Ambient background glows -->
    <div class="video-glow-1 pointer-events-none" />
    <div class="video-glow-2 pointer-events-none" />
    
    <div class="container">
      <div class="video-row" v-motion :initial="{ opacity: 0, y: 40 }" :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        
        <!-- Video Column (Only the portrait video with tech backdrops) -->
        <div class="video-media-col">
          <!-- Holographic decorative backdrops -->
          <div class="video-bg-pattern pointer-events-none" />
          <div class="video-back-glow pointer-events-none" />
          <div class="video-deco-ring pointer-events-none" />
          
          <!-- Inner wrapper for video and play button overlay -->
          <div class="video-player-container" @click="togglePlay">
            <video 
              ref="videoPlayer"
              class="demo-video-player"
              :src="videoUrl"
              loop
              muted
              playsinline
              @play="isPlaying = true"
              @pause="isPlaying = false"
            ></video>
            
            <!-- Central Glassmorphic Play/Pause Button Overlay -->
            <div class="play-btn-overlay" :class="{ 'is-playing': isPlaying }">
              <svg v-if="!isPlaying" class="control-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <svg v-else class="control-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Content Column -->
        <div class="video-content-col">
          <span class="video-category">Product Demonstration</span>
          <h3 class="video-title">See the SmartBin <span class="text-gradient">In Action</span></h3>
          <p class="video-desc">
            Experience the instant computer vision object classification, automated lid sorting, and interactive touchscreen feedback in real-time. Watch how the bin automatically processes discarded waste, opening the correct sorting chute while updating local analytics on the display.
          </p>
          <div class="video-pills">
            <span class="video-pill-tag">AI Classification</span>
            <span class="video-pill-tag alt-tag">Optics Trigger</span>
            <span class="video-pill-tag">Automated Lid Chutes</span>
            <span class="video-pill-tag alt-tag">Real-Time Telemetry</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const config = useRuntimeConfig()
const videoUrl = `${config.app.baseURL}video/smartbin-demo.mp4`
const videoPlayer = ref(null)
const videoSection = ref(null)
const isPlaying = ref(false)

let observer = null

const togglePlay = () => {
  if (!videoPlayer.value) return
  if (videoPlayer.value.paused) {
    videoPlayer.value.muted = false   // Unmute so the user hears audio
    videoPlayer.value.play()
  } else {
    videoPlayer.value.pause()
  }
}

// Auto-pause when the video section scrolls out of view
onMounted(() => {
  const section = document.getElementById('demo-video')
  if (!section) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting && videoPlayer.value && !videoPlayer.value.paused) {
        videoPlayer.value.pause()
        videoPlayer.value.muted = true  // Re-mute so it doesn't blast on next scroll-in
      }
    },
    { threshold: 0.4 }   // Fires when less than 40% of the section is visible
  )
  observer.observe(section)
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<style scoped>
.video-section {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: var(--surface-1);
  position: relative;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .video-section {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
}

.video-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .video-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5rem;
  }
}

/* Video Column styling (Clean, no frame, with dynamic backdrops) */
.video-media-col {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
}

/* Video Wrapper Container */
.video-player-container {
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 260px; /* Force optimal portrait aspect ratio sizing */
  aspect-ratio: 9 / 16;
  border-radius: 1.75rem;
  overflow: hidden;
  box-shadow: 
    0 15px 35px -10 rgba(0, 0, 0, 0.35),
    0 30px 60px -15px rgba(16, 185, 129, 0.2); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  background: #000;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

@media (min-width: 640px) {
  .video-player-container {
    max-width: 300px;
    border-radius: 2rem;
  }
}

.video-player-container:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 40px -5px rgba(0, 0, 0, 0.4),
    0 35px 70px -10px rgba(16, 185, 129, 0.3);
}

.demo-video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none; /* Let clicks register on the parent video-player-container */
}

/* Central Glassmorphic Play Button */
.play-btn-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  color: var(--brand-green);
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s;
  z-index: 10;
}

.video-player-container:hover .play-btn-overlay {
  transform: translate(-50%, -50%) scale(1.1);
  background: #ffffff;
}

.control-icon {
  width: 1.75rem;
  height: 1.75rem;
  transition: transform 0.2s;
}

/* Hide play button when video is active */
.play-btn-overlay.is-playing {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
  pointer-events: none;
}

/* Reveal pause button on hover when active */
.video-player-container:hover .play-btn-overlay.is-playing {
  opacity: 0.85;
  transform: translate(-50%, -50%) scale(1);
  pointer-events: auto;
}

/* Tech dotted pattern backing */
.video-bg-pattern {
  position: absolute;
  width: 120%;
  height: 120%;
  z-index: 1;
  background-image: radial-gradient(rgba(16, 185, 129, 0.15) 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  background-position: center;
  -webkit-mask-image: radial-gradient(circle, black 35%, transparent 70%);
  mask-image: radial-gradient(circle, black 35%, transparent 70%);
}

/* Ambient glow directly behind video */
.video-back-glow {
  position: absolute;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%);
  filter: blur(40px);
  z-index: 2;
}

/* Dashed tech ring rotating slowly */
.video-deco-ring {
  position: absolute;
  width: 330px;
  height: 330px;
  border: 1px dashed rgba(16, 185, 129, 0.25);
  border-radius: 50%;
  z-index: 3;
  animation: rotate-slow 35s linear infinite;
}

@media (min-width: 640px) {
  .video-deco-ring {
    width: 380px;
    height: 380px;
  }
}

/* Content Column styling */
.video-content-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.video-category {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--brand-green);
  margin-bottom: 0.75rem;
}

.video-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--foreground);
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

@media (min-width: 640px) {
  .video-title {
    font-size: 2.25rem;
  }
}

.video-desc {
  font-size: 1rem;
  color: var(--muted-foreground);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.video-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.video-pill-tag {
  padding: 0.5rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 9999px;
  background-color: var(--brand-green-soft);
  color: var(--brand-green);
  border: 1px solid color-mix(in oklab, var(--brand-green) 12%, transparent);
}

.video-pill-tag.alt-tag {
  background-color: var(--brand-blue-soft);
  color: var(--brand-blue);
  border: 1px solid color-mix(in oklab, var(--brand-blue) 12%, transparent);
}

/* Ambient section glows */
.video-glow-1 {
  position: absolute;
  top: 30%;
  left: 5%;
  width: 400px;
  height: 400px;
  background: var(--brand-green-soft);
  opacity: 0.08;
  filter: blur(140px);
  border-radius: 50%;
  pointer-events: none;
}

.video-glow-2 {
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 450px;
  height: 450px;
  background: var(--brand-blue-soft);
  opacity: 0.06;
  filter: blur(150px);
  border-radius: 50%;
  pointer-events: none;
}

@keyframes rotate-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
