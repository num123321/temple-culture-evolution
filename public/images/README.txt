public/images/ 素材目录总览
================================

photos/<siteId>/  现场照片（实景影像图库 + 各模块嵌入图）
  子目录：huayan(华严寺) / shansi(善化寺) / yungang(云冈石窟) / xuankong(悬空寺)
  文件名建议：<siteId>-序号.jpg（可读性优先），如 huayan-01.jpg
  放好后告知整理者，登记进 src/data/photo-gallery.js 即可生效。

team/            团队成员头像（同名覆盖即可，勿改文件名）
plans/           各寺平面图（huayan/shanhua/yungangshuku/xuankongsi）

说明：
  · Hero 首页采用固定渐变背景，未使用照片素材。
  · 本仓库设置了 base 前缀 /temple-culture-evolution/，
    代码中图片路径统一由此前缀拼接，手动放置文件无需改动路径。
