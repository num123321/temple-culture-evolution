<template>
  <section id="home" class="hero-section">
    <!-- 背景照片层：无图时不渲染，渐变自动兜底 -->
    <img
      v-if="heroConfig.bgImage"
      :src="`/${heroConfig.bgImage}`"
      class="hero-bg-image"
      alt=""
    />
    <!-- 暗色遮罩：可调透明度，压在照片上确保文字可读 -->
    <div
      v-if="heroConfig.bgImage"
      class="hero-overlay-dark"
      :style="{ opacity: heroConfig.overlayOpacity }"
    ></div>
    <!-- 紫色光晕装饰 -->
    <div class="hero-overlay-accent"></div>
    <!-- 文字内容 -->
    <div class="hero-content">
      <p class="hero-kicker">田野调研 · 2026 夏</p>
      <h1 class="hero-title">
        从<span class="highlight">"神位"</span>到<span class="highlight">"人位"</span>
      </h1>
      <p class="hero-desc">
        千年佛寺空间功能的演变 —— 基于大同华严寺、善化寺、云冈石窟与悬空寺的田野考察
      </p>
      <div class="hero-sites">
        <span v-for="site in sites" :key="site" class="site-tag">{{ site }}</span>
      </div>
      <a href="#timeline" class="hero-scroll" @click.prevent="scrollTo('timeline')">
        <span>开始探索</span>
        <span class="scroll-arrow">↓</span>
      </a>
    </div>
  </section>
</template>

<script setup>
/*
 * Hero 配置 — 素材就绪后只需改这里
 * ─────────────────────────────────────
 * bgImage:         照片路径，相对于 public/ 目录。留 '' 则回退为纯渐变
 *                  推荐 16:9 横向构图，如云冈石窟全景、悬空寺全貌等
 * overlayOpacity:  暗色遮罩透明度，0 = 看清照片，1 = 全黑遮住
 *                  建议范围 0.4~0.7，默认 0.5 平衡文字可读性与照片氛围
 */
const heroConfig = {
  bgImage: '',          // ← 填入 'images/hero-bg.jpg' 启用背景照片
  overlayOpacity: 0.5, // ← 调节遮罩透明度
}

const sites = ['华严寺', '善化寺', '云冈石窟', '悬空寺']

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  overflow: hidden;
}

/* ── 照片层 (z-index: 0) ── */
.hero-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* ── 暗色遮罩 (z-index: 1) ── */
.hero-overlay-dark {
  position: absolute;
  inset: 0;
  background: #0f0c29;
  z-index: 1;
  pointer-events: none;
}

/* ── 紫色光晕 (z-index: 2) ── */
.hero-overlay-accent {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(var(--accent-rgb), 0.15), transparent 70%);
  z-index: 2;
}

/* ── 文字内容 (z-index: 3) ── */
.hero-content {
  position: relative;
  z-index: 3;
  max-width: 720px;
}
.hero-kicker {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: var(--accent-violet);
  margin: 0 0 20px;
}
.hero-title {
  font-size: 56px;
  font-weight: 800;
  color: #fff;
  margin: 0 0 24px;
  line-height: 1.2;
}
.hero-title .highlight {
  color: var(--accent-amber);
}
.hero-desc {
  font-size: 18px;
  color: var(--text-hint);
  line-height: 1.8;
  margin: 0 0 32px;
}
.hero-sites {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.site-tag {
  padding: 6px 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: var(--text-placeholder);
  font-size: 14px;
}
.hero-scroll {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}
.hero-scroll:hover { color: #fff; }
.scroll-arrow {
  font-size: 20px;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
@media (max-width: 640px) {
  .hero-title { font-size: 36px; }
  .hero-desc { font-size: 15px; }
}
</style>
