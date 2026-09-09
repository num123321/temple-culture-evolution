本目录存放「采访实录」配套录音（实际文件在 public/audio/interviews/ 下，与 src/data/interviews.js 中 slug 同名）：
  visitor.mp3       外地游客
  shopkeeper.mp3    景区店员
  elder.mp3         本地大娘
  cleaner.mp3       环卫大爷
  vendor.mp3        路边小贩

要求：
  · .mp3 格式，建议单段 ≤ 15 MB
  · 文件名与 src/data/interviews.js 中的 audio 字段保持一致

播放：页面「采访实录」InterviewPlayer.vue 会按 slug 自动加载音频与字幕。
