<template>
  <div class="site-baseline">
    <div class="sb-header">
      <h3 class="sb-name">{{ site.name }}</h3>
      <span class="sb-period">{{ baseline.period }}</span>
    </div>
    <p class="sb-patron">
      <strong>创建者：</strong>{{ baseline.patron }}
    </p>
    <p class="sb-function">
      <strong>原初功能：</strong>{{ baseline.originalFunction }}
    </p>
    <p class="sb-layout">
      <strong>空间布局：</strong>{{ baseline.spatialLayout }}
    </p>
    <p class="sb-flow">
      <strong>礼佛流线：</strong>{{ baseline.worshipFlow }}
    </p>

    <div class="sb-timeline">
      <h4>关键节点</h4>
      <div
        v-for="event in baseline.keyEvents"
        :key="event.year"
        class="sb-event"
      >
        <span class="event-year">{{ event.year }}</span>
        <span class="event-desc">{{ event.event }}</span>
      </div>
    </div>

    <blockquote class="sb-summary">
      {{ baseline.summary }}
    </blockquote>
  </div>
</template>

<script setup>
defineProps({
  baseline: { type: Object, required: true },
  site: { type: Object, required: true }
})
</script>

<style scoped>
.site-baseline {
  background: var(--bg-card);
  border-radius: 14px;
  padding: 28px 24px;
  box-shadow: 0 2px 12px var(--shadow-sm);
  border-left: 4px solid var(--accent);
}
.sb-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 16px;
}
.sb-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0;
}
.sb-period {
  font-size: 13px;
  color: var(--text-muted);
}
.sb-patron, .sb-function, .sb-layout, .sb-flow {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 0 10px;
}
.sb-timeline {
  margin: 20px 0;
  padding-top: 16px;
  border-top: 1px solid var(--bg-elevated);
}
.sb-timeline h4 {
  font-size: 14px;
  color: var(--text-heading);
  margin: 0 0 12px;
}
.sb-event {
  display: flex;
  gap: 12px;
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 1.6;
}
.event-year {
  flex-shrink: 0;
  font-weight: 600;
  color: var(--accent);
  min-width: 56px;
}
.event-desc { color: var(--text-secondary); }
.sb-summary {
  margin: 20px 0 0;
  padding: 12px 16px;
  background: var(--bg-surface);
  border-radius: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.7;
  border-left: 3px solid var(--border-default);
  font-style: italic;
}
</style>
