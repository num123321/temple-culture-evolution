<template>
  <div class="trendline-chart">
    <div ref="chartRef" class="chart-container"></div>
    <p v-if="!hasData" class="chart-empty">
      📈 请填入实际数据后，图表将自动渲染
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: { type: Object, required: true }
})

const chartRef = ref(null)
let chart = null

const hasData = computed(() => {
  // 以“至少一条序列已有数据”为出图条件，避免只填横轴就渲染空图
  return props.data.series?.some(s => s.data?.length > 0)
})

// 只绘制已有数据的序列（未提供的功能线不占图例）
const activeSeries = computed(() => (props.data.series || []).filter((s) => s.data && s.data.length > 0))

const renderChart = () => {
  if (!chartRef.value || !hasData.value) return

  if (!chart) {
    chart = echarts.init(chartRef.value)
  }

  const series = activeSeries.value
  chart.setOption({
    tooltip: { trigger: 'axis' },
    legend: { bottom: 0, data: series.map(s => s.name) },
    grid: { left: 50, right: 30, top: 30, bottom: 40 },
    xAxis: {
      type: 'category',
      data: props.data.xAxis || [],
      axisLabel: { color: '#888' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#888' },
      splitLine: { lineStyle: { color: 'var(--bg-hover)' } }
    },
    series: series.map(s => ({
      name: s.name,
      type: 'line',
      data: s.data || [],
      smooth: true,
      lineStyle: { color: s.color, width: 2 },
      itemStyle: { color: s.color },
      symbol: 'circle',
      symbolSize: 6
    }))
  })
}

onMounted(() => renderChart())
watch(() => props.data, () => renderChart(), { deep: true })
</script>

<style scoped>
.trendline-chart { max-width: 800px; margin: 0 auto; }
.chart-container { width: 100%; height: 350px; }
.chart-empty { text-align: center; color: var(--text-placeholder); font-size: 15px; padding: 100px 0; }
</style>
