<template>
  <div class="evolution-timeline">
    <h3 class="et-title">演变脉络时间轴</h3>
    <p class="et-intro">
      将华严寺/善化寺、云冈石窟、悬空寺四地的演变节点串联，观察"从神位到人位"的宏观脉络。
    </p>
    <div class="et-track">
      <div class="et-line"></div>
      <div
        v-for="(node, i) in nodes"
        :key="i"
        class="et-node"
        :class="{ left: i % 2 === 0 }"
      >
        <div class="et-dot" :style="{ background: node.color }"></div>
        <div class="et-card">
          <div class="et-card-header">
            <span class="et-year">{{ node.year }}</span>
            <span class="et-site-tag" :style="{ background: node.color + '20', color: node.color }">
              {{ node.site }}
            </span>
          </div>
          <p class="et-event">{{ node.event }}</p>
          <p class="et-meaning">{{ node.meaning }}</p>
        </div>
      </div>
    </div>
    <p class="et-note">
      ※ 此时间轴为框架示意，各节点的具体事件和意涵将在调研完成后填入。
    </p>
  </div>
</template>

<script setup>
const nodes = [
  {
    year: '460',
    site: '云冈石窟',
    event: '昙曜五窟开凿 —— 帝王即佛，"神位"巅峰',
    meaning: '政教合一的空间原型',
    color: '#ef4444'
  },
  {
    year: '491',
    site: '悬空寺',
    event: '悬空寺始建 —— 三教合一基因注入',
    meaning: '"生活化"佛寺的空间源头',
    color: '#8b5cf6'
  },
  {
    year: '1038',
    site: '华严寺',
    event: '华严寺敕建 —— 辽代皇家礼佛道场',
    meaning: '僧俗界限分明，"神圣空间"典型',
    color: '#f59e0b'
  },
  {
    year: '1128',
    site: '善化寺',
    event: '善化寺金代重建 —— 城市公共礼佛空间',
    meaning: '与华严寺形成微观对比',
    color: '#10b981'
  },
  {
    year: '约494-525',
    site: '云冈石窟',
    event: '晚期民间造像 —— 民间力量主导',
    meaning: '"人位"崛起，石窟"走下神坛"',
    color: '#f59e0b'
  },
  {
    year: '当代',
    site: '全部',
    event: '旅游开发与文物保护并行',
    meaning: '空间功能的当代转折',
    color: '#6366f1'
  }
]
</script>

<style scoped>
.evolution-timeline { max-width: 800px; margin: 0 auto; }
.et-title { font-size: 22px; font-weight: 700; color: #1a1a2e; margin: 0 0 8px; text-align: center; }
.et-intro { text-align: center; font-size: 14px; color: #888; margin: 0 0 40px; }
.et-track { position: relative; }
.et-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #ef4444, #8b5cf6, #f59e0b, #10b981, #f59e0b, #6366f1);
  transform: translateX(-50%);
}
.et-node {
  position: relative;
  width: 44%;
  margin-bottom: 40px;
  margin-left: auto;
}
.et-node.left { margin-left: 0; margin-right: auto; }
.et-dot {
  position: absolute;
  top: 20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px currentColor;
}
.et-node:not(.left) .et-dot { left: -33px; }
.et-node.left .et-dot { right: -33px; }
.et-card {
  background: #fff;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.et-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.et-year { font-size: 14px; font-weight: 700; color: #1a1a2e; }
.et-site-tag {
  padding: 2px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
}
.et-event { font-size: 14px; color: #555; line-height: 1.6; margin: 0 0 6px; }
.et-meaning { font-size: 13px; color: #888; line-height: 1.5; margin: 0; font-style: italic; }
.et-note { text-align: center; font-size: 13px; color: #bbb; margin-top: 24px; }

@media (max-width: 640px) {
  .et-node { width: calc(100% - 40px); margin-left: 40px !important; margin-right: 0 !important; }
  .et-dot { left: -27px !important; right: auto !important; }
  .et-line { left: 14px; }
}
</style>
