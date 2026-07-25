<template>
  <div class="key-findings">
    <h3 class="kf-title">核心判断</h3>
    <div class="kf-grid">
      <div
        v-for="(finding, i) in findings"
        :key="i"
        class="kf-card"
      >
        <span class="kf-level">{{ finding.level }}</span>
        <h4 class="kf-finding-title">{{ finding.title }}</h4>
        <div class="kf-body">
          <p v-if="finding.finding !== '[待填入]'" class="kf-finding">
            <strong>判断：</strong>{{ finding.finding }}
          </p>
          <p v-else class="kf-placeholder">[核心判断待填入]</p>
          <div class="kf-evidence">
            <h5>支撑证据</h5>
            <ul>
              <li v-for="(e, j) in finding.evidence" :key="j">{{ e }}</li>
            </ul>
          </div>
          <span class="kf-confidence" :class="'conf-' + (finding.confidence || 'low')">
            置信度：{{ finding.confidence }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  findings: { type: Array, required: true }
})
</script>

<style scoped>
.key-findings { margin-bottom: 48px; }
.kf-title {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 24px;
  text-align: center;
}
.kf-grid { display: flex; flex-direction: column; gap: 20px; }
.kf-card {
  background: #fff;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border-left: 4px solid #6366f1;
}
.kf-level {
  display: inline-block;
  padding: 2px 12px;
  background: #f0f0f5;
  border-radius: 8px;
  font-size: 12px;
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 12px;
}
.kf-finding-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 12px;
}
.kf-finding { font-size: 14px; color: #555; line-height: 1.8; margin: 0 0 12px; }
.kf-placeholder { font-size: 14px; color: #ccc; font-style: italic; margin: 0 0 12px; }
.kf-evidence { margin-bottom: 12px; }
.kf-evidence h5 { font-size: 13px; color: #888; margin: 0 0 6px; }
.kf-evidence ul { margin: 0; padding-left: 18px; }
.kf-evidence li { font-size: 13px; color: #777; line-height: 1.6; }
.kf-confidence {
  display: inline-block;
  padding: 3px 14px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
}
.conf-低, .conf-低-中 { background: #fef2f2; color: #ef4444; }
.conf-中 { background: #fffbeb; color: #f59e0b; }
</style>
