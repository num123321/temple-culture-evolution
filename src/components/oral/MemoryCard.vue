<template>
  <div class="memory-card">
    <div class="mc-header">
      <div class="mc-date-badge">{{ memory.date }}</div>
      <div class="mc-location">{{ memory.location }}</div>
    </div>
    <h4 class="mc-interviewee">{{ memory.interviewee }}</h4>
    <p class="mc-role">{{ memory.role }}</p>
    <p class="mc-theme">
      <span class="theme-label">主题：</span>{{ memory.theme }}
    </p>
    <p class="mc-summary">{{ memory.summary }}</p>
    <div class="mc-tags">
      <span
        v-for="tag in memory.tags"
        :key="tag"
        class="mc-tag"
      >{{ tag }}</span>
    </div>
    <div class="mc-audio">
      <div class="audio-placeholder">
        <span>🔊</span>
        <p>音频播放器（{{ memory.audioFile }}）</p>
        <p class="audio-hint">实际音频文件放入后，替换为真实播放控件</p>
      </div>
    </div>
    <div v-if="memory.quotes && memory.quotes.length" class="mc-quotes">
      <h5>关键引述</h5>
      <blockquote v-for="(q, i) in memory.quotes" :key="i">{{ q }}</blockquote>
    </div>
  </div>
</template>

<script setup>
defineProps({
  memory: { type: Object, required: true }
})
</script>

<style scoped>
.memory-card {
  background: #fff;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.mc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.mc-date-badge {
  padding: 3px 12px;
  background: #6366f1;
  color: #fff;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
}
.mc-location { font-size: 13px; color: #888; }
.mc-interviewee {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 4px;
}
.mc-role { font-size: 13px; color: #888; margin: 0 0 12px; }
.mc-theme { font-size: 14px; color: #555; margin: 0 0 8px; }
.theme-label { font-weight: 600; color: #1a1a2e; }
.mc-summary { font-size: 14px; color: #666; line-height: 1.7; margin: 0 0 12px; }
.mc-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
.mc-tag {
  padding: 2px 10px;
  background: #f0f0f5;
  border-radius: 8px;
  font-size: 11px;
  color: #888;
}
.mc-audio { margin-bottom: 16px; }
.audio-placeholder {
  background: #f8f9fc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}
.audio-placeholder span { font-size: 28px; }
.audio-placeholder p { font-size: 13px; color: #999; margin: 6px 0 0; }
.audio-hint { font-size: 11px !important; color: #bbb !important; }
.mc-quotes {
  border-top: 1px solid #f0f0f5;
  padding-top: 12px;
}
.mc-quotes h5 { font-size: 13px; color: #6366f1; margin: 0 0 8px; }
.mc-quotes blockquote {
  margin: 0 0 6px;
  padding: 8px 12px;
  border-left: 3px solid #ddd;
  font-size: 13px;
  color: #777;
  line-height: 1.6;
  font-style: italic;
}
</style>
