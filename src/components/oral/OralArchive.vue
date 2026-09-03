<template>
  <div class="oral-archive">
    <div class="oa-intro">
      <span class="oa-intro-icon">💬</span>
      <div class="oa-intro-body">
        <p class="oa-intro-title">提问词 · 一句问，一句答</p>
        <p class="oa-intro-text">
          每段访谈，我们只抛出一句<strong>简洁的提问词</strong>——
          不预设立场，不强加框架，力求受访者用最短的话语，
          讲出最有分量的记忆。
        </p>
      </div>
    </div>

    <div class="oa-filters">
      <button
        v-for="loc in locations"
        :key="loc"
        class="oa-filter-btn"
        :class="{ active: activeFilter === loc }"
        @click="activeFilter = loc"
      >
        {{ loc }}
      </button>
    </div>
    <div class="oa-grid">
      <MemoryCard
        v-for="memory in filteredMemories"
        :key="memory.id"
        :memory="memory"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getAllOralMemories } from '../../data/oral-memories.js'
import MemoryCard from './MemoryCard.vue'

const activeFilter = ref('全部')
const locations = ['全部', '云冈', '悬空寺']
const allMemories = getAllOralMemories()

const filteredMemories = computed(() => {
  if (activeFilter.value === '全部') return allMemories
  return allMemories.filter(m =>
    m.tags.some(t => t.includes(activeFilter.value))
  )
})
</script>

<style scoped>
.oral-archive { max-width: 1100px; margin: 0 auto; }

/* 顶部“提问词”说明条 */
.oa-intro {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  max-width: 760px;
  margin: 0 auto 36px;
  padding: 20px 24px;
  background: linear-gradient(135deg, var(--bg-card), var(--bg-surface));
  border: 1px solid var(--border-default);
  border-left: 4px solid var(--accent-violet);
  border-radius: 14px;
  box-shadow: 0 2px 10px var(--shadow-sm);
}
.oa-intro-icon { font-size: 28px; line-height: 1.2; }
.oa-intro-title {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-heading);
}
.oa-intro-text {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.8;
}
.oa-intro-text strong { color: var(--accent-violet); }

.oa-filters {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
}
.oa-filter-btn {
  padding: 8px 24px;
  border: 1px solid var(--bg-elevated);
  border-radius: 20px;
  background: var(--bg-card);
  font-size: 14px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}
.oa-filter-btn:hover { border-color: var(--accent); color: var(--accent); }
.oa-filter-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
.oa-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}
</style>
