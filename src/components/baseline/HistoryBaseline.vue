<template>
  <div class="history-baseline">
    <p class="hb-intro">
      要理解佛寺空间的"现在"，需要先回到它们的"过去"。以下是四处调研地在创建之初的原初状态。
    </p>
    <div class="hb-grid">
      <SiteBaseline
        v-for="baseline in baselines"
        :key="baseline.siteId"
        :baseline="baseline"
        :site="getSiteById(baseline.siteId)"
      />
    </div>
  </div>
</template>

<script setup>
import { getAllBaselines, getBaselineBySiteId } from '../../data/history-baseline.js'
import { getSiteById } from '../../data/sites.js'
import SiteBaseline from './SiteBaseline.vue'

const baselines = getAllBaselines()
</script>

<style scoped>
.history-baseline { max-width: 1100px; margin: 0 auto; }
.hb-intro {
  text-align: center;
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin: 0 0 48px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.hb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}
</style>
