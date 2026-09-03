public/images/ 素材目录总览
================================

photos/<siteId>/  现场照片（实景影像图库 + 各模块嵌入图）
  子目录：huayan(华严寺) / shansi(善化寺) / yungang(云冈石窟) / xuankong(悬空寺)
  文件名建议：<siteId>-序号.jpg（可读性优先），如 huayan-01.jpg
  放好后告知整理者，登记进 src/data/photo-gallery.js 即可生效。

hero-bg.jpg      首页 Hero 大图背景（可选，暂缺则显示渐变）
  推荐 16:9 横向构图，如云冈大佛全景、华严寺大雄宝殿。
  启用后需在 src/components/home/HeroSection.vue 的 heroConfig.bgImage
  填入 'images/hero-bg.jpg'。

team/            团队成员头像（4 张，同名覆盖即可，勿改文件名）
plans/           各寺平面图（huayan/shanhua/yungangshuku/xuankongsi）
steles/          碑刻照片（可选，若拍有碑身/拓片照，放入并登记到 steles 数据）
audio/           口述访谈音频（见该目录 README）
video/           实践活动微视频（见该目录 README）

注意：本仓库设置了 base 前缀 /temple-culture-evolution/，
     代码中图片路径统一由此前缀拼接，手动放置文件无需改动路径。

