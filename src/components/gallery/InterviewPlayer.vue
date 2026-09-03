<template>
  <div class="interview-player">
    <!-- 受访者选择 -->
    <div class="ip-tabs">
      <button
        v-for="iv in interviews"
        :key="iv.id"
        class="ip-tab"
        :class="{ active: activeId === iv.id }"
        @click="activeId = iv.id"
      >
        <span class="ip-tab-name">{{ iv.person }}</span>
        <span class="ip-tab-role">{{ iv.role }}</span>
      </button>
    </div>

    <div v-if="current" :key="activeId" class="ip-stage">
      <!-- 左侧：照片 + 字幕叠显 + 控制条 -->
      <div class="ip-media">
        <div class="ip-photo">
          <img :src="imgUrl" :alt="current.person" loading="lazy" />
          <div class="ip-photo-tag">
            {{ current.person }} · {{ current.place }}
          </div>
          <div class="ip-photo-sub" :class="{ show: status === 'ready' && activeCue }">
            <template v-if="status === 'ready'">
              {{ activeCue ? activeCue.text : '▶ 点击播放，字幕将同步呈现' }}
            </template>
            <template v-else-if="status === 'error'">字幕加载失败，请刷新重试</template>
            <template v-else>字幕加载中…</template>
          </div>
        </div>

        <div class="ip-ctrl">
          <button
            class="ip-play"
            :disabled="status !== 'ready'"
            @click="togglePlay"
            :aria-label="playing ? '暂停' : '播放'"
          >
            {{ playing ? '❚❚' : '▶' }}
          </button>
          <input
            class="ip-range"
            type="range"
            :min="0"
            :max="duration || 0"
            step="0.1"
            :value="cur"
            @input="onSeek"
          />
          <span class="ip-time">{{ formatTime(cur) }} / {{ formatTime(duration) }}</span>
          <div class="ip-rate">
            <button
              v-for="r in [0.75, 1, 1.25, 1.5]"
              :key="r"
              class="ip-rate-btn"
              :class="{ active: rate === r }"
              @click="setRate(r)"
            >
              {{ r }}×
            </button>
          </div>
        </div>

        <p class="ip-point">💬 本段要点：{{ current.point }}</p>
      </div>

      <!-- 右侧：可点击跳转的逐句字幕 -->
      <div class="ip-script" ref="scriptEl">
        <div class="ip-script-head">字幕 · 点击任意一句可跳转</div>
        <p
          v-for="(c, i) in cues"
          :key="i"
          class="ip-line"
          :class="{ active: i === activeIdx }"
          @click="seekCue(c)"
        >
          <span class="ip-line-time">{{ formatTime(c.start) }}</span>
          <span class="ip-line-text">{{ c.text }}</span>
        </p>
        <p v-if="!cues.length" class="ip-script-empty">
          {{ status === 'error' ? '（字幕暂不可用）' : '…' }}
        </p>
      </div>

      <!-- 音频（隐藏，用自定义控制条驱动） -->
      <audio
        ref="audioEl"
        :src="mediaUrl"
        preload="auto"
        @play="playing = true"
        @pause="playing = false"
        @timeupdate="onTime"
        @loadedmetadata="onLoadedMeta"
        @canplay="onCanPlay"
        @ended="playing = false"
        @error="status = 'error'"
        style="display: none"
      ></audio>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { getAllInterviews } from '../../data/interviews.js'
import { parseSRT, formatTime } from '../../utils/srt.js'

const BASE = import.meta.env.BASE_URL
const interviews = getAllInterviews()

const activeId = ref('visitor')
const audioEl = ref(null)
const scriptEl = ref(null)
const playing = ref(false)
const duration = ref(0)
const cur = ref(0)
const rate = ref(1)
const cues = ref([])
const status = ref('loading')
const autoPlay = ref(false)

const current = computed(() => interviews.find((i) => i.id === activeId.value))
const mediaUrl = computed(() => current.value ? BASE + current.value.audio : '')
const imgUrl = computed(() => current.value ? BASE + current.value.image : '')
const srtUrl = computed(() => current.value ? BASE + current.value.srt : '')

const activeIdx = computed(() => cues.value.findIndex((c) => cur.value >= c.start && cur.value < c.end))
const activeCue = computed(() => (activeIdx.value >= 0 ? cues.value[activeIdx.value] : null))

async function load(id) {
  status.value = 'loading'
  cues.value = []
  cur.value = 0
  duration.value = 0
  playing.value = false
  try {
    const res = await fetch(BASE + id.srt)
    if (!res.ok) throw new Error(res.status)
    cues.value = parseSRT(await res.text())
    status.value = 'ready'
  } catch (e) {
    status.value = 'error'
  }
}

watch(activeId, (id) => {
  const item = interviews.find((i) => i.id === id)
  if (item) load(item)
})

/* 播放控制 */
function togglePlay() {
  if (!audioEl.value) return
  if (playing.value) audioEl.value.pause()
  else audioEl.value.play().catch(() => {})
}
function onTime() {
  if (audioEl.value) cur.value = audioEl.value.currentTime
}
function onLoadedMeta() {
  if (audioEl.value) duration.value = audioEl.value.duration || 0
}
function onCanPlay() {
  if (autoPlay.value && audioEl.value) {
    audioEl.value.play().catch(() => {})
    autoPlay.value = false
  }
}
function onSeek(e) {
  if (!audioEl.value) return
  audioEl.value.currentTime = +e.target.value
  cur.value = +e.target.value
}
function seekCue(cue) {
  if (!audioEl.value) return
  audioEl.value.currentTime = cue.start
  cur.value = cue.start
}
function setRate(r) {
  rate.value = r
  if (audioEl.value) audioEl.value.playbackRate = r
}

/* 联动：接收“口述记忆卡”的播放请求 */
function onPlayInterview(e) {
  const slug = e.detail?.slug
  if (!slug || !interviews.some((i) => i.id === slug)) return
  autoPlay.value = true
  activeId.value = slug
}

/* 当前字幕自动滚入视野 */
watch(activeIdx, (idx) => {
  if (idx < 0 || !scriptEl.value) return
  scriptEl.value.querySelector('.ip-line.active')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
})

onMounted(() => {
  document.addEventListener('play-interview', onPlayInterview)
  load(interviews.find((i) => i.id === activeId.value))
})
onUnmounted(() => {
  document.removeEventListener('play-interview', onPlayInterview)
  if (audioEl.value) { audioEl.value.pause(); audioEl.value.src = '' }
})
</script>

<style scoped>
.interview-player { max-width: 1100px; margin: 0 auto; }

.ip-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
}
.ip-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 18px;
  border: 1px solid var(--border-default);
  border-radius: 14px;
  background: var(--bg-card);
  cursor: pointer;
  transition: all 0.2s ease;
}
.ip-tab:hover { border-color: var(--accent); }
.ip-tab.active {
  border-color: var(--accent);
  background: var(--accent);
}
.ip-tab-name { font-size: 15px; font-weight: 700; color: var(--text-heading); }
.ip-tab.active .ip-tab-name { color: #fff; }
.ip-tab-role { font-size: 11px; color: var(--text-muted); }
.ip-tab.active .ip-tab-role { color: rgba(255, 255, 255, 0.85); }

.ip-stage {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 20px;
  align-items: start;
}

/* 左侧媒体 */
.ip-media { min-width: 0; }
.ip-photo {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 6px 24px var(--shadow-md);
}
.ip-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ip-photo-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 12px;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 12px;
  border-radius: 16px;
  backdrop-filter: blur(4px);
}
.ip-photo-sub {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 46px 20px 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.82));
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
  opacity: 0.55;
  transition: opacity 0.25s;
}
.ip-photo-sub.show { opacity: 1; }

.ip-ctrl {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding: 10px 14px;
  background: var(--bg-card);
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow-sm);
}
.ip-play {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.ip-play:disabled { opacity: 0.5; cursor: not-allowed; }
.ip-range {
  flex: 1;
  accent-color: var(--accent);
  cursor: pointer;
}
.ip-time { font-size: 12px; color: var(--text-muted); white-space: nowrap; }
.ip-rate { display: flex; gap: 4px; }
.ip-rate-btn {
  border: 1px solid var(--border-default);
  background: var(--bg-surface);
  color: var(--text-muted);
  font-size: 11px;
  border-radius: 6px;
  padding: 2px 6px;
  cursor: pointer;
}
.ip-rate-btn.active { border-color: var(--accent); color: var(--accent); font-weight: 700; }
.ip-point {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 12px 0 0;
}

/* 右侧字幕 */
.ip-script {
  max-height: 460px;
  overflow-y: auto;
  background: var(--bg-card);
  border-radius: 14px;
  padding: 14px 16px;
  box-shadow: 0 2px 10px var(--shadow-sm);
}
.ip-script-head {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 8px;
  position: sticky;
  top: 0;
  background: var(--bg-card);
  padding: 4px 0 8px;
  z-index: 1;
}
.ip-line {
  display: flex;
  gap: 10px;
  align-items: baseline;
  margin: 0;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.15s;
}
.ip-line:hover { background: var(--bg-hover); }
.ip-line.active {
  background: var(--accent);
  color: #fff;
}
.ip-line-time { flex: 0 0 auto; font-size: 11px; color: var(--text-hint); }
.ip-line.active .ip-line-time { color: rgba(255, 255, 255, 0.8); }
.ip-script-empty { color: var(--text-placeholder); font-size: 13px; text-align: center; padding: 20px 0; }

@media (max-width: 860px) {
  .ip-stage { grid-template-columns: 1fr; }
  .ip-script { max-height: 320px; }
}
</style>
