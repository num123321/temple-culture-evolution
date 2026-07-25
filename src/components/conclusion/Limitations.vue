<template>
  <div class="limitations">
    <h3 class="lm-title">研究局限</h3>
    <p class="lm-intro">
      我们在研究中意识到以下不足，这些局限将影响结论的外推范围和解释强度。
    </p>
    <div class="lm-grid">
      <div
        v-for="(lim, i) in limitations"
        :key="i"
        class="lm-card"
      >
        <div class="lm-card-header">
          <span class="lm-category">{{ lim.category }}</span>
        </div>
        <p class="lm-desc">{{ lim.description }}</p>
        <div class="lm-impact">
          <span class="impact-label">影响：</span>
          <span>{{ lim.impact }}</span>
        </div>
        <div class="lm-mitigation">
          <span class="mitigation-label">应对：</span>
          <span>{{ lim.mitigation }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  limitations: { type: Array, required: true }
})
</script>

<style scoped>
.limitations { margin-bottom: 48px; }
.lm-title {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 12px;
  text-align: center;
}
.lm-intro {
  text-align: center;
  font-size: 14px;
  color: #888;
  margin: 0 0 32px;
}
.lm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
.lm-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  border-top: 3px solid #e0e0ea;
}
.lm-card-header { margin-bottom: 10px; }
.lm-category {
  padding: 2px 12px;
  background: #f8f9fc;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #888;
}
.lm-desc { font-size: 13px; color: #666; line-height: 1.7; margin: 0 0 10px; }
.lm-impact, .lm-mitigation { font-size: 12px; color: #999; line-height: 1.5; margin: 0 0 4px; }
.impact-label, .mitigation-label { font-weight: 600; color: #888; }
</style>
