<template>
  <div class="statue-config">
    <h3 class="sc-title">{{ data.title }}</h3>
    <div class="sc-grid">
      <div
        v-for="site in data.sites"
        :key="site.siteId"
        class="sc-site"
      >
        <h4 class="sc-site-name">{{ site.siteName }}</h4>
        <div
          v-for="hall in site.halls"
          :key="hall.name"
          class="sc-hall"
        >
          <h5 class="hall-name">{{ hall.name }}</h5>
          <div class="hall-table">
            <div class="table-header">
              <span>造像</span><span>数量</span><span>位置</span><span>备注</span>
            </div>
            <div
              v-for="statue in hall.statues"
              :key="statue.name"
              class="table-row"
            >
              <span class="col-name">{{ statue.name }}</span>
              <span class="col-count">{{ statue.count }}尊</span>
              <span class="col-pos">{{ statue.position }}</span>
              <span class="col-note">{{ statue.note }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sc-notes">
      <h4>对比要点</h4>
      <ul>
        <li v-for="(note, i) in data.comparisonNotes" :key="i">{{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getStatueComparison } from '../../data/statues.js'
const data = getStatueComparison()
</script>

<style scoped>
.statue-config { max-width: 1100px; margin: 0 auto 48px; }
.sc-title { font-size: 22px; font-weight: 700; color: #1a1a2e; margin: 0 0 28px; text-align: center; }
.sc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-bottom: 32px; }
.sc-site {
  background: #fff;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.sc-site-name {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f0f5;
}
.sc-hall { margin-bottom: 20px; }
.hall-name { font-size: 15px; font-weight: 600; color: #6366f1; margin: 0 0 10px; }
.hall-table { font-size: 13px; }
.table-header, .table-row {
  display: grid;
  grid-template-columns: 1.2fr 0.6fr 0.8fr 1.4fr;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f5;
}
.table-header {
  font-weight: 600;
  color: #888;
  font-size: 12px;
  text-transform: uppercase;
}
.table-row { color: #555; }
.col-name { font-weight: 600; color: #1a1a2e; }
.col-count { color: #6366f1; font-weight: 600; }
.sc-notes {
  background: #f8f9fc;
  border-radius: 12px;
  padding: 24px;
}
.sc-notes h4 { margin: 0 0 12px; font-size: 15px; color: #1a1a2e; }
.sc-notes ul { margin: 0; padding-left: 18px; }
.sc-notes li { font-size: 14px; color: #666; line-height: 1.8; }
@media (max-width: 768px) { .sc-grid { grid-template-columns: 1fr; } }
</style>
