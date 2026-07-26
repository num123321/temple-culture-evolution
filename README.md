# 佛寺文化演变 · 田野调研实践活动

> 从"神位"到"人位"——千年佛寺空间功能的演变

基于山西大同华严寺、善化寺、云冈石窟、悬空寺六天实地考察的学术田野调研展示网站。

**技术栈**：Vue 3 + Vite + ECharts

---

## 本地开发

```bash
npm install
npm run dev
```

浏览器访问 `http://localhost:5173` 即可预览。

## 构建部署

```bash
npm run build    # 输出到 dist/
npm run preview  # 本地预览构建产物
```

项目通过 GitHub Actions 自动部署到 GitHub Pages（`/temple-culture-evolution/`）。

---

## 素材填入指南

框架搭建完毕后，补充实际素材只需修改两类文件：

### 图片和音频 → `src/assets/`

```
src/assets/
├── images/
│   ├── day{N}-{地点}/    # 每日考察照片
│   ├── plans/            # 平面图
│   ├── steles/           # 碑刻照片
│   ├── caves/            # 洞窟照片
│   └── team/             # 团队成员照片
└── audio/
    └── day{N}-{地点}/     # 口述访谈录音
```

### 文本和数据 → `src/data/`

| 文件 | 需要填入的内容 |
|------|---------------|
| `conclusions.js` | 三条核心发现的 `finding` 字段 |
| `charts.js` | 词云权重、趋势数据、游客流量 |
| `oral-memories.js` | 访谈转录文本和引语 |
| `questionnaires.js` | 问卷结果和人口统计数据 |
| `dialogue.js` | 口述与数据的对话张力分析 |
| `steles.js` | 碑刻录文 |
| `team.js` | 团队成员真实信息 |
| `itinerary.js` | 实际调研日期 |

**组件代码无需修改**——所有占位符均通过数据模块驱动。

---

## 项目结构

```
src/
├── components/     # 30 个 Vue SFC 组件
│   ├── layout/     # 页头、页脚、板块容器
│   ├── home/       # 首页：Hero、研究问题、行程
│   ├── timeline/   # 调研历程：6 天时间线
│   ├── baseline/   # 历史回望：四处遗址原始状态
│   ├── space/      # 空间故事：平面图热区交互
│   ├── findings/   # 专题发现：神像、碑刻、洞窟、三教殿
│   ├── oral/       # 口述记忆：6 人访谈卡片
│   ├── data/       # 数据发现：词云、趋势图、对话
│   ├── conclusion/ # 研究手记：判断、局限、展望
│   ├── media/      # 影像记录：视频播放
│   └── about/      # 关于我们：团队介绍
├── data/           # 12 个数据模块
├── composables/    # 主题切换
└── utils/          # 音频播放器
```
