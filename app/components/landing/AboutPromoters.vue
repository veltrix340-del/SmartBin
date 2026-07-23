<template>
  <section id="organization" class="promoters-section relative">
    <div class="container">
      <LandingSectionHead eyebrow="The Organization">
        Corporate & Startup <span class="text-gradient">Credentials</span>
      </LandingSectionHead>
      <p class="text-center section-sub" style="margin-top: -2.5rem; margin-bottom: 4rem;">
        SmartBin is promoted by Virginasia eMarketing Pvt Ltd, committed to providing sustainable social e-solutions.
      </p>

      <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="promoters-card glass-card relative overflow-hidden">
        <div class="promoters-card-bg-glow brand-gradient" />
        <div class="promoters-card-content">
          <!-- Main Title/Header -->
          <div class="promoters-header-row">
            <img src="~/assets/images/Logo.jpg" alt="Virginasia Logo" class="brand-logo-img"
              style="height: 130px; width: auto; border-radius: 1rem;" />
            <div>
              <h3 class="promoters-comp-name">VIRGINASIA EMARKETING (P) LTD</h3>
              <p class="promoters-comp-motto text-gradient">Committed to provide social e-solutions</p>
            </div>
          </div>

          <!-- Credentials Grid -->
          <div class="promoters-grid">
            <!-- Startup registry card -->
            <div class="promoter-credential-card">
              <div class="credential-icon-wrapper">
                <FileCheck class="h-6 w-6" />
              </div>
              <h4 class="credential-card-title">Government Recognitions</h4>
              <ul class="credential-list">
                <li>
                  <span class="cred-label">KSUM Startup Unique ID</span>
                  <span class="cred-val text-brand-green font-semibold">DIPP155016/2023/KSUM3914</span>
                </li>
                <li>
                  <span class="cred-label">DPIIT Startup Recognition</span>
                  <span class="cred-val font-semibold">DIPP155016</span>
                </li>
                <li>
                  <span class="cred-label">Industry & Sector</span>
                  <span class="cred-val">Construction & Engineering</span>
                </li>
                <li>
                  <span class="cred-label">Recognition Validity</span>
                  <span class="cred-val">07-11-2023 to 06-11-2033</span>
                </li>
              </ul>
            </div>

            <!-- MSME & Capital Card -->
            <div class="promoter-credential-card">
              <div class="credential-icon-wrapper"
                style="background-color: var(--brand-blue-soft); color: var(--brand-blue);">
                <Wallet class="h-6 w-6" />
              </div>
              <h4 class="credential-card-title">MSME & Capital Structure</h4>
              <ul class="credential-list">
                <li>
                  <span class="cred-label">Udyam Registration Number</span>
                  <span class="cred-val font-semibold">UDYAM-KL-02-0067827</span>
                </li>
                <li>
                  <span class="cred-label">Enterprise Classification</span>
                  <span class="cred-val-badge">Micro Enterprise (Trading / Services)</span>
                </li>
                <li>
                  <span class="cred-label">Authorized Capital</span>
                  <span class="cred-val font-semibold text-brand-blue">₹10,00,000</span>
                </li>
                <li>
                  <span class="cred-label">Paid-up Capital</span>
                  <span class="cred-val font-semibold text-brand-blue">₹1,00,000</span>
                </li>
              </ul>
            </div>

            <!-- Directors Card -->
            <div class="promoter-credential-card">
              <div class="credential-icon-wrapper"
                style="background-color: var(--brand-green-soft); color: var(--brand-green);">
                <Users2 class="h-6 w-6" />
              </div>
              <h4 class="credential-card-title">Key Personnel</h4>
              <ul class="director-list">
                <li class="director-item md-highlight">
                  <span class="dir-name">Lakshmi Mangaladevi</span>
                  <span class="dir-role">Managing Director</span>
                </li>
                <li class="director-item">
                  <span class="dir-name">Devikrishna Krishnakumar</span>
                  <span class="dir-role">Director</span>
                </li>
                <li class="director-item">
                  <span class="dir-name">Sidharth Harikumar</span>
                  <span class="dir-role">Director</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- KSUM Support Request Card -->
          <div class="promoter-support-card">
            <div class="support-header">
              <Sparkles class="h-5 w-5 text-brand-green flex-shrink-0" />
              <h4 class="support-card-title">Support Requested from Kerala Startup Mission (KSUM)</h4>
            </div>
            <div class="support-grid">
              <div v-for="item in supportItems" :key="item" class="support-item">
                <span class="support-bullet" />
                <p class="support-text">{{ item }}</p>
              </div>
            </div>
          </div>

          <!-- Official Address & Contacts Row -->
          <div class="promoters-contact-row">
            <div class="contact-block">
              <MapPin class="h-5 w-5 text-brand-green flex-shrink-0" />
              <div class="contact-block-details">
                <span class="contact-label">Registered Office Address</span>
                <span class="contact-val">Kerala Technology Innovation Zone, Kinfra Hi-Tech Park Main Rd, HMT Colony,
                  P.O, Kalamassery, Kochi, Kerala 683503</span>
              </div>
            </div>
            <div class="contact-block-group">
              <div class="contact-block">
                <Phone class="h-5 w-5 text-brand-green flex-shrink-0" />
                <div class="contact-block-details">
                  <span class="contact-label">Phone</span>
                  <a href="tel:+919946650555"><span class="contact-val">9946650555</span></a>
                </div>
              </div>
              <div class="contact-block">
                <Mail class="h-5 w-5 text-brand-green flex-shrink-0" />
                <div class="contact-block-details">
                  <span class="contact-label">Email Address</span>
                  <a href="mailto:virginasiaemarketing@gmail.com"><span
                      class="contact-val">virginasiaemarketing@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FileCheck, Wallet, Users2, MapPin, Phone, Mail, Sparkles } from '@lucide/vue'

const supportItems = [
  'Incubation space at Startup Village, Kalamassery',
  'Access to prototyping and fabrication labs',
  'Technical and business mentorship',
  'IP and patent guidance',
  'Access to seed funding and investor Networks'
]
</script>
