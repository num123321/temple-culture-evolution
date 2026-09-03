<template>
  <Transition name="popup">
    <div v-if="hotspot" class="hotspot-popup-overlay" @click.self="$emit('close')">
      <div class="hotspot-popup">
        <button class="popup-close" @click="$emit('close')">✕</button>
        <h4 class="popup-title">{{ hotspot.label }}</h4>
        <span class="popup-category">{{ hotspot.category }}</span>
        <p class="popup-desc">{{ hotspot.description }}</p>
        <div v-if="photoList.length" class="popup-photos">
          <p class="photos-label">📷 现场实拍（{{ photoList.length }}）</p>
          <div class="popup-photo-list">
            <img
              v-for="(p, i) in photoList"
              :key="i"
              :src="p"
              :alt="hotspot.label"
              loading="lazy"
              @click="viewIndex = i"
            />
          </div>
        </div>
        <div v-else class="popup-photos empty">
          <p class="photos-hint">📷 该点现场照片整理中</p>
        </div>

        <!-- 点击照片放大查看 -->
        <div v-if="viewIndex >= 0" class="popup-viewer" @click.self="viewIndex = -1">
          <button class="viewer-close" @click="viewIndex = -1">✕</button>
          <button class="viewer-nav viewer-prev" @click="viewStep(-1)">‹</button>
          <img :src="photoList[viewIndex]" :alt="hotspot.label" />
          <button class="viewer-nav viewer-next" @click="viewStep(1)">›</button>
          <p class="viewer-count">{{ viewIndex + 1 }} / {{ photoList.length }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  hotspot: { type: Object, default: null }
})
defineEmits(['close'])

// photos 中存相对 public 的路径（如 images/photos/yungang/xx.jpg），此处自动拼 base 前缀
const BASE = import.meta.env.BASE_URL
const toUrl = (p) =>
  typeof p === 'string' && /^https?:\/\//.test(p)
    ? p
    : BASE + String(p || '').replace(/^\//, '')

const photoList = computed(() => (props.hotspot?.photos || []).map(toUrl))

/* 放大查看器 */
const viewIndex = ref(-1)
const viewStep = (d) => {
  const len = photoList.value.length
  viewIndex.value = (viewIndex.value + d + len) % len
}

const onKey = (e) => {
  if (viewIndex.value < 0) return
  if (e.key === 'Escape') viewIndex.value = -1
  else if (e.key === 'ArrowLeft') viewStep(-1)
  else if (e.key === 'ArrowRight') viewStep(1)
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.hotspot-popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 24px;
}
.hotspot-popup {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 60px var(--shadow-lg);
}
.popup-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: var(--bg-hover);
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.popup-close:hover { background: var(--bg-elevated); }
.popup-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 8px;
}
.popup-category {
  display: inline-block;
  padding: 3px 12px;
  background: var(--bg-hover);
  border-radius: 10px;
  font-size: 12px;
  color: var(--accent);
  margin-bottom: 16px;
}
.popup-desc {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0 0 20px;
}
.popup-photos {
  background: var(--bg-surface);
  border-radius: 10px;
  padding: 16px;
}
.popup-photos.empty { padding: 40px; text-align: center; }
.photos-label { font-size: 13px; color: var(--text-muted); margin: 0 0 10px; }
.photos-hint { color: var(--text-placeholder); font-size: 14px; margin: 0; }
.popup-photo-list {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
}
.popup-photo-list img {
  width: 96px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
  cursor: zoom-in;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  box-shadow: 0 1px 4px var(--shadow-sm);
}
.popup-photo-list img:hover { transform: scale(1.06); }

/* 放大查看器 */
.popup-viewer {
  position: fixed;
  inset: 0;
  z-index: 1300;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}
.popup-viewer img {
  max-width: 90vw;
  max-height: 86vh;
  object-fit: contain;
  border-radius: 8px;
}
.viewer-close {
  position: absolute;
  top: 18px;
  right: 22px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.viewer-close:hover { background: rgba(255, 255, 255, 0.3); }
.viewer-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 26px;
  cursor: pointer;
}
.viewer-nav:hover { background: rgba(255, 255, 255, 0.28); }
.viewer-prev { left: 16px; }
.viewer-next { right: 16px; }
.viewer-count {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  margin: 0;
}

.popup-enter-active, .popup-leave-active {
  transition: opacity 0.3s ease;
}
.popup-enter-from, .popup-leave-to { opacity: 0; }
</style>
