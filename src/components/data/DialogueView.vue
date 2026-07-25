<template>
  <div class="dialogue-view">
    <h3 class="dv-title">声音与数据的对话</h3>
    <p class="dv-intro">
      将口述质性材料与量化数据并置，寻找主观经验与客观证据之间的张力与印证。
    </p>
    <div class="dv-grid">
      <div
        v-for="d in dialogues"
        :key="d.id"
        class="dv-card"
      >
        <h4 class="dv-card-title">{{ d.title }}</h4>

        <div class="dv-pair">
          <!-- 声音 -->
          <div class="dv-oral">
            <div class="pair-label">🗣️ 声音</div>
            <p class="oral-source">{{ d.oralExcerpt.interviewee }}</p>
            <blockquote v-if="d.oralExcerpt.quote !== '[待填入口述原文]'">
              "{{ d.oralExcerpt.quote }}"
            </blockquote>
            <p v-else class="placeholder">[待填入口述原文]</p>
            <p class="oral-context">{{ d.oralExcerpt.context }}</p>
          </div>

          <!-- 数据 -->
          <div class="dv-data">
            <div class="pair-label">📊 数据</div>
            <span class="data-type">{{ d.dataEvidence.type }}</span>
            <p class="data-desc">{{ d.dataEvidence.description }}</p>
            <p v-if="d.dataEvidence.finding !== '[待填入数据发现]'" class="data-finding">
              {{ d.dataEvidence.finding }}
            </p>
            <p v-else class="placeholder">[待填入数据发现]</p>
          </div>
        </div>

        <!-- 张力分析 -->
        <div class="dv-tension">
          <div class="pair-label">⚡ 张力分析</div>
          <p>{{ d.tension.description !== '[待填入张力分析]' ? d.tension.description : '[待填入张力分析]' }}</p>
          <p v-if="d.tension.resolution !== '[待填入综合解释]'" class="resolution">
            <strong>综合解释：</strong>{{ d.tension.resolution }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAllDialogues } from '../../data/dialogue.js'
const dialogues = getAllDialogues()
</script>

<style scoped>
.dialogue-view { max-width: 1000px; margin: 0 auto; }
.dv-title { font-size: 22px; font-weight: 700; color: #1a1a2e; margin: 0 0 8px; text-align: center; }
.dv-intro { text-align: center; font-size: 14px; color: #888; margin: 0 0 32px; }
.dv-grid { display: flex; flex-direction: column; gap: 24px; }
.dv-card {
  background: #fff;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.dv-card-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f5;
}
.dv-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}
.dv-oral, .dv-data {
  background: #f8f9fc;
  border-radius: 10px;
  padding: 18px;
}
.pair-label {
  font-size: 12px;
  font-weight: 600;
  color: #6366f1;
  margin-bottom: 8px;
}
.oral-source { font-size: 13px; color: #888; margin: 0 0 8px; }
.dv-oral blockquote {
  margin: 0 0 8px;
  padding: 10px 14px;
  border-left: 3px solid #6366f1;
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  font-style: italic;
}
.oral-context { font-size: 12px; color: #aaa; margin: 0; }
.data-type {
  display: inline-block;
  padding: 2px 10px;
  background: #e8e8f5;
  border-radius: 6px;
  font-size: 11px;
  color: #8b5cf6;
  font-weight: 600;
  margin-bottom: 8px;
}
.data-desc { font-size: 13px; color: #666; margin: 0 0 6px; }
.data-finding { font-size: 13px; color: #555; font-weight: 600; margin: 0; }
.placeholder { font-size: 13px; color: #ccc; font-style: italic; margin: 0; }
.dv-tension {
  background: linear-gradient(135deg, #fefce8, #f8f9fc);
  border-radius: 10px;
  padding: 18px;
}
.dv-tension p { font-size: 14px; color: #666; line-height: 1.7; margin: 8px 0 0; }
.resolution { margin-top: 8px !important; padding-top: 8px; border-top: 1px solid #f0e68c; }
@media (max-width: 640px) { .dv-pair { grid-template-columns: 1fr; } }
</style>
