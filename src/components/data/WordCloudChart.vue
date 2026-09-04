<template>
  <div class="wordcloud-chart">
    <div v-if="hasWords" ref="chartRef" class="chart-container"></div>
    <p v-else class="chart-empty">
      📝 暂无词云数据<br />
      <small>（访谈转录完成后自动生成关键词）</small>
    </p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import 'echarts-wordcloud'

const props = defineProps({
  data: { type: Object, required: true }
})

const chartRef = ref(null)
let chart = null

const hasWords = computed(() => props.data.words && props.data.words.length > 0)

// 词云配色（与站点主题色一致）
const PALETTE = ['#8b5cf6', '#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#ec4899']

const renderChart = () => {
  if (!chartRef.value || !hasWords.value) return
  if (!chart) chart = echarts.init(chartRef.value)
  chart.setOption({
    tooltip: {},
    series: [
      {
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '92%',
        height: '92%',
        gridSize: 10,
        sizeRange: [12, 54],
        rotationRange: [0, 0],
        textStyle: {
          fontWeight: 'bold',
          color: () => PALETTE[Math.floor(Math.random() * PALETTE.length)]
        },
        emphasis: { focus: 'self' },
        data: props.data.words
      }
    ]
  })
}

onMounted(() => renderChart())
watch(() => props.data, () => renderChart(), { deep: true })
</script>

<style scoped>
.wordcloud-chart { max-width: 700px; margin: 0 auto; }
.chart-container { width: 100%; height: 420px; }
.chart-empty {
  text-align: center;
  color: var(--text-placeholder);
  font-size: 15px;
  padding: 80px 0;
}
</style>
