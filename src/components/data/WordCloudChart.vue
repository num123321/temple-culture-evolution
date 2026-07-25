<template>
  <div class="wordcloud-chart">
    <div class="chart-container">
      <p class="chart-empty">
        📝 词云数据将在访谈转录完成后填充<br>
        <small>（需安装 echarts-wordcloud 扩展包：npm install echarts-wordcloud）</small>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: { type: Object, required: true }
})

// 词云图需要 echarts-wordcloud 扩展包
// 安装方式：npm install echarts-wordcloud
// 当前数据为空，仅展示占位提示
</script>

<style scoped>
.wordcloud-chart { max-width: 700px; margin: 0 auto; }
.chart-container { width: 100%; height: 400px; }
.chart-empty { text-align: center; color: #bbb; font-size: 15px; padding: 80px 0; }
</style>
