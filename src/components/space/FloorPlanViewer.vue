<template>
  <div class="floorplan-viewer">
    <div class="fp-container">
      <!-- 平面图占位 -->
      <div class="fp-placeholder">
        <span>📐</span>
        <p>{{ site?.name || '选择寺院' }} 平面图</p>
        <p class="fp-hint">请将实际平面图放入此区域，热区标注将覆盖在上方</p>
      </div>

      <!-- 热区标注（浮在平面图上） -->
      <div
        v-for="hotspot in hotspots"
        :key="hotspot.id"
        class="hotspot-dot"
        :style="{ left: hotspot.x + '%', top: hotspot.y + '%' }"
        @click="selectedHotspot = hotspot"
        :class="{ active: selectedHotspot?.id === hotspot.id }"
      >
        <span class="dot-inner"></span>
        <span class="dot-label">{{ hotspot.label }}</span>
      </div>
    </div>

    <!-- 热区弹窗 -->
    <HotspotPopup
      v-if="selectedHotspot"
      :hotspot="selectedHotspot"
      @close="selectedHotspot = null"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getSiteById } from '../../data/sites.js'
import { getHotspotsBySiteId } from '../../data/hotspots/index.js'
import HotspotPopup from './HotspotPopup.vue'

const props = defineProps({
  activeSite: { type: String, default: 'huayan' }
})

const selectedHotspot = ref(null)

const site = computed(() => getSiteById(props.activeSite))
const hotspots = computed(() => getHotspotsBySiteId(props.activeSite))
</script>

<style scoped>
.floorplan-viewer { max-width: 900px; margin: 0 auto; }
.fp-container {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 14px;
  overflow: hidden;
  background: #f8f9fc;
}
.fp-placeholder {
  position: absolute;
  inset: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ddd;
  border-radius: 10px;
  gap: 8px;
}
.fp-placeholder span { font-size: 40px; }
.fp-placeholder p { margin: 0; color: #999; font-size: 15px; }
.fp-hint { font-size: 12px !important; color: #bbb !important; }
.hotspot-dot {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
}
.dot-inner {
  display: block;
  width: 16px;
  height: 16px;
  background: #ef4444;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #ef4444;
  animation: pulse 2s infinite;
}
.hotspot-dot.active .dot-inner {
  background: #6366f1;
  box-shadow: 0 0 0 2px #6366f1;
}
.dot-label {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 12px;
  font-weight: 600;
  color: #1a1a2e;
  background: rgba(255, 255, 255, 0.9);
  padding: 2px 8px;
  border-radius: 4px;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 2px #ef4444; }
  50% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0.3); }
}
</style>
