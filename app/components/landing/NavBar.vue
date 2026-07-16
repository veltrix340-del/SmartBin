<template>
  <header class="header-bar">
    <div class="container nav-content">
      <a href="#" class="logo-container">
        <img src="/images/features/logo.jpeg" alt="Virginasia Logo" class="brand-logo-img" />
        <span class="brand-name">SmartBin</span>
      </a>
      <nav class="nav-links">
        <a href="#solution">Solution</a>
        <a href="#specs">Specs</a>
        <a href="#how">How it works</a>
        <a href="#organization">About</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div class="nav-actions">
        <a href="#cta" class="btn-text">Sign in</a>
        <a href="#cta" class="btn-gradient brand-gradient shadow-glow-green">
          Request Demo
          <ArrowRight class="h-4 w-4" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Recycle, ArrowRight } from '@lucide/vue'
</script>
