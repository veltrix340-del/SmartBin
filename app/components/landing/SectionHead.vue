<template>
  <div class="section-head" v-motion :initial="{ opacity: 0, y: 24 }" :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }">
    <span class="section-eyebrow">
      {{ eyebrow }}
    </span>
    <h2 class="section-title">
      <slot>{{ title }}</slot>
    </h2>
    <p v-if="sub" class="section-sub">{{ sub }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: String,
  sub: String,
})
</script>
