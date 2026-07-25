<template>
  <section class="itinerary-overview">
    <div class="io-inner">
      <h2 class="io-title">六天行程概览</h2>
      <p class="io-subtitle">大同—浑源田野调研路线</p>

      <div class="io-map-area">
        <div class="io-map-placeholder">
          <span>🗺️</span>
          <p>行程地图将在此处展示</p>
          <p class="io-map-hint">（可替换为实际地图组件或静态图）</p>
        </div>
      </div>

      <div class="io-stats">
        <div class="stat-item">
          <span class="stat-num">6</span>
          <span class="stat-label">调研天数</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">4</span>
          <span class="stat-label">核心调研点</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">6+</span>
          <span class="stat-label">口述访谈</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">N</span>
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
  background: #fff;
}
.io-inner { max-width: 1200px; margin: 0 auto; }
.io-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
}
.io-subtitle {
  text-align: center;
  font-size: 16px;
  color: #888;
  margin: 0 0 48px;
}
.io-map-area { margin-bottom: 48px; }
.io-map-placeholder {
  aspect-ratio: 16 / 7;
  background: linear-gradient(135deg, #f0f0f5, #e8e8f0);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 2px dashed #ddd;
}
.io-map-placeholder span { font-size: 48px; }
.io-map-placeholder p {
  margin: 0;
  color: #999;
  font-size: 16px;
}
.io-map-hint { font-size: 13px !important; color: #bbb !important; }
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
  color: #6366f1;
}
.stat-label {
  font-size: 14px;
  color: #888;
}
</style>
