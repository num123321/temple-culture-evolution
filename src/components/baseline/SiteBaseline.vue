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
  background: #fff;
  border-radius: 14px;
  padding: 28px 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border-left: 4px solid #6366f1;
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
  color: #1a1a2e;
  margin: 0;
}
.sb-period {
  font-size: 13px;
  color: #888;
}
.sb-patron, .sb-function, .sb-layout, .sb-flow {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin: 0 0 10px;
}
.sb-timeline {
  margin: 20px 0;
  padding-top: 16px;
  border-top: 1px solid #eee;
}
.sb-timeline h4 {
  font-size: 14px;
  color: #1a1a2e;
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
  color: #6366f1;
  min-width: 56px;
}
.event-desc { color: #666; }
.sb-summary {
  margin: 20px 0 0;
  padding: 12px 16px;
  background: #f8f9fc;
  border-radius: 8px;
  font-size: 13px;
  color: #666;
  line-height: 1.7;
  border-left: 3px solid #ddd;
  font-style: italic;
}
</style>
