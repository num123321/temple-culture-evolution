<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="header-inner">
      <a href="#home" class="logo" @click.prevent="scrollTo('home')">
        <span class="logo-icon">🏛️</span>
        <span class="logo-text">佛寺文化演变 · 田野调研</span>
      </a>

      <nav class="nav" :class="{ open: mobileOpen }">
        <div
          v-for="group in navGroups"
          :key="group.id"
          class="nav-group"
          @mouseenter="group.children.length && (hoveredGroup = group.id)"
          @mouseleave="hoveredGroup = null"
        >
          <a
            :href="`#${group.id}`"
            class="nav-link"
            :class="{ active: isGroupActive(group) }"
            @click.prevent="handleGroupClick(group)"
          >
            {{ group.label }}
            <span v-if="group.children.length" class="nav-arrow" :class="{ open: expandedGroup === group.id }">▼</span>
          </a>
          <div v-if="group.children.length && (isDesktop ? hoveredGroup === group.id : expandedGroup === group.id)" class="nav-dropdown">
            <a
              v-for="child in group.children"
              :key="child.id"
              :href="`#${child.id}`"
              class="nav-sub-link"
              :class="{ active: activeSection === child.id }"
              @click.prevent="handleSubClick(child.id)"
            >
              {{ child.label }}
            </a>
          </div>
        </div>
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

const navGroups = [
  { id: 'home', label: '首页', children: [] },
  { id: 'timeline', label: '调研概览', children: [] },
  {
    id: 'baseline', label: '空间分析',
    children: [
      { id: 'baseline', label: '历史回望' },
      { id: 'space', label: '空间故事' }
    ]
  },
  { id: 'findings', label: '专题发现', children: [] },
  {
    id: 'oral', label: '口述与数据',
    children: [
      { id: 'oral', label: '口述记忆' },
      { id: 'data', label: '数据发现' }
    ]
  },
  {
    id: 'conclusion', label: '研究总结',
    children: [
      { id: 'conclusion', label: '研究手记' },
      { id: 'media', label: '影像记录' }
    ]
  },
  { id: 'about', label: '关于我们', children: [] }
]

const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('home')
const hoveredGroup = ref(null)
const expandedGroup = ref(null)
const isDesktop = ref(window.innerWidth > 960)

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleGroupClick = (group) => {
  if (isDesktop.value) {
    if (group.children.length) {
      scrollTo(group.children[0].id)
    } else {
      scrollTo(group.id)
    }
  } else {
    if (group.children.length) {
      expandedGroup.value = expandedGroup.value === group.id ? null : group.id
    } else {
      scrollTo(group.id)
      mobileOpen.value = false
    }
  }
}

const handleSubClick = (id) => {
  scrollTo(id)
  mobileOpen.value = false
  expandedGroup.value = null
}

const isGroupActive = (group) => {
  if (activeSection.value === group.id) return true
  return group.children.some(c => c.id === activeSection.value)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80

  const allIds = []
  navGroups.forEach(g => {
    allIds.push(g.id)
    g.children.forEach(c => allIds.push(c.id))
  })
  const sections = allIds.map(id => document.getElementById(id)).filter(Boolean)
  for (let i = sections.length - 1; i >= 0; i--) {
    const rect = sections[i].getBoundingClientRect()
    if (rect.top <= 120) {
      activeSection.value = sections[i].id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', onResize)
})

function onResize() {
  isDesktop.value = window.innerWidth > 960
  if (!isDesktop.value) {
    hoveredGroup.value = null
  }
}
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
  flex-shrink: 0;
}
.logo-icon { font-size: 24px; }
.logo-text {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-heading);
}
.nav {
  display: flex;
  gap: 2px;
}
.nav-group {
  position: relative;
}
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: 13px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;
  white-space: nowrap;
}
.nav-link:hover,
.nav-link.active {
  color: var(--text-heading);
  background: var(--bg-hover);
}
.nav-arrow {
  font-size: 8px;
  margin-left: 2px;
  opacity: 0.5;
  transition: transform 0.2s;
}
.nav-arrow.open {
  transform: rotate(180deg);
}
.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 120px;
  padding: 6px 0;
  background: var(--bg-card);
  border: 0.5px solid var(--border-default);
  border-radius: 8px;
  box-shadow: 0 4px 16px var(--shadow-md);
  backdrop-filter: blur(16px);
  z-index: 1100;
}
.nav-sub-link {
  display: block;
  padding: 8px 16px;
  font-size: 13px;
  color: var(--text-secondary);
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.15s;
}
.nav-sub-link:hover,
.nav-sub-link.active {
  color: var(--text-heading);
  background: var(--bg-hover);
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
  flex-shrink: 0;
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
    height: calc(100vh - 64px);
    flex-direction: column;
    background: var(--bg-card);
    backdrop-filter: blur(16px);
    padding: 16px 24px;
    gap: 2px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
  }
  .nav.open { transform: translateX(0); }
  .nav-dropdown {
    position: static;
    transform: none;
    box-shadow: none;
    border: none;
    padding: 0 0 0 16px;
    background: transparent;
  }
  .nav-sub-link {
    padding: 10px 16px;
    font-size: 14px;
  }
  .nav-link {
    font-size: 16px;
    padding: 10px 0;
    width: 100%;
  }
  .nav-arrow { font-size: 10px; }
  .mobile-toggle { display: flex; }
}
</style>
