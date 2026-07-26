<template>
  <Transition name="popup">
    <div v-if="hotspot" class="hotspot-popup-overlay" @click.self="$emit('close')">
      <div class="hotspot-popup">
        <button class="popup-close" @click="$emit('close')">✕</button>
        <h4 class="popup-title">{{ hotspot.label }}</h4>
        <span class="popup-category">{{ hotspot.category }}</span>
        <p class="popup-desc">{{ hotspot.description }}</p>
        <div v-if="hotspot.photos && hotspot.photos.length" class="popup-photos">
          <p class="photos-hint">📷 实拍照片将在此展示</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  hotspot: { type: Object, default: null }
})
defineEmits(['close'])
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
  padding: 40px;
  text-align: center;
}
.photos-hint { color: var(--text-placeholder); font-size: 14px; margin: 0; }

.popup-enter-active, .popup-leave-active {
  transition: opacity 0.3s ease;
}
.popup-enter-from, .popup-leave-to { opacity: 0; }
</style>
