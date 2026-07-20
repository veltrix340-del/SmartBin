<template>
  <footer class="footer-el">
    <div class="container footer-top-grid">
      <div class="footer-brand-col">
        <div class="footer-logo-row">
          <img src="~/assets/images/Logo.jpg" alt="Virginasia Logo" class="brand-logo-img" />
          <span class="footer-logo-text">SmartBin</span>
        </div>
        <p class="footer-desc">
          Intelligent waste management powered by IoT, AI and real-time analytics.
          A product of Virginasia eMarketing Pvt Ltd.
        </p>
        <form class="footer-form" @submit.prevent="handleSubscribe">
          <input v-model="subscribeEmail" type="email" placeholder="Email for product updates" class="footer-input"
            required />
          <button type="submit" class="footer-btn-subscribe brand-gradient" :disabled="submitting">
            {{ submitting ? 'Sending...' : 'Subscribe' }}
          </button>
        </form>
      </div>

      <div class="footer-links-col-1">
        <div class="footer-col-title">Product</div>
        <ul class="footer-links-list">
          <li><a href="#solution">Solution</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#how">How it works</a></li>
        </ul>
      </div>

      <div class="footer-links-col-2">
        <div class="footer-col-title">Company</div>
        <ul class="footer-links-list">
          <li><a href="#about">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
      </div>

      <div class="footer-contact-col">
        <div class="footer-col-title">Contact</div>
        <ul class="footer-contact-list">
          <a href="mailto:virginasiaemarketing@gmail.com">
            <li class="footer-contact-item">
              <Mail class="footer-contact-icon" /> virginasiaemarketing@gmail.com
            </li>
          </a>
          <a href="tel:+919946650555">
            <li class="footer-contact-item">
              <Phone class="footer-contact-icon" /> +91 9946650555
            </li>
          </a>
          <li class="footer-contact-item">
            <MapPin class="footer-contact-icon" /> Kalamassery, Kochi
          </li>
        </ul>
        <div class="footer-social-row">
          <template v-for="(social, i) in socialLinks" :key="i">
            <a v-if="social.action" href="#" @click.prevent="social.action" class="footer-social-link"
              :title="social.label">
              <component :is="social.icon" :style="social.style" />
            </a>
            <a v-else :href="social.href" target="_blank" rel="noopener noreferrer" class="footer-social-link"
              :title="social.label">
              <component :is="social.icon" :style="social.style" />
            </a>
          </template>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-content">
        <div>© {{ new Date().getFullYear() }} Virginasia eMarketing Pvt Ltd. All rights reserved.</div>
        <div class="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Phone, MapPin, Share2 } from '@lucide/vue'
import { h, ref } from 'vue'

const subscribeEmail = ref('')
const submitting = ref(false)

const handleSubscribe = async () => {
  if (!subscribeEmail.value) return

  submitting.value = true
  try {
    const response = await fetch("https://formsubmit.co/ajax/virginasiaemarketing@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: subscribeEmail.value,
        message: "New SmartBin newsletter subscriber / inquiry"
      })
    })

    if (response.ok) {
      alert("Thank you for subscribing! We will contact you soon.")
      subscribeEmail.value = ''
    } else {
      alert("Something went wrong. Please try again.")
    }
  } catch (error) {
    console.error(error)
    alert("Connection error. Please try again later.")
  } finally {
    submitting.value = false
  }
}

// Custom functional components for SVG icons because @lucide/vue version does not export brand icons
const InstagramIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2.2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '5', ry: '5' }),
  h('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
  h('line', { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5' })
])

const WhatsAppIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'currentColor'
}, [
  h('path', { d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.8.983 3.834 1.502 5.909 1.503h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' })
])

const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: 'SmartBin',
      text: 'Intelligent waste management powered by IoT, AI and real-time analytics.',
      url: window.location.origin + window.location.pathname
    }).catch(err => console.log(err))
  } else {
    navigator.clipboard.writeText(window.location.origin + window.location.pathname)
      .then(() => {
        alert('Website link copied to clipboard!')
      })
      .catch(err => {
        console.error('Failed to copy link: ', err)
      })
  }
}

const socialLinks = [
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/viai_01?igsh=MXFqbHZ6czB6dDJxdA==',
    label: 'Instagram',
    style: 'height: 20px; width: 20px;'
  },
  {
    icon: WhatsAppIcon,
    href: 'https://wa.me/919946650555',
    label: 'WhatsApp',
    style: 'height: 20px; width: 20px;'
  },
  {
    icon: Share2,
    action: handleShare,
    label: 'Share',
    style: 'height: 20px; width: 20px;'
  }
]
</script>
