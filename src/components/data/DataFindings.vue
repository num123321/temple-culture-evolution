<template>
  <div class="data-findings">
    <!-- 词云图 -->
    <div class="df-section">
      <h3 class="df-title">{{ wordCloud.title }}</h3>
      <p class="df-subtitle">数据来源：{{ wordCloud.source }}</p>
      <WordCloudChart :data="wordCloud" />
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
    </div>
  </div>
</template>

<script setup>
import { getWordCloudData, getEvolutionTrendData, getVisitorFlowData } from '../../data/charts.js'
import { getQuestionnaireData } from '../../data/questionnaires.js'
import WordCloudChart from './WordCloudChart.vue'
import TrendLineChart from './TrendLineChart.vue'

const wordCloud = getWordCloudData()
const evoTrend = getEvolutionTrendData()
const visitorFlow = getVisitorFlowData()
const questionnaire = getQuestionnaireData()
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
</style>
