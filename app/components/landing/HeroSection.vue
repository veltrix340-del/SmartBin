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

          <!-- Hero 3D Canvas or Static Fallback Image -->
          <div class="hero-visual-img-container animate-float">
            <div v-if="webglSupported" ref="canvasContainer" class="hero-3d-container"></div>
            <img v-else :src="`${config.app.baseURL}smartbin-hero-dark.png`" alt="SmartBin IoT device" class="hero-visual-img-fallback" />
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
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const config = useRuntimeConfig()
const canvasContainer = ref(null)
const webglSupported = ref(true)

let scene, camera, renderer, controls, animationFrameId, gltfModel

onMounted(() => {
  if (typeof window === 'undefined') return

  try {
    // 1. Create Scene
    scene = new THREE.Scene()

    // 2. Create Camera
    const width = canvasContainer.value ? canvasContainer.value.clientWidth : 500
    const height = canvasContainer.value ? canvasContainer.value.clientHeight : 500
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)

    // 3. Create Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    if (!renderer.getContext()) {
      throw new Error('WebGL context is not supported or was blocked')
    }

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35)
    scene.add(ambientLight)

    // Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2)
    keyLight.position.set(5, 10, 6)
    keyLight.castShadow = true
    keyLight.shadow.mapSize.width = 2048
    keyLight.shadow.mapSize.height = 2048
    keyLight.shadow.bias = -0.00005
    keyLight.shadow.normalBias = 0.02
    keyLight.shadow.camera.left = -2
    keyLight.shadow.camera.right = 2
    keyLight.shadow.camera.top = 2
    keyLight.shadow.camera.bottom = -2
    keyLight.shadow.camera.near = 0.1
    keyLight.shadow.camera.far = 25
    scene.add(keyLight)

    // Fill Light
    const fillLight = new THREE.DirectionalLight(0x7dd3fc, 1.2)
    fillLight.position.set(-6, 3, 4)
    scene.add(fillLight)

    // Rim Light
    const rimLight = new THREE.DirectionalLight(0xffffff, 2.5)
    rimLight.position.set(-4, 8, -6)
    scene.add(rimLight)

    // Soft overhead light
    const topLight = new THREE.DirectionalLight(0xffffff, 0.8)
    topLight.position.set(0, 12, 0)
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
            
            const name = child.name.toLowerCase()
            const parentName = child.parent ? child.parent.name.toLowerCase() : ''
            
            // Glowing LEDs
            if (name.includes('led_strip') || name.includes('led_cover')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x10b981,
                emissive: 0x10b981,
                emissiveIntensity: 3.5,
                roughness: 0.1,
                metalness: 0.8
              })
            } 
            // Glowing TouchScreen
            else if (name.includes('touchscreen') || parentName.includes('touchscreen')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xffffff,
                emissiveIntensity: 1.2,
                roughness: 0.05,
                metalness: 0.95
              })
            } 
            // Standard metallic / cabinet meshes
            else if (child.material) {
              child.material.roughness = Math.min(child.material.roughness, 0.45)
              child.material.metalness = Math.max(child.material.metalness, 0.25)
            }
          }
        })

        // Add local point lights to project color from glowing parts
        const ledCover = gltfModel.getObjectByName('LED_Cover_1') || gltfModel.getObjectByName('LED_Strip_1')
        if (ledCover) {
          const worldPos = new THREE.Vector3()
          ledCover.getWorldPosition(worldPos)
          const greenLight = new THREE.PointLight(0x10b981, 3.0, 2.0)
          greenLight.position.copy(worldPos)
          scene.add(greenLight)
        }

        const screenFrame = gltfModel.getObjectByName('TouchScreen_Frame') || gltfModel.getObjectByName('TouchScreen')
        if (screenFrame) {
          const worldPos = new THREE.Vector3()
          screenFrame.getWorldPosition(worldPos)
          const screenLight = new THREE.PointLight(0xffffff, 2.0, 1.5)
          screenLight.position.copy(worldPos)
          scene.add(screenLight)
        }

        // Center model
        const box = new THREE.Box3().setFromObject(gltfModel)
        const center = new THREE.Vector3()
        box.getCenter(center)
        const size = new THREE.Vector3()
        box.getSize(size)

        gltfModel.position.x = -center.x
        gltfModel.position.y = -box.min.y - (size.y / 2)
        gltfModel.position.z = -center.z

        scene.add(gltfModel)

        // Add a transparent shadow plane to receive shadows from the bin
        const planeGeo = new THREE.PlaneGeometry(15, 15)
        const planeMat = new THREE.ShadowMaterial({ opacity: 0.25 })
        const shadowPlane = new THREE.Mesh(planeGeo, planeMat)
        shadowPlane.rotation.x = -Math.PI / 2
        shadowPlane.position.y = -size.y / 2
        shadowPlane.receiveShadow = true
        scene.add(shadowPlane)

        // Fit camera orbit to bounding box
        const maxDim = Math.max(size.x, size.y, size.z)
        const fov = camera.fov * (Math.PI / 180)
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
        cameraZ *= 1.35

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
        try {
          renderer.forceContextLoss()
        } catch (e) {}
        renderer.dispose()
      }
      if (controls) {
        controls.dispose()
      }
    })
  } catch (error) {
    console.error('Three.js initialization failed, falling back to static image:', error)
    webglSupported.value = false
  }
})

const stats = [
  { v: '95%', l: 'Collection Efficiency' },
  { v: '40%', l: 'Cost Reduction' },
  { v: '24/7', l: 'Real-Time Monitoring' },
  { v: 'AI', l: 'Powered Analytics' },
]
</script>

<style scoped>
.hero-3d-container {
  width: 100%;
  height: 100%;
  outline: none;
}
.hero-visual-img-fallback {
  width: 80%;
  height: 80%;
  object-fit: contain;
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15));
}
</style>
