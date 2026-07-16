<template>
  <footer class="footer-el">
    <div class="container footer-top-grid">
      <div class="footer-brand-col">
        <div class="footer-logo-row">
          <img src="/images/features/logo.jpeg" alt="Virginasia Logo" class="brand-logo-img" />
          <span class="footer-logo-text">SmartBin</span>
        </div>
        <p class="footer-desc">
          Intelligent waste management powered by IoT, AI and real-time analytics.
          A product of Virginasia eMarketing Pvt Ltd.
        </p>
        <form class="footer-form" @submit.prevent>
          <input
            type="email" placeholder="Email for product updates"
            class="footer-input"
          />
          <button class="footer-btn-subscribe brand-gradient">
            Subscribe
          </button>
        </form>
      </div>

      <div class="footer-links-col-1">
        <div class="footer-col-title">Product</div>
        <ul class="footer-links-list">
          <li><a href="#solution">Solution</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#industries">Industries</a></li>
        </ul>
      </div>

      <div class="footer-links-col-2">
        <div class="footer-col-title">Company</div>
        <ul class="footer-links-list">
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
      </div>

      <div class="footer-contact-col">
        <div class="footer-col-title">Contact</div>
        <ul class="footer-contact-list">
          <li class="footer-contact-item"><Mail class="footer-contact-icon" /> hello@smartbin.io</li>
          <li class="footer-contact-item"><Phone class="footer-contact-icon" /> +91 80 4000 1234</li>
          <li class="footer-contact-item"><MapPin class="footer-contact-icon" /> Bengaluru · India</li>
        </ul>
        <div class="footer-social-row">
          <a v-for="(Icon, i) in socialIcons" :key="i" href="#" class="footer-social-link">
            <component :is="Icon" class="h-4 w-4" />
          </a>
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
import { Recycle, Mail, Phone, MapPin, Share2, AtSign, Send, Link } from '@lucide/vue'

const socialIcons = [Share2, AtSign, Send, Link]
</script>
