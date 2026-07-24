<template>
  <section class="hero-section hero-bg relative overflow-hidden">
    <div class="absolute inset-0 grid-bg pointer-events-none" />
    <div class="container hero-grid">

      <!-- Left column -->
      <div class="hero-text-col" v-motion :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <span class="hero-badge glass-card">
          <span class="hero-badge-pulse" />
          Industry 4.0 · IoT · AI Analytics
        </span>
        <h1 class="hero-title">
          Transform Waste Management with
          <span class="text-gradient">Smart Intelligence</span>
        </h1>
        <p class="hero-desc">
          Monitor, track, and optimize waste collection in real time using IoT-powered
          SmartBin technology — built for smart cities, industries, and enterprises.
        </p>
        <div class="hero-cta">
          <NuxtLink to="/coming-soon" class="btn-large brand-gradient shadow-glow-green">
            Request Demo
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
        <div class="hero-stats-row">
          <div v-for="(s, i) in stats" :key="s.l" v-motion :initial="{ opacity: 0, y: 12 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 + i * 80, duration: 500 } }"
            class="hero-stat-card glass-card">
            <div class="hero-stat-val text-gradient">{{ s.v }}</div>
            <div class="hero-stat-lbl">{{ s.l }}</div>
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div class="hero-visual-col relative" v-motion :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
        <div class="hero-visual-wrapper">
          <!-- Glow rings -->
          <div class="hero-visual-ring-1" />
          <div class="hero-visual-ring-2" />
          <div class="hero-visual-ring-3" />

          <!-- Hero 3D Model -->
          <div class="hero-visual-img-container animate-float">
            <model-viewer :src="modelUrl" alt="SmartBin 3D Model" auto-rotate camera-controls ar shadow-intensity="1"
              environment-image="neutral" exposure="1" interaction-prompt="none" class="hero-3d-model"></model-viewer>
          </div>

          <!-- Floating data chips -->
          <div class="float-chip chip-lora glass-card">
            <span class="float-chip-icon">
              <Wifi class="h-4 w-4 text-[var(--brand-blue)]" />
            </span>
            <div class="float-chip-info">
              <div class="float-chip-label">LoRaWAN</div>
              <div class="float-chip-value">Online</div>
            </div>
          </div>

          <div class="float-chip chip-level glass-card">
            <span class="float-chip-icon">
              <Gauge class="h-4 w-4 text-[var(--brand-green)]" />
            </span>
            <div class="float-chip-info">
              <div class="float-chip-label">Fill Level</div>
              <div class="float-chip-value">68%</div>
            </div>
          </div>

          <div class="float-chip chip-signal glass-card">
            <span class="float-chip-icon">
              <Signal class="h-4 w-4 text-[var(--brand-blue)]" />
            </span>
            <div class="float-chip-info">
              <div class="float-chip-label">Signal</div>
              <div class="float-chip-value">-72 dBm</div>
            </div>
          </div>

          <div class="float-chip chip-co2 glass-card">
            <span class="float-chip-icon">
              <Leaf class="h-4 w-4 text-[var(--brand-green)]" />
            </span>
            <div class="float-chip-info">
              <div class="float-chip-label">CO₂ Saved</div>
              <div class="float-chip-value">124 kg</div>
            </div>
          </div>

          <!-- Pulse ring -->
          <span class="hero-visual-pulse animate-pulse-ring" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Wifi, Gauge, Signal, Leaf } from '@lucide/vue'
import { onMounted } from 'vue'

const config = useRuntimeConfig()
const canvasContainer = ref(null)

let scene, camera, renderer, controls, animationFrameId, gltfModel

onMounted(() => {
  if (typeof window === 'undefined') return

  // 1. Create Scene
  scene = new THREE.Scene()

  // 2. Create Camera
  const width = canvasContainer.value.clientWidth || 500
  const height = canvasContainer.value.clientHeight || 500
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)

  // 3. Create Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.3
  canvasContainer.value.appendChild(renderer.domElement)

  // 4. Create Controls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.enableZoom = true
  controls.autoRotate = true
  controls.autoRotateSpeed = 1.2
  controls.maxPolarAngle = Math.PI / 2 + 0.1

  // 5. Add Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.8)
  dirLight.position.set(5, 10, 7)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.width = 1024
  dirLight.shadow.mapSize.height = 1024
  dirLight.shadow.bias = -0.0001
  scene.add(dirLight)

  const fillLight = new THREE.DirectionalLight(0x7dd3fc, 0.8) // soft light cyan
  fillLight.position.set(-6, 4, -6)
  scene.add(fillLight)

  const topLight = new THREE.DirectionalLight(0xffffff, 0.6)
  topLight.position.set(0, 10, 0)
  scene.add(topLight)

  // 6. Load GLTF Model
  const loader = new GLTFLoader()
  const modelPath = `${config.app.baseURL}models/without.glb`

  loader.load(
    modelPath,
    (gltf) => {
      gltfModel = gltf.scene

      // Detach and remove StudioFloor mesh
      const toRemove = []
      gltfModel.traverse((child) => {
        if (child.name && (child.name.toLowerCase().includes('floor') || child.name.toLowerCase().includes('plane'))) {
          toRemove.push(child)
        }
      })
      toRemove.forEach((child) => {
        if (child.parent) {
          child.parent.remove(child)
        }
      })

      // Setup shadows and material properties
      gltfModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true

          if (child.material) {
            child.material.roughness = Math.min(child.material.roughness, 0.6)
            child.material.metalness = Math.max(child.material.metalness, 0.15)
          }
        }
      })

      // Center model
      const box = new THREE.Box3().setFromObject(gltfModel)
      const center = new THREE.Vector3()
      box.getCenter(center)
      const size = new THREE.Vector3()
      box.getSize(size)

      // Center the model geometry inside local scene
      gltfModel.position.x = -center.x
      gltfModel.position.y = -box.min.y - (size.y / 2) // center vertically
      gltfModel.position.z = -center.z

      scene.add(gltfModel)

      // Fit camera orbit to bounding box
      const maxDim = Math.max(size.x, size.y, size.z)
      const fov = camera.fov * (Math.PI / 180)
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
      cameraZ *= 1.35 // comfortable padding

      camera.position.set(0, 0, cameraZ)
      camera.lookAt(new THREE.Vector3(0, 0, 0))

      controls.target.set(0, 0, 0)
      controls.update()
    },
    undefined,
    (error) => {
      console.error('An error happened loading GLTF:', error)
    }
  )

  // 7. Animation Loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  // 8. Handle Resize
  const handleResize = () => {
    if (!canvasContainer.value) return
    const w = canvasContainer.value.clientWidth
    const h = canvasContainer.value.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', handleResize)

  // 9. Cleanup on unmount
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationFrameId)
    if (renderer) {
      renderer.dispose()
    }
    if (controls) {
      controls.dispose()
    }
  })
})

const stats = [
  { v: '95%', l: 'Collection Efficiency' },
  { v: '40%', l: 'Cost Reduction' },
  { v: '24/7', l: 'Real-Time Monitoring' },
  { v: 'AI', l: 'Powered Analytics' },
]
</script>

<style scoped>
.hero-3d-model {
  width: 90%;
  height: 90%;
  outline: none;
  --poster-color: transparent;
}
</style>
