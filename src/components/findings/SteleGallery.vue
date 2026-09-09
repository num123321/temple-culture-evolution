<template>
  <div class="stele-gallery">
    <h3 class="sg-title">碑刻题记</h3>
    <p class="sg-intro">以下为调研中采集的碑刻题记选录，均已整理研究详情（含一处史实纠误）。</p>
    <div class="sg-grid">
      <div
        v-for="stele in steles"
        :key="stele.id"
        class="sg-card"
      >
        <div class="sg-card-header">
          <span class="stele-type">{{ stele.type }}</span>
          <span class="stele-site">{{ stele.siteName }}</span>
        </div>
        <h4 class="stele-title">{{ stele.title }}</h4>
        <div class="stele-meta">
          <span>{{ stele.period }}</span>
          <span v-if="stele.year"> · {{ stele.year }}</span>
          <span> · {{ stele.location }}</span>
        </div>
        <p v-if="stele.summary" class="stele-summary">{{ stele.summary }}</p>

        <template v-if="hasDetail(stele)">
          <button
            class="sg-toggle"
            :class="{ open: openId === stele.id }"
            @click="toggleDetail(stele.id)"
          >
            {{ openId === stele.id ? '收起研究详情' : '展开研究详情' }}
            <span class="sg-toggle-arrow">{{ openId === stele.id ? '▴' : '▾' }}</span>
          </button>

          <div v-if="openId === stele.id" class="sg-detail">
            <template v-if="stele.people && stele.people.length">
              <h5 class="sg-h5">碑刻人物</h5>
              <dl class="sg-info">
                <div v-for="(p, i) in stele.people" :key="i" class="sg-info-row">
                  <dt>{{ p.role }}</dt>
                  <dd>{{ p.name }}</dd>
                </div>
              </dl>
            </template>

            <template v-else-if="stele.author || stele.calligrapher || stele.donor || stele.abbot || stele.backInscription">
              <h5 class="sg-h5">碑刻信息</h5>
              <dl class="sg-info">
                <div v-if="stele.author" class="sg-info-row"><dt>撰文</dt><dd>{{ stele.author }}</dd></div>
                <div v-if="stele.calligrapher" class="sg-info-row"><dt>书丹</dt><dd>{{ stele.calligrapher }}</dd></div>
                <div v-if="stele.donor" class="sg-info-row"><dt>捐修</dt><dd>{{ stele.donor }}</dd></div>
                <div v-if="stele.abbot" class="sg-info-row"><dt>住持</dt><dd>{{ stele.abbot }}</dd></div>
                <div v-if="stele.backInscription" class="sg-info-row"><dt>碑阴</dt><dd>{{ stele.backInscription }}</dd></div>
              </dl>
            </template>

            <template v-if="stele.contentIntro">
              <h5 class="sg-h5">碑文要旨</h5>
              <p class="sg-para">{{ stele.contentIntro }}</p>
            </template>

            <template v-if="stele.details && stele.details.length">
              <template v-for="(d, i) in stele.details" :key="i">
                <h5 class="sg-h5">{{ d.title }}</h5>
                <p class="sg-para">{{ d.text }}</p>
              </template>
            </template>

            <template v-if="stele.keyExcerpt">
              <h5 class="sg-h5">关键引文</h5>
              <blockquote class="sg-quote">{{ stele.keyExcerpt }}</blockquote>
            </template>

            <template v-if="stele.process && stele.process.length">
              <h5 class="sg-h5">修缮经过</h5>
              <ol class="sg-list sg-process">
                <li v-for="(p, i) in stele.process" :key="i">{{ p }}</li>
              </ol>
            </template>

            <template v-if="stele.values && stele.values.length">
              <h5 class="sg-h5">史料价值</h5>
              <ul class="sg-list">
                <li v-for="(v, i) in stele.values" :key="i">{{ v }}</li>
              </ul>
            </template>

            <template v-if="stele.chain && stele.chain.length">
              <h5 class="sg-h5">修缮史料链 <span v-if="stele.chainSub" class="sg-h5-sub">{{ stele.chainSub }}</span></h5>
              <ul class="sg-chain">
                <li v-for="(c, i) in stele.chain" :key="i" class="sg-chain-item">
                  <span class="sg-chain-date">{{ c.date }}</span>
                  <span class="sg-chain-name">{{ c.name }}</span>
                  <span v-if="c.note" class="sg-chain-note">—— {{ c.note }}</span>
                </li>
              </ul>
              <p v-if="stele.chainConclusion" class="sg-conclusion">※ {{ stele.chainConclusion }}</p>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAllSteles } from '../../data/steles.js'

const steles = getAllSteles()

// 存在以下任一字段即视为有"研究详情"可展开
const DETAIL_FIELDS = [
  'author', 'calligrapher', 'donor', 'abbot', 'backInscription', 'people',
  'contentIntro', 'details', 'keyExcerpt', 'process', 'values', 'chain'
]
const hasDetail = (stele) =>
  DETAIL_FIELDS.some(f => Array.isArray(stele[f]) ? stele[f].length : !!stele[f])

const openId = ref(null)
const toggleDetail = (id) => {
  openId.value = openId.value === id ? null : id
}
</script>

<style scoped>
.stele-gallery { max-width: 1100px; margin: 0 auto 48px; }
.sg-title { font-size: 22px; font-weight: 700; color: var(--text-heading); margin: 0 0 8px; text-align: center; }
.sg-intro { text-align: center; font-size: 14px; color: var(--text-muted); margin: 0 0 32px; }
.sg-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.sg-card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px var(--shadow-sm);
}
.sg-card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.stele-type {
  padding: 2px 10px;
  background: var(--bg-hover);
  border-radius: 6px;
  font-size: 11px;
  color: var(--accent);
  font-weight: 600;
}
.stele-site { font-size: 13px; color: var(--text-muted); }
.stele-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-heading);
  margin: 0 0 8px;
  line-height: 1.4;
}
.stele-meta { font-size: 12px; color: var(--text-hint); margin-bottom: 12px; }
.stele-summary { font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin: 0 0 16px; }

/* ── 研究详情展开面板 ── */
.sg-toggle {
  width: 100%;
  padding: 9px 14px;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  background: var(--bg-surface);
  color: var(--accent);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}
.sg-toggle:hover { background: var(--bg-hover); }
.sg-toggle.open { border-color: var(--accent); }
.sg-toggle-arrow { font-size: 10px; }

.sg-detail {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed var(--border-default);
  animation: sg-fade 0.25s ease;
}
@keyframes sg-fade { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }

.sg-h5 {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-heading);
  margin: 18px 0 8px;
  padding-left: 9px;
  border-left: 3px solid var(--accent);
}
.sg-h5:first-child { margin-top: 0; }
.sg-h5-sub { font-size: 11px; font-weight: 500; color: var(--text-muted); margin-left: 4px; }

.sg-info { margin: 0; }
.sg-info-row { display: flex; gap: 8px; margin-bottom: 6px; font-size: 13px; line-height: 1.7; }
.sg-info-row dt {
  flex: 0 0 40px;
  color: var(--text-muted);
  font-weight: 600;
}
.sg-info-row dd { margin: 0; color: var(--text-secondary); }

.sg-para { font-size: 13px; color: var(--text-secondary); line-height: 1.8; margin: 0; white-space: pre-line; }
.sg-quote {
  margin: 0;
  padding: 10px 14px;
  background: var(--bg-surface);
  border-left: 3px solid var(--accent-violet);
  border-radius: 0 8px 8px 0;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.8;
  font-style: italic;
}
.sg-list { margin: 0; padding-left: 20px; }
.sg-list li { font-size: 13px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 6px; }
.sg-process li::marker { color: var(--accent); font-weight: 700; }

.sg-chain { list-style: none; margin: 0; padding: 0; }
.sg-chain-item {
  position: relative;
  padding: 6px 0 6px 16px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-secondary);
}
.sg-chain-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-amber);
}
.sg-chain-date { font-weight: 700; color: var(--text-heading); }
.sg-chain-name { margin: 0 4px; }
.sg-chain-note { color: var(--text-muted); }
.sg-conclusion {
  margin: 10px 0 0;
  padding: 9px 12px;
  background: var(--bg-surface);
  border-radius: 8px;
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.8;
}
</style>
