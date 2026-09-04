<template>
  <section class="itinerary-overview">
    <div class="io-inner">
      <h2 class="io-title">四天行程概览</h2>
      <p class="io-subtitle">大同—浑源田野调研路线</p>

      <div class="io-stats">
        <div class="stat-item">
          <span class="stat-num">4</span>
          <span class="stat-label">调研天数</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">4</span>
          <span class="stat-label">核心调研点</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">5+</span>
          <span class="stat-label">口述访谈</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">50</span>
          <span class="stat-label">问卷回收</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.itinerary-overview {
  padding: 80px 24px;
  background: var(--bg-card);
}
.io-inner { max-width: 1200px; margin: 0 auto; }
.io-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 8px;
}
.io-subtitle {
  text-align: center;
  font-size: 16px;
  color: var(--text-muted);
  margin: 0 0 48px;
}
.io-stats {
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-wrap: wrap;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.stat-num {
  font-size: 36px;
  font-weight: 800;
  color: var(--accent);
}
.stat-label {
  font-size: 14px;
  color: var(--text-muted);
}
</style>
