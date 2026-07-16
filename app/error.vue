<script setup>
defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-page flex items-center justify-center">
    <div class="error-container text-center">
      <template v-if="error?.statusCode === 404">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Page not found</h2>
        <p class="error-desc">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div class="error-actions">
          <NuxtLink
            to="/"
            class="btn-error btn-primary"
          >
            Go home
          </NuxtLink>
        </div>
      </template>
      <template v-else>
        <h1 class="error-title">
          This page didn't load
        </h1>
        <p class="error-desc">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div class="error-actions flex gap-2 justify-center">
          <button
            @click="handleError"
            class="btn-error btn-primary"
          >
            Try again
          </button>
          <NuxtLink
            to="/"
            class="btn-error btn-secondary"
          >
            Go home
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
}

.error-container {
  max-width: 28rem;
}

.error-code {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
}

.error-title {
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.error-desc {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--muted-foreground);
}

.error-actions {
  margin-top: 1.5rem;
}

.btn-error {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s, background-color 0.2s;
  border: none;
}

.btn-error.btn-primary {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.btn-error.btn-primary:hover {
  opacity: 0.9;
}

.btn-error.btn-secondary {
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--foreground);
}

.btn-error.btn-secondary:hover {
  background-color: var(--secondary);
}

.gap-2 { gap: 0.5rem; }
</style>
