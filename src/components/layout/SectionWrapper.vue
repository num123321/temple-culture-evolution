<template>
  <section class="section-wrapper" :id="sectionId">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">{{ title }}</h2>
        <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
        <div class="section-divider"></div>
      </div>
      <div class="section-body">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  sectionId: { type: String, default: '' }
})
</script>

<style scoped>
.section-wrapper {
  padding: 80px 24px;
  scroll-margin-top: 80px;
}
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
  letter-spacing: 2px;
}
.section-subtitle {
  font-size: 16px;
  color: #888;
  margin: 12px 0 0;
}
.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  margin: 20px auto 0;
  border-radius: 2px;
}
.section-body { margin-top: 0; }
</style>
