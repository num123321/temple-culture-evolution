<template>
  <div class="dialogue-view">
    <div class="dv-grid">
      <div v-for="d in dialogues" :key="d.id" class="dv-card">
        <h4 class="dv-card-title">{{ d.title }}</h4>

        <p v-if="d.question" class="dv-question">
          <span class="dv-question-label">这一问</span>
          <span class="dv-question-text">{{ d.question }}</span>
        </p>

        <!-- 同题观点对照 -->
        <div class="dv-voices">
          <div v-for="(v, i) in d.voices" :key="v.slug || i" class="dv-voice">
            <div class="dv-voice-head">
              <span class="dv-voice-side">{{ i === 0 ? '一方' : '另一方' }}</span>
              <span class="dv-voice-name">{{ v.person }}</span>
              <span class="dv-voice-role">{{ v.role }}</span>
            </div>
            <blockquote class="dv-voice-quote">“{{ v.quote }}”</blockquote>
            <button
              v-if="v.slug"
              class="dv-listen-btn"
              @click="listenInterview(v.slug)"
            >🎧 收听原声</button>
          </div>
        </div>

        <!-- 众声之间：编者视角的归纳 -->
        <div class="dv-note">
          <span class="dv-note-label">众声之间</span>
          <p class="dv-note-text">{{ d.note }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAllDialogues } from '../../data/dialogue.js'
const dialogues = getAllDialogues()

// 跳转到「采访实录」区块并播放对应受访者原声
const listenInterview = (slug) => {
  document.dispatchEvent(new CustomEvent('play-interview', { detail: { slug } }))
  const el = document.getElementById('interviews')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.dialogue-view { max-width: 1000px; margin: 0 auto; }
.dv-grid { display: flex; flex-direction: column; gap: 24px; }
.dv-card {
  background: var(--bg-card);
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 2px 12px var(--shadow-sm);
}
.dv-card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--bg-hover);
}
.dv-question {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 0 0 20px;
  padding: 12px 16px;
  background: linear-gradient(90deg, var(--bg-surface), transparent);
  border-left: 3px solid var(--accent-violet);
  border-radius: 0 10px 10px 0;
}
.dv-question-label {
  flex: 0 0 auto;
  font-size: 11px;
  font-weight: 700;
  color: var(--accent-violet);
  letter-spacing: 1px;
  border: 1px solid var(--border-default);
  border-radius: 6px;
  padding: 1px 7px;
}
.dv-question-text {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-heading);
  line-height: 1.6;
}

/* 同题观点对照 */
.dv-voices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-bottom: 18px;
}
.dv-voice {
  background: var(--bg-surface);
  border-radius: 12px;
  padding: 18px;
  border-top: 3px solid var(--accent-violet);
  display: flex;
  flex-direction: column;
}
.dv-voice-head {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.dv-voice-side {
  font-size: 11px;
  font-weight: 700;
  color: var(--accent-violet);
  border: 1px solid var(--border-default);
  border-radius: 6px;
  padding: 1px 7px;
}
.dv-voice-name { font-size: 16px; font-weight: 700; color: var(--text-heading); }
.dv-voice-role { font-size: 12px; color: var(--text-muted); }
.dv-voice-quote {
  margin: 0 0 14px;
  padding: 0 2px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.8;
  font-style: italic;
  flex: 1;
}
.dv-listen-btn {
  align-self: flex-start;
  padding: 5px 14px;
  border: 1px solid var(--border-default);
  border-radius: 16px;
  background: var(--bg-card);
  color: var(--accent);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-listen-btn:hover { border-color: var(--accent); background: var(--bg-hover); }

/* 众声之间：底色用琥珀 10% 叠加主题表面色，深浅模式均可读 */
.dv-note {
  background: color-mix(in srgb, var(--accent-amber) 10%, var(--bg-surface));
  border-left: 3px solid var(--accent-amber);
  border-radius: 0 10px 10px 0;
  padding: 14px 18px;
}
.dv-note-label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 6px;
}
.dv-note-label::before { content: '◈ '; color: var(--accent-amber); }
.dv-note-text {
  margin: 0;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.8;
}
@media (max-width: 560px) {
  .dv-voices { grid-template-columns: 1fr; }
}
</style>
