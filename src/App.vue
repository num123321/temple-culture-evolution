<template>
  <div class="app-root">
    <!-- ===== 顶部导航 ===== -->
    <SiteHeader />

    <!-- ===== 首页主视觉 ===== -->
    <HeroSection />
    <ResearchQuestions />
    <ItineraryOverview />

    <!-- ===== 调研历程 ===== -->
    <SectionWrapper
      section-id="timeline"
      title="调研历程"
      subtitle="六天田野调研的每日概要"
    >
      <TimelineSection />
    </SectionWrapper>

    <!-- ===== 历史回望 ===== -->
    <SectionWrapper
      section-id="baseline"
      title="历史回望"
      subtitle="回到原初 —— 四处调研地在创建之初的空间状态"
    >
      <HistoryBaseline />
    </SectionWrapper>

    <!-- ===== 空间故事 ===== -->
    <SectionWrapper
      section-id="space"
      title="空间故事"
      subtitle="交互式平面图热区分析 · 古今对比"
    >
      <SiteSelector
        :active-site="activeSpaceSite"
        @select="activeSpaceSite = $event"
      />
      <FloorPlanViewer :active-site="activeSpaceSite" />
    </SectionWrapper>

    <!-- ===== 专题发现 ===== -->
    <SectionWrapper
      section-id="findings"
      title="专题发现"
      subtitle="神像配置 · 碑刻题记 · 洞窟演变 · 三教殿 · 演变脉络"
    >
      <StatueConfig />
      <SteleGallery />
      <CaveComparison />
      <SanjiaoHall />
      <EvolutionTimeline />
    </SectionWrapper>

    <!-- ===== 口述记忆 ===== -->
    <SectionWrapper
      section-id="oral"
      title="口述记忆"
      subtitle="村民、商贩、老人的声音记忆"
    >
      <OralArchive />
    </SectionWrapper>

    <!-- ===== 数据发现 ===== -->
    <SectionWrapper
      section-id="data"
      title="数据发现"
      subtitle="词云 · 趋势分析 · 问卷统计 · 声音与数据的对话"
    >
      <DataFindings />
      <DialogueView />
    </SectionWrapper>

    <!-- ===== 研究手记 ===== -->
    <SectionWrapper
      section-id="conclusion"
      title="研究手记"
      subtitle="核心判断 · 研究局限 · 后续方向"
    >
      <ResearchConclusion />
    </SectionWrapper>

    <!-- ===== 影像记录 ===== -->
    <SectionWrapper
      section-id="media"
      title="影像记录"
      subtitle="实践活动微视频"
    >
      <VideoPlayer />
    </SectionWrapper>

    <!-- ===== 关于我们 ===== -->
    <SectionWrapper
      section-id="about"
      title="关于我们"
      subtitle="田野调研团队"
    >
      <TeamGrid />
    </SectionWrapper>

    <!-- ===== 页脚 ===== -->
    <SiteFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 布局
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import SectionWrapper from './components/layout/SectionWrapper.vue'

// 首页
import HeroSection from './components/home/HeroSection.vue'
import ResearchQuestions from './components/home/ResearchQuestions.vue'
import ItineraryOverview from './components/home/ItineraryOverview.vue'

// 时间线
import TimelineSection from './components/timeline/TimelineSection.vue'

// 历史基线
import HistoryBaseline from './components/baseline/HistoryBaseline.vue'

// 空间
import SiteSelector from './components/space/SiteSelector.vue'
import FloorPlanViewer from './components/space/FloorPlanViewer.vue'

// 专题发现
import StatueConfig from './components/findings/StatueConfig.vue'
import SteleGallery from './components/findings/SteleGallery.vue'
import CaveComparison from './components/findings/CaveComparison.vue'
import SanjiaoHall from './components/findings/SanjiaoHall.vue'
import EvolutionTimeline from './components/findings/EvolutionTimeline.vue'

// 口述记忆
import OralArchive from './components/oral/OralArchive.vue'

// 数据
import DataFindings from './components/data/DataFindings.vue'
import DialogueView from './components/data/DialogueView.vue'

// 研究手记
import ResearchConclusion from './components/conclusion/ResearchConclusion.vue'

// 影像
import VideoPlayer from './components/media/VideoPlayer.vue'

// 团队
import TeamGrid from './components/about/TeamGrid.vue'

// 空间状态：当前选中寺院
const activeSpaceSite = ref('huayan')
</script>

<style>
/* ===== 全局样式 ===== */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: #fafafa;
  line-height: 1.6;
}

a {
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

code {
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
}

/* 全局滚动条 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}

/* 区块间隔交替背景色 */
#timeline,
#baseline,
#findings,
#data,
#media {
  background: #fff;
}

#space,
#oral,
#conclusion,
#about {
  background: #f8f9fc;
}

/* 非 hero 区块也设白色背景 */
#home {
  background: transparent;
}
</style>
