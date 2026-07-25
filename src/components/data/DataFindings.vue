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
        调查时间：{{ questionnaire.surveyDate }} · 回收 {{ questionnaire.totalResponses }} 份
      </p>
      <div class="df-survey-placeholder">
        <span>📊</span>
        <p>问卷数据可视化将在此展示（柱状图 / 饼图）</p>
        <p class="hint">请填入实际回收的问卷数据</p>
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
  color: #1a1a2e;
  margin: 0 0 4px;
  text-align: center;
}
.df-subtitle {
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin: 0 0 24px;
}
.df-survey-placeholder {
  background: #f8f9fc;
  border-radius: 12px;
  padding: 48px;
  text-align: center;
  border: 2px dashed #e0e0ea;
}
.df-survey-placeholder span { font-size: 40px; }
.df-survey-placeholder p { font-size: 15px; color: #999; margin: 12px 0 0; }
.hint { font-size: 12px !important; color: #bbb !important; }
</style>
