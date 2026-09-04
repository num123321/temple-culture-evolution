<template>
  <div class="video-player">
    <!-- 16:9 播放器：视频存在时正常加载；不存在则触发 error 切到占位 -->
    <video
      v-show="mode !== 'missing'"
      class="vp-video"
      :src="videoUrl"
      controls
      preload="metadata"
      playsinline
      @loadeddata="mode = 'ok'"
      @error="mode = 'missing'"
    ></video>

    <!-- 视频未放置：占位提示 -->
    <div v-if="mode === 'missing'" class="vp-placeholder">
      <span>🎬</span>
      <h3>社会实践总结视频</h3>
      <p>本模块用于总结本次田野调研实践的整体开展情况（16:9 横屏）。</p>
      <p class="vp-file-hint">
        成片尚未放置 —— 请将剪辑好的视频命名为
        <code>practice-summary.mp4</code>
        放入
        <code>public/video/</code>
        目录后刷新页面即可自动播放。
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const BASE = import.meta.env.BASE_URL
const videoUrl = `${BASE}video/practice-summary.mp4`

// 探测状态：unknown（加载中）/ ok（可播放）/ missing（未放置）
// 视频元素会用 range 请求加载 metadata；文件存在 → loadeddata，不存在 → error
const mode = ref('unknown')
</script>

<style scoped>
.video-player { max-width: 960px; margin: 0 auto; }
.vp-video {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 16px;
  display: block;
  object-fit: contain;
}
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
