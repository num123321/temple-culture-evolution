<template>
  <div class="video-player">
    <div class="vp-placeholder">
      <span>🎬</span>
      <h3>实践活动微视频</h3>
      <p>视频文件将在实践活动结束后剪辑完成并放入此处</p>
      <p class="vp-file-hint">
        视频路径：<code>/video/practice-doc.mp4</code>
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.video-player { max-width: 800px; margin: 0 auto; }
.vp-placeholder {
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #0f0c29, #302b63);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.vp-placeholder span { font-size: 56px; }
.vp-placeholder h3 {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}
.vp-placeholder p {
  font-size: 15px;
  color: var(--text-hint);
  margin: 0;
}
.vp-file-hint {
  font-size: 12px !important;
  color: var(--text-secondary) !important;
}
.vp-file-hint code {
  background: rgba(255,255,255,0.1);
  padding: 2px 8px;
  border-radius: 4px;
  font-family: monospace;
}
</style>
