<template>
  <div class="oral-archive">
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
.oa-filters {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
}
.oa-filter-btn {
  padding: 8px 24px;
  border: 1px solid #e0e0ea;
  border-radius: 20px;
  background: #fff;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}
.oa-filter-btn:hover { border-color: #6366f1; color: #6366f1; }
.oa-filter-btn.active {
  background: #6366f1;
  color: #fff;
  border-color: #6366f1;
}
.oa-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}
</style>
