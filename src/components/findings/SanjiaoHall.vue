<template>
  <div class="sanjiao-hall">
    <h3 class="sh-title">{{ data.name }} 专题分析</h3>
    <p class="sh-location">位置：{{ data.location }}</p>
    <p class="sh-desc">{{ data.description }}</p>

    <div class="sh-layout-info">
      <div class="layout-item">
        <span class="layout-label">面积</span>
        <span class="layout-value">{{ data.layout.totalArea }}</span>
      </div>
      <div class="layout-item">
        <span class="layout-label">布局</span>
        <span class="layout-value">{{ data.layout.arrangement }}</span>
      </div>
      <div class="layout-item">
        <span class="layout-label">朝向</span>
        <span class="layout-value">{{ data.layout.orientation }}</span>
      </div>
    </div>

    <h4>三教神像配置</h4>
    <div class="sh-statues">
      <div
        v-for="s in data.statues"
        :key="s.religion"
        class="sh-statue"
      >
        <span class="statue-religion">{{ s.religion }}</span>
        <span class="statue-figure">{{ s.figure }}</span>
        <span class="statue-pos">{{ s.position }}</span>
        <p class="statue-desc">{{ s.description }}</p>
      </div>
    </div>

    <div class="sh-significance">
      <h4>三教并置的空间意义</h4>
      <ul>
        <li v-for="(s, i) in data.significance" :key="i">{{ s }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getSanjiaoHallData } from '../../data/sanjiao-hall.js'
const data = getSanjiaoHallData()
</script>

<style scoped>
.sanjiao-hall { max-width: 900px; margin: 0 auto 48px; }
.sh-title { font-size: 22px; font-weight: 700; color: var(--text-heading); margin: 0 0 8px; text-align: center; }
.sh-location { text-align: center; font-size: 14px; color: var(--text-muted); margin: 0 0 8px; }
.sh-desc { text-align: center; font-size: 15px; color: var(--text-secondary); line-height: 1.8; max-width: 700px; margin: 0 auto 32px; }
.sh-layout-info {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.layout-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.layout-label { font-size: 12px; color: var(--text-hint); }
.layout-value { font-size: 15px; color: var(--text-heading); font-weight: 600; }
.sh-statues {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}
.sh-statue {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px var(--shadow-sm);
}
.statue-religion {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.statue-figure {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-heading);
}
.statue-pos {
  display: block;
  font-size: 12px;
  color: var(--text-muted);
  margin: 4px 0 8px;
}
.statue-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin: 0; }
.sh-significance {
  background: var(--bg-surface);
  border-radius: 12px;
  padding: 24px;
}
.sh-significance h4 { margin: 0 0 12px; font-size: 15px; color: var(--text-heading); }
.sh-significance ul { padding-left: 18px; margin: 0; }
.sh-significance li { font-size: 14px; color: var(--text-secondary); line-height: 1.8; }
@media (max-width: 640px) { .sh-statues { grid-template-columns: 1fr; } }
</style>
