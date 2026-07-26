import { createApp } from 'vue'
import App from './App.vue'

/* 全局图片加载失败兜底 */
window.addEventListener('error', (e) => {
  if (e.target && e.target.tagName === 'IMG') {
    e.target.style.display = 'none'
  }
}, true)

const app = createApp(App)
app.mount('#app')
