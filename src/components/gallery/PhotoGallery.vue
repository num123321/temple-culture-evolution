<template>
  <div class="photo-gallery">
    <!-- 站点筛选 -->
    <div class="pg-filters">
      <button
        class="pg-filter"
        :class="{ active: activeId === 'all' }"
        @click="setFilter('all')"
      >
        全部
        <span v-if="total" class="pg-badge">{{ total }}</span>
      </button>
      <button
        v-for="site in sites"
        :key="site.id"
        class="pg-filter"
        :class="{ active: activeId === site.id }"
        @click="setFilter(site.id)"
      >
        {{ site.icon }} {{ site.name }}
        <span v-if="site.photos.length" class="pg-badge">{{ site.photos.length }}</span>
      </button>
    </div>

    <p v-if="currentIntro" class="pg-intro">{{ currentIntro }}</p>

    <!-- 照片区：默认折叠只显示首张，点击「展开」显示全部 -->
    <template v-if="shown.length">
      <!-- 折叠预览：第一张 -->
      <div v-if="!expanded" class="pg-preview" @click="expanded = true">
        <img
          :src="shown[0].thumb"
          :alt="shown[0].site.name"
          loading="lazy"
        />
        <div class="pg-preview-mask">
          <span class="pg-preview-badge">
            {{ shown[0].site.icon }} {{ shown[0].site.name }}
          </span>
          <span class="pg-preview-count">
            📷 共 {{ shown.length }} 张 · 点击展开浏览
          </span>
        </div>
      </div>

      <!-- 展开后的完整网格 -->
      <div v-else class="pg-grid">
        <figure
          v-for="(photo, i) in shown"
          :key="i"
          class="pg-item"
          @click="openAt(i)"
        >
          <img
            :src="photo.thumb"
            :alt="photo.caption || photo.site.name"
            loading="lazy"
          />
          <figcaption class="pg-caption">
            <span class="pg-caption-site">{{ photo.site.icon }} {{ photo.site.name }}</span>
            <span v-if="photo.caption">{{ photo.caption }}</span>
          </figcaption>
          <span class="pg-zoom">⤢</span>
        </figure>
      </div>

      <!-- 展开 / 收起 -->
      <div v-if="shown.length > 1" class="pg-expand">
        <button class="pg-expand-btn" @click="expanded = !expanded">
          {{ expanded ? '▲ 收起全部' : '▼ 展开查看全部' }}
          <span class="pg-expand-num">{{ shown.length }} 张</span>
        </button>
      </div>
    </template>

    <!-- 空态：照片整理中 -->
    <div v-else class="pg-empty">
      <div class="pg-empty-icon">📷</div>
      <h4 class="pg-empty-title">
        {{ activeSiteName }} · 现场照片整理中
      </h4>
      <p class="pg-empty-text">
        2026 夏田野调研的实拍照片正在导出与筛选，将分批补充到图库。
      </p>
      <p class="pg-empty-hint">
        照片可放入 <code>public/images/photos/{{ activeId === 'all' ? '<调研点>/' : activeId + '/' }}</code>
      </p>
    </div>

    <!-- 灯箱 -->
    <Transition name="lb">
      <div v-if="isOpen" class="pg-lightbox" @click.self="close">
        <button class="lb-close" @click="close" aria-label="关闭">✕</button>
        <button class="lb-nav lb-prev" @click="prev" aria-label="上一张">‹</button>
        <div class="lb-stage">
          <img v-if="active" :src="active.url" :alt="active.caption || ''" />
        </div>
        <button class="lb-nav lb-next" @click="next" aria-label="下一张">›</button>
        <div v-if="active" class="lb-info">
          <p v-if="active.caption" class="lb-caption">{{ active.caption }}</p>
          <p class="lb-meta">
            {{ active.site.icon }} {{ active.site.name }} · {{ lightIndex + 1 }} / {{ shown.length }}
            <span class="lb-tip">← → 切换 · Esc 关闭</span>
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import { getAllGallery } from '../../data/photo-gallery.js'

const BASE = import.meta.env.BASE_URL
const sites = getAllGallery()

const activeId = ref('all')
const lightIndex = ref(-1)
const expanded = ref(false)

/* 把数据条目统一成带完整 URL 的记录：thumb=网格缩略图，url=灯箱主图 */
const resolve = (site, photo) => {
  const p = typeof photo === 'string' ? { src: photo } : photo
  const main = BASE + (p.src || '').replace(/^\//, '')
  return {
    ...p,
    url: main,
    thumb: p.thumb ? BASE + p.thumb.replace(/^\//, '') : main,
    site
  }
}

const shown = computed(() => {
  if (activeId.value === 'all') {
    return sites.flatMap((s) => s.photos.map((p) => resolve(s, p)))
  }
  const site = sites.find((s) => s.id === activeId.value)
  return (site?.photos || []).map((p) => resolve(site, p))
})

const total = computed(() => sites.reduce((n, s) => n + s.photos.length, 0))
const activeSite = computed(() => sites.find((s) => s.id === activeId.value))
const activeSiteName = computed(() => activeId.value === 'all' ? '全调研点' : (activeSite.value?.name || ''))
const currentIntro = computed(() => activeSite.value?.intro || '')

const setFilter = (id) => {
  activeId.value = id
  expanded.value = false
  close()
}

/* 灯箱状态 */
const isOpen = computed(() => lightIndex.value >= 0)
const active = computed(() => shown.value[lightIndex.value] || null)
const openAt = (i) => { lightIndex.value = i }
const close = () => { lightIndex.value = -1 }
const prev = () => { lightIndex.value = (lightIndex.value - 1 + shown.value.length) % shown.value.length }
const next = () => { lightIndex.value = (lightIndex.value + 1) % shown.value.length }

const onKey = (e) => {
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

watch(isOpen, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
  if (v) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.photo-gallery { max-width: 1200px; margin: 0 auto; }

/* ── 筛选 ── */
.pg-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}
.pg-filter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border: 1px solid var(--border-default);
  border-radius: 24px;
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.pg-filter:hover { border-color: var(--accent); color: var(--accent); }
.pg-filter.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  font-weight: 600;
}
.pg-badge {
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--bg-hover);
  color: var(--text-muted);
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.pg-filter.active .pg-badge { background: rgba(255, 255, 255, 0.25); color: #fff; }

.pg-intro { text-align: center; font-size: 13px; color: var(--text-muted); margin: 0 0 32px; }

/* ── 折叠预览（仅第一张） ── */
.pg-preview {
  position: relative;
  max-width: 880px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  cursor: zoom-in;
  box-shadow: 0 4px 18px var(--shadow-md);
  background: var(--bg-surface);
}
.pg-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}
.pg-preview:hover img { transform: scale(1.04); }
.pg-preview-mask {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
  padding: 18px;
  background: linear-gradient(transparent 42%, rgba(0, 0, 0, 0.66));
}
.pg-preview-badge {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}
.pg-preview-count {
  color: rgba(255, 255, 255, 0.92);
  font-size: 13px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* ── 展开 / 收起按钮 ── */
.pg-expand { margin-top: 20px; text-align: center; }
.pg-expand-btn {
  padding: 10px 28px;
  border-radius: 26px;
  border: 1px solid var(--border-default);
  background: var(--bg-card);
  color: var(--accent);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px var(--shadow-sm);
}
.pg-expand-btn:hover {
  border-color: var(--accent);
  background: var(--bg-hover);
}
.pg-expand-num { margin-left: 6px; font-size: 12px; opacity: 0.75; }

/* ── 网格 ── */
.pg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
}
.pg-item {
  position: relative;
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: var(--bg-surface);
  cursor: zoom-in;
  box-shadow: 0 2px 8px var(--shadow-sm);
}
.pg-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.pg-item:hover img { transform: scale(1.05); }
.pg-zoom {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}
.pg-item:hover .pg-zoom { opacity: 1; }
.pg-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 28px 12px 10px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.72));
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0;
  transition: opacity 0.25s;
}
.pg-item:hover .pg-caption { opacity: 1; }
.pg-caption-site { margin-right: 6px; opacity: 0.85; }

/* ── 空态 ── */
.pg-empty {
  border: 2px dashed var(--border-default);
  border-radius: 16px;
  padding: 64px 24px;
  text-align: center;
  background: var(--bg-surface);
}
.pg-empty-icon { font-size: 44px; }
.pg-empty-title { font-size: 18px; font-weight: 700; color: var(--text-heading); margin: 12px 0 8px; }
.pg-empty-text { font-size: 14px; color: var(--text-secondary); margin: 0 0 6px; }
.pg-empty-hint { font-size: 12px; color: var(--text-placeholder); margin: 0; }
.pg-empty-hint code {
  background: var(--bg-hover);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

/* ── 灯箱 ── */
.pg-lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}
.lb-stage { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
.lb-stage img {
  max-width: min(94vw, 1200px);
  max-height: 84vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.6);
}
.lb-close {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s;
}
.lb-close:hover { background: rgba(255, 255, 255, 0.3); }
.lb-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 2;
}
.lb-nav:hover { background: rgba(255, 255, 255, 0.28); }
.lb-prev { left: 20px; }
.lb-next { right: 20px; }
.lb-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  padding: 18px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
  color: #fff;
}
.lb-caption { margin: 0 0 4px; font-size: 15px; }
.lb-meta { margin: 0; font-size: 12px; opacity: 0.8; }
.lb-tip { margin-left: 12px; opacity: 0.6; font-size: 11px; }

/* 灯箱过渡 */
.lb-enter-active, .lb-leave-active { transition: opacity 0.25s ease; }
.lb-enter-from, .lb-leave-to { opacity: 0; }

@media (max-width: 640px) {
  .pg-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
  .pg-filter { padding: 6px 12px; font-size: 13px; }
  .lb-nav { width: 36px; height: 36px; font-size: 22px; }
  .lb-prev { left: 6px; }
  .lb-next { right: 6px; }
}
</style>
