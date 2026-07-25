<template>
  <section id="home" class="hero-section">
    <div class="hero-overlay"></div>
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
.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%);
}
.hero-content {
  position: relative;
  max-width: 720px;
}
.hero-kicker {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: #8b5cf6;
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
  color: #f59e0b;
}
.hero-desc {
  font-size: 18px;
  color: #aaa;
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
  color: #ccc;
  font-size: 14px;
}
.hero-scroll {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #888;
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
