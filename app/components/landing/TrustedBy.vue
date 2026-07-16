<template>
  <section class="trusted-section">
    <div class="container">
      <p class="trusted-title">
        Trusted by forward-thinking organizations
      </p>
      <div class="trusted-flex">
        <span v-for="item in items" :key="item">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = ['Municipalities', 'Smart Cities', 'Industries', 'Hospitals', 'Universities', 'Commercial Hubs']
</script>
