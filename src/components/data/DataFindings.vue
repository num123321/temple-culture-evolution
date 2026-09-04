<template>
  <div class="data-findings">
    <!-- 词云图 -->
    <div class="df-section">
      <h3 class="df-title">{{ wordCloud.title }}</h3>
      <p class="df-subtitle">数据来源：{{ wordCloud.source }}</p>
      <WordCloudChart :data="wordCloud" />
    </div>

    <!-- 网络语境词云（公开网页来源） -->
    <div class="df-section">
      <h3 class="df-title">{{ webCloud.title }}</h3>
      <p class="df-subtitle">数据来源：{{ webCloud.source }}</p>
      <WordCloudChart :data="webCloud" />
    </div>

    <!-- 演变趋势折线图 -->
    <div class="df-section">
      <h3 class="df-title">{{ evoTrend.title }}</h3>
      <p class="df-subtitle">{{ evoTrend.subtitle }}</p>
      <TrendLineChart :data="evoTrend" />
    </div>

    <!-- 游客流量 -->
    <div class="df-section">
      <h3 class="df-title">{{ visitorFlow.title }}</h3>
      <p class="df-subtitle">数据来源：{{ visitorFlow.source }}</p>
      <TrendLineChart :data="visitorFlow" />
    </div>

    <!-- 问卷数据总览 -->
    <div class="df-section">
      <h3 class="df-title">{{ questionnaire.title }}</h3>
      <p class="df-subtitle">
        调查时间：{{ questionnaire.surveyDate }} · 现场发放的简洁问卷共 {{ questionnaire.questions.length }} 题
      </p>
      <div class="df-survey">
        <ol class="survey-list">
          <li v-for="(q, qi) in questionnaire.questions" :key="q.id" class="survey-item">
            <div class="survey-q-head">
              <span class="survey-no">{{ qi + 1 }}</span>
              <span class="survey-type">{{ q.type === 'multiple' ? '多选' : '单选' }}</span>
              <span class="survey-q-text">{{ q.text }}</span>
            </div>
            <div class="survey-opts">
              <span v-for="opt in q.options" :key="opt" class="survey-opt">{{ opt }}</span>
            </div>
          </li>
        </ol>
      </div>

      <!-- 调查结果 -->
      <div class="df-result">
        <div class="df-result-head">
          <h4 class="df-result-title">📊 调查结果</h4>
          <span v-if="questionnaire.totalResponses" class="df-result-count">
            {{ questionnaire.preview ? '预估样本' : '有效回收' }} {{ questionnaire.totalResponses }} 份
            <span v-if="questionnaire.preview" class="df-result-preview">（预测演示，待实测替换）</span>
          </span>
          <span v-else class="df-result-count">回收统计中</span>
        </div>

        <template v-if="surveyQuestions().length">
          <div v-for="q in surveyQuestions()" :key="q.id" class="df-result-q">
            <p class="df-result-qtext">
              <span class="df-result-qno">{{ q.id.slice(-1) }}</span>{{ q.text }}
            </p>
            <div v-for="(val, label) in q.results" :key="label" class="df-result-row">
              <span class="df-result-label">{{ label }}</span>
              <span class="df-result-bar">
                <span class="df-result-fill" :style="{ width: pctOf(q, val) + '%' }"></span>
              </span>
              <span class="df-result-val">{{ val }}</span>
            </div>
          </div>
        </template>
        <p v-else class="df-result-empty">
          问卷正在回收与统计——回收完成后，各题选择分布将以简洁条形图呈现在此。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getWordCloudData, getWebCloudData, getEvolutionTrendData, getVisitorFlowData } from '../../data/charts.js'
import { getQuestionnaireData } from '../../data/questionnaires.js'
import WordCloudChart from './WordCloudChart.vue'
import TrendLineChart from './TrendLineChart.vue'

const wordCloud = getWordCloudData()
const webCloud = getWebCloudData()
const evoTrend = getEvolutionTrendData()
const visitorFlow = getVisitorFlowData()
const questionnaire = getQuestionnaireData()

/* —— 调查结果 —— */
// 仅返回已有数据结果的题目
const surveyQuestions = () =>
  questionnaire.questions.filter((q) => q.results && Object.keys(q.results).length)
// 该选项占比：单选=人数/回收总数；多选=选择人数/回收总数（即“选择率”），与问卷口径一致
const pctOf = (q, val) => {
  const base =
    Number(questionnaire.totalResponses) ||
    Object.values(q.results || {}).reduce((a, b) => a + Number(b || 0), 0)
  return base ? Math.round((Number(val) / base) * 100) : 0
}
</script>

<style scoped>
.data-findings { max-width: 1000px; margin: 0 auto; }
.df-section { margin-bottom: 48px; }
.df-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 4px;
  text-align: center;
}
.df-subtitle {
  text-align: center;
  font-size: 13px;
  color: var(--text-hint);
  margin: 0 0 24px;
}
/* ── 简洁问卷展示 ── */
.df-survey {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: 14px;
  padding: 28px 32px;
  max-width: 720px;
  margin: 0 auto;
}
.survey-list { list-style: none; margin: 0; padding: 0; }
.survey-item {
  margin-bottom: 22px;
  padding-bottom: 18px;
  border-bottom: 1px dashed var(--bg-elevated);
}
.survey-item:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
.survey-q-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 10px;
}
.survey-no {
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.survey-type {
  flex: 0 0 auto;
  font-size: 11px;
  color: var(--accent-violet);
  border: 1px solid var(--border-default);
  border-radius: 6px;
  padding: 1px 6px;
}
.survey-q-text {
  color: var(--text-heading);
  font-weight: 600;
}
.survey-opts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: 32px;
}
.survey-opt {
  font-size: 13px;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--bg-elevated);
  padding: 4px 12px;
  border-radius: 14px;
}

/* ── 调查结果 ── */
.df-result {
  margin: 24px auto 0;
  max-width: 720px;
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: 14px;
  padding: 22px 26px;
}
.df-result-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}
.df-result-title { margin: 0; font-size: 15px; font-weight: 700; color: var(--text-heading); }
.df-result-count { font-size: 12px; color: var(--text-hint); }
.df-result-preview { color: var(--accent-amber); font-size: 11px; }
.df-result-empty {
  margin: 0;
  padding: 26px 18px;
  text-align: center;
  color: var(--text-placeholder);
  font-size: 13px;
  line-height: 1.8;
  border: 1px dashed var(--bg-elevated);
  border-radius: 10px;
}
.df-result-q { margin-bottom: 18px; }
.df-result-q:last-child { margin-bottom: 0; }
.df-result-qtext {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-heading);
}
.df-result-qno {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.df-result-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}
.df-result-label { flex: 0 0 88px; font-size: 12px; color: var(--text-muted); text-align: right; }
.df-result-bar {
  flex: 1;
  height: 8px;
  background: var(--bg-elevated);
  border-radius: 4px;
  overflow: hidden;
}
.df-result-fill {
  display: block;
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-violet));
  transition: width 0.4s ease;
}
.df-result-val { flex: 0 0 30px; font-size: 12px; font-weight: 700; color: var(--text-heading); }
</style>
