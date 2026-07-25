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
  return props.data.series?.some(s => s.data?.length > 0)
    || props.data.xAxis?.length > 0
})

const renderChart = () => {
  if (!chartRef.value || !hasData.value) return

  if (!chart) {
    chart = echarts.init(chartRef.value)
  }

  chart.setOption({
    tooltip: { trigger: 'axis' },
    legend: { bottom: 0, data: props.data.series?.map(s => s.name) || [] },
    grid: { left: 50, right: 30, top: 30, bottom: 40 },
    xAxis: {
      type: 'category',
      data: props.data.xAxis || [],
      axisLabel: { color: '#888' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#888' },
      splitLine: { lineStyle: { color: '#f0f0f5' } }
    },
    series: (props.data.series || []).map(s => ({
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
.chart-empty { text-align: center; color: #bbb; font-size: 15px; padding: 100px 0; }
</style>
