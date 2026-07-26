<template>
  <div class="day-card" :class="{ left: day.day % 2 === 0 }">
    <div class="day-dot" :style="{ background: day.color }"></div>
    <div class="day-content">
      <div class="day-header">
        <span class="day-number" :style="{ color: day.color }">Day {{ day.day }}</span>
        <span class="day-date">{{ day.date }}</span>
      </div>
      <h3 class="day-title">{{ day.title }}</h3>
      <p class="day-location">📍 {{ day.location }}</p>
      <p class="day-summary">{{ day.summary }}</p>
      <div v-if="day.sites.length" class="day-tags">
        <span v-for="site in day.sites" :key="site" class="tag">{{ site }}</span>
      </div>
      <div v-if="day.outputs.length" class="day-outputs">
        <p class="outputs-label">产出：</p>
        <ul>
          <li v-for="o in day.outputs" :key="o">{{ o }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  day: { type: Object, required: true }
})
</script>

<style scoped>
.day-card {
  position: relative;
  width: 44%;
  padding: 24px;
  background: var(--bg-card);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  margin-left: auto;
}
.day-card.left {
  margin-left: 0;
  margin-right: auto;
}
.day-dot {
  position: absolute;
  top: 32px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 3px solid var(--bg-card);
  box-shadow: 0 0 0 2px currentColor;
}
.day-card:not(.left) .day-dot { left: -33px; }
.day-card.left .day-dot { right: -33px; }
.day-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.day-number { font-size: 14px; font-weight: 700; }
.day-date { font-size: 13px; color: var(--text-hint); }
.day-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 8px;
}
.day-location { font-size: 14px; color: var(--text-muted); margin: 0 0 8px; }
.day-summary { font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin: 0 0 12px; }
.day-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
.tag {
  padding: 3px 12px;
  background: var(--bg-hover);
  border-radius: 12px;
  font-size: 12px;
  color: var(--accent);
}
.day-outputs { font-size: 13px; color: var(--text-muted); }
.outputs-label { font-weight: 600; margin: 0 0 4px; }
.day-outputs ul {
  margin: 0;
  padding-left: 18px;
}
.day-outputs li { line-height: 1.6; }

@media (max-width: 768px) {
  .day-card {
    width: calc(100% - 48px);
    margin-left: 48px !important;
    margin-right: 0 !important;
  }
  .day-card .day-dot,
  .day-card.left .day-dot {
    left: -33px;
    right: auto;
  }
}
</style>
