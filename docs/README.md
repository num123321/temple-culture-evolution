# 维护与素材指南

本指南面向需要维护本网站的同学。站点为「数据 + 素材」双驱动：**内容改数据文件即可，组件代码一般无需改动**。

---

## 1. 一句话架构

```
Vue3 + Vite（单页，多区块上下滚动）
├─ src/App.vue            页面区块编排 + 顶部导航
├─ src/components/        各区块组件（多为纯展示）
├─ src/data/*.js          内容数据（改这里 = 改页面）
├─ src/utils/             工具（SRT 解析等）
└─ public/                素材（图片 / 音频 / 字幕 / 视频，构建时原样拷贝）
```

## 2. 素材目录规范（public/）

| 目录 | 内容 | 处理方式 |
|---|---|---|
| `images/photos/<huayan\|shansi\|yungang\|xuankong>/` | 现场照片 | 放图后跑 `python scripts/photos-prep.py` 自动压缩+生成缩略图+登记 |
| `images/interviews/<slug>/` | 采访配图 | 跑 `scripts/prep-interview-imgs.py` 压缩 |
| `images/team/` | 团队成员头像 | 同名覆盖即可 |
| `images/plans/` | 平面图 | 同名覆盖即可 |
| `audio/interviews/` | 5 段采访录音 | 直接放同名文件 |
| `srt/` | 采访字幕（UTF-8 SRT） | 直接放同名文件 |
| `video/` | 社会实践总结视频（现含 `practice-summary.mp4`，16:9） | 同名覆盖即自动生效 |
| `images/steles/`、`images/hero-bg.jpg` | 碑刻照片 / 首页大图（可选） | 放入后在数据中登记 |

> `scripts/` 下的 Python 脚本是**本地工具，不入库**（已在 .gitignore）。

## 3. 数据文件一览（src/data/）

| 文件 | 控制内容 | 常用改法 |
|---|---|---|
| `sites.js` / `history-baseline.js` | 调研地档案 / 历史回望关键节点 | 改文本即可 |
| `statues.js` / `steles.js` | 神像对比 / 碑刻研究档案 | 碑刻支持 `people/details/chain/photos` 等详情字段 |
| `sanjiao-hall.js` / `cave-comparison.js` | 三教殿专题 / 洞窟对比 | 改文本 |
| `itinerary.js` | 调研历程（现为 Day1–4） | 增删每日条目 |
| `interviews.js` | 采访实录元数据（音频/图片/字幕/身份） | 对应 `public/audio/interviews` 等 |
| `dialogue.js` | 「寻常之人 · 千年之寺」观点对照 | `voices[]` / `note` |
| `charts.js` + `wordcloudWords.js` + `webcloudWords.js` | 三张图 + 两张词云 | 词云见下方"词云"节 |
| `questionnaires.js` | 游客问卷 4 题与实测结果 | 改 `results` 计数即自动出条形 |
| `team.js` | 团队成员（头像路径/职责/简介） | 直接改 |
| `photo-gallery.js` + `_photo-lists.js` | 实景影像图库（后者由脚本生成，勿手改） | 跑 `photos-prep.py` |
| `conclusions.js` | 研究手记（判断/局限/展望） | 改文本 |
| `research-questions.js` / `itinerary.js` 等 | 首页数据 | 改文本 |

## 4. 本地脚本工具（需在项目根、用 .venv 的 Python）

```bash
# Python 环境
# Windows: d:/社会实践/temple-culture-evolution/.venv/Scripts/python.exe

# ① 照片：压缩主图 + 生成 thumbs/ + 重建 _photo-lists.js（新增照片后用）
python scripts/photos-prep.py

# ② 采访配图压缩
python scripts/prep-interview-imgs.py

# ③ 访谈关键词词云（读 public/srt/ 转录）
python scripts/gen-wordcloud.py

# ④ 网络语境热词词云（读 scripts/web-sources/*.txt 语料）
python scripts/gen-webcloud.py
```

**更新"网络热词"语料**：把公开文本（如网友评论、攻略标题）存成 `.txt` 放进 `scripts/web-sources/`，重跑 ④ 即可（非 `-baike` 命名的源自动加权，让"网友语境"词更靠前）。

## 5. 常见更新流程

- **加照片** → 放入 `public/images/photos/<调研点>/` → `python scripts/photos-prep.py` → 预览 → 提交
- **加/改采访** → 三个配套文件放好（录音/配图/字幕）→ 改 `src/data/interviews.js` 登记
- **改问卷结果** → 在 `src/data/questionnaires.js` 的每题 `results` 填各选项人数（单选总和=有效回收数）
- **改词云** → 更新对应语料后重跑脚本，只提交生成的 `*Words.js`
- 全部完成后：`git add -A && git commit -m "说明" && git push`（自动部署）

## 6. 已建成内容清单（2026-09）

- 实景影像：华严寺 32 / 善化寺 27 / 云冈石窟 30 / 悬空寺 3 = **92 张**
- 采访实录：5 段（游客 / 景区店员 / 本地大娘 / 环卫大爷 / 路边小贩）+ SRT 字幕
- 碑刻档案：华严《重修薄伽教藏记》《大华严寺碑》· 云冈造像题记 · 悬空寺《重修悬空寺碑》
- 问卷：实测 50 份（4 题条形分布）
- 待办：Hero 首页大图 `images/hero-bg.jpg`（可选）、碑刻照片可选回填、热区分析 19 个点位现场实拍可选回填
