<template>
  <div class="stele-gallery">
    <h3 class="sg-title">碑刻题记</h3>
    <p class="sg-intro">以下为调研中采集的碑刻题记选录，详细释文与高清照片将陆续补充。</p>
    <div class="sg-grid">
      <div
        v-for="stele in steles"
        :key="stele.id"
        class="sg-card"
      >
        <div class="sg-card-header">
          <span class="stele-type">{{ stele.type }}</span>
          <span class="stele-site">{{ stele.siteName }}</span>
        </div>
        <h4 class="stele-title">{{ stele.title }}</h4>
        <div class="stele-meta">
          <span>{{ stele.period }}代</span>
          <span v-if="stele.year">· {{ stele.year }}年</span>
          <span>· {{ stele.location }}</span>
        </div>
        <p v-if="stele.summary" class="stele-summary">{{ stele.summary }}</p>
        <div class="stele-content-placeholder">
          <span>📜</span>
          <p>碑文释文与照片将在此展示</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAllSteles } from '../../data/steles.js'
const steles = getAllSteles()
</script>

<style scoped>
.stele-gallery { max-width: 1100px; margin: 0 auto 48px; }
.sg-title { font-size: 22px; font-weight: 700; color: #1a1a2e; margin: 0 0 8px; text-align: center; }
.sg-intro { text-align: center; font-size: 14px; color: #888; margin: 0 0 32px; }
.sg-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.sg-card {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.sg-card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.stele-type {
  padding: 2px 10px;
  background: #f0f0f5;
  border-radius: 6px;
  font-size: 11px;
  color: #6366f1;
  font-weight: 600;
}
.stele-site { font-size: 13px; color: #888; }
.stele-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 8px;
  line-height: 1.4;
}
.stele-meta { font-size: 12px; color: #aaa; margin-bottom: 12px; }
.stele-summary { font-size: 13px; color: #666; line-height: 1.7; margin: 0 0 16px; }
.stele-content-placeholder {
  background: #f8f9fc;
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  border: 2px dashed #eee;
}
.stele-content-placeholder span { font-size: 32px; }
.stele-content-placeholder p { font-size: 13px; color: #bbb; margin: 8px 0 0; }
</style>
