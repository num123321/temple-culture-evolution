/**
 * 图表数据 — 词云、演变趋势折线图、游客流量
 * 对应 WordCloudChart / TrendLineChart 组件
 */
import { wordcloudWords } from './wordcloudWords.js'

export const wordCloudData = {
  title: '访谈关键词词云',
  source: '口述记忆转录文本（5 段采访字幕）',
  words: wordcloudWords
}

export const evolutionTrendData = {
  title: '佛寺功能演变趋势',
  subtitle: '从"神位"到"人位"的量化观察',
  xAxis: ['辽代', '金代', '元代', '明代', '清代', '民国', '当代'],
  series: [
    {
      name: '宗教功能指数',
      data: [10, 9, 7, 8, 6, 4, 3],
      color: '#f59e0b'
    },
    {
      name: '旅游功能指数',
      data: [1, 2, 3, 3, 5, 6, 9],
      color: '#3b82f6'
    },
    {
      name: '文化教育指数',
      data: [],
      color: '#10b981'
    }
  ],
  annotations: []
}

export const visitorFlowData = {
  title: '调研期间游客流量观测',
  source: 'Day 3 云冈石窟实地观测',
  xAxis: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
  series: [
    {
      name: '游客人数',
      data: [200, 800, 1500, 1800, 1200, 1600, 1900, 1700, 1000, 400],
      color: '#8b5cf6'
    }
  ]
}

export const getWordCloudData = () => wordCloudData
export const getEvolutionTrendData = () => evolutionTrendData
export const getVisitorFlowData = () => visitorFlowData
