<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-icon">🏛️</span>
        <div>
          <p class="footer-title">佛寺文化演变 · 社会实践项目</p>
          <p class="footer-subtitle">从"神位"到"人位"：千年佛寺空间功能演变考察</p>
        </div>
      </div>
      <div class="footer-links">
        <a href="#home">首页</a>
        <a href="#timeline">调研历程</a>
        <a href="#baseline">历史回望</a>
        <a href="#space">空间故事</a>
        <a href="#findings">专题发现</a>
        <a href="#oral">口述记忆</a>
        <a href="#data">数据发现</a>
        <a href="#conclusion">研究手记</a>
        <a href="#media">影像记录</a>
        <a href="#about">关于我们</a>
      </div>
      <p class="footer-copy">© 2026 赓续文化基因 · 社会实践项目</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  background: #0f0c29;
  color: var(--text-placeholder);
  padding: 48px 24px 32px;
}
.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.footer-icon { font-size: 28px; }
.footer-title { font-size: 16px; font-weight: 600; color: #fff; margin: 0; }
.footer-subtitle { font-size: 13px; color: var(--text-hint); margin: 4px 0 0; }
.footer-links {
  display: flex;
  gap: 24px;
}
.footer-links a {
  color: var(--text-hint);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}
.footer-links a:hover { color: #fff; }
.footer-copy { font-size: 12px; color: var(--text-secondary); margin: 0; }
</style>
