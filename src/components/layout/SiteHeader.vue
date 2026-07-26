<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="header-inner">
      <a href="#home" class="logo" @click.prevent="scrollTo('home')">
        <span class="logo-icon">🏛️</span>
        <span class="logo-text">佛寺文化演变 · 田野调研</span>
      </a>
      <nav class="nav" :class="{ open: mobileOpen }">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollTo(item.id); mobileOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen">
        <span></span><span></span><span></span>
      </button>
      <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换亮色模式' : '切换深色模式'">
        <span v-if="isDark">☀️</span>
        <span v-else>🌙</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../../composables/useTheme.js'

const { isDark, toggle: toggleTheme } = useTheme()

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'timeline', label: '调研历程' },
  { id: 'baseline', label: '历史回望' },
  { id: 'space', label: '空间故事' },
  { id: 'findings', label: '专题发现' },
  { id: 'oral', label: '口述记忆' },
  { id: 'data', label: '数据发现' },
  { id: 'conclusion', label: '研究手记' },
  { id: 'media', label: '影像记录' },
  { id: 'about', label: '关于我们' }
]

const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('home')

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80

  const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
  for (let i = sections.length - 1; i >= 0; i--) {
    const rect = sections[i].getBoundingClientRect()
    if (rect.top <= 120) {
      activeSection.value = sections[i].id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 24px;
  transition: all 0.3s ease;
  background: transparent;
}
.site-header.scrolled {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 3px var(--shadow-md);
}
.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
}
.logo-icon { font-size: 24px; }
.logo-text {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-heading);
}
.nav {
  display: flex;
  gap: 4px;
}
.nav-link {
  padding: 6px 14px;
  font-size: 14px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;
}
.nav-link:hover,
.nav-link.active {
  color: var(--text-heading);
  background: var(--shadow-hover);
}
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.mobile-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-heading);
  border-radius: 2px;
  transition: all 0.3s;
}
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 6px;
  border-radius: 8px;
  transition: background 0.2s;
  line-height: 1;
}
.theme-toggle:hover {
  background: var(--bg-hover);
}
@media (max-width: 960px) {
  .nav {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background: var(--bg-card);
    backdrop-filter: blur(16px);
    padding: 24px;
    gap: 8px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }
  .nav.open { transform: translateX(0); }
  .nav-link { font-size: 18px; padding: 12px 0; }
  .mobile-toggle { display: flex; }
}
</style>
