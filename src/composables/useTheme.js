import { ref, computed, watchEffect } from 'vue'

const THEME_KEY = 'temple-theme'
const theme = ref(localStorage.getItem(THEME_KEY) || 'light')

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem(THEME_KEY, theme.value)
  })

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(t) {
    theme.value = t
  }

  return { theme, isDark, toggle, setTheme }
}
