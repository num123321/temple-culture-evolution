<template>
  <div class="site-selector">
    <div class="ss-tabs">
      <button
        v-for="site in sites"
        :key="site.id"
        class="ss-tab"
        :class="{ active: activeSite === site.id }"
        @click="$emit('select', site.id)"
      >
        {{ site.name }}
      </button>
    </div>
    <p class="ss-hint">选择一个调研地，查看平面图热区分析</p>
  </div>
</template>

<script setup>
import { getAllSites } from '../../data/sites.js'

defineProps({
  activeSite: { type: String, default: 'huayan' }
})

defineEmits(['select'])

const sites = getAllSites()
</script>

<style scoped>
.site-selector { text-align: center; margin-bottom: 24px; }
.ss-tabs {
  display: inline-flex;
  gap: 8px;
  background: var(--bg-hover);
  padding: 6px;
  border-radius: 10px;
}
.ss-tab {
  padding: 10px 24px;
  border: none;
  background: transparent;
  border-radius: 8px;
  font-size: 15px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}
.ss-tab:hover { color: var(--text-heading); }
.ss-tab.active {
  background: var(--bg-card);
  color: var(--accent);
  font-weight: 600;
  box-shadow: 0 1px 4px var(--shadow-md);
}
.ss-hint { font-size: 13px; color: var(--text-hint); margin: 16px 0 0; }
</style>
