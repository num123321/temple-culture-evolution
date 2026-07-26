<template>
  <div class="cave-comparison">
    <h3 class="cc-title">云冈早中晚三期洞窟演变</h3>
    <p class="cc-intro">三期洞窟的对比直接呈现了从"神位"到"人位"的演变过程。</p>
    <div class="cc-periods">
      <div
        v-for="period in periods"
        :key="period.id"
        class="cc-period"
      >
        <div class="period-header">
          <span class="period-name">{{ period.name }}</span>
          <span class="period-date">{{ period.period }}</span>
        </div>
        <p class="period-patron"><strong>开凿主体：</strong>{{ period.patron }}</p>
        <div class="period-chars">
          <p><strong>风格：</strong>{{ period.characteristics.style }}</p>
          <p><strong>规模：</strong>{{ period.characteristics.scale }}</p>
          <p><strong>主题：</strong>{{ period.characteristics.theme }}</p>
          <p><strong>布局：</strong>{{ period.characteristics.layout }}</p>
          <p><strong>图像志：</strong>{{ period.characteristics.iconography }}</p>
        </div>
        <div class="period-caves">
          <h4>代表洞窟</h4>
          <div
            v-for="cave in period.keyCaves"
            :key="cave.number"
            class="cave-item"
          >
            <span class="cave-num">{{ cave.number }}</span>
            <span class="cave-feature">{{ cave.feature }}</span>
          </div>
        </div>
        <blockquote class="period-significance">
          {{ period.significance }}
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCavePeriods } from '../../data/cave-comparison.js'
const periods = getCavePeriods()
</script>

<style scoped>
.cave-comparison { max-width: 1100px; margin: 0 auto 48px; }
.cc-title { font-size: 22px; font-weight: 700; color: var(--text-heading); margin: 0 0 8px; text-align: center; }
.cc-intro { text-align: center; font-size: 14px; color: var(--text-muted); margin: 0 0 32px; }
.cc-periods { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
.cc-period {
  background: var(--bg-card);
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 2px 12px var(--shadow-sm);
}
.period-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--bg-hover);
}
.period-name { font-size: 18px; font-weight: 700; color: var(--text-heading); }
.period-date { font-size: 13px; color: var(--text-muted); }
.period-patron { font-size: 13px; color: var(--text-secondary); margin: 0 0 12px; }
.period-chars p { font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin: 0 0 4px; }
.period-caves { margin: 16px 0; }
.period-caves h4 { font-size: 13px; color: var(--accent); margin: 0 0 8px; }
.cave-item { display: flex; gap: 10px; margin-bottom: 4px; font-size: 13px; }
.cave-num { font-weight: 600; color: var(--text-heading); min-width: 32px; }
.cave-feature { color: var(--text-muted); }
.period-significance {
  margin: 16px 0 0;
  padding: 12px 16px;
  background: linear-gradient(135deg, var(--bg-surface), var(--bg-hover));
  border-radius: 8px;
  font-size: 13px;
  color: var(--accent);
  line-height: 1.7;
  border-left: 3px solid var(--accent);
  font-style: italic;
}
</style>
